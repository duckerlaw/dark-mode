import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Content = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <main className= {theme==="dark"?"dark":"light"}>
            <div>
                <h1>Thanakorn</h1>
                <p>Darkmode workshop</p>
            </div>
            <img src={theme==="dark"? dark : light} alt='logo' />
        </main>
    );
}

export default Content;