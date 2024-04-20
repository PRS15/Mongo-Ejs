const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const Category = require('../models/category');

// Display list of all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().populate('categories');
    res.render('items/list', { items });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

// Display form to create a new item
router.get('/new', async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('items/new', { categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Error fetching categories');
  }
});

// Handle creating a new item
router.post('/', async (req, res) => {
  try {
    const { name, description, categoryIds } = req.body;

    const newItem = new Item({ name, description });

    if (categoryIds && Array.isArray(categoryIds)) {
      newItem.categories = categoryIds;
    }

    await newItem.save();
    res.redirect('/items');
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).send('Error creating item');
  }
});

// Display form to edit an item
router.get('/:id/edit', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('categories');
    const categories = await Category.find();
    res.render('items/edit', { item, categories });
  } catch (error) {
    console.error('Error fetching item for edit:', error);
    res.status(500).send('Error fetching item for edit');
  }
});

// Handle updating an item
router.post('/:id', async (req, res) => {
  try {
    const { name, description, categoryIds } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, categories: categoryIds },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).send('Item not found');
    }

    res.redirect('/items');
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).send('Error updating item');
  }
});

// Handle deleting an item
router.post('/:id/delete', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).send('Item not found');
    }
    res.redirect('/items');
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).send('Error deleting item');
  }
});

module.exports = router;
