// Importazione degli hooks necessari da React
import React, { useState, useEffect } from 'react'
// Importazione dell'hook useParams per accedere ai parametri dell'URL
import { useParams } from 'react-router-dom'
// Importazione del componente Navbar
import Navbar from '../../components/Navbar'
// Importazione di axios per le chiamate HTTP
import axios from 'axios'

// Componente per visualizzare i dettagli di una singola attrice
const Detailactress = () => {
    // Estrazione dell'id dai parametri dell'URL
    const { id } = useParams();
    // State per memorizzare i dati dell'attrice
    const [actress, setActress] = useState(null);

    // Effect hook per recuperare i dati dell'attrice quando l'id cambia
    useEffect(() => {
        // Log per debug dell'ID ricevuto
        console.log("ID ricevuto:", id);

        // Chiamata API per recuperare tutte le attrici
        axios.get(`https://lanciweb.github.io/demo/api/actresses`)
            .then(response => {
                // Log dei dati ricevuti per debug
                console.log("Dati ricevuti:", response.data);
                // Ricerca dell'attrice specifica tramite ID
                const foundActress = response.data.find(a => a.id === parseInt(id));
                // Log dell'attrice trovata per debug
                console.log("Attrice trovata:", foundActress);
                // Aggiornamento dello state con i dati dell'attrice
                setActress(foundActress);
            })
            .catch(error => console.error("Error fetching actress:", error));
    }, [id]); // Dipendenza dall'id per rieseguire l'effect quando cambia

    // Rendering del componente di loading quando i dati non sono ancora disponibili
    if (!actress) return <div className="container mt-4">Loading...</div>;

    // Rendering principale del componente
    return (
        <>
            {/* Componente Navbar per la navigazione */}
            <Navbar />

            {/* Container principale con margine superiore */}
            <div className="container mt-4">
                {/* Card Bootstrap per i dettagli dell'attrice */}
                <div className="card">
                    {/* Layout a griglia senza gap */}
                    <div className="row g-0">
                        {/* Colonna per l'immagine */}
                        <div className="col-md-4">
                            <img
                                src={actress.image}
                                className="img-fluid rounded-start" // Immagine responsive con angolo arrotondato
                                alt={actress.name}
                            />
                        </div>
                        {/* Colonna per i dettagli testuali */}
                        <div className="col-md-8">
                            {/* Corpo della card con i dettagli */}
                            <div className="card-body">
                                {/* Titolo con il nome dell'attrice */}
                                <h2 className="card-title">{actress.name}</h2>
                                {/* Dettagli biografici */}
                                <p className="card-text">
                                    <strong>Birth Year:</strong> {actress.birth_year}
                                </p>
                                <p className="card-text">
                                    <strong>Nationality:</strong> {actress.nationality}
                                </p>
                                <p className="card-text">
                                    <strong>Biography:</strong> {actress.biography}
                                </p>
                                <p className="card-text">
                                    <strong>Awards:</strong> {actress.awards}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Esportazione del componente
export default Detailactress