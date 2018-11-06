import * as React from 'react';
import PropTypes from 'prop-types'



ModelDetails.propTypes = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired
}


export default function ModelDetails(props) {
  const pcs = props.pcs;
  return <div>
    {pcs.map((pc, e) => 
      <ul>
        <li>name: {pc.name}</li>
        <li>manufacturer: {pc.manufacturer}</li>
        <li>year: {pc.year}</li>
        <li>origin: {pc.origin}</li>
      </ul>
    )}
  </div>;
}



