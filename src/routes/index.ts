import express from "express";
import { CalculadoraService } from "../services/CalculadoraService";
import { CalculadoraController } from "../controllers/CalculadoraController";

const router = express.Router();

const calculadoraService = new CalculadoraService();
const calculadoraController = new CalculadoraController(calculadoraService);

router.get("/calcular-dividendos", (req, res) => {
  res.render("index", { resultado: null, erros: null });
});

router.post("/calcular-dividendos", (req, res) =>
  calculadoraController.calcularDividendos(req, res)
);

export default router;
