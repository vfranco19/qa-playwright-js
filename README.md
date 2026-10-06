# qa-playwright-js

Pruebas E2E con [Playwright](https://playwright.dev/) + JavaScript aplicando **Page Object Model (POM)**.

## Stack

- Playwright Test
- JavaScript (ES Modules)
- Page Object Model
- Reportes HTML, trazas y capturas automáticas

## Estructura

```text
qa-playwright-js/
├── pages/           # Page Objects
├── tests/           # Casos de prueba
├── utils/           # Helpers reutilizables
├── fixtures/        # Fixtures personalizados
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Instalación

```bash
npm ci
npx playwright install
```

## Ejecución

```bash
# Modo headless
npm test

# Modo UI
npm run test:ui

# Modo headed
npm run test:headed

# Ver reporte HTML
npm run report
```

## Notas

- Usa `baseURL` en `playwright.config.js` para centralizar rutas.
- Genera evidencia (screenshot/trace) solo en fallo, configurable por entorno.
- Estructura pensada para escalar a múltiples páginas y flujos.

## Autor

Víctor Samuel Franco Álvarez — [GitHub](https://github.com/vfranco19)
