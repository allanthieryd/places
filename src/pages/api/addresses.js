import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

const handler = createRoute(async (req, res) => {
  // GET /addresses -> read resource collection
  if (req.method === "GET") {
    const addresses = await AddressModel.find()
    res.send(addresses)
    
    return
  }

  // POST /addresses -> create resource
  if (req.method === "POST") {
    const { name, street, city, country, type, ...rest } = req.body
    const newAddress = new AddressModel({
      name,
      street,
      city,
      country,
      type,
      ...rest
    })

    await newAddress.save()

    res.send(newAddress)
  }
})

export default handler
