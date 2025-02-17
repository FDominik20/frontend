import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ChessList = () => {
    const [chesses, setChesses] = useState([]);
    const [isPending, setPending] =useState(false);

    useEffect(() => { // fetch-api átírása axios-ra!
        setPending(true);
        axios.get('https://chess.sulla.hu/chess')
        .then(valasz => setChesses(valasz.data))
        .catch(hiba => console.log(hiba))
        .finally(() => setPending(false));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Sakkozók</h2>
        {isPending ? (<div className="spinner-border"></div>) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {chesses.map((chess, index) => (
                    <div className="col" key={index}>
                    <div className="card h-100">
                    <p className="text-dark text-center">Sakkozó neve: {chess.name}</p>
                    <p className="text-dark text-center">Születési éve: {chess.birth_date}</p>
                    <p className="text-dark text-center">Megnyert világbajnokságai: {chess.world_ch_won}</p>
                    <div className="card-body d-flex flex-column align-items-center">
                        <Link to={chess.profile_url} className="fs-5" target="_blank">Profil link</Link><br />
                        <Link key={chess.id} to={"/chess/" + chess.id}><img src={chess.image_url ? chess.image_url : 
                            "https://via.placeholder.com/400x800"} alt={chess.name} 
                            className="img-fluid" style={{width: "200px"}}/></Link>
                       </div>
                       <div className="text-center">
                       <Link to={"/chess/" + chess.id}><i className="bi bi-text-paragraph fs-3"></i></Link>&nbsp;&nbsp;&nbsp;
                        <Link to={"/mod-chess/" + chess.id}><i className="bi bi-pencil-square fs-3"></i></Link>&nbsp;&nbsp;&nbsp;
                        <Link to={"/del-chess/"+ chess.id}><i className="bi bi-trash3 fs-3"></i></Link>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        )}
        </div>
    );
};