export interface IPartida 
{
			id: string,
			idPartida: string,
            name: string,
            idSubpartida: string,
            nameSubpartida: string,
            idCategoria: string,
            nameCategoria: string,
            nameLote: string,
            cantidad: number,
            minimoNivel: number,
            idProveedor: string
  }
  export interface ISubpartida
  {
              id: string,
              name: string,
              estatus: string,
              clase: string,
              idItem: string,
              nameItem: string,
              idCategoria: string,
              nameCategoria: string,
              nameLote: string,
              cantidad: string,
              idPartida: string,
              idSubpartida: string,
                    namePartida: string,
              nameSubpartida: string,
    }