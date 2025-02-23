import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos';
import { Categoria } from '../interfaces/categorias';
import { Busqueda } from '../interfaces/busqueda';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor() {}

  //Método para obtener los productos
  async getByCategoria(id: number): Promise<Producto[]> {
    const res = await fetch('data/database.json');
    const resJson: Categoria[] = await res.json();
    const productos = resJson.find(
      (categoria) => categoria.id === id
    )?.productos;
    if (productos) return productos;
    return [];
  }

  //Metodo para obtener todo los productos
  async getAll(): Promise<Producto[]> {
    const res = await fetch('data/database.json');
    const resJson: Categoria[] = await res.json();
    let productos: Producto[] = [];
    resJson.forEach((categoria) => {
      productos = [...productos, ...categoria.productos];
    });
    return productos;
  }

  async getById(id: number): Promise<Producto | undefined> {
    const productos = await this.getAll();
    const productoElegido = productos.find((producto) => producto.id === id);
    return productoElegido ? productoElegido : undefined;
  }

  //Método para barra de búsqueda
  async buscar(parametros:Busqueda){
     const productos = await this.getAll();
     const productosFiltrados = productos.filter(producto => {
      //filtrar los checks
      if(parametros.aptoCeliaco && !producto.esCeliaco) return false;
      if(parametros.aptoVegano && !producto.esVegano) return false;
      
      // filtrar por texto
      const busquedaTitulo = producto.nombre.toLowerCase().includes(parametros.texto.toLowerCase());
      if (busquedaTitulo) return true;

      for (let i = 0; i < producto.ingredientes.length; i++) {
        const ingrediente  = producto.ingredientes[i];
        if(ingrediente.toLowerCase().includes(parametros.texto.toLowerCase())) return true;
      }

      return false;
     })
     return productosFiltrados;
  }

}
