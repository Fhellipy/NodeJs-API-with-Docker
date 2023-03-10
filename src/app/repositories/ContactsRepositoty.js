const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Fhellipy",
    email: "fhellipy@gmail.com",
    phone: "123456789",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Pierre",
    email: "pierre@gmail.com",
    phone: "123456789",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Maria",
    email: "maria@gmail.com",
    phone: "123456789",
    category_id: v4(),
  },
];

class ContactsRepositoty {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepositoty();
