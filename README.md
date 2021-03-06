# PwaPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Run locally as PWA

When we use `ng serve`, the application will not work with service
workers. For this, we must use a separate HTTP server:

- `npm run build:prod`
- `npm run serve:pwa`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## IDE Setup

### Visual Studio Code

The following plugins are recommended:

- **Angular Language Service**: Angular template support
- **Prettier - Code formatter**: Automatic code formatting
- **TSLint**: Linting support for IDE

The following workspace settings (`.vscode/settings.json`) are recommended:

    {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.codeActionsOnSave": {
        "source.fixAll.tslint": true
      },
      "editor.rulers": [80]
    }

These settings will make Visual Studio Code automatically format code (using Prettier)
and auto-fix linting issues on save.

## Deployment

The app will be deployed to _Firebase Hosting_:

1. Build and deploy app: `ng deploy`
2. Access at one of the following links:
   - <https://inftec-pwa-poc.firebaseapp.com/>
   - <https://inftec-pwa-poc.web.app/>

### Github Actions

#### Initial Setup

- Create firebase token: `firebase login:ci`
- Goto Settings of GibHub Repo and add Secret _FIREBASE_TOKEN_ with the generated token as value
- Adapt workflow yaml to expose token as ENV variable

## Installation

### iOS

To add the PWA to the home screen, follow these steps:

1. Open application in **Safari** browser
2. Click share button
3. Select _Add to Homescreen_
4. Edit name if desired and confirm
