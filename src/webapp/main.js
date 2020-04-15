const mapfilePath = "/home/woodj/Documents/solid-waffle/src/mapfile/nz-coastlines-topo.map";
const accessToken = 'pk.eyJ1Ijoid29vZHJvY2siLCJhIjoiY2s5MTN0NmoyMDhocjNmbm5tbnp3bXRieCJ9.OPqxdTBIE5QBAgj3NuuLSA';
const zoom = 16;
const wellington = {
  latitude: -41.346273,
  longitude: 174.776097
};

function wms() {
    const url = 'http://localhost/cgi-bin/mapserv?map=' + mapfilePath;
    const options = {
        version: '1.1.1',
        format: 'image/png',
        transparent: true,
        layers: 'coastlines',
        srs: "EPSG:3857" ,
        bbox: '6289755.442237,-3805984.513519,6292696.369653,-3805245.394890',
        width: '800',
        height: '600'
    };
    return L.tileLayer.wms(url, options)
};

function background() {
    const url = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
    const options = {
        attribution: 'Map data &copy; <a hwellington="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a hwellington="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a hwellington="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        srs: "EPSG:3857",
        zoomOffset: -1,
        accessToken: accessToken
    };
    return L.tileLayer(url, options);
};

const layers = [ background, wms ];
const map = L.map('mapid').setView([wellington.latitude, wellington.longitude], zoom);
layers.forEach( layer => layer().addTo(map));
