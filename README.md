# Web Map Stuff 
## Aim 

## Method 
1. get some datasets from LINZ (raster as image with world file & vector as shapefile)
2. load shapefile into Postgis with shp2pgsql - so you need to create a new Postgres database & install Postgis first
3. connect to the DB with QGIS & open the image & table to check they work
4. create a mapfile for mapserver to provide a WMS feed for the image & WFS feed for the coastline
5. see if you can successfully connect to the web service & get a capabilities document using a browser
6. connect to these with QGIS & check that the web services look the same as the direct connections
7. set up a web page with leaflet that connects to thes web services & displays the layers on a web map - with a standard Leaflet base map as a context layer if you like.
