const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'CI/CD funcionando correctamente' , 
    servicio:'API Express desplegada en vercel'});
});

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.status(200).json({ message: `¡Hola, ${nombre}!`,
  estado:'API disponible' });
});

app.get('/suma', (req, res) => {
  const num1  = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  if(Number.isNaN(num1) || Number.isNaN(num2)){
    return res.status(400).json({ error: 'Los parámetros num1 y num2 deben ser números válidos' });
  }
  
  res.status(200).json({num1, num2, resultado: num1 + num2 });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});