import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate, useParams } from "react-router-dom";


export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    const result = store.users.filter((user) => user.id == params.idContact);
    const currentContact = result[0]

    const [form, setForm] = useState({
        full_name: currentContact.full_name,
        email: currentContact.email,
        agenda_slug: "agenda Gonzalo",
        address: currentContact.address,
        phone: currentContact.phone
    });

    const updateContact = (event) => {
        event.preventDefault();
        const newContact = {
            full_name: form.full_name,
            email: form.email,
            agenda_slug: "agenda Gonzalo",
            address: form.address,
            phone: form.phone
        }
        actions.updateContact(params.idContact, newContact);
        navigate("/");
    }

    const cancelUpdate = () => {
        navigate("/");
    }


    const onChangeName = (event) => {
        setForm((currentState) => {
            return { ...currentState, full_name: event.target.value }
        })
    };

    const onChangeEmail = (event) => {
        setForm((currentState) => {
            return { ...currentState, email: event.target.value }
        })
    };

    const onChangeAddress = (event) => {
        setForm((currentState) => {
            return { ...currentState, address: event.target.value }
        })
    };

    const onChangePhone = (event) => {
        setForm((currentState) => {
            return { ...currentState, phone: event.target.value }
        })
    };


    return (
        <div className="container">
            <h1 className="text-center p-5 mb-0">Edit Contact <i className="fas fa-edit ms-2"></i></h1>
            <form className="p-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input name="name" type="text" onChange={onChangeName} value={form.full_name} className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" type="email" onChange={onChangeEmail} value={form.email} className="form-control" aria-describedby="emailHelp" placeholder="Enter Mail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input name="phone" type="text" onChange={onChangePhone} value={form.phone} className="form-control" placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input name="address" type="text" onChange={onChangeAddress} value={form.address} className="form-control" placeholder="Enter Address" />
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary me-3" onClick={updateContact} type="button">Save</button>
                    <button className="btn btn-danger" onClick={cancelUpdate} type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
};