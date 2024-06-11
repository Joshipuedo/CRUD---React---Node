import express from "express";
import Item from "../models/itemModel.js";

const router = express.Router();

//Create
router.post('/items', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update
router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedItem) {
            return res.status(404).send();
        }
        res.status(200).send(updatedItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete
router.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).send();
        }
        res.status(200).send({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;