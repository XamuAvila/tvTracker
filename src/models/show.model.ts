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
});

const showModel = model<Show & Document>('Show', showSchema);

export default showModel;
