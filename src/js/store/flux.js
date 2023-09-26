const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			obtenerContactos: () => {
             fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
			 .then((response) => response.json())
			 .then((data) => setStore({contacts: data}))
			 .catch((error) => console.log(error));
			},
			añadirContacto: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/")
				method:"POST"
				headers: {
					"Content-Type": "application/json",
			},
			body: JSON.stringify({
				address: urlphoto,
				agenda_slug: "Gonzalo",
				email: email,
				full_name: name,
				phone: phone,
			  }),
		
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;