import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    city: { type: String, required: true },
    state: { type: String, required: true },
    yearBuilt: { type: Number, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    squareFoot: { type: Number, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    pictures: [{ type: String }]
  },
  {
    timestamps: true, toJSON: { virtuals: true }
  }
)