import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Actress = () => {
    const [actresses, setActresses] = useState([]); // Rinominato da product a actresses

    const getActresses = () => { // Rinominato da getProduct a getActresses
        axios.get("https://lanciweb.github.io/demo/api/actresses")
            .then((resp) => {
                console.log(resp.data); // Aggiungiamo un console.log per debug
                setActresses(resp.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error); // Aggiungiamo gestione errori
            });
    };

    useEffect(() => {
        getActresses();
    }, []);



    return (
        <>
            <Navbar />
            {/* Container principale Bootstrap */}
            <div className="container mt-4"> {/* Aggiunto mt-4 per spaziatura */}
                {/* Riga per il titolo */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1>Lista Attrici</h1>
                    </div>
                </div>
                {/* Griglia responsive per le card */}
                <div className="row g-3">
                    {/* Mapping dell'array delle attrici per creare le card */}
                    {actresses.map((act) => (
                        // Colonna responsive: 12 cols su mobile, 6 su tablet, 4 su desktop
                        <div
                            key={act.id}
                            className="col-12 col-md-6 col-lg-4">
                            {/* Card Bootstrap con altezza al 100% */}
                            <div className="card h-100">
                                {/* Contenitore dell'immagine */}
                                <div className="act-image">
                                    <img
                                        src={act.image}
                                        className='card-img-top'
                                        alt={act.name}
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                </div>
                                {/* Corpo della card con layout flex column */}
                                <div className="card-body d-flex flex-column">
                                    {/* Titolo della card con il nome dell'attrice */}
                                    <h5 className="card-title">{act.name}</h5>
                                    {/* Contenitore per le informazioni dell'attrice */}
                                    <div className="card-text">
                                        {/* Dettagli biografici */}
                                        <p><strong>Birth Year: </strong>{act.birth_year}</p>
                                        <p><strong>Nationality: </strong>{act.nationality}</p>
                                        <p className="biography"><strong>Biography: </strong>{act.biography}</p>
                                        <p><strong>Awards: </strong>{act.awards}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Actress    // Cambiato da Product a Actress
