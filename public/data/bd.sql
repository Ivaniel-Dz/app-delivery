-- Creación de las tablas de la base de datos
CREATE TABLE Categoria (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    fotoUrl TEXT
);

CREATE TABLE Producto (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL,
    esVegano BOOLEAN,
    esCeliaco BOOLEAN,
    categoriaId INT,
    fotoUrl TEXT,
    FOREIGN KEY (categoriaId) REFERENCES Categoria(id)
);

CREATE TABLE Ingrediente (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE ProductoIngrediente (
    productoId INT,
    ingredienteId INT,
    PRIMARY KEY (productoId, ingredienteId),
    FOREIGN KEY (productoId) REFERENCES Producto(id),
    FOREIGN KEY (ingredienteId) REFERENCES Ingrediente(id)
);


-- Insercion de datos en las tablas
INSERT INTO Categoria (id, nombre, fotoUrl) VALUES
(1, 'Pizzas', 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'),
(2, 'Hamburguesas', 'https://img.freepik.com/vector-gratis/hamburguesa-realista-sobre-fondo-pizarra_79603-1042.jpg?w=2000'),
(3, 'Postres', 'https://www.recetasnestle.com.ar/sites/default/files/2023-03/postre-en-vaso-dulce-leche.jpg.jpg'),
(4, 'Bebidas', 'https://img.band.uol.com.br/image/2023/02/09/bebidas-alcoolicas-181014_800x450.webp'),
(5, 'Combos', 'https://i-ticketing.iwos.com/1000x1000-th/products/220/products_220_2.png'),
(6, 'Otros', 'https://eldiariony.com/wp-content/uploads/sites/2/2023/06/shutterstock_521741356.jpg?resize=360,270&quality=80');


INSERT INTO Producto (id, nombre, precio, esVegano, esCeliaco, categoriaId, fotoUrl) VALUES
-- Pizzas
(7, 'Pizza común', 1000, FALSE, FALSE, 1, 'https://caserissimo.com/wp-content/uploads/2015/08/pizabuaur1-1024x768.jpg'),
(8, 'Pizza especial', 1200, FALSE, FALSE, 1, 'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg'),
(9, 'Pizza 4 quesos', 1300, FALSE, FALSE, 1, 'https://www.gourmet.cl/wp-content/uploads/2017/04/pizza-570x458.jpg'),

-- Hamburguesas
(1, 'Hamburguesa con queso', 1000, FALSE, FALSE, 2, 'https://quem.com.ar/tienda/wp-content/uploads/2020/12/Grandwich_17-10_-061.jpg'),
(2, 'Hamburguesa especial', 1500, FALSE, FALSE, 2, 'https://elsheriffburger.com/uploads/lh90_elsheriffbuger/products/54/es/img-H.-Especial-5-WEB-de-taman%CC%83o-mediano.jpg'),
(3, 'Hamburguesa vegana', 1300, TRUE, FALSE, 2, 'https://www.pequerecetas.com/wp-content/uploads/2009/04/hamburguesa-de-garbanzos-casera-receta.jpg'),
(4, 'Hamburguesa celíaca', 1250, FALSE, TRUE, 2, 'https://www.perez-h.com/newsite/wp-content/uploads/2016/06/queso-2.jpg'),
(5, 'Hamburguesa americana', 3500, FALSE, FALSE, 2, 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg'),
(6, 'Medallón platero', 2000, TRUE, TRUE, 2, 'https://canalcocina.es/medias/images/1010_Coc_RecetasDeAnnie_HamburguesaQueso.jpg'),

-- Postres
(10, 'Tiramisú', 800, FALSE, TRUE, 3, 'https://i.blogs.es/410470/vasitos/1366_2000.jpeg'),
(11, 'Chocotorta', 800, FALSE, FALSE, 3, 'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg'),
(12, 'Turrón de Quaker', 800, FALSE, FALSE, 3, 'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg'),

-- Bebidas
(13, 'Agua', 100, TRUE, TRUE, 4, 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg'),
(14, 'Agua Saborizada Naranja', 100, TRUE, TRUE, 4, 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040783_f.jpg'),
(15, 'Fanta Uva', 100, TRUE, TRUE, 4, 'https://carrefourar.vtexassets.com/arquivos/ids/332920/7790895648670_E02.jpg?v=638212197029330000'),

-- Combos
(16, 'Pizza party (4 pizzas)', 100, FALSE, FALSE, 5, 'https://thepostsportsbar.com/wp-content/uploads/2019/07/ALL-Pizzas-0045-top-down.jpg'),

-- Otros
(17, 'Papas fritas', 100, FALSE, FALSE, 6, 'https://cocina-casera.com/wp-content/uploads/2023/01/patatas-fritas-crujientes-francesa-1.jpg'),
(18, 'Ensalada César', 100, FALSE, FALSE, 6, 'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/06/Ensalada-cesar.jpg'),
(19, 'Ensalada simple', 100, TRUE, TRUE, 6, 'https://www.plantheoshops.com.ar/mitienda/galeria/files/5/61b36abcb06eb_1639148220-7227.jpeg');


INSERT INTO Ingrediente (id, nombre) VALUES
(1, 'Muzarella'),
(2, 'Aceitunas'),
(3, 'Orégano'),
(4, 'Morrones'),
(5, 'Tomate'),
(6, 'Huevo'),
(7, 'Roquefort'),
(8, 'Provolone'),
(9, 'Parmesano'),
(10, 'Carne de ternera'),
(11, 'Pan Brioche'),
(12, 'Queso'),
(13, 'Lechuga'),
(14, 'Medallón a base de lentejas'),
(15, 'Pan libre de tacc'),
(16, 'Salsa secreta BBQ'),
(17, 'Panceta'),
(18, 'Salsa César'),
(19, 'Pollo'),
(20, 'Croutones'),
(21, 'Zanahoria');


-- Pizza común
INSERT INTO ProductoIngrediente VALUES (7, 1), (7, 2), (7, 3);

-- Pizza especial
INSERT INTO ProductoIngrediente VALUES (8, 1), (8, 2), (8, 4), (8, 5), (8, 6);

-- Pizza 4 quesos
INSERT INTO ProductoIngrediente VALUES (9, 1), (9, 7), (9, 8), (9, 9);

-- Hamburguesa con queso
INSERT INTO ProductoIngrediente VALUES (1, 10), (1, 11), (1, 12);

-- Hamburguesa especial
INSERT INTO ProductoIngrediente VALUES (2, 10), (2, 11), (2, 12), (2, 5), (2, 13);

-- Hamburguesa vegana
INSERT INTO ProductoIngrediente VALUES (3, 14), (3, 11), (3, 5);

-- Hamburguesa celíaca
INSERT INTO ProductoIngrediente VALUES (4, 10), (4, 15), (4, 12);

-- Hamburguesa americana
INSERT INTO ProductoIngrediente VALUES (5, 10), (5, 11), (5, 12), (5, 16), (5, 17);

-- Medallón platero
INSERT INTO ProductoIngrediente VALUES (6, 14), (6, 5), (6, 13);

-- Ensalada César
INSERT INTO ProductoIngrediente VALUES (18, 13), (18, 18), (18, 19), (18, 20);

-- Ensalada simple
INSERT INTO ProductoIngrediente VALUES (19, 13), (19, 5), (19, 21);
