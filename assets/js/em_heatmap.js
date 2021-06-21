var map_17249d550ebd43bb94ad6c3859afbcc7 = L.map(
    "map_17249d550ebd43bb94ad6c3859afbcc7",
    {
        center: [37.5502, 126.9],
        crs: L.CRS.EPSG3857,
        zoom: 11,
        zoomControl: true,
        preferCanvas: false,
    }
);





var tile_layer_fa6ced5186fd4668b97280ad0caad871 = L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    {"attribution": "\u0026copy; \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca href=\"http://cartodb.com/attributions\"\u003eCartoDB\u003c/a\u003e, CartoDB \u003ca href =\"http://cartodb.com/attributions\"\u003eattributions\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map_17249d550ebd43bb94ad6c3859afbcc7);


var choropleth_6135a8aedf8249679e83831dae65ee35 = L.featureGroup(
    {}
).addTo(map_17249d550ebd43bb94ad6c3859afbcc7);


function geo_json_50fc4ca098f2459495362806d2873b38_styler(feature) {
switch(feature.id) {
    default:
        return {"color": "black", "fillColor": "white", "fillOpacity": 0, "opacity": 0.3, "weight": 1};
}
}

function geo_json_50fc4ca098f2459495362806d2873b38_onEachFeature(feature, layer) {
layer.on({
});
};
var geo_json_50fc4ca098f2459495362806d2873b38 = L.geoJson(null, {
    onEachFeature: geo_json_50fc4ca098f2459495362806d2873b38_onEachFeature,

    style: geo_json_50fc4ca098f2459495362806d2873b38_styler,
});

function geo_json_50fc4ca098f2459495362806d2873b38_add (data) {
geo_json_50fc4ca098f2459495362806d2873b38
    .addData(data)
    .addTo(choropleth_6135a8aedf8249679e83831dae65ee35);
}
geo_json_50fc4ca098f2459495362806d2873b38_add({"features": [{"geometry": {"coordinates": [[[127.11519584981606, 37.557533180704915], [127.16683184366129, 37.57672487388627], [127.18408792330152, 37.55814280369575], [127.16530984307447, 37.54221851258693], [127.14672806823502, 37.51415680680291], [127.12123165719615, 37.52528270089], [127.1116764203608, 37.540669955324965], [127.11519584981606, 37.557533180704915]]], "type": "Polygon"}, "id": "\uac15\ub3d9\uad6c", "properties": {"base_year": "2013", "code": "11250", "name": "\uac15\ub3d9\uad6c", "name_eng": "Gangdong-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.0690698130372, 37.522279423505026], [127.10087519791962, 37.524841220167055], [127.1116764203608, 37.540669955324965], [127.12123165719615, 37.52528270089], [127.14672806823502, 37.51415680680291], [127.1634944215765, 37.497445406097484], [127.14206058413274, 37.47089819098501], [127.12440571080893, 37.46240445587048], [127.11117085201238, 37.485708381512445], [127.0719146000724, 37.50224013587669], [127.0690698130372, 37.522279423505026]]], "type": "Polygon"}, "id": "\uc1a1\ud30c\uad6c", "properties": {"base_year": "2013", "code": "11240", "name": "\uc1a1\ud30c\uad6c", "name_eng": "Songpa-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.05867359288398, 37.52629974922568], [127.0690698130372, 37.522279423505026], [127.0719146000724, 37.50224013587669], [127.11117085201238, 37.485708381512445], [127.12440571080893, 37.46240445587048], [127.09842759318751, 37.45862253857461], [127.08640440578156, 37.472697935184655], [127.0559170481904, 37.4659228914077], [127.03621915098798, 37.48175802427603], [127.01397119667513, 37.52503988289669], [127.02302831890559, 37.53231899582663], [127.05867359288398, 37.52629974922568]]], "type": "Polygon"}, "id": "\uac15\ub0a8\uad6c", "properties": {"base_year": "2013", "code": "11230", "name": "\uac15\ub0a8\uad6c", "name_eng": "Gangnam-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.01397119667513, 37.52503988289669], [127.03621915098798, 37.48175802427603], [127.0559170481904, 37.4659228914077], [127.08640440578156, 37.472697935184655], [127.09842759318751, 37.45862253857461], [127.09046928565951, 37.44296826114185], [127.06778107605433, 37.426197424057314], [127.04957232987142, 37.42805836845694], [127.03881782597922, 37.45382039851715], [126.99072073195462, 37.455326143310025], [126.98367668291802, 37.473856492692086], [126.98223807916081, 37.509314966770326], [127.01397119667513, 37.52503988289669]]], "type": "Polygon"}, "id": "\uc11c\ucd08\uad6c", "properties": {"base_year": "2013", "code": "11220", "name": "\uc11c\ucd08\uad6c", "name_eng": "Seocho-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.98367668291802, 37.473856492692086], [126.99072073195462, 37.455326143310025], [126.96520439085143, 37.438249784006246], [126.95000001010182, 37.43613451165719], [126.93084408056525, 37.447382928333994], [126.9167728146601, 37.45490566423789], [126.90156094129895, 37.47753842789901], [126.90531975801812, 37.48218087575429], [126.94922661389508, 37.49125437495649], [126.9725891850662, 37.472561363278125], [126.98367668291802, 37.473856492692086]]], "type": "Polygon"}, "id": "\uad00\uc545\uad6c", "properties": {"base_year": "2013", "code": "11210", "name": "\uad00\uc545\uad6c", "name_eng": "Gwanak-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.98223807916081, 37.509314966770326], [126.98367668291802, 37.473856492692086], [126.9725891850662, 37.472561363278125], [126.94922661389508, 37.49125437495649], [126.90531975801812, 37.48218087575429], [126.92177893174825, 37.494889877415176], [126.92810628828279, 37.51329595732015], [126.95249990298159, 37.51722500741813], [126.98223807916081, 37.509314966770326]]], "type": "Polygon"}, "id": "\ub3d9\uc791\uad6c", "properties": {"base_year": "2013", "code": "11200", "name": "\ub3d9\uc791\uad6c", "name_eng": "Dongjak-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.89184663862764, 37.547373974997114], [126.94566733083212, 37.526617542453366], [126.95249990298159, 37.51722500741813], [126.92810628828279, 37.51329595732015], [126.92177893174825, 37.494889877415176], [126.90531975801812, 37.48218087575429], [126.89594776782485, 37.504675281309176], [126.88156402353862, 37.513970034765684], [126.88825757860099, 37.54079733630232], [126.89184663862764, 37.547373974997114]]], "type": "Polygon"}, "id": "\uc601\ub4f1\ud3ec\uad6c", "properties": {"base_year": "2013", "code": "11190", "name": "\uc601\ub4f1\ud3ec\uad6c", "name_eng": "Yeongdeungpo-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.90156094129895, 37.47753842789901], [126.9167728146601, 37.45490566423789], [126.93084408056525, 37.447382928333994], [126.9025831711697, 37.434549366349124], [126.87683271502428, 37.482576591607305], [126.90156094129895, 37.47753842789901]]], "type": "Polygon"}, "id": "\uae08\ucc9c\uad6c", "properties": {"base_year": "2013", "code": "11180", "name": "\uae08\ucc9c\uad6c", "name_eng": "Geumcheon-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.82688081517314, 37.50548972232896], [126.88156402353862, 37.513970034765684], [126.89594776782485, 37.504675281309176], [126.90531975801812, 37.48218087575429], [126.90156094129895, 37.47753842789901], [126.87683271502428, 37.482576591607305], [126.84762676054953, 37.47146723936323], [126.83549485076196, 37.474098236975095], [126.82264796791348, 37.4878476492147], [126.82504736331406, 37.50302612640443], [126.82688081517314, 37.50548972232896]]], "type": "Polygon"}, "id": "\uad6c\ub85c\uad6c", "properties": {"base_year": "2013", "code": "11170", "name": "\uad6c\ub85c\uad6c", "name_eng": "Guro-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.79575768552907, 37.57881087633202], [126.80702115023597, 37.60123001013228], [126.82251438477105, 37.5880430810082], [126.85984199399667, 37.571847855292745], [126.89184663862764, 37.547373974997114], [126.88825757860099, 37.54079733630232], [126.86637464321238, 37.54859191094823], [126.86610073476395, 37.52699964144669], [126.84257291943153, 37.52373707805596], [126.8242331426722, 37.53788078753248], [126.77324417717703, 37.5459123450554], [126.76979180579352, 37.55139183008809], [126.79575768552907, 37.57881087633202]]], "type": "Polygon"}, "id": "\uac15\uc11c\uad6c", "properties": {"base_year": "2013", "code": "11160", "name": "\uac15\uc11c\uad6c", "name_eng": "Gangseo-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.8242331426722, 37.53788078753248], [126.84257291943153, 37.52373707805596], [126.86610073476395, 37.52699964144669], [126.86637464321238, 37.54859191094823], [126.88825757860099, 37.54079733630232], [126.88156402353862, 37.513970034765684], [126.82688081517314, 37.50548972232896], [126.8242331426722, 37.53788078753248]]], "type": "Polygon"}, "id": "\uc591\ucc9c\uad6c", "properties": {"base_year": "2013", "code": "11150", "name": "\uc591\ucc9c\uad6c", "name_eng": "Yangcheon-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.90522065831053, 37.57409700522574], [126.93898161798973, 37.552310003728124], [126.96358226710812, 37.55605635475154], [126.96448570553055, 37.548705692021635], [126.94566733083212, 37.526617542453366], [126.89184663862764, 37.547373974997114], [126.85984199399667, 37.571847855292745], [126.88433284773288, 37.588143322880526], [126.90522065831053, 37.57409700522574]]], "type": "Polygon"}, "id": "\ub9c8\ud3ec\uad6c", "properties": {"base_year": "2013", "code": "11140", "name": "\ub9c8\ud3ec\uad6c", "name_eng": "Mapo-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.9524752030572, 37.60508692737045], [126.95565425846463, 37.576080790881456], [126.96873633279075, 37.56313604690827], [126.96358226710812, 37.55605635475154], [126.93898161798973, 37.552310003728124], [126.90522065831053, 37.57409700522574], [126.9524752030572, 37.60508692737045]]], "type": "Polygon"}, "id": "\uc11c\ub300\ubb38\uad6c", "properties": {"base_year": "2013", "code": "11130", "name": "\uc11c\ub300\ubb38\uad6c", "name_eng": "Seodaemun-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.9738864128702, 37.62949634786888], [126.95427017006129, 37.622033431339425], [126.9524752030572, 37.60508692737045], [126.90522065831053, 37.57409700522574], [126.88433284773288, 37.588143322880526], [126.90396681003595, 37.59227403419942], [126.90303066177668, 37.609977911401344], [126.91455481429648, 37.64150050996935], [126.956473797387, 37.652480737339445], [126.9738864128702, 37.62949634786888]]], "type": "Polygon"}, "id": "\uc740\ud3c9\uad6c", "properties": {"base_year": "2013", "code": "11120", "name": "\uc740\ud3c9\uad6c", "name_eng": "Eunpyeong-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.0838752703195, 37.69359534202034], [127.09706391309695, 37.686383719372294], [127.09440766298717, 37.64713490473045], [127.11326795855199, 37.639622905315925], [127.10782277688129, 37.61804244241069], [127.07351243825278, 37.61283660342313], [127.05209373568619, 37.62164065487782], [127.04358800895609, 37.62848931298715], [127.05800075220091, 37.64318263878276], [127.05288479710485, 37.68423857084347], [127.0838752703195, 37.69359534202034]]], "type": "Polygon"}, "id": "\ub178\uc6d0\uad6c", "properties": {"base_year": "2013", "code": "11110", "name": "\ub178\uc6d0\uad6c", "name_eng": "Nowon-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.05288479710485, 37.68423857084347], [127.05800075220091, 37.64318263878276], [127.04358800895609, 37.62848931298715], [127.01465935892466, 37.64943687496812], [127.02062116141389, 37.667173575971205], [127.01039666042071, 37.681894589603594], [127.01795099203432, 37.69824412775662], [127.05288479710485, 37.68423857084347]]], "type": "Polygon"}, "id": "\ub3c4\ubd09\uad6c", "properties": {"base_year": "2013", "code": "11100", "name": "\ub3c4\ubd09\uad6c", "name_eng": "Dobong-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.99383903424, 37.676681761199085], [127.01039666042071, 37.681894589603594], [127.02062116141389, 37.667173575971205], [127.01465935892466, 37.64943687496812], [127.04358800895609, 37.62848931298715], [127.05209373568619, 37.62164065487782], [127.03892400992301, 37.609715611023816], [127.0128154749523, 37.613652243470256], [126.98672705513869, 37.63377641288196], [126.9817452676551, 37.65209769387776], [126.99383903424, 37.676681761199085]]], "type": "Polygon"}, "id": "\uac15\ubd81\uad6c", "properties": {"base_year": "2013", "code": "11090", "name": "\uac15\ubd81\uad6c", "name_eng": "Gangbuk-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.977175406416, 37.62859715400388], [126.98672705513869, 37.63377641288196], [127.0128154749523, 37.613652243470256], [127.03892400992301, 37.609715611023816], [127.05209373568619, 37.62164065487782], [127.07351243825278, 37.61283660342313], [127.07382707099227, 37.60401928986419], [127.042705222094, 37.59239437593391], [127.02527254528003, 37.57524616245249], [126.99348293358314, 37.588565457216156], [126.98879865992384, 37.6118927319756], [126.977175406416, 37.62859715400388]]], "type": "Polygon"}, "id": "\uc131\ubd81\uad6c", "properties": {"base_year": "2013", "code": "11080", "name": "\uc131\ubd81\uad6c", "name_eng": "Seongbuk-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.07351243825278, 37.61283660342313], [127.10782277688129, 37.61804244241069], [127.1201246020114, 37.60178457598188], [127.10304174249214, 37.57076342290955], [127.08068541280403, 37.56906425519017], [127.07382707099227, 37.60401928986419], [127.07351243825278, 37.61283660342313]]], "type": "Polygon"}, "id": "\uc911\ub791\uad6c", "properties": {"base_year": "2013", "code": "11070", "name": "\uc911\ub791\uad6c", "name_eng": "Jungnang-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.02527254528003, 37.57524616245249], [127.042705222094, 37.59239437593391], [127.07382707099227, 37.60401928986419], [127.08068541280403, 37.56906425519017], [127.07421053024362, 37.55724769712085], [127.05005601081567, 37.567577612590846], [127.02547266349976, 37.568943552237734], [127.02527254528003, 37.57524616245249]]], "type": "Polygon"}, "id": "\ub3d9\ub300\ubb38\uad6c", "properties": {"base_year": "2013", "code": "11060", "name": "\ub3d9\ub300\ubb38\uad6c", "name_eng": "Dongdaemun-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.08068541280403, 37.56906425519017], [127.10304174249214, 37.57076342290955], [127.11519584981606, 37.557533180704915], [127.1116764203608, 37.540669955324965], [127.10087519791962, 37.524841220167055], [127.0690698130372, 37.522279423505026], [127.05867359288398, 37.52629974922568], [127.07421053024362, 37.55724769712085], [127.08068541280403, 37.56906425519017]]], "type": "Polygon"}, "id": "\uad11\uc9c4\uad6c", "properties": {"base_year": "2013", "code": "11050", "name": "\uad11\uc9c4\uad6c", "name_eng": "Gwangjin-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.02547266349976, 37.568943552237734], [127.05005601081567, 37.567577612590846], [127.07421053024362, 37.55724769712085], [127.05867359288398, 37.52629974922568], [127.02302831890559, 37.53231899582663], [127.01070894177482, 37.54118048964762], [127.02547266349976, 37.568943552237734]]], "type": "Polygon"}, "id": "\uc131\ub3d9\uad6c", "properties": {"base_year": "2013", "code": "11040", "name": "\uc131\ub3d9\uad6c", "name_eng": "Seongdong-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.01070894177482, 37.54118048964762], [127.02302831890559, 37.53231899582663], [127.01397119667513, 37.52503988289669], [126.98223807916081, 37.509314966770326], [126.95249990298159, 37.51722500741813], [126.94566733083212, 37.526617542453366], [126.96448570553055, 37.548705692021635], [126.98752996903328, 37.55094818807139], [127.01070894177482, 37.54118048964762]]], "type": "Polygon"}, "id": "\uc6a9\uc0b0\uad6c", "properties": {"base_year": "2013", "code": "11030", "name": "\uc6a9\uc0b0\uad6c", "name_eng": "Yongsan-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[127.02547266349976, 37.568943552237734], [127.01070894177482, 37.54118048964762], [126.98752996903328, 37.55094818807139], [126.96448570553055, 37.548705692021635], [126.96358226710812, 37.55605635475154], [126.96873633279075, 37.56313604690827], [127.02547266349976, 37.568943552237734]]], "type": "Polygon"}, "id": "\uc911\uad6c", "properties": {"base_year": "2013", "code": "11020", "name": "\uc911\uad6c", "name_eng": "Jung-gu"}, "type": "Feature"}, {"geometry": {"coordinates": [[[126.9738864128702, 37.62949634786888], [126.977175406416, 37.62859715400388], [126.98879865992384, 37.6118927319756], [126.99348293358314, 37.588565457216156], [127.02527254528003, 37.57524616245249], [127.02547266349976, 37.568943552237734], [126.96873633279075, 37.56313604690827], [126.95565425846463, 37.576080790881456], [126.9524752030572, 37.60508692737045], [126.95427017006129, 37.622033431339425], [126.9738864128702, 37.62949634786888]]], "type": "Polygon"}, "id": "\uc885\ub85c\uad6c", "properties": {"base_year": "2013", "code": "11010", "name": "\uc885\ub85c\uad6c", "name_eng": "Jongno-gu"}, "type": "Feature"}], "type": "FeatureCollection"});



var heat_map_97c8e321c15f42f8941fec7a388829c9 = L.heatLayer(
    [[37.587156080023654, 127.02647086385966], [37.633608409726854, 126.91615048739685], [37.51827233800711, 126.93673129599131], [37.485618115306, 126.95678091199277], [37.55347640402066, 127.15752179822285], [37.56849763123383, 126.96793805451702], [37.6254205559935, 127.026184524499], [37.54084479467721, 127.07212290930359], [37.49641321356079, 127.123487935032], [37.5938765502235, 127.05183223390304], [37.49211114525054, 126.8847449363546], [37.49964578669388, 126.86636039556484], [37.56733955813183, 127.00579539705471], [37.63644292738674, 127.07000281991384], [37.583620838961075, 127.08605546969356], [37.49068925436285, 126.90716948025135], [37.53726143022979, 126.82784183916536], [37.49385071043871, 126.89925446922592], [37.552253793582906, 126.83602535156237], [37.55694089289359, 126.85094950539178], [37.479624423596654, 126.9562869050578], [37.48851613490445, 127.08668245340023], [37.5879920013054, 127.0653288266823], [37.57966608924357, 126.99896308412191], [37.481585344616796, 126.9117077397649], [37.584191292098645, 127.04983805981972], [37.4937184009319, 126.92404876254015], [37.612869315101634, 127.0980910949257], [37.639928222761434, 127.0281656123363], [37.53598408220376, 127.13526354631516], [37.51205044957339, 126.92236733617031], [37.57534016994642, 126.9577071892358], [37.53384172231443, 127.00441798640304], [37.55257735393295, 126.93372939201893], [37.518848328762154, 126.90367981067837], [37.48427507045319, 126.93253922577287], [37.492806984645476, 127.04631254186796], [37.56199597494204, 126.79636530993179], [37.614692220705365, 126.91747199206594], [37.581104281732394, 126.93658306608872], [37.635470432094976, 127.02267251878473], [37.52685673672303, 126.89561256105343], [37.62079154435882, 126.91955399169242], [37.60067564592665, 127.10902922101678], [37.64611570419093, 127.02902417950425], [37.53654282637804, 126.88621596830559], [37.557261149, 126.8362659275], [37.6485812672986, 127.06311619032101], [37.5650731684839, 126.98884533055192], [37.49807126965969, 127.0572671088355], [37.526563966361216, 127.10823825113607], [37.50707428493414, 126.96079378447556], [37.506800025850865, 127.03466865188072], [37.50180080478528, 127.00472725970137], [37.562117114126394, 126.94082769649864], [37.522405143743, 126.89091283086373], [37.52822090089664, 127.14671886173552], [37.62881598133036, 127.08269315796586], [37.4932492859, 126.90867252950001], [37.523466745792774, 126.91033000120588], [37.559944533564746, 127.0448828406198], [37.535315660180416, 127.08360130258501], [37.528441474473546, 126.8636640030062], [37.45567063464179, 126.90056251863876]],
    {"blur": 20, "maxZoom": 18, "minOpacity": 0.5, "radius": 40}
).addTo(map_17249d550ebd43bb94ad6c3859afbcc7);


L.control.fullscreen(
    {"forceSeparateButton": true, "position": "topright", "title": "Expand me", "titleCancel": "Exit me"}
).addTo(map_17249d550ebd43bb94ad6c3859afbcc7);


map_17249d550ebd43bb94ad6c3859afbcc7.scrollEnabled = true;

map_17249d550ebd43bb94ad6c3859afbcc7.toggleScroll = function() {
    if (this.scrollEnabled) {
        this.scrollEnabled = false;
        this.scrollWheelZoom.disable();
    } else {
        this.scrollEnabled = true;
        this.scrollWheelZoom.enable();
    }
};
map_17249d550ebd43bb94ad6c3859afbcc7.toggleScroll();