#!/usr/bin/env bash
set -e
yarn 
Xvfb :99 -screen 0 1024x768x24 -ac & 
yarn dist --win