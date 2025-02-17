import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const TipusSingle = () => {
    const { tipusId } = useParams();
    const [tipus, setTipus] = useState(null);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get(`https://localhost:5001/api/Tipusok/${tipusId}`)
            .then(response => setTipus(response.data))
            .catch(error => console.log(error))
            .finally(() => setPending(false));
    }, [tipusId]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Eszköz</h2>
            {isPending || !tipus ? (<div className="spinner-border"></div>) : (
                <div className="row row-cols-2 justify-content-center align-items-center">
                    <div className="col">
                        <div className="card h-250">
                            <h3 className="text-dark text-center">Megnevezés: {tipus.megnevezes}</h3>
                            <p className="text-dark text-center">Leírás: {tipus.leiras}</p>
                            <div className="card-body d-flex flex-column align-items-center">
                                <img src={tipus.kepek || "https://via.placeholder.com/400x800"} alt={tipus.megnevezes} className="img-fluid" style={{ width: "200px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
