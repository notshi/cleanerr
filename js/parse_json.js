// Copyright (c) 2021-present, shi Blank
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

let parse=exports
const fsp=require("fs").promises

parse.run=async function()
{
	console.log("dataset,pid")

	let data=await fsp.readFile(__dirname+"/../packages.json","utf8")
	let aa=JSON.parse(data)
	
	let org
	let orgid
	
	Object.getOwnPropertyNames(aa).forEach(
		function (slug, idx, array)
		{
			org=aa[slug].organization
			if (org)
			{
				orgid=org["name"]
				if (orgid)
				{
					console.log(`${slug},${orgid}`);
				}
			}
		}
	)
}




