import React from 'react';


class SubscriptionForm extends React.Component{

	render(){

		return(

			<>
			
			<form action="#" method = "POST">
                <input className="bg-white py-2 px-3 w-64 text-sky-900 lowercase font-sans font-normal text-lg" type="email" placeholder="johnbrown@example.com"/>
                
                <div className="flex flex-1 pt-2 pd-2">
                  <button className="border border-white py-2 px-4 border-2 text-white cursor-pointer hover:bg-white hover:text-sky-900 font-sans font-normal uppercase">subscribe</button>
                </div>
              </form>	

			</>

			)
	}
}


export default SubscriptionForm;