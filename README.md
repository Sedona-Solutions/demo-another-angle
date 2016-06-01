# demo-another-angle

Demo app for Another Angle presentation

## See in action

You can see this application on the following Github Page : [sedona-solutions.github.io/demo-another-angle/](http://sedona-solutions.github.io/demo-another-angle/)

## Install

### Prerequisites

This app needs [bower](http://bower.io/#install-bower) installed in order to install the few dependencies.

### Process

To install the dependencies, simply run:

    $ npm install

Then, run the lite-server using ``npm start``

## How to read this repository

Each branch of this repository represent a stage in an evolution from straight `Angular 1 / ES5` to `Angular 2 / Typescript`. Here is the suggested order of branches to read it:

- [`es5`](https://github.com/Sedona-Solutions/demo-another-angle/tree/es5) contains the app as a 2-file structure, using ES5 with no components or service and static data
- [`SoC`](https://github.com/Sedona-Solutions/demo-another-angle/tree/SoC) refactoring for separation of concerns thanks to the `service` and `directive` angular helpers, and use the built-in `$http` service to make an Ajax request
- [`es6`](https://github.com/Sedona-Solutions/demo-another-angle/tree/es6) first moves from an es5 syntax to es6 using class and arrow functions
- [`components`](https://github.com/Sedona-Solutions/demo-another-angle/tree/components) refactoring with a component approach
- [`systemjs`](https://github.com/Sedona-Solutions/demo-another-angle/tree/systemjs) refactoring using SystemJS loader and jspm (instead of bower)
- [`decorators`](https://github.com/Sedona-Solutions/demo-another-angle/tree/decorators) refactoring using angularjs-decorators
- [`ts`](https://github.com/Sedona-Solutions/demo-another-angle/tree/ts) use TypeScript instead of Babel / es6
