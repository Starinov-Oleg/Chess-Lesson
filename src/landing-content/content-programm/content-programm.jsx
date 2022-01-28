import programm from './content-programm.module.css';
import school from '../../assets/section-programm/school.jpg';
import Button from '../../ui-library/button/button'

function SectionProgramm(){
    return(<section className='school-programm'>
        <div className={programm.programm}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-12'>
                        <h3 className={`${programm.subtitle} ${programm.color}`}>OPTIMIZED FOR KIDS</h3>
                        <h1 className={`${programm.title} ${programm.color}`}>SCHOOL CHESS PROGRAMS</h1>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <img className ={programm.img} src={school} alt="<a href='https://www.freepik.com/vectors/tree'>Tree vector created by jcomp - www.freepik.com</a>"/>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <ul className={programm.list}>
                            <li>Student study material</li>
                            <li>Chess report cards</li>
                            <li>Organize tournaments</li>
                            <li>Mange school</li>
                        </ul>
                        <Button message='CHESS LAND SCHOOL' href='/pages/chesslandschool'/>

                    </div>
                </div>
            </div>
        </div>
    </section>)
}
export default SectionProgramm