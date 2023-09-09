import React, { useState } from "react";

const Accordion = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);

  return (
    <>
   
    <div className="flex flex-col py-2">
      <button
        onClick={toggle}
        className="bg-gray-100 text-gray-800 text-left  font-bold py-2 px-4 h-20 md:h-16 rounded-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      >
        {title}
      </button>
      {isOpen && (
        <div className="text-gray-700 font-normal py-3 px-4 text-left rounded-b">
          {details}
        </div>
      )}
      
    </div>
    </>
  );
};

const App = () => (
    <>
  <div className="w-3/4 mx-auto  py-16 md:w-5/6">
            <div>
                <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-8">FAQ</h1>
                
            </div>
    <Accordion
      title="CAN I BE A TREE AMBASSADOR IF I WANT TO PLANT TREES ON BEHALF OF MY BUSSINESS?"
      details={
        <>
          We recommend signing up as a <code>Business Partner</code> if you are planning to plant trees in correlation with sales of any kind, or are looking for a partnership as a business. We have business partners of all sizes, and as a business partner you will get a dedicated account manager, business resources, and more!
        </>
      }
    />
    <Accordion
      title="CAN I GET FUNDING FOR MY TREE PLANTING PROJECT AS A TREE EMBASSADOR?"
      details="The Tree Ambassador program does not offer funding of any kind. If you are looking for funding you should explore our Planting Partner Program and requirements."
    />
    <Accordion
      title="WHAT CAN I DO AS A TREE AMBASSADOR?"
      details="As a Tree Ambassador you can fundraise for One Tree Planted’s projects, create user generated content to share on social media, attend volunteer tree planting events, and get exclusive access to resources. You can also join the Discord group and will be the first to know about special opportunities!"
    />
    
  </div>
  <hr />
  </>
);

export default App;