const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users:[],
			demo: [
				{
					contact: "Arturo Rubio",
					agenda: "work",
					direction: "c/ Alcalá, 518",
					telephone: "655942588",
					email:"rarturo@hotmail.es"
				},
				{
					contact: "Oscar García",
					agenda: "work",
					direction: "av. América, 52",
					telephone: "699563287",
					email:"osga1@hotmail.es"
				},
				{
					contact: "Rafael Dominguez",
					agenda: "work",
					direction: "c/ oficios, 7",
					telephone: "666253124",
					email:"rafid@hotmail.es"
				}
			]
		},
		actions: {
			getUsers: async () => {
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/Gonzalo";
				const options = {
					method: "GET"
					
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ users: data });

				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			addContact: async (newUser) => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/';
				const options = {
					method: 'POST',
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(newUser)
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					getActions().getUsers();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},


			deleteContact: async (id) => {
                const url = 'https://playground.4geeks.com/apis/fake/contact/' + id;
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			updateContact: async (id, contact) => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/' + id;
				const options = {
					method: 'PUT',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					getActions().getUsers();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}

			},


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