import React from 'react'


class VolunteerForm extends React.Component{

	render(){

		return(

			<div className="bg-white">
				<form action="#" className="bg-white">
					<label className="text-sky-900 font-sans capitalize" for = "name">name :</label>
					<br/>
					<input className="py-3 px-2 border border-sky-800 bg-white w-80 md:w-2/3 rounded" type="text"/>
					<br/>
					<br/>
					<label className="text-sky-900 font-sans capitalize" for = "name">email :</label>
					<br/>
					<input className="py-3 px-2 border border-sky-800 bg-white w-80 md:w-2/3 rounded" type="email"/>
					<br/>
					<br/>
					<label className="text-sky-900 font-sans capitalize" for = "name">message:</label>
					<br/>
					<textarea className="md:w-2/3 w-80 py-3 px-2 border border-sky-800 bg-white  rounded h-32"/>
					<br/>
					<br/>
					<button className="cursor-pointer bg-sky-900 text-white font-sans font-normal text-center px-8 py-2 rounded" type="submit">send</button>
				</form>
			</div>

			)
	}
}

export default VolunteerForm