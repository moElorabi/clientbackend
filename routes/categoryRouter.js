const router = require("express").Router();
const Category = require("../models/categoryModel");

router.post("/category", async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) return res.status(400).json({ message: "It´s required" });
    if (name.lenght < 3)
      return res
        .status(400)
        .json({ message: "It must be more than 3 characters" });

    const newCategory = new Category({
      name,
    });

    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/category", async (req, res) => {
  try {
    const category = await Category.find();

    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
