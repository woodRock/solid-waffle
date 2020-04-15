# Postgis

## Installations
### Postgres
First of we need to install postgres.
[Instructions can be found here](https://wiki.postgresql.org/wiki/Apt).

### Postgis
Then we need to install postgresql-**V**-postgis-3.

Where **V** is the version of postgres.

Find out what version using.
```bash
$ psql --version
```
[Instructions can be found here](https://ubuntu.pkgs.org/16.04/postgresql-i386/postgresql-10-postgis-3_3.0.1+dfsg-2.pgdg16.04+1_i386.deb.html).

## Create Database
Launch postgres through the terminal.
```bash
$ psql
```

Create a new database.
```sql
CREATE DATABASE exampledb;
```

Connect to the database.
```sql
\c exampledb;
```

Add the postgis extension to the database.
```sql
CREATE EXTENSION postgis;
```

Return to bash to add the shapefile to the database.
```bash
$ shp2pgsql <file> > example.sql
$ psql -h localhost -d exampledb -U postgres -f example.sql
```
