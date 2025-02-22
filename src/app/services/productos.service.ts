import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos';
import { Categoria } from '../interfaces/categorias';

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
}
