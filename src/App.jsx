import React, { useState } from 'react';

function App() {
    // Paso 1: Crear un nuevo estado
    const [miTexto, setMiTexto] = useState('');

    // Paso 2 y 3: Crear función handleText para manejar el evento onChange
    const handleText = (event) => {
        // Paso 4: Actualizar el estado con el valor de la caja de entrada
        setMiTexto(event.target.value);
    }

    return (
        <div>
          <div>
            Capture su texto
          </div>
          {/* Paso 5: Pase su estado a la entrada del valor del prop */}
          <input type="text" onChange={handleText} value={miTexto} />
          <h3>Su Texto</h3>
          <p>
            {/* Mostrar el texto de la caja de entrada aquí */}
            {miTexto}
          </p>
        </div>
    );
}

export default App;