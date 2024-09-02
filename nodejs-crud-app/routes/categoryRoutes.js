const express = require("express");
const router = express.Router();
const Category = require("../models/category");

// Display list of all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories/list", { categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Error fetching categories");
  }
});

// Display form to create a new category
router.get("/new", (req, res) => {
  res.render("categories/new");
});

// Handle creating a new category
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.redirect("/categories");
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send("Error creating category");
  }
});

// Display form to edit a category
router.get("/:id/edit", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.render("categories/edit", { category });
  } catch (error) {
    console.error("Error fetching category for edit:", error);
    res.status(500).send("Error fetching category for edit");
  }
});

// Handle updating a category
router.post("/:id", async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).send("Category not found");
    }
    res.redirect("/categories");
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).send("Error updating category");
  }
});

// Handle deleting a category
router.post("/:id/delete", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).send("Category not found");
    }
    res.redirect("/categories");
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).send("Error deleting category");
  }
});

module.exports = router;
