// Importar os módulos necessários
import express from "express";
import path from "path";
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(express.json());

// Rota do BFF para calcular dividendos
app.get("/bff", async (req, res) => {
  res.json("BFF está funcionando!");
});
// try {
//   // Extrair os parâmetros da requisição
//   const { valor, tempo } = req.query;

//   // Fazer uma requisição para a API que calcula os dividendos
//   const response = await axios.get(
//     "http://localhost:3000/calcular-dividendos",
//     {
//       params: {
//         valor,
//         tempo,
//       },
//     }
//   );

// Retornar a resposta da API para o frontend
//     res.json(response.data);
//   } catch (error) {
//     // Se ocorrer um erro, retornar um status de erro
//     console.error("Erro ao calcular dividendos:", error);
//     res.status(500).json({ error: "Erro ao calcular dividendos" });
//   }
// });

// Iniciar o servidor
app.listen(port, () => {
  console.log(`BFF está rodando em http://localhost:${port}`);
});
