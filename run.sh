#! /bin/bash

echo "Starting test URL"

nohup node index.js > output.log &

echo "fin"