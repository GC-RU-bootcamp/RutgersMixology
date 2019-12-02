#!/bin/bash

sudo yum -y install nodejs
node --version
npm --version

cd ${INSTALL_DIR}
npm install

node server.js
 