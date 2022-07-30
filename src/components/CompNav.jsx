import '../style/components/CompNav.css';
import CompList from './CompList';

function  CompNav(){
    return(
        <nav>
            <div>
                <ul>
                <CompList value1='Productos' Value2='Servicios' ></CompList>
                </ul>
            </div>
        </nav>
    )
}

export default CompNav;