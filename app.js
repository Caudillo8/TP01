import fs from "node:fs";
import http from "node:http";

const leer = () => {
  //const plantel = fs.readFileSync("./db.json", "utf-8");
  const plantel = JSON.parse(fs.readFileSync("./db.json"));
  //console.log(plantel);
  return plantel;
};
//leer();
//const miServidor = http.createServer();
//65000 puertos posibles

const miServidor = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json"); //INTERPRETAR JSON
  response.setHeader("Access-Control-Allow-Origin", "*"); //CORS

  const ruta_url = "/api/pepe";
  const metodo = "GET";

  if (request.url === ruta_url && request.method === metodo) {
    const seleccion_argentina = leer();
    console.log(seleccion_argentina);
    response.end(JSON.stringify(seleccion_argentina));
  } else {
    response.end(JSON.stringify({ error: "Ruta no encontrada" }));
  }
});
miServidor.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 30000");
});
