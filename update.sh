#!/usr/bin/env bash
# Copyright (c) 2021-present, shi Blank
# Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

dirname=$( dirname "$(readlink -f "$0")" )
cd "$dirname"

# ls
# rm logs.txt

# if [ ! -f "logs.txt" ] ; then
	curl -sS https://raw.githubusercontent.com/xriss/dataiati/main/logs.txt -o logs.txt
	curl -sS https://raw.githubusercontent.com/devinit/D-Portal/master/dstore/json/packages.json -o packages.json
	curl -sS https://raw.githubusercontent.com/xriss/dataiati/main/json/organisation-identifiers.errors.json -o organisation-identifiers.errors.json
	curl -sS https://raw.githubusercontent.com/xriss/dataiati/main/json/activity-identifiers.errors.json -o activity-identifiers.errors.json
# fi

date > date.txt
js/cmd.js error > errors.csv
js/cmd.js count > counts.csv
