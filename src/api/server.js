import express from "express"
import { createRoute } from "./createRoute"

const app = express()
const PORT = 3000

app.get("/api/addresses", createRoute)

app.listen(PORT)