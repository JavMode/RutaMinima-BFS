function getDistanceFromLatLongInKm(originLat, originLong, destinationLat, destinationLong) {

    var Radius = 6371; // dünya yarıçapı km 
    var dLat = deg2rad(destinationLat-originLat);
    var dLong = deg2rad(destinationLong-originLong);
    var a =Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(originLat)) * Math.cos(deg2rad(destinationLat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var result = Radius * c;// KM cinsinden mesafe 
    return result;
  }
  
  function deg2rad(mDeg) {
    // Açıları dereceden radyana dönüştürme
    return mDeg* (Math.PI/180)
  }
  
  
  var centerLng = -12.08552;//,
  var centerLat = -77.0569347;
  
  
  var map = L.map('map').setView([centerLng,centerLat], 16.5);
  var buffer = 0.04;
  var collection = [];
  var geojsonlist = [];
  
  
  //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
  //http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '<a style="color:#000" target="_blank" href="https://ciftklik.net">CiftKlik</a> | <a style="color:#000" href="https://github.com/mzuvin">@mzuvin</a>'}).addTo(map);
  
  nodes = {
    '0':{coord:[-12.086364, -77.063057]},
    '1':{coord:[-12.084570, -77.061665]},
    '2':{coord:[-12.083471, -77.060660]},
    '3':{coord:[-12.082590, -77.059952]},
    '4':{coord:[-12.081625, -77.059180]},
    '5':{coord:[-12.080667, -77.058264]},
    '6':{coord:[-12.081423, -77.057288]},
    '7':{coord:[-12.082420, -77.058079]},
    '8':{coord:[-12.083406, -77.058846]},
    '9':{coord:[-12.084292, -77.059635]},
    '10':{coord:[-12.083697, -77.058461]},
    '11':{coord:[-12.082776, -77.057675]},
    '12':{coord:[-12.081769, -77.056897]},
    '13':{coord:[-12.082068, -77.056526]},
    '14':{coord:[-12.083075, -77.057288]},
    '15':{coord:[-12.083563, -77.057669]},
    '16':{coord:[-12.084019, -77.058047]},
    '17':{coord:[-12.084900, -77.058826]},
    '18':{coord:[-12.084640, -77.057349]},
    '19':{coord:[-12.084142, -77.056948]},
    '20':{coord:[-12.083465, -77.056438]},
    '21':{coord:[-12.083034, -77.055334]},
    '22':{coord:[-12.083832, -77.055718]},
    '23':{coord:[-12.085122, -77.056762]},
    '24':{coord:[-12.085290142914268, -77.05654778446689]},
    '25':{coord:[-12.085741257824454, -77.05690183606191]},
    '26':{coord:[-12.086806095785512, -77.05779769385578]},
    '27':{coord:[-12.08729392654346, -77.05823757612966]},
    '28':{coord:[-12.087183771295354, -77.05842533076697]},
    '29':{coord:[-12.087904518807289, -77.05901471158836]},
    '30':{coord:[-12.088757413483478, -77.05968596899527]},
    '31':{coord:[-12.088166792438251, -77.05865261338165]},
    '32':{coord:[-12.087427180139127, -77.0580652096241]},
    '33':{coord:[-12.086061333252484, -77.05649763154561]},
    '34':{coord:[-12.087149774638862, -77.05740153595792]},
    '35':{coord:[-12.088135165993636, -77.05796739907369]},
    '36':{coord:[-12.088487531010177, -77.0582556835093]},
    '37':{coord:[-12.089422223345181, -77.05870707624527]},
    '38':{coord:[-12.088650731505407, -77.05810774807648]},
    '39':{coord:[-12.088331748643276, -77.05762980281278]},
    '40':{coord:[-12.088031310957053, -77.05737186410724]},
    '41':{coord:[-12.087289488048793, -77.05712909824615]},
    '42':{coord:[-12.086755374286204, -77.05657528866413]},
    '43':{coord:[-12.086306569533287, -77.05627562457173]},
    '44':{coord:[-12.08588372800261, -77.05585457755824]},
    '45':{coord:[-12.084562424056571, -77.05497592304843]},
    '46':{coord:[-12.083417742291958, -77.05423272247458]},
    '47':{coord:[-12.083414802381775, -77.05311049050361]},
    '48':{coord:[-12.084080858829875, -77.05307891406527]},
    '49':{coord:[-12.085113022502883, -77.05432843886065]},
    '50':{coord:[-12.086246404310115, -77.05529281095349]},
    '51':{coord:[-12.090038946660687, -77.05770489575927]},
    '52':{coord:[-12.08932681716548, -77.0572064748054]},
    '53':{coord:[-12.088540837675755, -77.05670888129556]},
    '54':{coord:[-12.08744919566406, -77.05575835010754 ]},
    '55':{coord:[-12.086650734676818, -77.0547950601004]},
    '56':{coord:[-12.08578365324969, -77.053678664376]},
    '57':{coord:[-12.084828530773096, -77.05251942753542]},
    '58':{coord:[-12.08413610875051, -77.05161993158067]},
    '59':{coord:[-12.08318792433147, -77.05220045733935]},
  };
  
  isimler=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
  
  
  //var kusMesafe=[366,0,160,242,161,178,77,151,226,244,241,234,380,98,193,253,329,80,199,374];
  function hn(hedef) {
    // sezgisel fonksiyon.
    var hedef=nodes[hedef].coord;
    var kusMesafeDizi=[];
    for(var i in nodes){
      var uzaklik=getDistanceFromLatLongInKm(nodes[i].coord[0],nodes[i].coord[1],hedef[0],hedef[1]);
      kusMesafeDizi.push(parseInt(uzaklik.toFixed(0)));
    }
    return kusMesafeDizi;
  
  }
  
  function uzaklikgetir(bas,son){
    var uzaklik=getDistanceFromLatLongInKm(nodes[bas].coord[0],nodes[bas].coord[1],nodes[son].coord[0],nodes[son].coord[1]);
    return parseInt(uzaklik.toFixed(0));
  }
  
  function showStartFinish(start,finish){
    L.circleMarker(nodes[start].coord,{radius:8,color:"#00ff00",fillOpacity:1}).bindPopup("start: "+isimler[start]+""+start+'').addTo(map);
    L.circleMarker(nodes[finish].coord,{radius:8,color:"#ff0000",fillOpacity:1}).bindPopup('finish: '+isimler[finish]+finish+'').addTo(map);
  }
  
  function showNodes(nodes){
    for(var a in nodes){
     // L.circleMarker(nodes[a].coord,{radius:5,color:"#0000ff",fillOpacity:1}).bindPopup(a+"."+isimler[a]).addTo(map);
     L.marker(nodes[a].coord).addTo(map).bindPopup(a+"."+isimler[a]).openPopup();
   }
  }
  showNodes(nodes);
  
  function yollariciz(coord) {
    L.polyline(coord, {color: 'red', weight: 1}).addTo(map);
  }
  var yollar=[0,1,2,3,4,5,6,7,4,7,8,3,8,9,2,9,17,16,15,14,13,12,6,12,11,14,11,7,11,10,8,16,18,19,15,19,20,14,13,21,46,45,46,47,48,57,48,47,59,58,57,56,55,54,53,52,51,37,30,0,30,29,28,1,28,27,26,25,24,23,18,23,22,20,22,21,22,45,49,56,49,45,44,24,44,50,55,50,49,48,49,50,44,43,33,25,33,43,42,54,42,41,34,33,34,26,27,32,31,29,31,36,35,39,40,32,40,53,52,38,36,38,37];
  
  yollardizi2 = [];
  for(i in yollar){
    yollardizi2.push(nodes[yollar[i]].coord);
  }
  
  yollariciz(yollardizi2);
  
  var basicGraph = [
    {start:"0",finish:"1",distance:50},
    {start:"1",finish:"0",distance:50},
    {start:"1",finish:"2",distance:50},
    {start:"2",finish:"1",distance:50},
    {start:"2",finish:"3",distance:50},
    {start:"3",finish:"2",distance:50},
    {start:"3",finish:"4",distance:50},
    {start:"4",finish:"3",distance:50},
    {start:"4",finish:"5",distance:50},
    {start:"5",finish:"4",distance:50},
    //brasil
    {start:"5",finish:"6",distance:50},
    {start:"6",finish:"5",distance:50},
    {start:"6",finish:"12",distance:25},
    {start:"12",finish:"6",distance:25},
    {start:"12",finish:"13",distance:25},
    {start:"13",finish:"12",distance:25},
    {start:"13",finish:"21",distance:100},
    {start:"21",finish:"13",distance:100},
    {start:"21",finish:"46",distance:50},
    {start:"46",finish:"21",distance:50},
    {start:"46",finish:"47",distance:50},
    {start:"47",finish:"46",distance:50},
    {start:"47",finish:"59",distance:50},
    {start:"59",finish:"47",distance:50},
    {start:"58",finish:"59",distance:50},
    //san felipe
    {start:"0",finish:"30",distance:150},
    {start:"30",finish:"0",distance:150},
    {start:"30",finish:"37",distance:50},
    {start:"37",finish:"30",distance:50},
    {start:"37",finish:"51",distance:50},
    {start:"51",finish:"37",distance:50},
    //faustino sanchez
    {start:"51",finish:"52",distance:25},
    {start:"52",finish:"51",distance:25},
    {start:"52",finish:"53",distance:25},
    {start:"53",finish:"52",distance:25},
    {start:"53",finish:"54",distance:50},
    {start:"54",finish:"53",distance:50},
    {start:"54",finish:"55",distance:50},
    {start:"55",finish:"54",distance:50},
    {start:"55",finish:"56",distance:50},
    {start:"56",finish:"55",distance:50},
    {start:"56",finish:"57",distance:50},
    {start:"57",finish:"56",distance:50},
    {start:"57",finish:"57",distance:50},
    {start:"58",finish:"58",distance:50},
    //gregorio escobedo
    {start:"1",finish:"28",distance:150},
    {start:"28",finish:"1",distance:150},
    {start:"28",finish:"27",distance:17},
    {start:"27",finish:"28",distance:17},
    {start:"27",finish:"32",distance:17},
    {start:"32",finish:"27",distance:17},
    {start:"32",finish:"40",distance:50},
    {start:"40",finish:"32",distance:50},
    {start:"40",finish:"53",distance:50},
    {start:"53",finish:"40",distance:50},
    {start:"28",finish:"29",distance:25},
    {start:"29",finish:"28",distance:25},
    {start:"30",finish:"29",distance:25},
    {start:"29",finish:"30",distance:25},
    {start:"31",finish:"29",distance:34},
    {start:"29",finish:"31",distance:34},
    {start:"31",finish:"32",distance:25},
    {start:"32",finish:"31",distance:25},
    {start:"31",finish:"36",distance:50},
    {start:"36",finish:"31",distance:50},
    {start:"36",finish:"38",distance:17},
    {start:"38",finish:"36",distance:17},
    {start:"38",finish:"52",distance:50},
    {start:"52",finish:"38",distance:50},
    {start:"38",finish:"37",distance:25},
    {start:"37",finish:"38",distance:25},
    {start:"36",finish:"35",distance:13},
    {start:"35",finish:"36",distance:13},
    {start:"39",finish:"40",distance:13},
    {start:"40",finish:"39",distance:13},
    {start:"39",finish:"35",distance:13},
    {start:"35",finish:"39",distance:13},
    //policia hasta carrion
    {start:"3",finish:"8",distance:50},
    {start:"8",finish:"10",distance:25},
    {start:"10",finish:"16",distance:25},
    {start:"16",finish:"18",distance:50},
    {start:"18",finish:"23",distance:50},
    {start:"23",finish:"24",distance:13},
    {start:"24",finish:"44",distance:50},
    {start:"44",finish:"50",distance:50},
    {start:"50",finish:"55",distance:50},
    {start:"16",finish:"17",distance:50},
    {start:"17",finish:"9",distance:50},
    {start:"9",finish:"2",distance:50},
    {start:"9",finish:"8",distance:50},
    {start:"27",finish:"26",distance:25},
    {start:"26",finish:"27",distance:25},
    {start:"25",finish:"26",distance:100},
    {start:"26",finish:"25",distance:100},
    {start:"25",finish:"24",distance:25},
    {start:"24",finish:"25",distance:25},
    {start:"44",finish:"43",distance:25},
    {start:"43",finish:"42",distance:25},
    {start:"42",finish:"41",distance:25},
    {start:"42",finish:"54",distance:50},
    {start:"43",finish:"33",distance:25},
    {start:"33",finish:"25",distance:25},
    {start:"41",finish:"34",distance:25},
    {start:"34",finish:"26",distance:25},
    {start:"33",finish:"34",distance:100},
    //diego de almagro hasta policia
    {start:"8",finish:"7",distance:50},
    {start:"11",finish:"10",distance:50},
    {start:"14",finish:"15",distance:25},
    {start:"15",finish:"16",distance:25},
    {start:"19",finish:"20",distance:25},
    {start:"20",finish:"19",distance:25},
    {start:"19",finish:"18",distance:25},
    {start:"18",finish:"19",distance:25},
    {start:"19",finish:"15",distance:25},
    {start:"15",finish:"19",distance:25},
    {start:"23",finish:"22",distance:50},
    {start:"22",finish:"23",distance:50},
    {start:"45",finish:"44",distance:50},
    {start:"50",finish:"49",distance:50},
    {start:"56",finish:"49",distance:50},
    {start:"49",finish:"45",distance:50},
    {start:"45",finish:"22",distance:50},
    {start:"22",finish:"20",distance:50},
    {start:"20",finish:"14",distance:50},
    {start:"14",finish:"11",distance:25},
    {start:"11",finish:"7",distance:25},
    {start:"7",finish:"4",distance:50},
    //janeiro hasta diego de almagro
    {start:"7",finish:"6",distance:50},
    {start:"12",finish:"11",distance:50},
    {start:"13",finish:"14",distance:50},
    {start:"21",finish:"22",distance:50},
    {start:"22",finish:"21",distance:50},
    {start:"46",finish:"45",distance:50},
    {start:"49",finish:"48",distance:50},
    {start:"47",finish:"48",distance:50},
    {start:"48",finish:"57",distance:50},
    //san felipe hasta janeiro
  ];
  
  function readyGraph(paths) {
  
    var graph = {};
    for(var i in paths){
      var path = paths[i];
      var start=path["start"];
      var finish=path["finish"];
      var distance=path["distance"];
      if(typeof graph[start]=="undefined"){
        graph[start]={};
        graph[start][finish]=distance;
      }else{
        graph[start][finish]=distance;
      }
      if(typeof graph[finish]=="undefined"){
        graph[finish]={};
        graph[finish][start]=distance;
      }else{
        graph[finish][start]=distance;
      }
    }
    return graph;
  }
  
  function indexsiragetir(test){
    var result = Array.from(Array(test.length).keys()).sort((a, b) => test[a] < test[b] ? -1 : (test[b] < test[a]) | 0);
    console.log(result);
    return result;
  }
  
  function enkisa(arr){
    var len = arr.length
    var min = Infinity;
    var index;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
        console.log("en kücük"+min);
        index = len;
      }
    }
    var obj = {
       min:  min,
       index: index,
       il: isimler[index]
    };
    return obj;
  
  }
  
  yol=readyGraph(basicGraph);
  yoltoplami=0;
  gidilen=[];
  gercekdeger=0;
  
  function astar(start,finish){
    console.log(gidilen);
    secim=[];
    for(var i in gidilen){
      if(gidilen.length>1){
        if(typeof gidilen[parseInt(i)+1]!='undefined')
         yoltoplami+=yol[gidilen[i]][gidilen[parseInt(i)+1]];  
       }
       
     }
  
    for(var i in yol[start]){
      gercekdeger=yol[start][i];
      secim[i]=kusMesafe[i]+gercekdeger+yoltoplami;
    }
  
    for(var j in gidilen){
      console.log(secim[gidilen[j]]);
      delete secim[gidilen[j]];
    }
  
    console.log("secim"+secim)
    obje=enkisa(secim);
    yeniRota=obje.index;
    gidilen.push(start);
    console.log(yeniRota + " "+ isimler[yeniRota]);
    if(yeniRota!=finish){
      //debugger;
      astar(yeniRota,finish);
    }
    if(yeniRota==finish){
      gidilen.push(yeniRota);
      return;
    }
  
  }
  
  function gbfs(start,finish){
  
    console.log(gidilen);
    secim=[];
    for(var i in yol[start]){
      secim[i]=kusMesafe[i];
    }
    
    for(var j in gidilen){
      console.log(secim[gidilen[j]]);
      delete secim[gidilen[j]];
    }
      //console.log(secim);
  
    console.log("secim"+secim)
    obje=enkisa(secim);
    yeniRota=obje.index;
    gidilen.push(start);
    console.log(yeniRota + " "+ isimler[yeniRota]);
    if(yeniRota!=finish){
      //debugger;
      gbfs(yeniRota,finish);
    }
    if(yeniRota==finish){
      gidilen.push(yeniRota);
      return;
    }
  
  }
  
  function showPath(start,path){
    lineCoords = [];
    lineCoords.push(nodes[start].coord);
    for(var i=0;i<path.length;i++){
      var nodeName =path[i];
      lineCoords.push(nodes[nodeName].coord);
    }
  
    var polyline = L.polyline(lineCoords, {color: 'blue'}).addTo(map);
  }
  
  bas=0;
  son=0;
  function ciz(bas,son){
   //astar 
   kusMesafe=hn(son);
   astar(bas,son);
   showPath(bas,gidilen);
   showStartFinish(bas,son);
  }
  
  function ciz2(argument) {
    //greddy best first search
    kusMesafe=hn(son);
    gbfs(bas,son);
    showPath(bas,gidilen);
    showStartFinish(bas,son);
  }