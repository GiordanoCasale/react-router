import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Product = () => {
    const [product, setProduct] = useState([]);

    const getProduct = () => {
        axios.get("https://lanciweb.github.io/demo/api/actresses").then((resp) => {
            setProduct(resp.data)
        });
    };

    useEffect(() => {
        getProduct();
    }, []);



    return (
        <>
            <Navbar />
            {/* Container principale Bootstrap */}
            <div className="container">
                {/* Riga per il titolo */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1>Lista Attrici</h1>
                    </div>
                </div>
                {/* Griglia responsive per le card */}
                <div className="row g-3">
                    {/* Mapping dell'array delle attrici per creare le card */}
                    {product.map((act) => (
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

export default Product
