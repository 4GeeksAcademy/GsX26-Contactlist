import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const AddContact = () => {

	const { store, actions } = useContext(Context);

	const [form, setForm] = useState({
		email: "",
		full_name: "",
		phone: "",
		address: "",
		agenda_slug: "Gonzalo"
	})

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

    const addContact = () => {
        console.log('Ejecuto Bton');
        const user = form;
        actions.addContact(user);
    }


    return (
        <div className="container">
            <div className="p-3 d-flex justify-content-end">
                <Link to="/">
                    <span className="btn btn-warning me-3" href="#" role="button">
                        Contact 
                    </span>
                </Link>
            </div>
            <h1 className="text-center p-5 mb-0">Add New Contact</h1>
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
                <div className="d-grid gap-2">
                    <Link to="/">
                        <button className="btn btn-primary" onClick={addContact} type="button">Save</button>
                        <p>or get back to contacts</p>
                    </Link>
                </div>
            </form>
        </div>
    )
};