import { expect, test, describe } from "@jest/globals";
import { CalculadoraService } from "../services/calculadora-service";

describe("CalculadoraService", () => {
  let calculadoraService;

  beforeEach(() => {
    calculadoraService = new CalculadoraService();
  });

  test("deve calcular o valor corretamente", () => {
    const resultado = calculadoraService.calcularDividendos(100, 10);
    expect(resultado).toBe(100.1);
  });

  test("deve calcular o valor em float corretamente", () => {
    const resultado = calculadoraService.calcularDividendos(100.5, 10);
    expect(resultado).toBe(100.6);
  });
});
