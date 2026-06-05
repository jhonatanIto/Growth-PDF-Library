import express from "express";
import "dotenv/config";
import { authRoute } from "./routes/authRoute.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo ao meu servidor nenem");
});
app.use("api/auth", authRoute);

app.listen(port, () => {
  console.log("SERVIDOR RODANDO NA PORTA", port);
});
