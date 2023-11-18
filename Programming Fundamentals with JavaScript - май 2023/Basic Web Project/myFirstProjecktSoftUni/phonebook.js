/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

let contacts = [];

function getContacts() {
	return contacts.slice();
}

function addContact(contact) {
	contacts.push(contact);
}

module.exports = {
	getContacts,
	addContact,
}