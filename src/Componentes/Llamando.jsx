import React from "react";
import PropTypes from "prop-types";

const Llamando = (props) => {
  const { llamando } = props;
  return (
    <div>
      <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando...</span>
    </div>
  );
};

Llamando.propTypes = {
  llamando: PropTypes.bool.isRequired
};

export default Llamando;
