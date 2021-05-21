#!/usr/bin/env node
// Copyright (c) 2021-present, shi Blank
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

let cmd=exports

cmd.run=async function()
{
	if (process.argv[2]=="error")
	{
		await require("./parse.js").run_error()	
	}
	else
	if (process.argv[2]=="count")
	{
		await require("./parse.js").run_count()	
	}
	else
	{
		console.log(`
Type error or count after cmd.js to run the code
`)
	}
}

cmd.run()
