import couch from'./content-couching.module.css';
import Button from '../../ui-library/button-link/button-link'
function SectionCouching(){
    return(<section className='school-couching'>
        <div className={couch.couch}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-12'>
                        <h1 className={`${couch.title} ${couch.color}`}>COACHING FOR KIDS</h1>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <ul className={couch.list}>
                            <li>School manage</li>
                            <li>Report student progress </li>
                            <li>Organize tournaments</li>
                            <li>Student material</li>
                        </ul>
                        <Button message='CHESS LAND COACHES' href='/pages/chesslandcoaches'/>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
export default SectionCouching