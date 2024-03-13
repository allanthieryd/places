import mongoose from "mongoose"
import AddressModel from "@/database/models/AddressModel"

export const createRoute = (handle) => async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // Récupérez les adresses depuis la base de données
    const addresses = await AddressModel.find()

    await handle(req, res, { addresses })
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  } finally {
    // Assurez-vous de déconnecter mongoose après utilisation
    await mongoose.disconnect()
  }
}
