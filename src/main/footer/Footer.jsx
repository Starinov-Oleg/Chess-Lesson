import footer from './Footer.module.css';

function Footer(){
    return (<footer className='footer'>
        <div className ={`text-center p-3 ${footer.footer}`}>
                © {(new Date().getFullYear())} ChessLand
        </div>
    </footer>)
}
export default Footer