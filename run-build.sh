#!/usr/bin/env bash
#for use in docker
set -e
yarn 
Xvfb :99 -screen 0 1024x768x24 -ac & 
yarn dist --win