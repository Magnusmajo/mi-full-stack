# Terminal y PowerShell

[Volver al módulo](../README.md) · [Prácticas](../exercises/README.md)

## ¿Qué es?

La terminal es la interfaz donde escribes comandos y lees resultados. El shell interpreta los comandos: aquí usamos PowerShell. Git y Python son programas que el shell puede ejecutar. El directorio actual determina desde dónde se resuelven las rutas relativas.

## ¿Por qué existe?

Permite repetir tareas con precisión: navegar, crear archivos, ejecutar un servidor e inspeccionar cambios. Registrar los comandos usados facilita que otra persona reproduzca una práctica.

## ¿Cómo funciona?

Un comando puede ser un cmdlet de PowerShell, una función, un alias o un ejecutable externo. Los parámetros ajustan su comportamiento. Por ejemplo, `Get-ChildItem -Force` incluye elementos ocultos.

### Navegación y lectura

Ejecuta desde la raíz del repositorio:

```powershell
Get-Location
Get-ChildItem
Set-Location ./00-fundamentals
Get-ChildItem -Directory
Get-Content -Encoding UTF8 ./README.md
Set-Location ..
```

La primera orden muestra dónde estás. Después entras al módulo, lees su README y vuelves a la raíz. Una ruta absoluta comienza desde una raíz como `C:\`; una relativa depende del directorio actual. `.` representa el actual y `..` el padre.

Usa comillas si una ruta tiene espacios:

```powershell
Set-Location 'C:\PROGRAMACION\Repositorio Full Stack\mi-full-stack'
```

Esa ruta corresponde a este entorno; si mueves el repositorio, adáptala.

### Archivos, objetos y pipelines

PowerShell conecta comandos mediante `|`. Entre cmdlets normalmente viajan objetos con propiedades, no solo texto. Este ejemplo filtra los archivos Markdown de una carpeta y selecciona su nombre y tamaño:

```powershell
Get-ChildItem ./00-fundamentals -File |
    Where-Object Extension -eq '.md' |
    Select-Object Name, Length
```

No busca recursivamente; deberías ver el README del módulo. [Referencia: Microsoft, pipelines](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipelines).

### Ayuda y procesos

```powershell
Get-Help Get-ChildItem -Examples
Get-Command git
Get-Command python
git --version
python --version
```

`Get-Command` permite saber qué ejecutará PowerShell. PATH es la lista de directorios donde se buscan ejecutables. Si una herramienta instalada no aparece, comprueba su ruta y vuelve a abrir la terminal después de configurar PATH.

Un servidor continúa ejecutándose hasta que lo detienes. Mientras ocupa esa terminal, usa otra para trabajar. `Ctrl+C` suele interrumpir el proceso activo. Para programas externos, `$LASTEXITCODE` permite consultar su código de salida; cero suele indicar éxito.

## Ejemplo

Desde la raíz, crea un archivo nuevo de práctica. Si ya existe, léelo y continúa sin sobrescribir tus notas:

```powershell
$practicePath = './00-fundamentals/exercises/terminal-notes.txt'
if (-not (Test-Path -LiteralPath $practicePath)) {
    New-Item -ItemType File -Path $practicePath | Out-Null
    Set-Content -LiteralPath $practicePath -Encoding UTF8 -Value 'Mi primera practica de terminal.'
}
Get-Content -LiteralPath $practicePath -Encoding UTF8
```

`New-Item` crea, `Set-Content` reemplaza el contenido y `Add-Content` agrega al final. La condición protege unas notas ya existentes. `Copy-Item` copia y `Move-Item` mueve o renombra; antes de usarlos comprueba el origen y que el destino sea el que quieres.

### Git como parte del trabajo

```powershell
git status
git diff
git add -- 00-fundamentals/exercises/terminal-notes.txt
git diff --staged
```

`git diff` compara cambios de archivos rastreados con el staging; no muestra el contenido de archivos nuevos sin seguimiento. Después de `git add`, `git diff --staged` muestra lo preparado para el commit.

Cuando hayas revisado lo preparado y corresponda únicamente a esa unidad de trabajo:

```powershell
git commit -m "docs(fundamentals): add terminal practice notes"
git log --oneline -5
```

Un commit registra localmente lo que está en staging. No publica los cambios en GitHub. Consulta la [guía de Git](../../docs/git-workflow.md) para continuar.

## Errores comunes

- Ejecutar una ruta relativa desde otra carpeta: comprobar primero `Get-Location`.
- Pegar el símbolo del prompt junto al comando.
- Mezclar Bash y PowerShell: `touch` y `export` no son cmdlets equivalentes.
- Ver acentos incorrectos al leer UTF-8: indicar `-Encoding UTF8`, especialmente en Windows PowerShell.
- Cerrar la terminal del servidor y pensar que la página debería seguir disponible.
- Preparar todos los archivos sin revisar qué incluye el commit.

## Lo que aprendí

Anota tres comandos que puedas explicar, un problema de rutas que resolviste y la diferencia entre un archivo modificado, preparado y confirmado.

## Ejercicios

Resuelve el ejercicio 3 de la [guía de prácticas](../exercises/README.md). Conserva las notas que hayas escrito como evidencia de tu trabajo.
