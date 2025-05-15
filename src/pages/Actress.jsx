import React from 'react'
import Navbar from '../components/Navbar'  // Componente di navigazione
import axios from 'axios'  // Libreria per le chiamate HTTP
import { useState, useEffect } from 'react'  // Hooks di React

// Componente principale Actress
const Actress = () => {
    // State per memorizzare l'array delle attrici
    const [actresses, setActresses] = useState([]);

    // Funzione per recuperare i dati delle attrici dall'API
    const getActresses = () => {
        axios.get("https://lanciweb.github.io/demo/api/actresses")
            .then((resp) => {
                console.log(resp.data);  // Log dei dati ricevuti
                setActresses(resp.data);  // Aggiornamento dello state
            })
            .catch(error => {
                console.error("Error fetching data:", error);  // Gestione degli errori
            });
    };

    // Effect hook per chiamare getActresses al mount del componente
    useEffect(() => {
        getActresses();
    }, []);

    return (
        <>
            {/* Inclusione della navbar */}
            <Navbar />

            {/* Container principale con margine superiore */}
            <div className="container mt-4">
                {/* Sezione del titolo */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1>Lista Attrici</h1>
                    </div>
                </div>

                {/* Griglia per le card con spacing tra le righe */}
                <div className="row g-3">
                    {/* Iterazione dell'array actresses per creare una card per ogni attrice */}
                    {actresses.map((act) => (
                        // Layout responsive per ogni card
                        <div
                            key={act.id}
                            className="col-12 col-md-6 col-lg-4">
                            {/* Card Bootstrap con altezza uniforme */}
                            <div className="card h-100">
                                {/* Sezione immagine */}
                                <div className="act-image">
                                    <img
                                        src={act.image}
                                        className='card-img-top'
                                        alt={act.name}
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                </div>
                                {/* Sezione informazioni */}
                                <div className="card-body d-flex flex-column">
                                    {/* Nome dell'attrice */}
                                    <h5 className="card-title">{act.name}</h5>
                                    {/* Dettagli biografici */}
                                    <div className="card-text">
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

export default Actress
