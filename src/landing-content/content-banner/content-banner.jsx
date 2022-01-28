import baner from './content-banner.module.css';
import ButtonPlay from '../../ui-library/button-play/button-play';
function SectionBaner(){
    return (<section className='baner'>
        <div className={baner.baner}>
            <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <h3 className={`${baner.subtitle} ${baner.color}`}>CHESS?</h3>
                    <h1 className={`${baner.title} ${baner.color}`}>LEARN NOW</h1>
                    <ButtonPlay className={baner.play} href='/pages/chesslearn'/>
                </div>
            </div>
            </div>
        </div>
    </section>)
}

export default SectionBaner