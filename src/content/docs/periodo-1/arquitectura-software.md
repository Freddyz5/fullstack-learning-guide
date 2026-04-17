---
title: Principios de Diseño y Arquitectura
description: Diseño y Arquitectura de Software
sidebar:
  order: 4
---

## 🧠 ¿Qué es una API?
Una API es un intermediario que permite que dos sistemas se comuniquen.

👉 Ejemplo: tu app pide datos → API → base de datos → respuesta

## 📊 Esquema
```mermaid
flowchart LR
A[Frontend] --> B[API]
B --> C[Base de Datos]
C --> B
B --> A
```

## 🔑 Conceptos clave
- API
- Cliente / Servidor
- Arquitectura en capas

## 📚 Recursos
- Gratis: [RESTfulAPI.net](https://restfulapi.net/)
- Platzi: Curso de APIs REST (solo conceptos iniciales)
