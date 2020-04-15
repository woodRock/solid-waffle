# Webapp
This web application displays the Mapfile through the WMS service using Leaflet

## Prerequisites
### Apache 2
The following packages are needed:
- apache2
- cgi-mapserver
Apache2 needs to be configured to run cgi-bin.
[Instructions found here](https://code-maven.com/set-up-cgi-with-apache)

## Configuration
Change the _mapfilePath_ constant in the _main.js_ file to the absolute path to your mapfile

## Installation
To launch this web application you need http-server.

In the local project directory this can be installed with the following command:
```bash
$ npm install
```

## Run
The following script runs the http-server
```bash
$ npm start
```
