import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { EditContact } from "../views/EditContact.jsx";


export const CardContact = (props) => {
    const { store, actions } = useContext(Context);

    const deleteContact = (id) => {
        actions.deleteContact(id);
    };


    return (
        <div className="p-2 m-2" style={{background: "#8e8e9c"}}>
            <div className="border rounded d-flex p-1 bg-white">
                <div className="p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="img-fluid rounded-start p-3 ms-4" style={{ width: "150px", height: "150px" }} alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="title">{props.name}</h5>
                    <p className="text-secondary"><i className="fas fa-map-marker-alt me-3 mt-2"></i>{props.address}</p>
                    <p className="text-secondary"><i className="fas fa-phone me-3"></i>{props.phone}</p>
                    <p className="text-secondary"><i className="fas fa-envelope me-3"></i>{props.email}</p>
                </div>
                <div className="m-3 p-2">
                    <Link to={`/edit-contact/${props.id}`}>
                        <button type="button" className="btn me-3"><i className="fas fa-pencil-alt"></i></button>
                    </Link>
                    <button type="button" onClick={() => deleteContact(props.id)} className="btn me-3"><i className="fas fa-trash-alt"></i></button>
                </div>
                
            </div>
        </div>
    );
};