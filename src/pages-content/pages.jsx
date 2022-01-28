import { Outlet} from 'react-router-dom';
import Button from '../ui-library/button/button';
import Footer from '../main/footer/Footer';
import HeaderPage from './main-pages/Header';
import pages from './pages.module.css'

function Pages(){
    return (
        <div className={pages.pages}> 
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <HeaderPage/>   
                    </div> 
                    <div className={`col-lg-10 col-md-9 col-sm-9 col-12 ${pages.color}`} >
                        <Outlet />
                        <Button message='WHAT IS CHESS LAND?' href='whatis' alt="Photo by Monstera from Pexels"/>
                        <Button message='WHAT IS CHESS LAND?' href='chesslandschool' alt="Photo by Monstera from Pexels"/>
                    </div>   
                </div>
           
            <Footer/>
        </div>
    )
}

export default Pages