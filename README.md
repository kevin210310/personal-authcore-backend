<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# personal-authcore-backend
Sistema de autenticación y autorización robusto con gestión de usuarios, tokens JWT y control de acceso basado en roles (RBAC)

## ✨ Características

- 🔑 Registro y login de usuarios
- 🎫 Autenticación mediante JWT (Access & Refresh Tokens)
- 👥 Gestión completa de usuarios (CRUD)
- 🛡️ Control de acceso basado en roles (RBAC)
- 📧 Verificación de email
- 🔄 Recuperación de contraseña
- 🔒 Encriptación segura de contraseñas (bcrypt)
- 📝 Logging de actividades
- 🚀 Rate limiting
- 🔐 OAuth 2.0 (Google, Facebook, GitHub)
- 📱 Autenticación de dos factores (2FA)

## 🛠️ Tecnologías

- **Runtime:** Node.js
- **Framework:** NestJS
- **Base de datos:** PostgreSQL
- **ORM:** TypeORM
- **Autenticación:** JWT
- **Validación:** class-validator
- **Testing:** Jest
- **Documentación:** Swagger

## 📦 Requisitos Previos

- Node.js >= 22.14.0
- PostgreSQL >= 14.4
- npm
- Docker

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/auth-backend.git
cd auth-backend
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Copia el archivo de variables de entorno:
```bash
cp .env.example .env
```

4. Configura las variables de entorno (ver sección de Configuración)

5. Ejecuta las migraciones de base de datos:
```bash
npm run migrate
# o
npm run db:push
```

6. Seed de datos iniciales:
```bash
npm run seed
```

## 💻 Uso

### Modo Desarrollo
```bash
npm run dev
```

### Modo Producción
```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto
```
auth-backend/
├── src/
│   ├── config/          # Configuraciones
│   ├── constants/       # Constantes
│   ├── middlewares/     # Middlewares (auth, validation, etc)
│   ├── models/          # Modelos de base de datos
│   ├── routes/          # Rutas de la API
│   ├── services/        # Lógica de negocio
│   ├── utils/           # Utilidades
│   ├── validators/      # Esquemas de validación
│   └── main.ts           # Configuración de Nest
├── test/               # Tests unitarios e integración
├── .env.example         # Ejemplo de variables de entorno
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## 🧪 Testing

Ejecutar todos los tests:
```bash
npm test
```

Tests con cobertura:
```bash
npm run test:coverage
```

Tests en modo watch:
```bash
npm run test:watch
```

Tests end-to-end:
```bash
npm run test:e2e
```

## 🚢 Deployment
## 🔒 Seguridad

- ✅ Contraseñas hasheadas con bcrypt (salt rounds: 12)
- ✅ JWT con expiración corta (1 hr)
- ✅ Refresh tokens con rotación
- ✅ Rate limiting para prevenir ataques de fuerza bruta
- ✅ Validación de inputs con sanitización
- ✅ Headers de seguridad (Helmet)
- ✅ CORS configurado correctamente
- ✅ Prevención de SQL Injection
- ✅ Protección contra XSS

### Recomendaciones Adicionales

- Habilitar HTTPS en producción
- Implementar 2FA para cuentas sensibles
- Configurar logs de auditoría
- Realizar auditorías de seguridad periódicas
- Mantener dependencias actualizadas

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Código de Conducta

Este proyecto sigue el [Contributor Covenant](https://www.contributor-covenant.org/). Por favor, lee el código de conducta antes de contribuir.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Kevin Abarca Gracia
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu-email@example.com

## 🙏 Agradecimientos

- [Passport.js](http://www.passportjs.org/)
- [JWT.io](https://jwt.io/)
- [Express.js](https://expressjs.com/)

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor:
- Abre un [issue](https://github.com/tu-usuario/auth-backend/issues)
- Contacta por email: soporte@tuapp.com

---

⭐️ Si este proyecto te fue útil, considera darle una estrella en GitHub
