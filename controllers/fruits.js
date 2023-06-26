const model = require("../models/fruits");
const Fruit = model.Fruit;

// create
exports.create = async (req, res) => {
  try {
    const fruit = new Fruit(req.body);
    await fruit.save();
    res.status(201).json(fruit);
  } catch (err) {
    res.status(401).json(err);
  }
};

// read
exports.getAll = async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.status(201).json(fruits);
  } catch (err) {
    res.status(401).json(err);
  }
};
exports.get = async (req, res) => {
  const id = req.params.id;
  try {
    const fruit = await Fruit.findById(id);
    res.status(201).json(fruit);
  } catch (err) {
    res.status(401).json(err);
  }
};

// update

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Fruit.findOneAndReplace({ _id: id }, req.body, {
      new: true,
      upsert: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(401).json(err);
  }
};
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Fruit.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      upsert: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(401).json(err);
  }
};
// delete
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Fruit.findByIdAndDelete(id);
    res.status(201).json(doc);
  } catch (err) {
    res.status(401).json(err);
  }
};
