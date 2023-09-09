import React from 'react'
import './Individual.css';


const data=[
    {
        id:1,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/1iconred-1661352644575.svg?v=1661352646 ",
        detail:"You fill out the application form below. Don't worry - it takes less than one minute to complete!"
    },
    {
        id:2,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/2iconred-1661352644581.svg?v=1661352651",
        detail:"Someone from our team will review your application and you'll hear back in less than 24 hours time."
    },
    {
        id:3,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/3iconred-1661352644583.svg?v=1661352656",
        detail:"Once accepted, you join our program where you'll be invited to learn, fundraise, volunteer and share through a personalized program."
    },
]

const IndividualFifth = () => {
  return (
    <>
        <div className="bg-gray-100 w-1/1 py-16">
            <div>
                <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-8">WHO IS A TREE AMBASSADOR?</h1>
                
            </div>
            <div className="flex flex-wrap justify-content-center space-x-4  px-8 md:px-16 xl:px-32  py-4 ">
            {data.map((card) => (
            <div className="w-1/1 md:w-1/4 lg:w-1/4 justify-between items-center text-center" key={data.id}>
                <img src={card.imgUrl} alt="" className="w-44 h-44 flex rounded-full mx-auto " /><br />
                <p>{card.detail}</p>
            </div>
))}</div>
            

           
        </div>
    </>
  )
}

export default IndividualFifth;