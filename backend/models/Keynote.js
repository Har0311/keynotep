import mongoose from "mongoose";

//defining the schema
const KeynotesSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  para: { type: String, required: true, trim: true },
});

//compiling the schema
const keynotesModel = mongoose.model("keynotes", KeynotesSchema);

export { keynotesModel };
