const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/api/produtos", (req, res) => {
  res.json([
    {
      nome: "Gloss Kiko",
      preco: 89.99,
      imagem: "assets/gloss kiko.webp",
    },
    {
      nome: "Base Liquida Kiko",
      preco: 195.5,
      imagem: "assets/base kiko.webp",
    },
    {
      nome: "Máscara de Cílios Kiko",
      preco: 77.92,
      imagem: "assets/rimel kiko.webp",
    },
    {
      nome: "Spray Fixador Kiko",
      preco: 65.93,
      imagem: "assets/fixador.webp",
    },
    {
      nome: "Batom MAC",
      preco: 139.9,
      imagem: "assets/batom.webp",
    },
    {
      nome: "Blush Benefit",
      preco: 139.0,
      imagem: "assets/base kiko.webp",
    },
    {
      nome: "Paleta Naked Urban Decay",
      preco: 399.9,
      imagem: "assets/paleta.jpg",
    },
    {
      nome: "Pinceis Real Techniques",
      preco: 350.9,
      imagem: "assets/pinceis.png",
    },
    {
      nome: "Delineador Kiko azul",
      preco: 159.9,
      imagem: "assets/delineador.webp",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
