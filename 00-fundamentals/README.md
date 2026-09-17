# 00 — Fundamentos de la Web

Material de estudio disponible. Prácticas, revisión y aprendizaje personal: pendientes.

Al terminar este módulo deberías poder explicar qué sucede al abrir una URL, distinguir un fallo de conexión de una respuesta HTTP y usar la terminal y DevTools para investigar una página.

## Recorrido

| Orden | Tema | Resultado esperado |
| --- | --- | --- |
| 1 | [Internet, cliente / servidor y DNS](internet/README.md) | Dibujar el recorrido entre navegador y servidor e interpretar una URL |
| 2 | [Terminal y PowerShell](terminal/README.md) | Navegar, manipular archivos de práctica y revisar cambios con Git |
| 3 | [HTTP](http/README.md) | Leer una petición y una respuesta, reconocer métodos, estados y headers |
| 4 | [Navegador y DevTools](devtools/README.md) | Inspeccionar DOM, estilos, red y ejecución de JavaScript |
| 5 | [Ejercicios](exercises/README.md) | Resolver actividades y justificar los resultados |
| 6 | [Proyecto integrador](projects/README.md) | Investigar una página local y entregar un informe reproducible |

## Preparación

Necesitas un navegador con DevTools (las instrucciones usan Chrome o Edge), PowerShell, Git y un editor. Para el laboratorio necesitas Python 3; no necesitas saber programar en Python.

Desde la raíz del repositorio:

```powershell
Get-Location
git --version
python --version
```

Si falta un comando, revisa su instalación y PATH antes de continuar. En este entorno está disponible `python`; `py` puede no existir.

## Primera ejecución

Desde la raíz del repositorio:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory ./00-fundamentals/projects/browser-lab
```

Mantén esa terminal abierta y visita http://127.0.0.1:8000/. Usa una segunda terminal para otros comandos. Detén el servidor con `Ctrl+C`. Si el puerto está ocupado, elige 8001 y cambia también las URLs de las prácticas.

El servidor sirve únicamente la carpeta del laboratorio. Es una herramienta de desarrollo local. Consulta la [documentación de http.server](https://docs.python.org/3/library/http.server.html).

## Cómo estudiar

Lee un tema, predice el resultado de su ejemplo y ejecútalo. Después resuelve sus ejercicios sin copiar la explicación y compara lo observado con lo esperado. Registra una duda concreta cuando no coincidan.

El código del laboratorio es material didáctico preparado como apoyo; tus entregas serán las modificaciones, explicaciones y evidencias que produzcas. Los apartados «Lo que aprendí» se reservan para tus conclusiones.

## Criterios de cierre

- [ ] Explico Internet, Web, cliente, servidor, IP, puerto y DNS con un ejemplo.
- [ ] Descompongo una URL y explico qué parte no viaja en la petición HTTP.
- [ ] Distingo DNS, conexión, HTTP y error de JavaScript.
- [ ] Navego por el repositorio y reviso un diff desde la terminal.
- [ ] Identifico método, URL, estado, headers y cuerpo en Network.
- [ ] Inspecciono un elemento y pauso JavaScript con un breakpoint.
- [ ] Entrego las prácticas y el informe del laboratorio para revisión.
- [ ] Documento mis conclusiones y actualizo el [progreso](../docs/progress.md).

## Lo que aprendí

Completar después de la práctica: qué puedo explicar sin ayuda, qué error resolví y qué necesito repasar.

[Volver al mapa principal](../README.md)
