# 🚀 Guía de Aprendizaje Fullstack 

Este repositorio contiene el código y el contenido de una guía de aprendizaje de desarrollo Fullstack interactiva, construida sobre **Astro + Starlight**. 

## 🧭 Misión de esta Guía
Crear una ruta de aprendizaje clara, rápida y práctica basada en la malla universitaria tecnológica de Desarrollo de Software Fullstack, pero **traducida y enfocada mediante analogías del mundo real y modelos de negocios** (ideal para perfiles de ingenierías comerciales, análisis de datos, o para quienes sienten que la teoría de sistemas pura es abrumadora).

Esta guía NO reemplaza los estudios o tareas, sirve como:
- Un mapa mental y arquitectónico.
- Una referencia rápida para entender "por qué hacemos esto".
- Un filtro para evitar la sobre-saturación de información (Infoxicación).

---

## 🧱 Estructura de Conocimiento

El temario de esta guía está dividido ahora en dos Módulos orientados a resultados aplicados:

### 🟦 Módulo 1: Bases y Lógica (`/bases-y-logica`)
- Fundamentos de Programación
- Introducción al Desarrollo Web
- Fundamentos de Base de Datos
- Principios de Diseño y Arquitectura de Software
- Pruebas y Depuración de Software
- Control de Versiones y Seguridad Básica

### 🟩 Módulo 2: Desarrollo y Despliegue (`/desarrollo-y-despliegue`)
- Desarrollo Front-End
- Desarrollo Back-End
- Tecnologías Cloud y DevOps
- Metodologías Ágiles (Scrum, Kanban)
- Titulación (Mentalidad MVP)

---

## 💎 ¿Qué hace diferente a esta guía?
En lugar de bloques densos de texto teórito, cada archivo está estructurado en:
1. **Concepto Rápido:** Directo al grano.
2. **Analogía Práctica Empresarial:** Se compara código con logística de restaurantes, Excel, contabilidad o rentabilidad.
3. **Esquema Visual:** Uso nativo de gráficos `mermaid.js` para observar flujos de datos.
4. **Recursos Curados Quirúrgicamente:** Nada de "Rutas de 40 horas". Solo atajos, módulos exactos de Platzi y videos en YouTube del calibre de Midulive, HolaMundo o de 100 Segundos, para que el estudiante avance aceleradamente.

---

## 🛠️ Cómo correr el proyecto localmente

Este sitio estático de documentación usa **Astro** y **Starlight**. 
Si deseas correrlo de manera local para estudiar o añadir más temas:

### Requisitos previos
- Node.js instalado (v18+) o **[Bun](https://bun.sh/)** (el motor ultra rápido usado en este repo).

### Instalación y Ejecución

1. Clona o entra al proyecto de la guía.
2. Instala las dependencias:
   ```bash
   bun install
   ```
3. Levanta el servidor local:
   ```bash
   bun run dev
   ```
4. Abre tu navegador y dirígete a `http://localhost:4321`. En este punto podrás disfrutar de las alertas nativas, navegación responsiva y modo oscuro/claro integrados.

---

## ✏️ ¿Quieres editar un artículo?
Todo el contenido está guardado en archivos simples de Markdown (`.md` y `.mdx`) en el directorio:
`src/content/docs/`

Starlight tiene "recarga en caliente", lo que significa que al guardar un archivo `.md`, verás los cambios aparecer en menos de un segundo en tu navegador.

---
*Hecha con dedicación para evitar que el proceso de aprender código sea aburrido.*