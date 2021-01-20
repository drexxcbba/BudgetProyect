import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(it => (
            <Gasto
             key={it.id} 
             item={it}
             />
        ))}
    </div>
);

Listado.propsTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;