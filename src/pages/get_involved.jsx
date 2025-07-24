import React from 'react'

class GetInvolve extends React.Component{

	render(){

		return (

			<>

			<div className="ml-5 md:ml-24 bg-white mb-14 h-auto md:mb-14 md:h-96">
				<h1 className = "pt-8 md:pb-5 md:pt-8 text-sky-900 text-3xl capitalize font-bold font-sans">
				why partner with us?

			</h1>
			<br/>
			<hr className="mx-2 w-auto md:w-96 border-sky-900"/>
			<br/>
			<p className="text-lg text-sky-900 font-sans font-normal capitalize">
				Children with autism and their families in Liberia often face stigma, isolation, and limited access to support. By partnering with RLF, you become part of a movement to:
			</p>

			<ul className="text-sky-900 font-sans font-normal capitalize p-3 list-disc mt-3">
				<li>Promote <b>awareness and understanding</b> in communities</li>
				<li>Build <b>inclusive schools and workplaces</b>
				 </li>
				 <li>Support <b>families and caregivers</b> with real tools and resources</li>
				 <li>Create <b>safe, informed, and welcoming environments</b> for all</li>
			</ul>
			<p className="pt-5 font-sans font-normal capitalize text-sky-900">Whether you’re in the private sector, government, education, healthcare, or ministry—<b>your partnership can drive meaningful, lasting impact</b>.</p>
			<br/>
			<a className="text-sky-900 font-sans font-normal lowercase hover:underline" href="#">see more</a>
			</div>
			</>

			)
	}
}

export default GetInvolve