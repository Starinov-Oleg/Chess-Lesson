import React from 'react'
import payblock from './pay-block.module.css'
import H1 from '../../../ui-library/h1/h1'
import H3 from '../../../ui-library/h3/h3'
import picture from '../../../assets/section-payload/g.png'
import '../../../common/vars-css.css'
import { Link } from 'react-router-dom'
function PayBlock() {
  return (
    <div className={`container ${payblock.payblock}`}>
      <div className='row'>
        <div className='col-md-12 col-12'>
          <Link to='/contact'>
            <H1 message='COURSE ON ONE YEAR ->' colorOrange textAlignLeft />
          </Link>
        </div>
        <div className='col-md-8 col-12'>
          <H3
            message='Study 1-4 times a week in one or more subjects and complete the whole class program'
            colorBlack
            textAlignLeft
          />
          <H3 message='3 lesson for free' colorNote textAlignLeft fontSize1rem />
          <H3 message='50 000 Đ ' colorBlack textAlignLeft />
          <H3 message='for lesson' colorNote textAlignLeft fontSize1rem />
        </div>
        <div className={`col-md-4 col-12 ${payblock.relativepic}`}>
          <img
            src={picture}
            className={payblock.picture}
            alt='video here <a href=https://www.freepik.com/vectors/background>Background vector created by pch.vector - www.freepik.com</a>'
          />
        </div>
      </div>
    </div>
  )
}

export default PayBlock
