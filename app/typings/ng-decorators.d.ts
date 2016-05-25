declare module "ng-decorators/bootstrap" {
    export function bootstrap(component: any) : void;
}

declare module "ng-decorators/Component" {
    export function Component(obj: any) : (ctrl: any) => void;
}

declare module "ng-decorators/Module" {
    export function Module(obj: any) : (ctrl: any) => void;
}

declare module "ng-decorators/Routes" {
    export function Routes(obj: any) : (ctrl: any) => void;
}

declare module "ng-decorators/Injectable" {
    export function Injectable() : (ctrl: any) => void;
}

