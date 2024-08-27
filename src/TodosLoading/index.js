import React from "react";
import './estilo.css'
function TodosLoading (){
    return (
        <div id="contenedor">
  <div className="contenedor-loader">
    <div className="rueda"></div>
  </div>
  <div className="cargando">Cargando...</div>
  
</div>
    )
}
export { TodosLoading }