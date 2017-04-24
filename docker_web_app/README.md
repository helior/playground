## Run Node.js app on Docker container

1. Build container:

```
$ docker build -t helior/node-web-app .
```

2. Run container:

```
$ docker run -p 49160:8080 -d helior/node-web-app
```

3. Explore inside of container:

```
$ docker ps
$ docker exec -it <container id> /bin/bash
```
