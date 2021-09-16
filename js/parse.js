// Copyright (c) 2021-present, shi Blank
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

let parse=exports
const fsp=require("fs").promises

parse.run_error=async function()
{
	console.log("dataset,pub,error,url")
	
	let data=await fsp.readFile(__dirname+"/../logs.txt","utf8")
	let lines=data.split("\n")
	
	let data_json=await fsp.readFile(__dirname+"/../packages.json","utf8")
	let j=JSON.parse(data_json)
	
	let slug
	let url
	let datatype
	let version
	let org
	let orgid
	let restore
	
	let slugs_to_orgid={}
	
	Object.getOwnPropertyNames(j).forEach(
		function (slug, idx, array)
		{
			org=j[slug].organization
			if (org)
			{
				orgid=org["name"]
				if (orgid)
				{
					slugs_to_orgid[slug]=orgid
				}
			}
		}
	)
	
	for (let line of lines)
	{
		let aa=line.split(" ")
		
		if (aa[0]=="Downloading")
		{
			slug=aa[1]
			url=aa[3]
			orgid=slugs_to_orgid[slug]
		}
		
		if (aa[0]=="restored")
		{
			restore=aa[1]		
		}	
		
		if (aa[0]=="Converting")
		{
			console.log(`${slug},${orgid},${line},"${url}"`)		
		}
		
		if (aa[0]=="dflat:" || aa[0]=="curl:" || aa[0]=="restored")
		{
			console.log(`${slug},${orgid},${line},"${url}"`)
		}
	}	
}

parse.run_count=async function()
{
	console.log("dataset,pub,type,num,url")
	
	let data=await fsp.readFile(__dirname+"/../logs.txt","utf8")
	let lines=data.split("\n")
	
	let data_json=await fsp.readFile(__dirname+"/../packages.json","utf8")
	let j=JSON.parse(data_json)
	
	let slug
	let count
	let datatype
	let org
	let orgid
	let restore
	
	let slugs_to_orgid={}
	
	Object.getOwnPropertyNames(j).forEach(
		function (slug, idx, array)
		{
			org=j[slug].organization
			if (org)
			{
				orgid=org["name"]
				if (orgid)
				{
					slugs_to_orgid[slug]=orgid
				}
			}
		}
	)
	
	for (let line of lines)
	{
		let aa=line.split(" ")
		
		if (aa[0]=="Downloading")
		{
			slug=aa[1]
			url=aa[3]
			orgid=slugs_to_orgid[slug]		
		}
		
		if (aa[0]=="found" || aa[0]=="restored")
		{
			num=aa[1]
			datatype=aa[2]	
			restore=aa[1]
			
			console.log(`${slug},${orgid},${datatype},${num},"${url}"`)		
		}
	
	}	
}

