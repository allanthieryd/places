import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

const handler = createRoute(async (req, res) => {
  const { addressId } = req.query
  const address = await AddressModel.findById(addressId)

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
    const { name, street, city, postalCode, type, isDone } = req.body

    Object.assign(address, {
      name: name || address.name,
      street: street || address.street,
      city: city || address.city,
      postalCode: postalCode || address.postalCode,
      type: type || address.type,
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