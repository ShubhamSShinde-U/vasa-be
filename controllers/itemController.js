const Item = require("../models/itemModel");

exports.createItem = async (req, res) => {
  try {    
    const item = new Item({ ...req.body});
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error creating item", error });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ createdBy: req.user.id });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
};
