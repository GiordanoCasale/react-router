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
            {/* Container principale con padding verticale (py-5) e sfondo chiaro (bg-light) */}
            <div className="container py-5 bg-light">
                {/* Header section con margine inferiore ampio (mb-5) */}
                <div className="row mb-5">
                    <div className="col-12">
                        {/* Titolo centrato (text-center) in blu (text-primary) con margine sotto (mb-4) */}
                        <h1 className="text-center text-primary mb-4">Lista Attrici</h1>
                        {/* Linea divisoria al 50% della larghezza (w-50) e centrata (mx-auto) */}
                        <hr className="w-50 mx-auto" />
                    </div>
                </div>

                {/* Griglia con spaziatura tra le card aumentata (g-4) */}
                <div className="row g-4">
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
                                className="text-decoration-none text-dark" // Rimuove sottolineatura link
                            >
                                {/* Card Bootstrap con altezza 100% e ombra leggera */}
                                <div className="card h-100 shadow-sm">
                                    {/* Contenitore immagine con posizionamento relativo per eventuali overlay */}
                                    <div className="position-relative">
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
                                    {/* Body della card con layout flex e padding aumentato */}
                                    <div className="card-body d-flex flex-column p-4">
                                        {/* Titolo della card in blu con margine sotto */}
                                        <h5 className="card-title text-primary mb-3">{act.name}</h5>
                                        {/* Contenuto testuale */}
                                        <div className="card-text">
                                            {/* Paragrafi con margine inferiore per spaziatura */}
                                            <p className="mb-2">
                                                {/* Testo in grassetto per le etichette */}
                                                <span className="fw-bold">Anno di nascita: </span>
                                                {act.birth_year}
                                            </p>
                                            <p className="mb-0">
                                                <span className="fw-bold">Nazionalità: </span>
                                                {act.nationality}
                                            </p>
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