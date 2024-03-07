import mongoose from "mongoose";
import AddressModel from "@/database/models/AddressModel";

export const createRoute = (handle) => async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");

    // Récupérez les adresses depuis la base de données
    const addresses = await AddressModel.find();

    await handle(req, res, { addresses });
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Assurez-vous de déconnecter mongoose après utilisation
    await mongoose.disconnect();
  }
};
