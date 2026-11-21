var wms_layers = [];

var format_Municipios_Projetobr_municipios_2024_0 = new ol.format.GeoJSON();
var features_Municipios_Projetobr_municipios_2024_0 = format_Municipios_Projetobr_municipios_2024_0.readFeatures(json_Municipios_Projetobr_municipios_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_Projetobr_municipios_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_Projetobr_municipios_2024_0.addFeatures(features_Municipios_Projetobr_municipios_2024_0);
var lyr_Municipios_Projetobr_municipios_2024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_Projetobr_municipios_2024_0, 
                style: style_Municipios_Projetobr_municipios_2024_0,
                popuplayertitle: 'Municipios_Projeto — br_municipios_2024',
                interactive: true,
                title: '<img src="styles/legend/Municipios_Projetobr_municipios_2024_0.png" /> Municipios_Projeto — br_municipios_2024'
            });
var format_Areas_Atingidas_2024_RG_SJN_1 = new ol.format.GeoJSON();
var features_Areas_Atingidas_2024_RG_SJN_1 = format_Areas_Atingidas_2024_RG_SJN_1.readFeatures(json_Areas_Atingidas_2024_RG_SJN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_Atingidas_2024_RG_SJN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Atingidas_2024_RG_SJN_1.addFeatures(features_Areas_Atingidas_2024_RG_SJN_1);
var lyr_Areas_Atingidas_2024_RG_SJN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Atingidas_2024_RG_SJN_1, 
                style: style_Areas_Atingidas_2024_RG_SJN_1,
                popuplayertitle: 'Areas_Atingidas_2024_RG_SJN',
                interactive: true,
                title: '<img src="styles/legend/Areas_Atingidas_2024_RG_SJN_1.png" /> Areas_Atingidas_2024_RG_SJN'
            });

lyr_Municipios_Projetobr_municipios_2024_0.setVisible(true);lyr_Areas_Atingidas_2024_RG_SJN_1.setVisible(true);
var layersList = [lyr_Municipios_Projetobr_municipios_2024_0,lyr_Areas_Atingidas_2024_RG_SJN_1];
lyr_Municipios_Projetobr_municipios_2024_0.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Areas_Atingidas_2024_RG_SJN_1.set('fieldAliases', {'fid': 'fid', 'versao': 'versao', 'nm_mun': 'nm_mun', 'corede': 'corede', 'regiao_fun': 'regiao_fun', 'st_dec_576': 'st_dec_576', 'cd_mun': 'cd_mun', 'mun_nm': 'mun_nm', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Municipios_Projetobr_municipios_2024_0.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Areas_Atingidas_2024_RG_SJN_1.set('fieldImages', {'fid': 'TextEdit', 'versao': 'TextEdit', 'nm_mun': 'TextEdit', 'corede': 'TextEdit', 'regiao_fun': 'TextEdit', 'st_dec_576': 'TextEdit', 'cd_mun': 'TextEdit', 'mun_nm': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Municipios_Projetobr_municipios_2024_0.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'inline label - always visible', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Areas_Atingidas_2024_RG_SJN_1.set('fieldLabels', {'fid': 'no label', 'versao': 'no label', 'nm_mun': 'no label', 'corede': 'no label', 'regiao_fun': 'no label', 'st_dec_576': 'no label', 'cd_mun': 'no label', 'mun_nm': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Areas_Atingidas_2024_RG_SJN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});