import React from 'react'

const IndividualSeventh = () => {
  return (
    <>
        <div className="container py-16 md:px-10">
        <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-8 px-16">READY TO DIG IN? APPLY NOW!</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12 ">

                <h2 className='font-medium  ' >What aspect of being a Tree Ambassador are you most interested in?</h2>
                <p><i>(Don't worry, you can still do them all!)</i></p>
                <br />

                <select class="form-select h-14 text-center mb-2" aria-label="Default select example">
                <option selected className='text-gray-100'>Select an option</option>
                <option value="1">Fund Raising</option>
                <option value="2">Volunteering</option>
                <option value="3">Amplifying</option>
                <option value="4">Learning</option>
                </select>
                
                <h2 className='font-medium  ' >Every Tree Ambassador has different strengths and brings something unique to the table. Where do you think you can make the most impact?</h2>
                
                <br />
                <select class="form-select h-14 text-center mb-2" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Local Community</option>
                <option value="2">Personal Habbits</option>
                <option value="3">Social Media Channels</option>
                <option value="3">Creating Content</option>
                </select>
                

                <h2 className='font-medium   ' >Before you continue, we want to hear from you! Tell us why you want to be a Tree Ambassador and what you hope to accomplish.</h2>
                
                <br />
                <input class="form-control form-control-lg h-14 mb-2 text-center" type="text" placeholder="come on, tell us!" aria-label=".form-control-lg example"/>
                <button class="bg-red-500 h-12 w-full rounded-md text-white hover:text-xl ">Danger</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/gabrielleclawsondigitalfundraisingspecialistinmarketingcommunications-1662489030822.jpg?v=1662489040" alt="" className='rounded-full img-fluid h-72 mx-auto pt-2' />
                    <h1 className='text-2xl font-bold my-2 '>GABRIELLE <button><i class="bi bi-envelope text-teal-700"></i></button></h1>
                    <p><i>Digital Fundraising Specialist</i></p>
                    <button className='bg-teal-700 text-white mt-3 h-12 w-52 rounded-md'>SET UP A ZOOM CALL</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default IndividualSeventh