import { createSlice } from "@reduxjs/toolkit";


const initialState = {
       items: [
	{
	  "id": "id-1",
	  "name": "Rosie Simpson",
	  "number": "459-12-56"
	},
	{
	  "id": "id-2",
	  "name": "Hermione Kline",
	  "number": "443-89-12"
	},
	{
	  "id": "id-3",
	  "name": "Eden Clements",
	  "number": "645-17-79"
	},
	{
	  "id": "id-4",
	  "name": "Annie Copeland",
	  "number": "227-91-26"
	}
  ]
}


export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);      
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload)
    }
  }
});

export const selectContacts = state => state.contacts.items;
export const contactReducer = contactSlice.reducer;
export const {addContact, deleteContact} = contactSlice.actions;