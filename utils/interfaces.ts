export interface LinksType {
  label: string;
  route: string;
}

//Declaración de tipo, de params proveniente de la ruta (query param y path param)
export interface WebParams {
  params: {
    [key: string]: string;
  };
  searchParams: {
    [key: string]: string;
  };
}
