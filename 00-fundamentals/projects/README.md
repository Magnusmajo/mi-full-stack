# Proyecto integrador: investigar una página local

[Volver al módulo](../README.md)

## Objetivo

Explicar con evidencia el recorrido entre una acción del usuario, una petición HTTP y el resultado en pantalla.

Usa el [laboratorio del navegador](browser-lab/README.md), que contiene código didáctico listo para ejecutar. Tu trabajo consiste en investigarlo, modificarlo y justificar las observaciones.

## Entrega

Crea `report.md` en esta carpeta con estas secciones:

1. **Entorno:** navegador, versiones y comando usado para iniciar el servidor.
2. **Arquitectura:** diagrama de cliente y servidor, IP, puerto y recursos.
3. **Peticiones:** tabla de GET exitoso, HEAD, 404 y fallo de conexión. Incluye método, URL, estado cuando exista y tipo de contenido.
4. **Navegador:** explica DOM frente a HTML y documenta un breakpoint.
5. **Cambios propios:** cambia el título, un estilo y el incremento del contador. Explica el diff y cómo comprobaste cada cambio.
6. **Conclusiones:** tres aprendizajes, un error corregido y una duda pendiente.

Añade capturas si ayudan a demostrar algo, acompañadas de una explicación. No hace falta incluir un HAR completo.

## Criterios de aceptación

- Otra persona puede iniciar el laboratorio siguiendo las instrucciones.
- El informe distingue las respuestas HTTP de los fallos de conexión.
- Identifica qué archivos descarga el navegador y qué acción carga el JSON.
- Explica los cambios realizados en código y su resultado.
- Incluye observaciones reales y no presenta los ejemplos preparados como trabajo propio.
- Los cambios forman unidades lógicas de Git y están listos para revisión.

## Extensión opcional

Agrega un nuevo campo a `data.json`, observa primero la respuesta sin modificar el JavaScript y después decide cómo mostrarlo en pantalla. Escribe qué parte cambió en el servidor y qué parte en el cliente.

[Volver a los ejercicios](../exercises/README.md)
