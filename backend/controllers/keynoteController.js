import { keynotesModel } from "../models/Keynote.js";

const getAllNotes = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const editNote = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const updateNoteById = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const deleteNoteById = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const createNote = async (req, res) => {
  console.log(req.body, "here")
  res.json("hii");
  // try {
  //   const { title, para } = req.body;

  //   const newkeynotesModel = new keynotesModel({
  //     title: title,
  //     para: para,
  //   });

  //   const result = await newkeynotesModel.save();
  //   console.log(result);

  //   // console.log("here");
  //   res.json({ message: "data fetched successfully...", status: "20" });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ message: "Internal Server Error", status: "50" });
  // }
};

export { createNote, editNote, updateNoteById, deleteNoteById, getAllNotes };
