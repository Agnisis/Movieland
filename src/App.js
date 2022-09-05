
import { useEffect } from 'react';

import './App.css';
import searchIcon from './search.svg';
// a7464dc0

const API_URL = 'http://www.omdbapi.com?apikey=a7464dc0';


const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.search);

    }
    useEffect(() => {
        searchMovies('spiderman');
    }, [])
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='search for movies'
                    value='superman'
                    onChange={() => { }}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
            </div>
            <div className="container">
                
            </div>
        </div>
    );
}

export default App;

