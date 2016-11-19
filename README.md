## [Personal Website](http://rafaelkallis.com)

Build:

```
npm install -g brunch
brunch build
```

Deploy using docker:

```
docker run -d \
    -p 80:80 \
    --name rafaelkallis.com \
    rafaelkallis/rafaelkallis.com
```

Find the docker repository [here](https://hub.docker.com/r/rafaelkallis/rafaelkallis.com "Docker repository").