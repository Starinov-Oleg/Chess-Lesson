import footer from './Footer.module.css';

function Footer(){
    return (<footer className='footer'>
        <div className ={`text-center p-3 ${footer.footer}`}>
                © 2020  ChessLand
        </div>
    </footer>)
}
export default Footer