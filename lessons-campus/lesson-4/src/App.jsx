/*
Instrucciones Paso a Paso
Preparación del Entorno (con Vite):

Asegúrate de tener Node.js y npm (o yarn) instalados.
Crea un proyecto Vite:
npm init vite@latest explorador-espacial --template react
cd explorador-espacial
npm install
Componente Principal ("Panel de Control"):

Crea/modifica src/App.jsx (o el componente principal).

Importa los hooks:

import React, { useState, useEffect, useMemo } from 'react';
Estado:

distancia: Distancia (0).
combustible: Combustible (100).
estadoNave: Estado ("En órbita").
planetasVisitados: Array vacío.
Efectos Secundarios (useEffect):

Montaje:
Muestra un mensaje en la consola: "¡El panel de control está listo!"
Simula el vuelo: Cada segundo, reduce combustible y aumenta distancia.
Actualización:
Si combustible cambia, muestra un mensaje: "¡Combustible actualizado!"
Desmontaje:
Limpia el intervalo de vuelo.
Muestra un mensaje: "El panel de control se ha apagado."
Cálculo con useMemo:

Crea una variable mensajeEstado con useMemo. Este mensaje depende de estadoNave y se memoiza para evitar recalcularlo innecesariamente.
Interfaz de Usuario:

Muestra distancia, combustible, estado (usando mensajeEstado).
Botón "Aterrizar":
Cambia estado a "Aterrizando".
Añade planeta a planetasVisitados.
Componente de Planeta (Opcional):

Crea src/Planeta.jsx. Recibe nombre como prop.

Ciclo de Vida:

Montaje: Muestra mensaje: "¡El planeta {nombre} ha aparecido!"
Desmontaje: Muestra mensaje: "¡El planeta {nombre} ha desaparecido!"
Uso de Planeta.jsx en App.jsx:

Importa Planeta en App.jsx.

Renderiza una lista de componentes Planeta usando planetasVisitados.

Ejecución y Resultado
Inicia el desarrollo:

npm run dev
Observa la consola del navegador:

Verás los mensajes de montaje y desmontaje del panel.
Verás mensajes de actualización al cambiar el combustible.
Al "Aterrizar", verás mensajes de montaje y desmontaje de los componentes Planeta.

*/

import { useState, useEffect, useMemo } from "react";
import Planet from "./components/Planet";

export default function App() {
  const [distance, setDistance] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [shipStatus, setShipStatus] = useState("In Orbit");
  const [visitedPlanets, setVisitedPlanets] = useState([]);

  useEffect(() => {
    console.log("Control panel is set");
    const flight = setInterval(() => {
      setFuel((fuel) => {
        if (fuel > 0) {
          setDistance((distance) => distance + 1);
          return fuel - 1;
        }
        return 0;
      });
    }, 300);

    return () => {
      clearInterval(flight);
      console.log("Control panel's been shut down");
    };
  }, []);

  useEffect(() => {
    console.log(`Fuel updated!`);
  }, [fuel]);

  const statusMessage = useMemo(() => {
    return `Ship Status: ${shipStatus} / Distance: ${distance} / Fuel: ${fuel}`;
  }, [shipStatus, distance, fuel]);

  return (
    <>
      <h1>{statusMessage}</h1>
      <button
        onClick={() => {
          setShipStatus("Landing...");
          setVisitedPlanets((prev) => [
            ...prev,
            `Planet #${visitedPlanets.length + 1}`,
          ]);
        }}
        disabled={fuel === 0}
      >
        Land
      </button>
      {visitedPlanets.map((planet, index) => (
        <Planet key={index} name={planet} />
      ))}
    </>
  );
}
