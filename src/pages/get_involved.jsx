import React from 'react'
import VolunteerForm from './volunteerForm'
import $ from 'jquery';

class GetInvolve extends React.Component{

	componentDidMount(){

		$(document).ready(function(){



		});
	}

	render(){

		return (

			<>

			<div className="ml-5 md:ml-24 bg-white mb-14 h-auto md:mb-14 md:h-auto">
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

			<div className="bg-white" id="volunteer">
				<h2 className="text-lg text-sky-900 font-sans font-bold capitalize pt-5 pb-3">
					Volunteer with Raphaella Lewis Foundation (RLF). Join Us & Make a Difference!
				</h2>
				<p className="font-sans font-normal text-sky-900">
					The Raphaella Lewis Foundation (RLF) relies on the dedication of passionate individuals like you to raise autism awareness, support families, and advocate for inclusion. Whether you have a few hours to spare or specific skills to share, your time can make a lasting impact.
				</p>
				<h2 className="text-lg text-sky-900 font-sans font-bold pt-3 pb-3">
					Ways to Volunteer:
				</h2>
				<ul className="list-disc text-sky-900 p-3 font-sans font-normal">

					<li>Assist with community outreach & autism awareness events</li>
					<li>Support fundraising & advocacy efforts</li>
					<li>Help with administration, social media, or marketing
					</li>
					<li>Teach workshops for parents, caregivers, or educators</li>
					<li>Provide therapy assistance or educational support</li>
				</ul>
				<h2 className="font-sans font-bold text-sky-900 capitalize">
					Ready to Get Involved?
				</h2>
				<p className="text-sky-900 font-sans font-normal pt-2 pb-2">
					Complete the volunteer form and help us break stigmas and build brighter futures!
				</p>
				<br/>
				<VolunteerForm/>
			</div>

			{/*<a className="text-sky-900 font-sans font-normal lowercase hover:underline" href="#" id="seemore">see more</a>*/}
			</div>
			</>

			)
	}
}

export default GetInvolve