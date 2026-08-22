(()=>{
  const items={};
  const option=(code,glass,price)=>({code,glass,price});
  const put=(keys,name,options,extra={})=>keys.forEach(key=>items[key.toLowerCase()]={name,options,...extra});
  const one=(key,name,code,glass,price,extra)=>put([key],name,[option(code,glass,price)],extra);

  const circular=(prices)=>[36,45,56,65,78,89,99,110].map((mm,i)=>option(`${11+i}C`,`${mm} mm`,prices[i]));
  const elliptical=(prices)=>[[40,32],[49,39],[63,49],[71,58],[87,70],[98,81],[112,88],[122,99]].map((mm,i)=>option(`${21+i}E`,`${mm[0]} × ${mm[1]} mm`,prices[i]));
  const rectangular=(prices)=>[[62,49],[75,59],[87,68],[100,75],[109,84],[128,94],[147,108]].map((mm,i)=>option(`${[31,32,33,34,35,36,38][i]}R`,`${mm[0]} × ${mm[1]} mm`,prices[i]));

  put(['modern/p4 circular'],'Circular Brass Frames',circular([24.50,25.25,26.25,27.15,28.75,30.15,31.50,33.75]));
  put(['modern/p4 elliptical'],'Elliptical Brass Frames',elliptical([26.95,28.15,28.95,30.15,32.25,33.50,34.75,35.95]));
  put(['modern/p4 rectangular'],'Rectangular Brass Frames',rectangular([29.50,31.25,32.95,34.65,35.65,39.75,41.75]));
  put(['modern/bespoke f'],'Bespoke Brass Frames',[
    option('Bespoke ≤102 × 76','Up to 102 × 76 mm',42.25),option('Bespoke ≤140 × 100','Over 102 × 76, up to 140 × 100 mm',47.95)
  ]);
  one('modern/3c','3C Circular Frame','3C','74 mm',19.95);
  one('modern/3r','3R Rectangular Frame with Rounded Corners','3R','75 × 62 mm',19.95);

  put(['modern-gilded/p4 circular'],'Circular Brass Frames — 24ct Gold Plated',circular([32.45,33.25,34.50,36.75,38.25,40.95,42.25,46.50]));
  put(['modern-gilded/p4 elliptical'],'Elliptical Brass Frames — 24ct Gold Plated',elliptical([34.95,35.95,36.95,39.50,41.95,44.45,45.95,48.50]));
  put(['modern-gilded/p4 rectangular'],'Rectangular Brass Frames — 24ct Gold Plated',rectangular([36.75,37.95,39.50,42.75,44.75,45.50,51.95]));
  put(['modern-gilded/bespoke f'],'Bespoke Brass Frames — 24ct Gold Plated',[
    option('Bespoke Gold ≤102 × 76','Up to 102 × 76 mm',52.95),option('Bespoke Gold ≤140 × 100','Over 102 × 76, up to 140 × 100 mm',61.75)
  ]);

  put(['modern-silvered/circular silver blue centre'],'Circular Frames — Silver Plated',circular([30.75,31.75,32.75,34.25,36.95,39.95,41.45,44.95]));
  put(['modern-silvered/elliptical silver blue centre'],'Elliptical Frames — Silver Plated',elliptical([33.25,34.25,35.75,37.25,40.95,43.95,44.50,47.95]));
  put(['modern-silvered/rectangular silver blue cintre'],'Rectangular Frames — Silver Plated',rectangular([34.75,35.75,38.25,39.95,42.45,45.95,50.45]));
  put(['modern-silvered/bespoke silver blue centre'],'Bespoke Frames — Silver Plated',[
    option('Bespoke Silver ≤102 × 76','Up to 102 × 76 mm',50.95),option('Bespoke Silver ≤140 × 100','Over 102 × 76, up to 140 × 100 mm',55.95)
  ]);

  one('traditional-gilded/gp style1','Style 1 — Gold Plated','Style 1','89 × 68 mm',32.75);
  one('traditional-gilded/gp style2','Style 2 — Gold Plated','Style 2','90 × 68 mm',35.95);
  put(['traditional-gilded/gp style5'],'Styles 3 and 4 — Gold Plated',[
    option('Style 3','91 × 70 mm',33.50),option('Style 4','110 × 85 mm',34.25)
  ]);
  one('traditional-gilded/gp style 5a','Style 5A — Gold Plated','Style 5A','50 × 40 mm',29.75);
  one('traditional-gilded/gp style 5b','Style 5B — Gold Plated','Style 5B','61 × 51 mm',31.25);
  one('traditional-gilded/gp style6r','Style 6 — Gold Plated','Style 6','48 × 39 mm',29.75);
  one('traditional-gilded/gp style7','Style 7 — Gold Plated','Style 7','101 × 77 mm',37.75);
  put(['traditional-gilded/gpmf port'],'Styles 8A and 8B — Gold Plated',[
    option('Style 8A','73 × 42 mm',31.50),option('Style 8B','114 × 73 mm',36.25)
  ]);
  put(['traditional-gilded/reprof gold'],'Styles 9A, 9B and 9C — Gold Plated',[
    option('Style 9A','48 × 39 mm',29.95),option('Style 9B','91 × 69 mm',37.25),option('Style 9C','115 × 87 mm',40.25)
  ]);
  one('traditional-gilded/style 14','Style 14 — Gold Plated','Style 14','64 × 51 mm',31.25);
  one('traditional-gilded/style 15 gold','Style 15 — Gold Plated','Style 15','75 × 63 mm',32.75);
  one('traditional-gilded/style 16','Style 16 — Gold Plated','Style 16','46 × 54 mm',31.75);
  one('traditional-gilded/style 17','Style 17 — Heraldic Gold Circle','Style 17','44 mm',31.95);
  one('traditional-gilded/style 18a','Style 18A — Gold Plated','Style 18A','58 × 47 mm',31.25);
  one('traditional-gilded/style 18','Style 18B — Gold Plated','Style 18B','75 × 63 mm',32.75);
  one('traditional-gilded/style 19','Style 19 — Gold Plated','Style 19','92 × 72 mm',37.25);
  const gold10=[option('Style 10A','78 × 62 mm',49.95),option('Style 10B','105 × 82 mm',56.75)];
  const gold11=[option('Style 11A','78 × 62 mm',49.95),option('Style 11B','105 × 82 mm',56.75)];
  const gold12=[option('Style 12A','78 × 62 mm',49.95),option('Style 12B','105 × 82 mm',56.75)];
  put(['traditional-gilded/style 10b','traditional-gilded/style 10b landscape'],'Style 10 — Ornate Spandrel, Gold Plated',gold10);
  put(['traditional-gilded/style 11b','traditional-gilded/style 11b landscape'],'Style 11 — Celtic Spandrel, Gold Plated',gold11);
  put(['traditional-gilded/style 12b','traditional-gilded/style 12b landscape'],'Style 12 — Floral Spandrel, Gold Plated',gold12,{unavailable:true,note:'Unavailable at present on supplier website'});
  put(['traditional-gilded/style 10 bespoke size','traditional-gilded/style 10 bespoke size 2','traditional-gilded/style 10 bespoke size 3','traditional-gilded/style 10 bespoke size 4'],'Bespoke Ornate Frame — 24ct Gold Plated',[
    option('Bespoke Gold ≤102 × 76','Up to 102 × 76 mm',62.95),option('Bespoke Gold ≤140 × 100','Over 102 × 76, up to 140 × 100 mm',67.95)
  ]);

  one('traditional-silvered/style 1 silver blue centre','Style 1 — Silver Plated','Style 1','89 × 68 mm',29.95);
  one('traditional-silvered/style 2 silver blue centre','Style 2 — Silver Plated','Style 2','84 × 66 mm',33.50);
  one('traditional-silvered/style 3 silver blue centre','Style 3 — Silver Plated','Style 3','91 × 70 mm',30.95);
  one('traditional-silvered/style 4 silver blue centre','Style 4 — Silver Plated','Style 4','110 × 85 mm',34.65);
  put(['traditional-silvered/style 5 silver blue insert'],'Styles 5A and 5B — Silver Plated',[
    option('Style 5A','50 × 40 mm',26.35),option('Style 5B','61 × 51 mm',28.75)
  ]);
  one('traditional-silvered/style 6 silver blue centre','Style 6 — Silver Plated','Style 6','48 × 39 mm',27.75);
  one('traditional-silvered/style 7 silver blue centre','Style 7 — Silver Plated','Style 7','101 × 77 mm',37.95);
  one('traditional-silvered/style 8a silver blue centre','Style 8A — Silver Plated','Style 8A','73 × 42 mm',30.25);
  one('traditional-silvered/style 8b silver blue centre','Style 8B — Silver Plated','Style 8B','114 × 73 mm',33.95);
  put(['traditional-silvered/style 9 silver blue centre'],'Styles 9A, 9B and 9C — Silver Plated',[
    option('Style 9A','48 × 39 mm',28.50),option('Style 9B','91 × 69 mm',34.75),option('Style 9C','115 × 87 mm',38.50)
  ]);
  one('traditional-silvered/style 14 silver','Style 14 — Silver Plated','Style 14','64 × 51 mm',28.95);
  one('traditional-silvered/style 15 silver','Style 15 — Silver Plated','Style 15','75 × 63 mm',30.25);
  one('traditional-silvered/style 16 silver','Style 16 — Silver Plated','Style 16','46 × 54 mm',30.25);
  one('traditional-silvered/style 17 silver','Style 17 — Heraldic Silver Circle','Style 17','44 mm',28.95);
  one('traditional-silvered/style 18a silver','Style 18A — Silver Plated','Style 18A','58 × 47 mm',28.75);
  one('traditional-silvered/style 18 silver','Style 18B — Silver Plated','Style 18B','75 × 63 mm',30.25);
  one('traditional-silvered/style 19 silver','Style 19 — Silver Plated','Style 19','92 × 72 mm',35.75);
  const silver10=[option('Style 10A','78 × 62 mm',47.25),option('Style 10B','105 × 82 mm',53.95)];
  const silver11=[option('Style 11A','78 × 62 mm',47.25),option('Style 11B','105 × 82 mm',53.95)];
  const silver12=[option('Style 12A','78 × 62 mm',47.25),option('Style 12B','105 × 82 mm',53.95)];
  put(['traditional-silvered/style 10b silver portrait','traditional-silvered/style 10b landscape silver'],'Style 10 — Ornate Spandrel, Silver Plated',silver10);
  put(['traditional-silvered/style 11b silver portrait','traditional-silvered/style 11b landscape silver'],'Style 11 — Celtic Spandrel, Silver Plated',silver11);
  put(['traditional-silvered/style 12b silver portrait','traditional-silvered/style 12b landscape silver'],'Style 12 — Floral Spandrel, Silver Plated',silver12,{unavailable:true,note:'Unavailable at present on supplier website'});
  put(['traditional-silvered/style 10 silver bespoke size','traditional-silvered/style 10 silver bespoke size 2','traditional-silvered/style 11 silver bespoke size 3','traditional-silvered/style 12 silver bespoke size 4'],'Bespoke Ornate Frame — Silver Plated',[
    option('Bespoke Silver ≤102 × 76','Up to 102 × 76 mm',58.95),option('Bespoke Silver ≤140 × 100','Over 102 × 76, up to 140 × 100 mm',64.95)
  ]);

  const pattern243=[['50 × 40 mm',29.75],['60 × 50 mm',31.95],['90 × 70 mm',39.95],['120 × 90 mm',45.25],['140 × 100 mm',52.25],['180 × 130 mm',61.50]].map((x,i)=>option(`243-${i+1}`,x[0],x[1]));
  const pattern242=[['50 × 40 mm',29.25],['60 × 50 mm',31.50],['90 × 70 mm',36.45],['120 × 90 mm',42.25],['140 × 100 mm',46.00],['180 × 130 mm',48.75]].map((x,i)=>option(`242-${i+1}`,x[0],x[1]));
  put(['ornate/metal-2_4-243'],'Pattern 243 — Portrait',pattern243);
  put(['ornate/metal 243 landscape'],'Pattern 243 — Landscape',pattern243);
  put(['ornate/metal-2_242'],'Pattern 242 — Portrait',pattern242);
  put(['ornate/metal 242 landscape'],'Pattern 242 — Landscape',pattern242);
  put(['ornate/275'],'Pattern 275',[
    option('275-90 × 70','90 × 70 mm',67.40),option('275-120 × 90','120 × 90 mm',73.75),option('275-140 × 100','140 × 100 mm',77.25),option('275-180 × 130','180 × 130 mm',85.75)
  ]);
  put(['ornate/4-201'],'Pattern 201',[
    option('201-90 × 70','90 × 70 mm',103.45),option('201-140 × 100','140 × 100 mm',128.25)
  ]);
  put(['ornate/4-228'],'Pattern 228',[
    option('228-50 × 40','50 × 40 mm',53.25),option('228-60 × 50','60 × 50 mm',59.75),option('228-90 × 70','90 × 70 mm',63.95)
  ]);
  put(['ornate/294'],'Pattern 294',[
    option('294-90 × 70','90 × 70 mm',32.75),option('294-120 × 90','120 × 90 mm',39.00)
  ]);

  one('antique-replicas/ebonf 1','TRAD 1 Oval — Deep Recessed Scooped Profile','TRAD 1 Oval','74 × 58 mm',26.25);
  one('antique-replicas/trad 1 circle plain','TRAD 1 Circle — Deep Recessed Scooped Profile','TRAD 1 Circle','65 mm',26.25);
  one('antique-replicas/ebonf 2','TRAD 2 — Standard Reversed Profile','TRAD 2','74 × 58 mm',26.25);
  one('antique-replicas/trad 1a','TRAD 1A Oval — Gold Floral Insert','TRAD 1A Oval','62 × 48 mm',47.50);
  one('antique-replicas/trad 1a circle gold website mini','TRAD 1A Circle — Gold Scallop Insert','TRAD 1A Circle','57 mm',47.50);
  one('antique-replicas/pianokf 2','TRAD 3 — Large Piano Key Frame','TRAD 3','89 × 68 mm',49.50);
  one('antique-replicas/pianokf 1','TRAD 4 — Small Piano Key Frame','TRAD 4','62 × 51 mm',47.50);
  one('antique-replicas/trad 10','TRAD 10 — Floral Miniature Acorn Frame','TRAD 10','62 × 51 mm',43.95);
  one('antique-replicas/trad 5a','TRAD 11 — Small Miniature Acorn Frame','TRAD 11','71 × 57 mm',43.95);
  put(['antique-replicas/van frame 100'],'TRAD 8 — Ornate Gold Finish Metal Frame',[
    option('TRAD 8A','48 × 39 mm',48.25),option('TRAD 8B','91 × 69 mm',57.50),option('TRAD 8C','115 × 87 mm',61.95)
  ]);
  one('antique-replicas/trad 12','TRAD 12 — True Miniature Frame','TRAD 12','35 × 25 mm',27.00);

  one('silvered-antique-replicas/trad 1a silver','TRAD 1A Oval — Silver Ornate Insert','TRAD 1A Oval Silver','62 × 50 mm',44.95);
  one('silvered-antique-replicas/trad 1a circle silver website white centre mini','TRAD 1A Circle — Silver Ornate Insert','TRAD 1A Circle Silver','57 mm',44.95);
  one('silvered-antique-replicas/trad 3 silver','TRAD 3 — Large Piano Key Frame, Silver','TRAD 3 Silver','89 × 68 mm',47.50);
  one('silvered-antique-replicas/trad 4 silver','TRAD 4 — Small Piano Key Frame, Silver','TRAD 4 Silver','61 × 51 mm',44.95);
  one('silvered-antique-replicas/trad 5 silver','TRAD 5 — Traditional Acorn Frame, Silver','TRAD 5 Silver','84 × 66 mm',48.50);
  one('silvered-antique-replicas/trad 6 silver','TRAD 6 — Triangular Acorn Frame, Silver','TRAD 6 Silver','89 × 68 mm',51.25);
  one('silvered-antique-replicas/trad 7 silver','TRAD 7 — Floral Acorn Frame, Silver','TRAD 7 Silver','91 × 70 mm',51.95);
  put(['silvered-antique-replicas/trad 8 silver'],'TRAD 8 — Ornate Silver Finish Metal Frame',[
    option('TRAD 8A Silver','48 × 39 mm',44.50),option('TRAD 8B Silver','91 × 69 mm',52.95),option('TRAD 8C Silver','115 × 87 mm',56.95)
  ]);
  one('silvered-antique-replicas/trad 10 silver','TRAD 10 — Floral Miniature Acorn Frame, Silver','TRAD 10 Silver','62 × 51 mm',43.95);
  one('silvered-antique-replicas/trad 5a silver','TRAD 11 — Small Miniature Acorn Frame','TRAD 11','71 × 57 mm',43.95);

  put(['wooden/3-515'],'Pattern 515 — Wood Veneer Frame',[
    option('515-60 × 50','60 × 50 mm',71.25),option('515-90 × 70','90 × 70 mm',72.95)
  ]);
  put(['wooden/17s'],'Pattern 17s — Rectangular Black Lacquer Frame',[
    option('17s-60 × 50','60 × 50 mm',46.75),option('17s-90 × 70','90 × 70 mm',48.75)
  ]);
  const bezelOptions=[];
  ['Black','Burgundy','Blue','Green'].forEach(colour=>{
    bezelOptions.push(option(`${colour} · Plain`, '86 × 66 mm',43.50));
    ['Floral','Pierced','Celtic'].forEach(spandrel=>bezelOptions.push(option(`${colour} · ${spandrel} spandrel`,'86 × 66 mm',54.25)));
  });
  put(['wooden/rectf egbezel ','wooden/rectf egbezel 1b','wooden/rectf egbezel 2','wooden/rectf egbezel 1','wooden/rectf egbezel 1 burgundy','wooden/rectf egbezel 3 blue copy','wooden/rectf egbezel 3 green'],'Rectangular Frame with Elliptical Gold Plated Bezel',bezelOptions);

  const ivory=(code,name,sizes,prices)=>put([`mammoth-ivory/${code}`],name,sizes.map((glass,i)=>option(name.match(/(?:Model|Pattern)\s+\w+/i)?.[0]||name,glass,prices[i])));
  ivory('ivory 0-1','Model 0 — Recessed Elliptical Gold Bezel',['50 × 40 mm','60 × 50 mm','90 × 70 mm'],[73.10,81.60,95.25]);
  ivory('ivory 0-3','Model 01 — Simulated Tortoiseshell Edging',['50 × 40 mm','60 × 50 mm','90 × 70 mm'],[77.50,94.50,99.50]);
  ivory('ivory 73','Models 07 and 072 — Octagonal Frame',['50 × 40 mm','60 × 50 mm','90 × 70 mm'],[84.50,93.60,106.50]);
  ivory('ivory 3038','Model 3038 — Tortoiseshell Edging','90 × 70 mm'.split('|'),[155.65]);
  ivory('ivory 3039','Model 3039 — Radiating Ivory','90 × 70 mm'.split('|'),[147.50]);
  ivory('ivory 3081','Pattern 3081 — Elliptical Frame',['50 × 40 mm','60 × 50 mm','90 × 70 mm'],[60.50,69.00,77.50]);
  ivory('ivory 3083','Pattern 3083 — Tortoiseshell Edging',['50 × 40 mm','60 × 50 mm','90 × 70 mm'],[64.90,73.40,81.60]);
  put(['mammoth-ivory/ivory 3088'],'Pattern 3088 — Elliptical Frame',[],{unavailable:true,note:'Discontinued by supplier'});
  ivory('ivory 3089','Pattern 3089 — Gold Floral Bezel',['60 × 50 mm','90 × 70 mm'],[73.40,81.60]);

  window.FRAME_PRICING={checked:'22 August 2026',postage:5.50,items};
})();
