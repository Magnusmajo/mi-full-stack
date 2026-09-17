# Flujo de trabajo con Git

Un commit representa una unidad lógica de trabajo. Revisar los cambios y agregar explícitamente los archivos relacionados.

## Desde el primer día

```sh
git status
git diff
git add ruta/al/archivo
git diff --staged
git commit -m "docs(http): explain request-response lifecycle"
git log --oneline
```

Sustituir la ruta y el mensaje según el trabajo realizado. Comprobar que el staging contiene los cambios de esa unidad de trabajo.

## Mensajes de commit

Formato: `tipo(ámbito): descripción concreta`.

- `docs(http): explain request-response lifecycle`
- `feat(js): add array transformation exercises`
- `refactor(js): extract validation function`
- `test(api): add authentication integration tests`

Evitar mensajes como `update`, `changes`, `stuff`, `test`, `final` o `final2`.

## Incorporación gradual

1. Ramas y merge para aislar e integrar trabajo.
2. Pull requests e issues para revisar y organizar tareas.
3. Rebase cuando se comprenda cómo reescribe el historial; coordinar antes de reescribir commits compartidos.
4. Tags y releases para identificar entregas.

Documentar las prácticas en el [módulo de Git y GitHub](../04-git-github/README.md).
