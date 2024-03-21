import { Request, Response } from "express";
import { CalculadoraService } from "../services/calculadora-service";

export class CalculadoraController {
  private calculadoraService: CalculadoraService;

  constructor(calculadoraService: CalculadoraService) {
    this.calculadoraService = calculadoraService;
  }
  public calcularDividendos(req: Request, res: Response) {
    const erros = [];
    const { valor, tempo } = req.body;

    if (isNaN(valor) || valor < 1) {
      erros.push("Valor inválido");
    }
    if (isNaN(tempo)) {
      erros.push("Tempo inválido");
    }
    if (tempo < 1) {
      erros.push("Tempo deve ser de pelo menos 1 mês");
    }

    if (erros.length > 0) {
      return res.status(400).json({ erros });
    }

    const resultado = this.calculadoraService.calcularDividendos(
      parseFloat(valor),
      parseInt(tempo)
    );
    res.json({ resultado });
  }
}
