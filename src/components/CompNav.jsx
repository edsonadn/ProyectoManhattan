import '../style/components/CompNav.css';
import CompList from './CompList';

function  CompNav(){
    return(
        <nav>
            <div className='imagenNav'>
                <img src="" alt="" />
            </div>
            <div className='listaNav'>
                <ul>
                <CompList Value2='Servicios' ></CompList>
                </ul>
            </div>
        </nav>
    )
}

export default CompNav;