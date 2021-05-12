#!/usr/bin/env node
// Copyright (c) 2021 shi Blank
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

let cmd=exports

cmd.run=async function()
{
	await require("./parse.js").run()
	return
}

cmd.run()
