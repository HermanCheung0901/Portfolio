import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    note : String
})


const bookSchema = new mongoose.Schema(
  {
    coverURL: String,
    title: String,
    date_read: String,
    rate: String,
    OLID:String,
    review:String,
    notes:[noteSchema]
  },

);

export default mongoose.models.Book || mongoose.model("Book", bookSchema);