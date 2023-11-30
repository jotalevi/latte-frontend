#!/bin/sh

git pull
npm i
npm run build

pm2 delete latte_FE
pm2 serve build/ 3001 --name latte_FE --spa
