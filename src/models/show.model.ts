import { Show } from "@/interfaces/show.interface";
import { Document, model, Schema } from "mongoose";

const showSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ['Terror', 'Comedy', 'Romance'],
    required: true
  }
});

const showModel = model<Show & Document>('Show', showSchema);

export default showModel;
