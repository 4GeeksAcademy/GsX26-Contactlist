import React from "react";
import { Link } from "react-router-dom";

export default AddContact= ()=> {
	
	
	
			return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input type="text" className="form-control" placeholder="Full Name" value={""} 
								/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" value={""}
								/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" className="form-control" placeholder="Enter phone" value={""}
								/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" placeholder="Enter address" value={""}
								/>
						</div>
						
						<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
					</form>
				</div>
			</div>
		);
	}