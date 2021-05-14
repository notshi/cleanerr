// Copyright (c) 2021 shi Blank
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

let parse=exports
const fsp=require("fs").promises

parse.run_error=async function()
{
	console.log("slug,error,url")
	
	let data=await fsp.readFile(__dirname+"/../logs.txt","utf8")
	let lines=data.split("\n")
	
	let slug
	let url
	let datatype
	let version
	
	for (let line of lines)
	{
		let aa=line.split(" ")
		
		if (aa[0]=="Downloading")
		{
			slug=aa[1]
			url=aa[3]			
		}
		
		if (aa[0]=="Converting")
		{
			datatype=aa[2]
			version=aa[4]	
			
			console.log(`${slug},${line},"${url}"`)		
		}
		
		if (aa[0]=="dflat:" || aa[0]=="curl:")
		{
			console.log(`${slug},${line},"${url}"`)
		}	
	}	
}

parse.run_count=async function()
{
	console.log("slug,datatype,count,url")
	
	let data=await fsp.readFile(__dirname+"/../logs.txt","utf8")
	let lines=data.split("\n")
	
	let slug
	let count
	let datatype
	
	for (let line of lines)
	{
		let aa=line.split(" ")
		
		if (aa[0]=="Downloading")
		{
			slug=aa[1]
			url=aa[3]			
		}
		
		if (aa[0]=="found")
		{
			count=aa[1]
			datatype=aa[2]	
			
			console.log(`${slug},${datatype},${count},"${url}"`)		
		}
	
	}	
}




