# Docfav-app

### Se creó una pequeña aplicación en React, consumiendo una api que muestra información de juegos.
Las funciones principales son las siguientes:
● Listar los juegos. Crear una lista a manera de cuadrícula. Y cada juego se
mostrará en una tarjeta. La información mínima de la tarjeta será la imagen, el
título, descripción corta.
● Filtrar juegos. Crear un formulario que contenga inputs para filtrar los juegos
listados. Los cuales son: buscar por nombre (input tipo texto), buscar por
género(input tipo select) y buscar por plataforma (input tipo select).
● Mostrar información completa de juego. Al seleccionar un juego mostrar en
una nueva página la información completa del juego.

A continuación se muestran una lista de recomendaciones que tiene la aplicación: 

Servicios: las llamadas a la api deben de estar contenidas en servicios. Para así
poder ser llamadas desde cualquier parte del código.
● Interfaces: crear interfaces que permitan objetos. como por ejemplo los objetos
respuesta de los llamados a la api.
● Bootstrap: instalar la dependencia de bootstrap para react y así puedes
agregar cosas como grids, cards, inputs, etc. además de ayudarse con las clases
de bootstrap para estilizar la aplicación.
● Responsive: ayudarse con las clases de bootstrap o css para hacer la
visualización de la app en cualquier tipo de dispositivo.
● Componentes: modularizar la app en componentes que puedan ser reutilizados.
● Environment: crear archivos de environment e inyectarla a la aplicación para así
poder usarlas desde cualquier parte del código. como por ejemplo la url base de
la api.
● Operadores RxJs: pueden ser utilizados a la hora de filtrar los resultados con
los inputs y obtener el listado de options de los input tipo select. y así poder crear
una sola función de petición.
● Testing: realizar Unit testing a los componentes.


npm run dev (para levantar la aplicación)
npm test (para realizar los test)
