import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Characters from './components/Characters';


function App() {

    const [characters, setCharacters] = useState([]);

    const initialUrl = "https://productostienditaw.herokuapp.com/productos/";

    const fetchCharacters = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error))

    }

    useEffect(() => {
        fetchCharacters(initialUrl);

    }, [])

    return (
        <>
            <Navbar brand="La Tiendita" />

            <div className="container mt-5">
                <Characters characters={characters} />

            </div>

        </>
    );
}

export default App;
