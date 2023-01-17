import { WebParams } from "@/utils/interfaces";
import React, { FC } from "react";

//Ejemplo de creación de una ruta dinámica por path param, recibe por argumento lo del path
const Element = (webParams: WebParams) => {
  const { id } = webParams.params;
  const { primera, segunda } = webParams.searchParams;

  return (
    <>
      <div>Elemento individual # {id}</div>;
      <div>Elemento individual # {primera}</div>;
      <div>Elemento individual # {segunda}</div>;
    </>
  );
};

export default Element;
