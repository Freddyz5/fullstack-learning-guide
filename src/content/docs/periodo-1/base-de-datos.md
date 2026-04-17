---
title: Fundamentos de Base de Datos
description: Introducción a bases de datos
sidebar:
  order: 3
---

## 🧠 ¿Qué es una base de datos?
Es un lugar donde guardas información organizada.

## 📊 Esquema
```mermaid
erDiagram
USERS {
  string id
  string name
}
ORDERS {
  string id
  string userId
}
USERS ||--o{ ORDERS : tiene
```

## 🔑 Conceptos clave
- Tablas
- Filas
- Relaciones
- SQL básico

## 📚 Recursos
- Gratis: [SQLBolt - Aprende SQL interactivo](https://sqlbolt.com/)
- Platzi: Curso básico de SQL
