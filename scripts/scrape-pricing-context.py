"""Print supplier-page text surrounding each catalogue image.

This uses only the Python standard library and is intentionally read-only.
It helps maintain the checked pricing snapshot used by the static PWA.
"""

from __future__ import annotations

import html
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
BASE = "http://www.polymersplus.co.uk/frames/"


class Node:
    def __init__(self, tag="root", attrs=None, parent=None):
        self.tag = tag
        self.attrs = dict(attrs or [])
        self.parent = parent
        self.children = []


class TreeParser(HTMLParser):
    VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.current = self.root

    def handle_starttag(self, tag, attrs):
        node = Node(tag.lower(), attrs, self.current)
        self.current.children.append(node)
        if tag.lower() not in self.VOID:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag.lower() not in self.VOID:
            self.current = self.current.parent

    def handle_endtag(self, tag):
        tag = tag.lower()
        cursor = self.current
        while cursor is not self.root and cursor.tag != tag:
            cursor = cursor.parent
        if cursor is not self.root:
            self.current = cursor.parent

    def handle_data(self, data):
        if data.strip():
            self.current.children.append(data)


def walk(node):
    if isinstance(node, Node):
        yield node
        for child in node.children:
            yield from walk(child)


def text_content(node):
    parts = []
    for child in node.children:
        if isinstance(child, str):
            parts.append(child)
        else:
            parts.append(text_content(child))
    return re.sub(r"\s+", " ", html.unescape(" ".join(parts))).strip()


def basename(value):
    return unquote(Path(urlparse(value).path).name).casefold()


def ancestor(node, tag):
    cursor = node.parent
    while cursor is not None and cursor.tag != tag:
        cursor = cursor.parent
    return cursor


def direct_cells(row):
    return [child for child in row.children if isinstance(child, Node) and child.tag in {"td", "th"}]


def contains_image(node):
    return any(candidate.tag == "img" for candidate in walk(node))


def column_context(image):
    row = ancestor(image, "tr")
    if row is None or row.parent is None:
        return ""
    cells = direct_cells(row)
    cell = ancestor(image, "td") or ancestor(image, "th")
    if cell not in cells:
        return ""
    index = cells.index(cell)
    parts = [text_content(cell)]
    siblings = [child for child in row.parent.children if isinstance(child, Node) and child.tag == "tr"]
    try:
        start = siblings.index(row) + 1
    except ValueError:
        return ""
    for sibling in siblings[start:start + 4]:
        if contains_image(sibling):
            break
        sibling_cells = direct_cells(sibling)
        if index < len(sibling_cells):
            parts.append(text_content(sibling_cells[index]))
    return re.sub(r"\s+", " ", " ".join(parts)).strip()


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    catalogue = json.loads((ROOT / "image-library" / "catalogue-image-map.json").read_text(encoding="utf-8"))
    pages = {}
    for item in catalogue:
        pages.setdefault(item["source_page"], []).append(item)

    output = []
    for page, items in pages.items():
        request = Request(urljoin(BASE, page), headers={"User-Agent": "Mozilla/5.0"})
        with urlopen(request, timeout=20) as response:
            source = response.read().decode("utf-8", errors="replace")
        parser = TreeParser()
        parser.feed(source)
        images = [node for node in walk(parser.root) if node.tag == "img" and node.attrs.get("src")]
        for item in items:
            target = basename(item["source_url"])
            matches = [node for node in images if basename(node.attrs["src"]) == target]
            contexts = []
            option_contexts = []
            for image in matches:
                cursor = image.parent
                best = ""
                while cursor is not None:
                    candidate = text_content(cursor)
                    if len(candidate) > len(best):
                        best = candidate
                    if "£" in candidate and len(candidate) >= 30:
                        best = candidate
                        break
                    cursor = cursor.parent
                contexts.append(best[:1800])
                option_contexts.append(column_context(image)[:1800])
            output.append({
                "family": item["family"],
                "page": page,
                "file": item["local_filename"],
                "source": item["source_url"],
                "contexts": contexts,
                "option_contexts": option_contexts,
            })
    json.dump(output, sys.stdout, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
