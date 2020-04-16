# Solid Waffle
## Aim
Use Postgis to store a Shapefile. Then create a Mapfile with WMS and WFS capabilities to be rendered in a web application.

## Map
![leaflet map](https://imgur.com/ZQ5ZCAa.png)

## Method
1. [x] get some datasets from LINZ (raster as image with world file & vector as shapefile)
2. [x] load shapefile into Postgis with shp2pgsql - so you need to create a new Postgres database & install Postgis first
3. [x] connect to the DB with QGIS & open the image & table to check they work
4. [x] create a mapfile for mapserver to provide a WMS feed for the image & WFS feed for the coastline
5. [x] see if you can successfully connect to the web service & get a capabilities document using a browser
6. [x] connect to these with QGIS & check that the web services look the same as the direct connections
7. [x] set up a web page with leaflet that connects to these web services & displays the layers on a web map - with a standard Leaflet base map as a context layer if you like.

## Explanation
The README.md in each folder goes into detail about the process required for each step.
