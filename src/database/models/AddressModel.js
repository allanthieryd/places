import mongoose from "mongoose";
import AddressSchema from "@/database/schemas/AddressSchema";

let AddressModel;

try {
  // Essayer de récupérer le modèle existant
  AddressModel = mongoose.model("Address");
} catch (e) {
  // Le modèle n'existe pas, créons-le
  const addressSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true,
      enum: ["Restaurant", "Musée", "Bar", "Parc"],
    },
    name: {
      type: String,
      required: true,
    },
    address: {
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
    // Champs spécifiques aux restaurants
    cuisineType: String,
    starRating: {
      type: Number,
      min: 1,
      max: 3,
    },
    averagePrice: {
      type: Number,
      min: 1,
      max: 5,
    },
    // Champs spécifiques aux musées
    artMovement: String,
    artType: String,
    freeOrPaid: {
      type: String,
      enum: ["Free", "Paid"],
    },
    price: Number,
    // Champs spécifiques aux bars
    barType: String,
    barAveragePrice: {
      type: Number,
      min: 1,
      max: 5,
    },
    // Champs spécifiques aux parcs
    parkType: String,
    publicOrPrivate: {
      type: String,
      enum: ["Public", "Private"],
    },
    parkFreeOrPaid: {
      type: String,
      enum: ["Free", "Paid"],
    },
    parkPrice: Number,
  });

  AddressModel = mongoose.model("Address", addressSchema);
}

export default AddressModel;
