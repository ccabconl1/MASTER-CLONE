// viajes.js
const destinos = [];

const registrarDestino = (destino, fecha, transporte) => {
    const viaje = { destino, fecha, transporte };
    destinos.push(viaje);
};

const mostrarItinerario = () => {
    if (destinos.length === 0) {
        console.log("No hay destinos registrados.");
        return;
    }
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}, Fecha: ${viaje.fecha}, Transporte: ${viaje.transporte}`);
    });
};

export { registrarDestino, mostrarItinerario };
// calculadora.js
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;
    let costoTransporte = 0;

    // Definir costos base por destino
    switch (destino) {
        case 'Paris':
            costoBase = 1000;
            break;
        case 'Tokyo':
            costoBase = 1200;
            break;
        case 'New York':
            costoBase = 800;
            break;
        default:
            costoBase = 500;
            break;
    }

    // Definir costos de transporte
    if (transporte === 'Avión') {
        costoTransporte = 300;
    } else if (transporte === 'Tren') {
        costoTransporte = 100;
    } else if (transporte === 'Auto') {
        costoTransporte = 50;
    }

    const costoTotal = costoBase + costoTransporte;
    return costoTotal;
};

export { calcularCosto };
// index.js
import { registrarDestino, mostrarItinerario } from './viajes.js';
import { calcularCosto } from './calculadora.js';

// Función para mostrar el costo de un destino
const mostrarCosto = (destino, transporte) => {
    const costo = calcularCosto(destino, transporte);
    console.log(`El costo total estimado para ${destino} con transporte en ${transporte} es: $${costo}`);
};

// Función para manejar la interacción
const interactuar = () => {
    // Registrar destinos
    registrarDestino('Paris', '2025-06-15', 'Avión');
    registrarDestino('Tokyo', '2025-07-10', 'Tren');

    // Mostrar itinerario
    mostrarItinerario();

    // Calcular y mostrar costos
    mostrarCosto('Paris', 'Avión');
    mostrarCosto('Tokyo', 'Tren');
};

// Ejecutar la interacción
interactuar();
