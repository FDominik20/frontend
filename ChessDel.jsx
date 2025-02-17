import React, { useEffect, useState} from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';

export const ChessDel =() => {
    const params = useParams();
    const id = params.chessId;
    const navigate = useNavigate();
    const [chess, setChess] = useState([]);
    useEffect(() =>{
        (async () =>{
            try {
                const res = await fetch(`https://chess.sulla.hu/chess/${id}`)
                const chess = await res.json();
                setChess(chess);
            }
            catch(error) {
                console.log("Hiba: ", error);
            }
        })();
    }, [id]);
    return (
        <div className="container mt-5">
            <div className="row row-cols-2 justify-content-center align-items-center">
                    <div className="col">
                    <div className="card h-250">
                    <h3 className="text-dark text-center">Törlendő sakkozó neve: {chess.name}</h3>
                    <h4 className="text-dark text-center">Születési éve: {chess.birth_date}</h4>
                    <h4 className="text-dark text-center">Megnyert világbajnokságai: {chess.world_ch_won}</h4>
                    <div className="card-body d-flex flex-column align-items-center">
                        <Link to={chess.profile_url} className="fs-5" target="_blank">Profil link</Link><br />
                        <img src={chess.image_url ? chess.image_url : 
                            "https://via.placeholder.com/400x800"} alt={chess.name} 
                            className="img-fluid" style={{width: "200px"}}/>
                       </div>
                    </div>
                    <form onSubmit={(event) =>{
                        event.preventDefault();
                        fetch(`https://chess.sulla.hu/chess/${id}`, {
                            method: "DELETE",
                        })
                        .then(() => {
                            navigate("/");
                        })
                        .catch(console.log);
                    }}>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <button className="bi bi-trash3 fs-6 btn btn-primary" type="submit">Törlés</button></div>                        
                    </form>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <Link to="/"><i className="bi bi-backspace-fill fs-6">Vissza</i></Link>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
            </div>
        </div>
    );
}