import { Schema } from "mongoose"

export const addressSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["Restaurant", "Musée", "Bar", "Parc"],
  },
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  cuisineType: {
    type: String,
  },
  restaurantAveragePrice: {
    type: Number,
  },
  starRating: {
    type: Number,
  },
  artMovement: {
    type: String,
  },
  artType: {
    type: String,
  },
  museumFreeOrPaid: {
    type: String,
  },
  museumPrice: {
    type: Number,
  },
  barType: {
    type: String,
  },
  barAveragePrice: {
    type: Number,
  },
  parcType: {
    type: String,
  },
  publicOrPrivate: {
    type: String,
  },
  parcFreeOrPaid: {
    type: String,
  },
  parcPrice: {
    type: Number,
  },
})
