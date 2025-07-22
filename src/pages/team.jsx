import React from 'react'
import img1 from '../img/Untitled-design-85.png'
import img2 from '../img/Untitled-design-87.png'
import img3 from '../img/Untitled-design-88.png'

class TeamMembers extends React.Component{


	render(){

		return(

			<>
			
			<div className="bg-white mt-12  mb-32">
					<h1 className="text-center text-sky-900 capitalize text-4xl font-bold font-sans">
						meet our team
					</h1>
					<div className="flex flex-wrap justify-evenly items-center gap-2 mt-14">

						{/*img 1*/}

				<div class="w-72 bg-white border border-none">
    			<a href="#">
       			 <img class="w-auto m-0" src={img1} alt="Jesayda Wright" />
    				</a>
   			 <div class="p-5">
        		<a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-sky-900 font-sans capitalize">Jesayda Wright</h5>
        </a>
        <p class="mb-3 font-normal text-sky-900 dark:text-sky-900">Holds a BA in Business Management with Marketing. My journey into special needs advocacy began after my daughter was diagnosed with autism.Facing stigma and misinformation, especially within African communities, inspired me to speak out and educate others.</p>
        
</div>

						</div>
						
						{/*img2*/}

				<div class="w-72 bg-white border border-none  dark:bg-white dark:border-gray-700">
    		<a href="#">
        	<img class="w-auto m-0 cursor-pointer" src={img3} alt="Nathaniel B. Garpue" />
    		</a>
    		<div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900 dark:text-sky-900 capitalize">
            	Nathaniel B. Garpue
            </h5>
        </a>
        <p class="mb-3 font-normal text-sky-900 dark:text-sky-900">A devout Christian and proud graduate of St. Cloud State University with over a decade of experience in Special Education, working with students facing challenges such as ASD, EBD, and FASD.</p>
            </div>
			</div>
						{/* img 3*/}
<div class="w-72 bg-white border border-none  dark:bg-white dark:border-gray-700">
    <a href="#">
        <img class="w-auto m-0" src={img2} alt="Shayla Harris" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900 dark:text-sky-900 capitalize">
            	Shayla Harris
            </h5>
        </a>
        <p class="mb-3 font-normal text-sky-900 dark:text-sky-900">
        	A dedicated Special Education Assistant with nearly 10 years of experience, working with individuals with diverse needs since 2006. As a former Autism Teacher, I had the honor of teaching Raphaella, which deepened my passion for autism advocacy.
        </p>
            </div>
			</div>
			</div>
			</div>
	

			</>

			)
	}
}

export default TeamMembers;