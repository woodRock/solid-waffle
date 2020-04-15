# QGIS

## Add WMS to QGIS
1. Add a WMS/WMTS Layer
2. Give it a name, set the URL to the following:
```
http://localhost/cgi-bin/mapserv?map=/home/woodj/Documents/solid-waffle/src/mapfile/nz-coastlines-topo.map?&request=getcapabilities&service=WMS&version=1.1.1&
```
3. Select which layers to display

## Render
![rendered map from wms](wms-map.png)
