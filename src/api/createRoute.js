import mongoose from "mongoose"
import AddressModel from "@/database/models/AddressModel"

export const createRoute = async (req, res) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const addresses = await AddressModel.find()

    res.json(addresses)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  } finally {
    await mongoose.disconnect()
  }
}
