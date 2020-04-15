# Web Map Stuff

## Downloads and Installation
### Shapefile
Download a shapefile from [linz](data.linz.govt.nz)
1. Search "1:50k NZ coastline"
2. Set SRS to "EPSG:3994 projection"
3. Download
4. Open download email
4. Extract the zipped shape file

### Postgres
First of we need to install postgres.
[Instructions can be found here](https://wiki.postgresql.org/wiki/Apt)

### Postgis
Then we need to install postgresql-**V**-postgis-3.

Where **V** is the version of postgres.

Find out what version using
```bash
$ psql --version
```
[Instructions can be found here](https://ubuntu.pkgs.org/16.04/postgresql-i386/postgresql-10-postgis-3_3.0.1+dfsg-2.pgdg16.04+1_i386.deb.html)

### Apache 2
The following packages are needed:
- apache2
- cgi-mapserver
Apache2 needs to be configured to run cgi-bin
[Instructions found here](https://code-maven.com/set-up-cgi-with-apache)

## Create Database
Launch postgres through the terminal.
```bash
$ psql
```

Create a new database.
```sql
CREATE DATABASE exampledb;
```

Connect to the database
```sql
\c exampledb;
```

Add the postgis extension to the database
```sql
CREATE EXTENSION postgis;
```

Return to bash to add the shapefile to the database
```bash
$ shp2pgsql <file> > example.sql
$ psql -h localhost -d exampledb -U postgres -f example.sql
```

## Create Mapfile
### Map
First
```map
MAP
    NAME "NZ Coastlines"
    EXTENT        6289755.442237 -3805984.513519 6292696.369653 -3805245.394890
    UNITS         DD
    SIZE          800 600

    IMAGETYPE     PNG

    PROJECTION
          "init=epsg:3394"
    END
```

### Layer
Get the names of the layers from the databse
```bash
$ ogrinfo PG:"host=localhost user=example password=password dbname=exampledb port=5432"
```
The command above should return something like
```
INFO: Open of `PG:host=localhost user=user password=password dbname=exampledb port=5432'
      using driver `PostgreSQL' successful.
1: nz-coastlines-topo-150 (Multi Line String)
```

Get the information for the needed for the mapfile
```bash
$ ogrinfo PG:"host=localhost user=example password=password dbname=exampledb port=5432" nz-coastlines-topo-150 -summary
```
The command above returns something similar to

```
INFO: Open of `PG:host=localhost user=example password=password dbname=exampledb port=5432'
      using driver `PostgreSQL' successful.

Layer name: nz-coastlines-topo-150
Geometry: Multi Line String
Feature Count: 1
Extent: (6289755.442237, -3805984.513519) - (6292696.369653, -3805245.394890)
Layer SRS WKT:
(unknown)
FID Column = gid
Geometry Column = geom
t50_fid: Integer (0.0)
elevation: Integer (0.0)
```

Then we can create add a layer to the map file:
```map
LAYER
  NAME "Coastlines"
  TYPE Line
  STATUS ON
  CONNECTIONTYPE POSTGIS
  CONNECTION "dbname=solidwaffle host=localhost port=5432 user=user password=password"
  PROCESSING "CLOSE_CONNECTION=DEFER"
  DATA 'geom from "public"."nz-coastlines-topo-150-150k" using srid=3394 using unique gid'

  CLASS
    STYLE
        COLOR "#FF00FF"
        WIDTH 3.0
      END
   END
END
```

### WMS and WFS
This following code adds WFS and WMS capabilities connections to the map file
```map
WEB
  IMAGEPATH "/ms4w/tmp/ms_tmp/"
  IMAGEURL "/ms_tmp/"
  METADATA
    wms_title          "NZ Coastlines"
    wms_format         "PNG"
    wms_server_version "1.1.1"
    wms_srs            "EPSG:3394"
    wms_abstract       "A map of the Wellington Coastline NZ."
    wms_enable_request "*"

    wfs_title          "NZ Coastlines"
    wfs_format         "PNG"
    wfs_onlineresource "https://demo.mapserver.org/cgi-bin/wfs?"
    wfs_srs            "EPSG:3394"
    wfs_abstract       "A map of the Wellington Coastline NZ."
    wfs_enable_request "*"
  END
END
```

## Mapserver

The following query uses WMS to query the mapfile
```
http://localhost/cgi-bin/mapserv?map=/home/woodj/Documents/solid-waffle/src/nz-coastline-topo/nz-coastlines-topo-150.map&SERVICE=WMS&REQUEST=Getmap&VERSION=1.1.1&LAYERS=Coastlines&SRS=EPSG:3394&BBOX=6289755.442237,-3805984.513519,6292696.369653,-3805245.394890&FORMAT=PNG&WIDTH=800&HEIGHT=600
```

## Method
1. [x] get some datasets from LINZ (raster as image with world file & vector as shapefile)
2. [x] load shapefile into Postgis with shp2pgsql - so you need to create a new Postgres database & install Postgis first
3. [x] connect to the DB with QGIS & open the image & table to check they work
4. [x] create a mapfile for mapserver to provide a WMS feed for the image & WFS feed for the coastline
5. [ ] see if you can successfully connect to the web service & get a capabilities document using a browser
6. [ ] connect to these with QGIS & check that the web services look the same as the direct connections
7. [ ] set up a web page with leaflet that connects to thes web services & displays the layers on a web map - with a standard Leaflet base map as a context layer if you like.
