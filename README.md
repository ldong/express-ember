# README

## Prerequisites

```bash
ember -v

# ember-cli: 2.11.1
# node: 7.8.0
# os: darwin x64
```

## Steps

```
ember new playground
cd playground
npm install express --save

mkdir express-server
touch express-server/index.js

mkdir server
touch server/index.js

node express-server/index.js
```

Result:

```bash
#  Only 4 files modified
#  modified:   README.md
#  new file:   express-server/index.js
#  modified:   package.json
#  new file:   server/index.js

````

## Instructions

```bash
npm install
npm run express-build
```


# Reference

1. [How To Setup Your Ember Project With Node or io.js And Express](http://www.programwitherik.com/setup-your-ember-project-with-node/)
