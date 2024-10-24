# Nombre del Proyecto: Compra Gamer
## Introducción
En esta aplicación web, podemos ver una imitación a la página e-commerce de **CompraGamer** como parte de la entrega del curso de React JS de **CoderHouse**. Esta fue diseñada con la finalidad de brindar una amplia experiencia acerca de la compra de productos del tipo "gamer", contando con una gran lista de productos para el armado de Pc's y/o complementar los setups con los perifericos del catalogo. La aplicación cuenta con una interzas bastante intuitiva acerca de su uso, esta permitiendo navegar en el catalogo, filtrando en las categorías propuestas, agregar los productos deseados al carrito de compras y seguir con el proceso de pago.
El enfoque con el cual fue llevado este proyecto fueron la combinación de tecnologías modernas para crear una plataforma visualmente atractiva e intiutiva para el uso al espectador.

## Tecnologías utilizadas para este proyecto:
- **React + Vite**: React junto con Vite, son la combinación más eficiente y poderosa que utilizamos para la construcción de esta Aplicación web. La arquitectura basada en componentes de React nos ayuda a promover la reutilización y mantenimiento de los mismos, mientras que Vite nos ofrece tiempos de desarrollos y construcción más rapidos gracias al soporte nativo que tiene en cuanto a modulos. Esta combinación mejora la experiencia del desarrollador con una configuración simplificada, permitiendo así iteraciones rápidas y flujos de trabajo optimizados. 
En resumen, juntos, facilitan la creación de interfaces de usuario dinámicas y receptivas

- **Firebase**: Esta base de datos localizada en la nube, la cual nos propone el poder sincronizar los datos en tiempo real y poder escalarlo a nuestro gusto. Esta tecnología, fue utilizada en el desarrollo backend del proyecto, permitiendo así el almacenamiento eficiente de las ordenes de compra de nuestros usuarios, a su ves tambien, siendo utilizada para alojar los datos de los productos.

- **Npm**: Este gestor de paquetes nos permite la instalación de dependencias, junto a una infinidad de ventajas como lo son: una gestion de dependencias (Instalación, Actualizacion y eliminacion de las dependencias), una amplia biblioteca, gestion de las versiones, scripts personalizables y una comunidad activa.

## Dependencias Utilizadas:
Las dependencias utilizadas en este proyecto, fueron:

- **React**: La biblioteca que nos brinda Java Script con la funcion de construir interfaces de usuario, permitiendonos la creacion de componentes reutilizables, facilitando y mejorando la renderizacion de la aplicacion junto a una gestion mejorada de estados de la misma.

- **React Router DOM**: Esta biblioteca nos ayuda con la navegabilidad entre las interfaces, haciendo junto a react una aplicacion más dinamica ante las interacciones del usuario con las vistas del proyecto.

- **Firebase**: La base de datos utilizada en backend para la interaccion entre el usuario, los productos y las ordenes de compra.

- **SweetAlert2**: Una biblioteca con una configuración simple que nos ayuda a mostrar alertas en momentos de informacion relevante para el usuario, como lo puede ser el agregar al carrito un producto, eliminarlo del mismo y ejecutar la orden de compra.

- **BootStrap**: Una librería la cual ayuda brindando una rapida construccion del esqueleto del proyecto, brindandonos así configuraciones preestablecidas y objetos más dinamicos o acomodados a los gustos del desarrollador, tales como iconos, spinners de carga, entre otros. BootStrap nos ayuda para poder ahorrarnos horas de codeo en los archivos de CSS de todos y cada uno de los componentes.

- **BootStrap Icons**: Esta librería siendo parte de BootStrap, nos ayuda con la incorporacion de iconos de una forma más remota, olvidandonos de tener que escalar imagenes vectoriales y ahorrandonos muchisimo espacio tanto local, como al usuario para tener que descargarlo en su navegador.

- **AnimatedCSS**: Esta librería fue utilizada pura y exclusivamente para agregar un poco más de dinamismo a la carga de productos, agregando una pequeña animacion en su carga incial.

## Estructura del proyecto:
src/ 
├── components/ # Componentes reutilizables.                                                                                                                                                                                  
├── context/ # Context para gestión de datos entre componentes.                                                                                                                                                               
├── views/ # Componentes de la vista de las páginas (Inicio, Catálogo, Checkout).                                                                                                                                             
├── Firebase/ # Servicios para interactuar con Firebase.                                                                                                                                                                      
└── App.jsx # Componente principal de la aplicación.                                                                                                 

## Caracteristicas:
- **Catalogo de Productos**: Los usuarios podrán navegar entre varios productos del tipo "Gamer" como perifericos, componentes y pantallas.
- **Carrito de compras**: Los usuarios podrán agregar los productos de eleccion al carrito y gestionar desde allí el que pasara con los mismo (eliminacion o compra).
- **Proceso de Orden de compra / Pago**: Los usuarios pasan por un proceso en el cual consta de un simple formulario para ingresar sus datos, validarlos y por ultimo desplegar un boton de orden de compra.
- **Envio y finalizacion de la compra**: Por último, los usuarios podrán experimentar el envio de su orden de compra, con un resultado de facturacion mostrando asi, el ID de su orden de compra, siendo esta almacenada en firebase, y siendo plasmada en la pantalla del usuario mediante a una alerta de SweetAlert2 y en el mismo DOM.
