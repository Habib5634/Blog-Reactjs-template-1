import React from 'react'
import './Individual.css';


const data=[
    {
        id:1,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/peaceicon-1661352644589.svg?v=1661352676    ",
        detail:"You enjoy connecting with people in your local community (and around the world!) to share ideas, motivation, and solutions."
    },
    {
        id:2,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/cameraicon-1661352644585.svg?v=1661352661",
        detail:"You are interested in using your unique     skills and interests to drive action and create change in your community."
    },
    {
        id:3,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hikericon-1661352644587.svg?v=1661352668",
        detail:"You love spending time in nature and feel passionate about doing what you can to benefit your local environment."
    },
]

const IndividualSecond = () => {
  return (
    <>
        <div className="bg-gray-100 w-1/1 py-16">
            <div>
                <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-8">WHO IS A TREE AMBASSADOR?</h1>
                <p className="px-8 md:px-32 xl:px-64  ">Making an impact isn't about one person taking one big action, it's about a <span className="font-bold"> community of like-minded people coming together and taking small actions every day.</span> Tree Ambassadors are passionate environmental stewards who <span className="font-bold"> want to represent One Tree Planted </span>— and aren't afraid to get their hands in the dirt to make an impact at work, at home, or at school. Together, we are building a <span className="font-bold"> community of tree-lovers around the world who are doing their part, one tree at a time.</span></p>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 items-centerpx-8 md:px-16 xl:px-32  py-4 place-items-center">
            {data.map((card) => (
            <div className="w-1/1 md:w-1/4 lg:w-1/4 justify-between items-center text-center" key={data.id}>
                <img src={card.imgUrl} alt="" className="w-44 h-44 flex ml-12 mx-auto " />
                <p>{card.detail}</p>
            </div>
))}</div>
            

           
        </div>
    </>
  )
}

export default IndividualSecond;