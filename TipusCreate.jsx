import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const TipusCreate = () => {
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új típus</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = {
                        megnevezes: event.target.megnevezes.value,
                        leiras: event.target.leiras.value,
                        kepek: event.target.kepek.value,
                    };
                    axios.post("https://localhost:5001/api/UjTipusok", formData, {
                        headers: { 'Content-Type' : 'application/json' },
                    })
                    .then(() => navigate("/"))
                    .catch((error) => console.error("Hiba történt:", error));
                }}
            >
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Megnevezés:</label>
                    <div className="col-sm-9">
                        <input type="text" name="megnevezes" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Leírás:</label>
                    <div className="col-sm-9">
                        <textarea name="leiras" className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div className="col-sm-9">
                        <input type="text" name="kepek" className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
};
