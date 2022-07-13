#!/usr/bin/env bash
# Copyright (c) 2021-present, shi Blank
# Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

dirname=$( dirname "$(readlink -f "$0")" )
cd "$dirname"

curl --show-error --silent https://raw.githubusercontent.com/xriss/dataiati/main/logs.txt -o logs.txt
curl --show-error --silent https://raw.githubusercontent.com/devinit/D-Portal/master/dstore/json/packages.json -o packages.json
curl --show-error --silent https://raw.githubusercontent.com/xriss/dataiati/main/json/organisation-identifiers.errors.json -o organisation-identifiers.errors.json
curl --show-error --silent https://raw.githubusercontent.com/xriss/dataiati/main/json/activity-identifiers.errors.json -o activity-identifiers.errors.json

date > date.txt
js/cmd.js error > errors.csv
js/cmd.js count > counts.csv
