import React from 'react'
import programm from './content-programm.module.css'
import school from '../../assets/section-programm/school.jpg'
import Button from '../../ui-library/button-link/button-link'
import Ul from '../../ui-library/ul/ul'
import H1 from '../../ui-library/h1/h1'
import H3 from '../../ui-library/h3/h3'

interface contentProgrammProps {
  contentProgramm: Array<string>
}

function SectionProgramm({ contentProgramm }: contentProgrammProps) {
  const style = { color: '#51504b' }
  const style_h3 = { paddingTop: '2rem' }
  const style_h1 = { color: '#2aa3d3' }
  return (
    <section className='school-programm'>
      <div className={programm.programm}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-12'>
              <H3 message='OPTIMIZED FOR KIDS' style={style_h3} />
              <H1 message='SCHOOL CHESS PROGRAMS' style={style_h1} />
            </div>
            <div className='col-lg-6 col-12'>
              <img
                className={programm.img}
                src={school}
                alt="<a href='https://www.freepik.com/vectors/tree'>Tree vector created by jcomp - www.freepik.com</a>"
              />
            </div>
            <div className='col-lg-6 col-12'>
              <Ul lists={contentProgramm} style={style} />
              <Button message='CHESS LAND SCHOOL' href='chesslandschool' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default React.memo(SectionProgramm)
