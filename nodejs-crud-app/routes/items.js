const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Display list of all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.render('items/list', { items });
});

// Display form to create a new item
router.get('/new', (req, res) => {
  res.render('items/new');
});

// Handle creating a new item
router.post('/', async (req, res) => {
  await Item.create(req.body);
  res.redirect('/items');
});

// Display form to edit an item
router.get('/:id/edit', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('items/edit', { item });
});

// Handle updating an item
router.post('/:id', async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/items');
});

// Handle deleting an item
router.post('/:id/delete', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/items');
});

module.exports = router;
