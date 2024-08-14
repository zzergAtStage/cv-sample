#!/bin/bash

ng build --configuration=production --base-href=https://zzergatstage.github.io/cv-sample/
rm -rf ../docs
cp -r ../dist/cv-sample/browser ../docs
cp ../docs/index.html ../docs/404.html