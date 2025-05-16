// Importazione di React per la creazione di componenti
import React from 'react'
// Importazione del componente Navbar dal percorso relativo
import Navbar from '../../components/Navbar'
// Importazione di axios per le chiamate HTTP
import axios from 'axios'
// Importazione degli hooks useState e useEffect da React
import { useState, useEffect } from 'react'
// Importazione del componente Link da react-router-dom per la navigazione
import { Link } from 'react-router-dom'

// Definizione del componente funzionale Actress
const Actress = () => {
    // Inizializzazione dello state actresses come array vuoto
    const [actresses, setActresses] = useState([]);

    // Funzione per recuperare i dati delle attrici dall'API
    const getActresses = () => {
        // Chiamata GET all'endpoint delle attrici
        axios.get("https://lanciweb.github.io/demo/api/actresses")
            .then((resp) => {
                // Log dei dati ricevuti per debug
                console.log(resp.data);
                // Aggiornamento dello state con i dati ricevuti
                setActresses(resp.data);
            })
            .catch(error => {
                // Gestione degli errori con log in console
                console.error("Error fetching data:", error);
            });
    };

    // Effect hook che viene eseguito solo al mount del componente
    useEffect(() => {
        getActresses();
    }, []); // Array di dipendenze vuoto per esecuzione singola

    // Rendering del componente
    return (
        <>
            {/* Navbar per la navigazione del sito */}
            <Navbar />

            {/* Container principale con spaziatura superiore */}
            <div className="container mt-4">
                {/* Riga per l'header con il titolo */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1>Lista Attrici</h1>
                    </div>
                </div>

                {/* Griglia responsive con gap tra le righe */}
                <div className="row g-3">
                    {/* Mappatura dell'array actresses per creare le card */}
                    {actresses.map((act) => (
                        // Contenitore della card con responsive breakpoints
                        <div
                            key={act.id} // Key univoca per React
                            className="col-12 col-md-6 col-lg-4" // 1 colonna mobile, 2 tablet, 3 desktop
                        >
                            {/* Link alla pagina di dettaglio con ID dinamico */}
                            <Link
                                to={`/actress/${act.id}`} // URL parametrico con ID
                                className="text-decoration-none" // Rimuove sottolineatura link
                            >
                                {/* Card Bootstrap con altezza 100% */}
                                <div className="card h-100">
                                    {/* Contenitore immagine */}
                                    <div className="act-image">
                                        <img
                                            src={act.image} // URL immagine
                                            className="card-img-top" // Stile immagine card
                                            alt={act.name} // Testo alternativo
                                            style={{
                                                height: '300px', // Altezza fissa
                                                objectFit: 'cover' // Mantiene proporzioni
                                            }}
                                        />
                                    </div>
                                    {/* Body della card con layout flex */}
                                    <div className="card-body d-flex flex-column">
                                        {/* Titolo della card */}
                                        <h5 className="card-title">{act.name}</h5>
                                        {/* Contenuto testuale */}
                                        <div className="card-text">
                                            <p><strong>Birth Year: </strong>{act.birth_year}</p>
                                            <p><strong>Nationality: </strong>{act.nationality}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// Esportazione del componente per l'uso in altri file
export default Actress