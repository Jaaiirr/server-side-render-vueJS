//Esto corre en el servidor de Node JS
import { createSSRApp } from "vue";

// Creamos nuestro componente haciendo uso de ssr para indicar 
//que el contenido sera cargado del lado del servidor.
export function createApp() {
    return createSSRApp({
      data: () => ({ count: 1 }),
      template: `<div @click="count++" style="background-color:red; width:50%">{{ count }}</div>`,
    });
  }
  