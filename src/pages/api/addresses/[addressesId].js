import { createRoute } from "@/api/createRoute"
import { AdressModel } from "@/database/models/AdressModel"

const handler = createRoute(async (req, res) => {
  const { addressId } = req.query
  const address = await AdressModel.findById(addressId)

  if (!address) {
    res.status(404).send({ error: "not found" })

    return
  }

  // GET /address/[addressId] -> read resource item
  if (req.method === "GET") {
    res.send(address)

    return
  }

  // PATCH /address/[addressId] -> update resource item
  if (req.method === "PATCH") {
    const { description, category, isDone } = req.body

    Object.assign(address, {
      description: description || address.description,
      category: category || address.category,
      isDone: isDone ?? address.isDone,
    })

    await address.save()

    res.send(address)

    return
  }

  // DELETE /address/[addressId] -> delete resource item
  if (req.method === "DELETE") {
    await address.deleteOne()

    res.send(address)
  }
})

export default handler
