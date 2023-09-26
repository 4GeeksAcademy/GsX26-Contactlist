import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
//import Modal from '../components/Modal';
import { Context } from '../store/appContext.jsx';

export default Contacts = () => {
	
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">Add new contact</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						
					</ul>
				</div>
			</div>
			
		</div>
		);
	}