#!/usr/bin/env bash
# Copyright (c) 2021 shi Blank
# Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

dirname=$( dirname "$(readlink -f "$0")" )
cd "$dirname"

./update.sh

git add .
git commit -m "Housekeeping!"
git pull
git push
