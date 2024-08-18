module.exports = function (ctx) {
    return {
      // Configuración general de tu aplicación
      supportIE: false, // Desactivar soporte para Internet Explorer
      boot: [
        'axios' // Incluir el módulo Axios automáticamente en la aplicación
      ],
      css: [
        'app.css' // Incluir un archivo CSS global en tu aplicación
      ],
      extras: [
        'roboto-font', // Incluir la fuente Roboto
        'material-icons' // Incluir el conjunto de iconos Material Icons
      ],
  
      // Configuración del servidor de desarrollo
      devServer: {
        https: false,
        port: 8080,
        open: true // Abrir automáticamente el navegador al iniciar el servidor de desarrollo
      },
  
      // Configuración de las rutas de la aplicación (enrutamiento)
      framework: {
        iconSet: 'material-icons', // Conjunto de iconos predeterminado
        lang: 'en-us', // Idioma predeterminado
        all: true, // Cargar todos los componentes de Quasar por defecto
        components: [],
        directives: [],
        plugins: ["Dialog"],
  
        // Agregar configuración de componentes y directivas específicos si es necesario
      },
  
      // Configuración de la aplicación
      build: {
        scopeHoisting: true, // Habilitar el scope hoisting para reducir el tamaño del paquete
        vueRouterMode: 'history', // Modo de enrutamiento (history o hash)
        publicPath: '/my-app/', // Ruta pública de la aplicación (se usa en producción)
        env: ctx.dev
          ? { // Variables de entorno para el modo de desarrollo
              API_URL: 'http://localhost:8081'
            }
          : { // Variables de entorno para el modo de producción
              API_URL: 'https://api.example.com'
            },
        // Más configuración de compilación aquí...
      },
  
      // Otras configuraciones de tu aplicación...
    };
  };