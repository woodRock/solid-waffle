# Salty Bathy 
Render a map of NZ (nicely)

## Downloads 
ftp://ftp.niwa.co.nz/bathymetry/NZBathy_DTM_2016_binary_grid.zip
NZ coasts & islands 150k
	- CRS 3994 (mercator 41)


## Layers 
These layers are added to QGIS in the following order:

1. _NZ Coasts and Islands 150k_ Copy ShapeFile
	- opacity 50%
	- _ada_a_ bathymetry colour band
2. _NZ Coasts and Islands 150k_ ShapeFile
	- opacity: 50%
3. _NZ_BATHY_ Raster
	- hillshade
	- Z: 30
  	
## Render
This finished product is a salty bathymetry render.

![map](https://imgur.com/NFN6XUC.png)
