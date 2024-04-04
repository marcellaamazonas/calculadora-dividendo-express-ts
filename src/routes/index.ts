import express from "express";
import { CalculadoraService } from "../services/calculadora-service";
import { CalculadoraController } from "../controllers/calculadora-controller";

const router = express.Router();

const calculadoraService = new CalculadoraService();
const calculadoraController = new CalculadoraController(calculadoraService);

router.post("/calcular-dividendos", (req, res) =>
  calculadoraController.calcularDividendos(req, res)
);

export default router;
