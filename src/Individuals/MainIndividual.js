import React, { useState, useEffect } from 'react';
import './Individual.css';

function MainIndividual() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    return (
        <>
        <div className="responsive-background mb-4  pb-none ">
            <div className="content w-1/1 ">
                <h1 className="text-white font-bold sm:text-xl md:text-2xl lg:text-7xl mb-8" >TREE AMBASSADORS</h1>
                <p className="text-white mb-10 ">STORIES FROM THE FIELD, TREE FACTS, AND A HEALTHY DOSE OF NATURE</p>
                <button className="btn btn-danger w-44 font-bold rounded-none">Apply Now</button>

            </div>
        </div>
        <div className="flex justify-center space-x-4 sm:px-10 mb-2  ">
        <i class="bi bi-facebook text-blue-700 text-4xl hover:-mt-2"></i>
        <i class="bi bi-twitter text-blue-500 text-4xl hover:-mt-2"></i>
        <i class="bi bi-pinterest text-red-600 text-4xl hover:-mt-2"></i>
        <i class="bi bi-envelope-fill text-neutral-600 text-4xl hover:-mt-2"></i>
        <i class="bi bi-envelope-fill text-yellow-400 text-4xl hover:-mt-2"></i>
        <i class="bi bi-share-fill text-lime-500  text-4xl hover:-mt-2"></i>
        </div>
        </>
    );
}

export default MainIndividual;