import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ComponenteB({estado}) {
  
    const [conectado, setConectado] = useState(estado);
    console.log(estado);
    console.log(conectado);
  return (
    <div>
      <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
    </div>
  );
}

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;