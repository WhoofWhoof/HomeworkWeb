import { ModuleWithProviders } from "@angular/core";
import { LoginModule } from "./login.module";
import { RouterModule, Routes } from "@angular/router";
import { SignUpPageComponent } from "../sign-up/sign-up-page.component";
import { LoginPageComponent } from "../login/login-page.component";

const routes: Routes = [
    {
        path: '',
        component: SignUpPageComponent
    },
];

export const routing: ModuleWithProviders<LoginModule> = 
    RouterModule.forChild(routes);