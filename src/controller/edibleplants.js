const { edibleplantmodel } = require("../models/models");

const postEdiblePlant = async (req, res) => {
  const { plant_id, name, description } = req.body;
  try {
    const postEdible = await edibleplantmodel.create({
      plant_id: plant_id,
      name: name,
      description: description,
    });
    return res.status(201).json({ success: true, message: "success", data: postEdible });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Post Edible Plant failed", serverMessage: error });
  }
};

const getEdiblePlant = async (req, res) => {
  try {
    const getEdible = await edibleplantmodel.findAll();
    return res.status(200).json({ success: true, message: "success", data: getEdible });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Get Edible Plant failed", serverMessage: error });
  }
};

const updateEdiblePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updateEdible = await edibleplantmodel.update({ name: name, description: description }, { where: { plant_id: id } });
    return res.status(200).json({ success: true, message: "success", data: updateEdible });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Update Edible Plant failed", serverMessage: error });
  }
};

const deleteEdiblePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEdible = await edibleplantmodel.destroy({ where: { id: id } });
    if (!deleteEdible) {
      return res.status(404).json({ success: false, message: "Edible Plant not found" });
    }
    return res.status(200).json({ success: true, message: "success", data: deleteEdible });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Delete Edible Plant failed", serverMessage: error });
  }
};

module.exports = { postEdiblePlant, getEdiblePlant, updateEdiblePlant, deleteEdiblePlant };
