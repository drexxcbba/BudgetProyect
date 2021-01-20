import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({item}) => ( 
    <li className="gastos">
        <p>
            {item.nombre}
            <span className="gasto"> ${item.cantidad}</span>
        </p>
    </li>
);

Gasto.propTypes = {
    item: PropTypes.object.isRequired
}
 
export default Gasto;