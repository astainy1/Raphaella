import React from 'react'
import TeamMembers from './team'

class CoreValues extends React.Component{


	render(){

		return(

			<>
				<div className="md:h-auto  mb-20 bg-white mt-20 md:mt-16">

				<h1 className="font-bold font-sans capitalize text-4xl text-center mt-16 text-sky-900">our core values</h1>
				
				<div className="flex flex-wrap justify-center gap-5 md:gap-0 mt-9">

					<div className="w-80 bg-sky-900 h-80 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">accept</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Embracing each individual for who they are, fostering inclusion and understanding.
						</p>
					</div>
					<div className="w-80 bg-sky-800 h-80 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">inspire</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Encouraging families, communities, and individuals to see unique strengths with potential within everyone.
						</p>
					</div>
					<div className="w-80 bg-sky-900 h-80 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">Nuture</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Providing support, education, and resources to help individuals and families thrive.
						</p>
					</div>
				</div>
				<div className="flex flex-wrap justify-center gap-5 mt-5 md:gap-0 md:mt-5">
										<div className="w-80 bg-sky-800 h-80 text-white">
											<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">empower</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Equipping individuals and families with the tools and opportunities to overcome challenges and succeed.
						</p>
										</div>
					<div className="w-80 bg-sky-900 h-80 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">embrace</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Celebrating diversity and creating a compassionate,supportive community.
						</p>
					</div>
				</div>
				<TeamMembers/>
				</div>
				
			</>

			)
	}
}


export default CoreValues