import React from 'react'
//import passport from './passport-block.module.css'
import { Padding } from '../../../common/styled-components/padding-margin.styled'
interface PassportProps {
  location?: string
  contact?: string
  position?: string
}
function Passport({ location, contact, position }: PassportProps) {
  return (
    <section>
      <Padding>
        <h5>Location:{location}</h5>
        <h5>Contact: {contact}</h5>
        <h5>Position: {position}</h5>
      </Padding>
    </section>
  )
}
export default Passport
