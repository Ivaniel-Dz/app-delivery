# AppDelivery

## Descripción

AppDelivery es una aplicación web desarrollada con Angular que permite a los usuarios navegar por diferentes categorías de productos, ver detalles de productos, buscar productos, agregar productos al carrito y realizar pedidos.

## Estructura del Proyecto

```
.angular/
.cache/
.editorconfig
.gitignore
.vscode/
angular.json
package.json
public/
src/
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
README.md
```

### Archivos Principales

- **.editorconfig**: Configuración del editor para mantener un estilo de código consistente.
- **.gitignore**: Lista de archivos y directorios que Git debe ignorar.
- **angular.json**: Configuración del proyecto Angular.
- **package.json**: Dependencias y scripts del proyecto.
- **tsconfig.app.json**: Configuración de TypeScript para la aplicación.
- **tsconfig.json**: Configuración global de TypeScript.
- **tsconfig.spec.json**: Configuración de TypeScript para pruebas.
- **README.md**: Documentación del proyecto.

### Directorios

- **public/**: Contiene archivos públicos como imágenes y datos JSON.
- **src/**: Contiene el código fuente de la aplicación.

## Componentes

### `AppComponent`

- **Archivo**: app.component.ts
- **Template**: app.component.html
- **Estilos**: app.component.scss

### `HeaderComponent`

- **Archivo**: header.component.ts
- **Template**: header.component.html
- **Estilos**: header.component.scss

### `TabComponent`

- **Archivo**: tab.component.ts
- **Template**: tab.component.html
- **Estilos**: tab.component.scss

### `CardCategoriaComponent`

- **Archivo**: card-categoria.component.ts
- **Template**: card-categoria.component.html
- **Estilos**: card-categoria.component.scss

### `CardProductoComponent`

- **Archivo**: card-producto.component.ts
- **Template**: card-producto.component.html
- **Estilos**: card-producto.component.scss

### `ContadorCantidadComponent`

- **Archivo**: contador-cantidad.component.ts
- **Template**: contador-cantidad.component.html
- **Estilos**: contador-cantidad.component.scss

## Páginas

### `HomeComponent`

- **Archivo**: home.component.ts
- **Template**: home.component.html
- **Estilos**: home.component.scss

### `ArticuloComponent`

- **Archivo**: articulo.component.ts
- **Template**: articulo.component.html
- **Estilos**: articulo.component.scss

### `BuscarComponent`

- **Archivo**: buscar.component.ts
- **Template**: buscar.component.html
- **Estilos**: buscar.component.scss

### `CarritoComponent`

- **Archivo**: carrito.component.ts
- **Template**: carrito.component.html
- **Estilos**: carrito.component.scss

### `PerfilComponent`

- **Archivo**: perfil.component.ts
- **Template**: perfil.component.html
- **Estilos**: perfil.component.scss

### `RubroComponent`

- **Archivo**: rubro.component.ts
- **Template**: rubro.component.html
- **Estilos**: rubro.component.scss

## Servicios

### `HeaderService`

- **Archivo**: header.service.ts

### `CartService`

- **Archivo**: cart.service.ts

### `CategoriasService`

- **Archivo**: categorias.service.ts

### `ConfigService`

- **Archivo**: config.service.ts

### `PerfilService`

- **Archivo**: perfil.service.ts

### `ProductosService`

- **Archivo**: productos.service.ts

## Interfaces

### `Busqueda`

- **Archivo**: busqueda.ts

### `Config`

- **Archivo**: config.ts

### `Categoria`

- **Archivo**: categorias.ts

### `Cart`

- **Archivo**: carrito.ts

### `Perfil`

- **Archivo**: perfil.ts

### `Producto`

- **Archivo**: productos.ts

## Constantes

### `NUMERO_WHATSAPP`

- **Archivo**: telefono.ts

## Configuración de Rutas

- **Archivo**: app.routes.ts

## Configuración Principal

- **Archivo**: app.config.ts

## Estilos Globales

- **Archivo**: styles.scss

## Archivos Públicos

- **Configuración**: configuracion.json
- **Base de Datos**: database.json
- **Variables de Estilo**: variables.scss

## Directivas

### `ngFor`

La directiva `ngFor` se utiliza para iterar sobre una colección de elementos y renderizarlos en el DOM.

**Ejemplo:**

```html
<div *ngFor="let item of items">{{ item.name }}</div>
```

### `ngIf`

La directiva `ngIf` se utiliza para mostrar u ocultar un elemento basado en una condición booleana.

**Ejemplo:**

```html
<div *ngIf="isVisible">Este contenido es visible.</div>
```

## Métodos

### `addToCart(product: Producto)`

Este método agrega un producto al carrito de compras.

**Ejemplo:**

```typescript
addToCart(product: Producto) {
  this.cartService.addProduct(product);
}
```

## Clases

### `Producto`

La clase `Producto` representa un producto en la aplicación.

**Ejemplo:**

```typescript
export class Producto {
  id: number;
  name: string;
  price: number;
  // ...otros atributos...
}
```

## Propiedades

### `items: Producto[]`

La propiedad `items` es una lista de productos.

**Ejemplo:**

```typescript
items: Producto[] = [];
```

## Decoradores

### `@Component`

El decorador `@Component` se utiliza para definir un componente de Angular.

**Ejemplo:**

```typescript
@Component({
  selector: "app-producto",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.scss"],
})
export class ProductoComponent {
  // ...código del componente...
}
```

## Patrones Usados

### Inyección de Dependencias

Angular utiliza el patrón de inyección de dependencias para gestionar las dependencias entre los diferentes componentes y servicios.

**Ejemplo:**

```typescript
constructor(private cartService: CartService) {}
```

### Observables

Angular utiliza observables para manejar operaciones asincrónicas.

**Ejemplo:**

```typescript
this.productService.getProducts().subscribe((products) => {
  this.items = products;
});
```

## Ejemplos de Código

### Crear un Componente

**Ejemplo:**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-ejemplo",
  template: "<h1>Hola Mundo</h1>",
  styles: ["h1 { color: red; }"],
})
export class EjemploComponent {}
```

### Crear un Servicio

**Ejemplo:**

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EjemploService {
  getData() {
    return ["dato1", "dato2", "dato3"];
  }
}
```

## Iniciar el Proyecto

Para iniciar el servidor de desarrollo, ejecute:

```bash
ng serve
```

Abra su navegador y navegue a `http://localhost:4200/`.

## Construir el Proyecto

Para construir el proyecto, ejecute:

```bash
ng build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecutar Pruebas Unitarias

Para ejecutar las pruebas unitarias con Karma, ejecute:

```bash
ng test
```

## Ejecutar Pruebas End-to-End

Para pruebas end-to-end, ejecute:

```bash
ng e2e
```

## Recursos Adicionales

Para más información sobre el uso de Angular CLI, visite la [Referencia de Comandos de Angular CLI](https://angular.dev/tools/cli).
