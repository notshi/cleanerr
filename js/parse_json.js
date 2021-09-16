// Copyright (c) 2021-present, shi Blank
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

let parse=exports
const fsp=require("fs").promises

parse.run=async function()
{

	let data=await fsp.readFile(__dirname+"/../organisation-identifiers.errors.json","utf8")
	let aa=JSON.parse(data)
	
	let org
	let dataset
	
	Object.getOwnPropertyNames(aa).forEach(
		function (slug, idx, array)
		{
			org=aa[slug]
			dataset=org[]
			console.log(`${slug},${dataset}`);
		}
	)
}




