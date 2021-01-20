import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] =  useState({});
  const [band, setBand] = useState(false);

  useEffect( () => {
    if(band){
      setGastos([
        ...gastos,
        gasto
      ]);
      const val = restante - gasto.cantidad;
      setRestante(val);
      setBand(false);
    }
  }, [gasto, band, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          { mostrar ? (
            <Pregunta 
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrar={setMostrar}
            />
            ) : (
            <div className="row">
             <div className="one-half column">
                <Formulario 
                 setGasto={setGasto}
                 setBand={setBand}
                 />
             </div>

              <div className="one-half column">
                <Listado 
                 gastos={gastos}
                 />
                 <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                  />
              </div>
            </div>
           ) }
        </div>
      </header>
    </div>
  );
}

export default App;
