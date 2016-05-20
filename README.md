# demo-another-angle

Demo app for Another Angle presentation

## See in action

You can see this application on the following Github Page : [sedona-solutions.github.io/demo-another-angle/](http://sedona-solutions.github.io/demo-another-angle/)

## Install

### Prerequisites

This app needs [bower](http://bower.io/#install-bower) installed in order to install the few dependencies.

### Process

To install the dependencies, simply run:

    $ bower install

Then, serve the root folder using your favorite tool. (nginx, Apache, http-server...)

## How to read this repository

Each branch of this repository represent a stage in an evolution from straight `Angular 1 / ES5` to `Angular 2 / Typescript`. Here is the suggested order of branches to read it:

- [`es5`](https://github.com/Sedona-Solutions/demo-another-angle/tree/es5) contains the app as a 2-file structure, using ES5 with no components or service and static data
- [`es5-http`](https://github.com/Sedona-Solutions/demo-another-angle/tree/es5-http) adds a service that requests a previously static list using an HTTP call
- [`es6`](https://github.com/Sedona-Solutions/demo-another-angle/tree/es6) moves from an es5 syntax to es6
