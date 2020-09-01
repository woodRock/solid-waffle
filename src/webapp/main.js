const mapfilePath = "/home/woodj/Documents/solid-waffle/src/mapfile/nz-coastlines-topo.map";
const accessToken = 'pk.eyJ1Ijoid29vZHJvY2siLCJhIjoiY2s5MTN0NmoyMDhocjNmbm5tbnp3bXRieCJ9.OPqxdTBIE5QBAgj3NuuLSA';
const zoom = 16;
const wellington = {
  latitude: -41.346273,
  longitude: 174.776097
};

var basemaps = {
    Coastlines: L.tileLayer.wms('http://localhost/cgi-bin/mapserv?map='+mapfilePath, {
        version: '1.1.1',
        format: 'image/png',
        transparent: true,
        layers: 'coastlines',
        width: '800',
        height: '600'
    }),
    Sea: L.tileLayer.wms('http://localhost/cgi-bin/mapserv?map='+mapfilePath, {
        version: '1.1.1',
        format: 'image/png',
        transparent: true,
        layers: 'sea',
        width: '800',
        height: '600'
    }),
    Land: L.tileLayer.wms('http://localhost/cgi-bin/mapserv?map='+mapfilePath, {
        version: '1.1.1',
        format: 'image/png',
        transparent: true,
        layers: 'land',
        width: '800',
        height: '600'
    })
};

const overlayMaps = {
  // Background: basemaps.Topography,
  Coastline : basemaps.Coastlines,
  Sea: basemaps.Sea,
  Land: basemaps.Land
};

var crs = L.CRS.EPSG4326;

var map = L.map('mapid', {
  crs: crs
}).setView([wellington.latitude, wellington.longitude], zoom);

L.control.layers(null, overlayMaps).addTo(map);
L.control.scale().addTo(map);

// basemaps.Topography.addTo(map);
basemaps.Coastlines.addTo(map);
basemaps.Sea.addTo(map);
basemaps.Land.addTo(map);
