import React, { useContext } from "react";
import { CardContact } from "../component/CardContact.jsx";
import { Context } from "../store/appContext.js";
import { useActionData } from "react-router";
import { Link } from "react-router-dom";


export const Contact = () => {
    const { store, actions } = useContext(Context);
    actions.getUsers();

    return (
        <div className="container">
            <div className="p-3 d-flex justify-content-end">
                <Link to="/">
                    <span className="btn btn-warning me-3" href="#" role="button">
                        Contact
                    </span>
                </Link>
                <Link to="/add-contact">
                    <button className="btn btn-success">Add New Contact <i className="fas fa-user-plus ms-2"></i></button>
                </Link>
            </div>
            <div className="container">
                <ul>
                    {store.users.map((user) =>
                        <CardContact key={user.id} name={user.full_name} address={user.address} phone={user.phone} email={user.email} id={user.id} />
                    )}
                </ul>
            </div>
        </div>
    )
}