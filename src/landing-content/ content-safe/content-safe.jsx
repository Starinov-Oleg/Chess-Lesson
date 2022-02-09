import safe from './content-safe.module.css'
import Button from '../../ui-library/button-link/button-link'

function SectionSafe (){
    return(
        <section className='safe'>
            <div className={safe.safe}>
                <div className='container'>
                    <div className="row">
                        <div className='col-lg-6 col-12'>
                            <div className='titles'>
                                <h1 className={`${safe.title} ${safe.color}`}>CARE FOR SAFE </h1>
                                <ul className={safe.subtitle}>
                                    <li>Activity report</li>
                                    <li>Non stop contact with cauch and teacher</li>
                                    <li>Restricted study material</li>
                                </ul>
                                 <Button message='WHAT IS CHESS LAND?' href='/pages/whatis' alt="Photo by Monstera from Pexels"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionSafe