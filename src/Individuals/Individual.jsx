import React from 'react'
import HoverImage from './hover'
import IndividualFifth from './IndividualFifth'
import IndividualFourth from './IndividualFourth'
import IndividualSecond from './IndividualSecond'
import IndividualSeventh from './IndividualSeventh'
import IndividualSixth from './IndividualSixth'
import IndividualThird from './IndividualThird'
import MainIndividual from './MainIndividual'

const Individual = () => {
  return (
    <>
    <MainIndividual/>
    <IndividualSecond/>
    <IndividualThird/>
    <IndividualFourth/>
    <IndividualFifth/>
    <IndividualSixth/>
    <IndividualSeventh/>
    <HoverImage/>


    </>
  )
}

export default Individual