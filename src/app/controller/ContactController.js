const ContactsRepository = require("../repositories/ContactsRepositoty");

class ContactController {
  // Lista todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  // Obter um registro
  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }

    response.json(contact);
  }

  // Criar novo registro
  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(404).json({ error: "Name is required" });
    }

    const contactExists = await ContactsRepository.findByEmail(email);
    if (contactExists) {
      return response
        .status(404)
        .json({ error: "This e-mail is already in use" });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.status(201).json(contact);
  }

  // Editar um registro
  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(404).json({ error: "Name is required" });
    }

    const contactExists = await ContactsRepository.findById(id);

    console.log("contactExists", contactExists);
    if (!contactExists) {
      return response.status(404).json({ error: "User not found" });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(404)
        .json({ error: "This e-mail is already in use" });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  // Deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContactController();
