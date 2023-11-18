const Contact = require('../models/Contact');
const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getContacts();
    res.render('index', {contacts: contacts});
    // TODO: load index page


  },
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let age = req.body.age;
    let contact = new Contact(name, number, age);
    // TODO: add a phonebook object to the array
    res.redirect('/');

    phonebook.addContact(contact);
  }
}