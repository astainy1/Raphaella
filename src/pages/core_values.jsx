import React from 'react'


class CoreValues extends React.Component{


	render(){

		return(

			<>
				<div className="md:h-96 md:mb-96 mb-20 bg-white md:mt-32">

				{/*<h1 className="font-bold font-sans capitalize text-4xl text-center mt-12 text-sky-900">our core value</h1>*/}
				{/*core values*/}
				<div className="flex flex-wrap justify-center gap-5 md:gap-0 mt-9">

					<div className="w-80 bg-sky-900 h-96 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">accept</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Embracing each individual for who they are, fostering inclusion and understanding.
						</p>
					</div>
					<div className="w-80 bg-sky-800 h-96 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">inspire</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Encouraging families, communities, and individuals to see unique strengths with potential within everyone.
						</p>
					</div>
					<div className="w-80 bg-sky-900 h-96 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">Nuture</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Providing support, education, and resources to help individuals and families thrive.
						</p>
					</div>
				</div>
				{/*<div className="flex flex-wrap justify-center gap-5 mt-5 md:gap-0 md:mt-0">
										<div className="w-80 bg-sky-800 h-60 text-white">
											<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">empower</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Embracing each individual for who they are, fostering inclusion and understanding.
						</p>
										</div>
					<div className="w-80 bg-sky-900 h-60 text-white">
						<h1 className="text-2xl font-bold font-sans capitalize text-white ml-5 mt-5 mx-5">embrace</h1>
						<p className="font-normal font-sans text-white text-lg ml-5 mt-2 h-80">
							Embracing each individual for who they are, fostering inclusion and understanding.
						</p>
					</div>
				</div>*/}
				<div className="bg-white mt-24">
					<h1 className="text-center text-sky-900 capitalize text-4xl font-bold font-sans">
						meet our team
					</h1>
				</div>
			</div>
				
			</>

			)
	}
}


export default CoreValues