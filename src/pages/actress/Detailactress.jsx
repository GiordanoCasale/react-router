import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import axios from 'axios'

const Detailactress = () => {
    const { id } = useParams();
    const [actress, setActress] = useState(null);

    useEffect(() => {
        // Aggiungiamo console.log per debug
        console.log("ID ricevuto:", id);

        axios.get(`https://lanciweb.github.io/demo/api/actresses`)
            .then(response => {
                console.log("Dati ricevuti:", response.data);
                const foundActress = response.data.find(a => a.id === parseInt(id));
                console.log("Attrice trovata:", foundActress);
                setActress(foundActress);
            })
            .catch(error => console.error("Error fetching actress:", error));
    }, [id]);

    // Aggiungiamo un loading state
    if (!actress) return <div className="container mt-4">Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={actress.image}
                                className="img-fluid rounded-start"
                                alt={actress.name}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{actress.name}</h2>
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

export default Detailactress
