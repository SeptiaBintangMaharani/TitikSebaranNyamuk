var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GPSEssentialsExport_1 = new ol.format.GeoJSON();
var features_GPSEssentialsExport_1 = format_GPSEssentialsExport_1.readFeatures(json_GPSEssentialsExport_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSEssentialsExport_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSEssentialsExport_1.addFeatures(features_GPSEssentialsExport_1);
var lyr_GPSEssentialsExport_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSEssentialsExport_1, 
                style: style_GPSEssentialsExport_1,
                popuplayertitle: "GPS Essentials Export",
                interactive: true,
                title: '<img src="styles/legend/GPSEssentialsExport_1.png" /> GPS Essentials Export'
            });
var format_KELURAHANPASIRKALIKI_2 = new ol.format.GeoJSON();
var features_KELURAHANPASIRKALIKI_2 = format_KELURAHANPASIRKALIKI_2.readFeatures(json_KELURAHANPASIRKALIKI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELURAHANPASIRKALIKI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHANPASIRKALIKI_2.addFeatures(features_KELURAHANPASIRKALIKI_2);
var lyr_KELURAHANPASIRKALIKI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHANPASIRKALIKI_2, 
                style: style_KELURAHANPASIRKALIKI_2,
                popuplayertitle: "KELURAHAN PASIRKALIKI",
                interactive: true,
                title: '<img src="styles/legend/KELURAHANPASIRKALIKI_2.png" /> KELURAHAN PASIRKALIKI'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_GPSTITIKPERINDUKANNYAMUK_4 = new ol.format.GeoJSON();
var features_GPSTITIKPERINDUKANNYAMUK_4 = format_GPSTITIKPERINDUKANNYAMUK_4.readFeatures(json_GPSTITIKPERINDUKANNYAMUK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSTITIKPERINDUKANNYAMUK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSTITIKPERINDUKANNYAMUK_4.addFeatures(features_GPSTITIKPERINDUKANNYAMUK_4);
var lyr_GPSTITIKPERINDUKANNYAMUK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSTITIKPERINDUKANNYAMUK_4, 
                style: style_GPSTITIKPERINDUKANNYAMUK_4,
                popuplayertitle: "GPS TITIK PERINDUKAN NYAMUK",
                interactive: true,
                title: '<img src="styles/legend/GPSTITIKPERINDUKANNYAMUK_4.png" /> GPS TITIK PERINDUKAN NYAMUK'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GPSEssentialsExport_1.setVisible(true);lyr_KELURAHANPASIRKALIKI_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_GPSTITIKPERINDUKANNYAMUK_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GPSEssentialsExport_1,lyr_KELURAHANPASIRKALIKI_2,lyr_Buffered_3,lyr_GPSTITIKPERINDUKANNYAMUK_4];
lyr_GPSEssentialsExport_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KELURAHANPASIRKALIKI_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GPSTITIKPERINDUKANNYAMUK_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GPSEssentialsExport_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KELURAHANPASIRKALIKI_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_GPSTITIKPERINDUKANNYAMUK_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_GPSEssentialsExport_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KELURAHANPASIRKALIKI_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GPSTITIKPERINDUKANNYAMUK_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GPSTITIKPERINDUKANNYAMUK_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});