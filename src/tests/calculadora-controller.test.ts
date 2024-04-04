import { expect, test, describe } from "@jest/globals";
import request from "supertest";
import app from "../app";

describe("CalculadoraController", () => {
  test("deve calcular o valor corretamente", async () => {
    const { status, body } = await request(app)
      .post("/calcular-dividendos")
      .send({ valor: 100, tempo: 10 });

    expect(status).toBe(200);
    expect(body.resultado).toBe(100.1);
  });

  test("deve mostrar um erro quando o valor não for um número", async () => {
    const { status, body } = await request(app)
      .post("/calcular-dividendos")
      .send({ valor: "abcde", tempo: 10 });

    expect(status).toBe(400);
    expect(body.erros.length).toBe(1);

    const erroRetornado = body.erros[0];
    expect(erroRetornado).toBe("Valor inválido");
  });

  test("deve mostrar um erro quando o valor for menor que 1", async () => {
    const { status, body } = await request(app)
      .post("/calcular-dividendos")
      .send({ valor: 0, tempo: 10 });

    expect(status).toBe(400);
    expect(body.erros.length).toBe(1);

    const erroRetornado = body.erros[0];
    expect(erroRetornado).toBe("Valor inválido");
  });

  test("deve mostrar um erro quando o tempo não for um número", async () => {
    const { status, body } = await request(app)
      .post("/calcular-dividendos")
      .send({ valor: 100, tempo: "abcd" });

    expect(status).toBe(400);
    expect(body.erros.length).toBe(1);

    const erroRetornado = body.erros[0];
    expect(erroRetornado).toBe("Tempo inválido");
  });

  test("deve mostrar um erro quando o tempo for menor que 1", async () => {
    const { status, body } = await request(app)
      .post("/calcular-dividendos")
      .send({ valor: 100, tempo: 0 });

    expect(status).toBe(400);
    expect(body.erros.length).toBe(1);

    const erroRetornado = body.erros[0];
    expect(erroRetornado).toBe("Tempo deve ser de pelo menos 1 mês");
  });

  test("deve mostrar múltiplos erros quando o tempo e o valor forem inválidos", async () => {
    const { status, body } = await request(app)
      .post("/calcular-dividendos")
      .send({ valor: 0, tempo: 0 });

    expect(status).toBe(400);
    expect(body.erros.length).toBe(2);

    const [erroValor, erroTempo] = body.erros;

    expect(erroValor).toBe("Valor inválido");
    expect(erroTempo).toBe("Tempo deve ser de pelo menos 1 mês");
  });
});
