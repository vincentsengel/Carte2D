var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20220501_VariantePossible_1 = new ol.format.GeoJSON();
var features_20220501_VariantePossible_1 = format_20220501_VariantePossible_1.readFeatures(json_20220501_VariantePossible_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20220501_VariantePossible_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20220501_VariantePossible_1.addFeatures(features_20220501_VariantePossible_1);
var lyr_20220501_VariantePossible_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20220501_VariantePossible_1, 
                style: style_20220501_VariantePossible_1,
                interactive: true,
                title: '<img src="styles/legend/20220501_VariantePossible_1.png" /> 20220501_VariantePossible'
            });
var format_20220501_2 = new ol.format.GeoJSON();
var features_20220501_2 = format_20220501_2.readFeatures(json_20220501_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20220501_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20220501_2.addFeatures(features_20220501_2);
var lyr_20220501_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20220501_2, 
                style: style_20220501_2,
                interactive: true,
                title: '<img src="styles/legend/20220501_2.png" /> 20220501'
            });

    var projection_PlanIGNj1_3 = ol.proj.get('EPSG:3857');
    var projectionExtent_PlanIGNj1_3 = projection_PlanIGNj1_3.getExtent();
    var size_PlanIGNj1_3 = ol.extent.getWidth(projectionExtent_PlanIGNj1_3) / 256;
    var resolutions_PlanIGNj1_3 = new Array(14);
    var matrixIds_PlanIGNj1_3 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_PlanIGNj1_3[z] = size_PlanIGNj1_3 / Math.pow(2, z);
        matrixIds_PlanIGNj1_3[z] = z;
    }
    var lyr_PlanIGNj1_3 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wxs.ign.fr/cartes/geoportail/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
    attributions: ' ',
                                "layer": "GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_PlanIGNj1_3,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_PlanIGNj1_3),
                resolutions: resolutions_PlanIGNj1_3,
                matrixIds: matrixIds_PlanIGNj1_3
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Plan IGN j+1",
                            opacity: 1.0,
                            
                            
                          });
var format_202205XX_SortieOuest_4 = new ol.format.GeoJSON();
var features_202205XX_SortieOuest_4 = format_202205XX_SortieOuest_4.readFeatures(json_202205XX_SortieOuest_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202205XX_SortieOuest_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202205XX_SortieOuest_4.addFeatures(features_202205XX_SortieOuest_4);
var lyr_202205XX_SortieOuest_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_202205XX_SortieOuest_4, 
                style: style_202205XX_SortieOuest_4,
                interactive: true,
                title: '<img src="styles/legend/202205XX_SortieOuest_4.png" /> 202205XX_SortieOuest'
            });

lyr_OSMStandard_0.setVisible(true);lyr_20220501_VariantePossible_1.setVisible(true);lyr_20220501_2.setVisible(true);lyr_PlanIGNj1_3.setVisible(true);lyr_202205XX_SortieOuest_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_20220501_VariantePossible_1,lyr_20220501_2,lyr_PlanIGNj1_3,lyr_202205XX_SortieOuest_4];
lyr_20220501_VariantePossible_1.set('fieldAliases', {'id': 'id', });
lyr_20220501_2.set('fieldAliases', {'id': 'id', });
lyr_202205XX_SortieOuest_4.set('fieldAliases', {'id': 'id', 'Distance': 'Distance', });
lyr_20220501_VariantePossible_1.set('fieldImages', {'id': 'TextEdit', });
lyr_20220501_2.set('fieldImages', {'id': 'TextEdit', });
lyr_202205XX_SortieOuest_4.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', });
lyr_20220501_VariantePossible_1.set('fieldLabels', {'id': 'no label', });
lyr_20220501_2.set('fieldLabels', {'id': 'no label', });
lyr_202205XX_SortieOuest_4.set('fieldLabels', {'id': 'no label', 'Distance': 'no label', });
lyr_202205XX_SortieOuest_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});