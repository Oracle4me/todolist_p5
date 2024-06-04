const List = require('../models/to-do-list-model')


const getAllList = async (req, res) => {
  try {
    const list = await List.find()
    res.status(200).json(list)
  } catch (err) {
    console.log(err)
    res.status(400).send({ "msg": "Error Status" })
  }
}

const getListId = async (req, res) => {
  try {
    const list = req.params.id
    const listId = await List.findById(list)
    res.status(201).json(listId)
  } catch (err) {
    console.log(err)
    res.status(400).send({ "msg": "Error Status" })
  }
}

const createList = async (req, res) => {
  try {
    const { title, description } = req.body;

    let createList;

    while (true) {
      try {
        createList = await List.create({
          title,
          description,
        });

        // Jika berhasil membuat list, keluar dari loop
        break;
      } catch (err) {
        // Jika terjadi kesalahan, cek apakah kesalahan disebabkan oleh duplikasi
        if (err.name === 'SequelizeUniqueConstraintError') {
          // Jika ya, coba membuat list lagi
          continue;
        } else {
          // Jika kesalahan bukan karena duplikasi, lempar kesalahan
          throw err;
        }
      }
    }

    res.status(201).json(createList);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error Status' });
  }
};

const updateList = async (req, res) => {
  try {
    const listIdUpdate = req.params.id
    const updateList = await List.findByIdAndUpdate(listIdUpdate, req.body, { new: true })
    res.status(200).json(updateList)
  } catch (err) {
    res.status(400).send({ "msg": "Error Response" })
  }
}

const deleteList = async (req, res) => {
  try {
    const listId = req.params.id
    const deleteList = await List.findByIdAndDelete(listId)
    res.status(200).json(deleteList)
  } catch (err) {
    res.status(400).send({ "Msg": err })
  }
}

module.exports = {
  getAllList,
  getListId,
  createList,
  updateList,
  deleteList
}