import React from 'react'

class Footer extends React.Component{

	render(){

		return (

			<>
			
			<div className = "bg-sky-900 h-96 flex flex-wrap justify-evenly gap-5">

				{/* contact us */}
				<div className="w-52 mt-5 md:mt-9">

					<h1 className="text-white font-bold font-sans text-3xl capitalize">contact us
					</h1>

					<ul className="list-none text-white pt-3 font-sans font-normal">
						<li className="p-2">
							Location:
						</li>
						<li className="p-2">email:
						</li>
						<li className="p-2">cell number:
						</li>
						<li className="p-2">whatsApp:
						</li>
					</ul>

				</div>

				{/*follow us*/}


				<div className="w-52 mt-2 md:mt-9">

					<h1 className="text-white font-bold font-sans text-3xl capitalize">follow us
					</h1>

				</div>

			</div>

			</>

			)
	}
}

export default Footer