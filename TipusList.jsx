import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const TipusList = () => {
    const [tipusok, setTipusok] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get('https://localhost:5001/api/Tipusok')
        .then(response => setTipusok(response.data))
        .catch(error => console.log(error))
        .finally(() => setPending(false));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Eszközök</h2>
            {isPending ? (<div className="spinner-border"></div>) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {tipusok.map((tipus, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100">
                                <p className="text-dark text-center">Megnevezés: {tipus.megnevezes}</p>
                                <p className="text-dark text-center">Leírás: {tipus.leiras}</p>
                                <div className="card-body d-flex flex-column align-items-center">
                                    <img src={tipus.kepek || "https://via.placeholder.com/400x800"} alt={tipus.megnevezes} className="img-fluid" style={{ width: "200px" }} />
                                </div>
                                <div className="text-center">
                                    <Link to={`/tipus/${tipus.id}`}><i className="bi bi-text-paragraph fs-3"></i></Link>&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
