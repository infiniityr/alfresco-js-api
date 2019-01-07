#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

#Test Angular build size
cd $DIR/../test/performance/test-angular
npm install
npm run build:prod || exit 1

#Test webpack build size
cd $DIR/../test/performance/test-webpack
npm install
npm run build || exit 1