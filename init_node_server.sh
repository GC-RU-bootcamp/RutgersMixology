#!/bin/bash

set -a

#AWS Node install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

node -e "console.log('Running Node.js ' + process.version)"

cd ${INSTALL_DIR}

npm install

npm start

set +a



 