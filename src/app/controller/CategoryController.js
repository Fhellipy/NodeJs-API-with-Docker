const CategoriesRepository = require("../repositories/CategoriesRepository");
require("express-async-errors");

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;

    const categories = await CategoriesRepository.findAll(orderBy);

    response.send(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(404).json({ error: "Name is required" });
    }

    const categoryExists = await CategoriesRepository.findByName({ name });

    if (categoryExists) {
      return response
        .status(404)
        .json({ error: "This name is already in use" });
    }

    const category = await CategoriesRepository.create({ name });

    response.send(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
