import React from 'react'


class Services extends React.Component{

	render(){

		return(

			<>
			<div className="bg-white h-auto mb-32">
				<h1 className="text-2xl font-sans font-bold m-10 md:m-24 md:text-3xl capitalize text-sky-900">
					Explore Autism Awareness Services - Together, we can break the stigma and build a brighter future for autistic children. Explore our services below to learn how we are making a difference!
			</h1>
			{/*service*/}

			{/*first column*/}
			<div className="flex flex-wrap justify-evenly gap-0">
				<div className="w-72">
					<h1 className="text-3xl capitalize text-sky-900 font-bold font-sans">
						autism awareness &#38; community education
						<hr/>
					</h1>
					<ul className="pt-5">
						<li className="list-disc">
							<b className="capitalize text-sky-900 text-xl">
								workshops &#38; training -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								autism awareness services include teaching communities, schools and churches about autism
							</p>
						</li>
						<li className="list-disc pt-3">
							<b className="capitalize text-sky-900 text-xl">
								community programs -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								raising awareness to eliminate stigma.
							</p>
						</li>
						<li className="list-disc pt-5">
							<b className="capitalize text-sky-900 text-xl">
								brochures &#38; educational materials -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								distributing information to families and caregivers.
							</p>
						</li>
						<li className="list-disc pt-5">
							<b className="capitalize text-sky-900 text-xl">
								social media &#38; online campaigns
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								spreading awareness about autism across liberia. the <span className="uppercase">usa</span>, and africa.
							</p>
						</li>
					</ul>
					{/*second column*/}
				</div>
				<div className="w-72 mt-5 md:mt-0">
					<h1 className="text-3xl capitalize text-sky-900 font-bold font-sans">
						family support &#38; resources
						<hr/>
					</h1>
					<ul className="pt-5">
						<li className="list-disc">
							<b className="capitalize text-sky-900 text-xl">
								parents &#38; caregiver training -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								helping families understand autism and provide the best care.
							</p>
						</li>
						<li className="list-disc pt-3">
							<b className="capitalize text-sky-900 text-xl">
								one-on-one guidance -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								personalized advice and emotional support for parents.
							</p>
						</li>
						<li className="list-disc pt-5">
							<b className="capitalize text-sky-900 text-xl">
								household support ideas -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								teaching families how to use everyday items for sensory stimulation and learning.
							</p>
						</li>
						<li className="list-disc pt-5">
							<b className="capitalize text-sky-900 text-xl">
								access to autism - friendly materials -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								connecting families with educational tools and resources.
							</p>
						</li>
					</ul>
				</div>
				{/*third column*/}
				<div className="w-72 mt-5 md:mt-0">
					<h1 className="text-3xl capitalize text-sky-900 font-bold font-sans">
						inclusive education &#38; school support
						<hr/>
					</h1>
					<ul className="pt-5">
						<li className="list-disc">
							<b className="capitalize text-sky-900 text-xl">
								teacher training -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								equipping educators with skills to support autistic student.
							</p>
						</li>
						<li className="list-disc pt-3">
							<b className="capitalize text-sky-900 text-xl">
								school partnerships -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								collaborating with schools to create autism-friendly classroom.
							</p>
						</li>
						<li className="list-disc pt-5">
							<b className="capitalize text-sky-900 text-xl">
								<span className="uppercase">iep</span>(individualized education program) guidance -
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								helping parents navigate the special education process.
							</p>
						</li>
						<li className="list-disc pt-5">
							<b className="capitalize text-sky-900 text-xl">
								student assements &#38; support plans
							</b>
							<p className="text-sky-900 font-sans font-normal capitalize">

								working with families and teachers to ensure children recieved the right accomodation.
							</p>
						</li>
					</ul>
				</div>
			</div>
			</div>	
			</>

			)
	}
}

export default Services