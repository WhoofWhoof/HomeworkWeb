import { ModuleWithProviders } from "@angular/core";
import { LoginPageComponent } from "../login/login-page.component";
import { LoginModule } from "./login.module";
import { RouterModule, Routes } from "@angular/router";
import { SuportLoginPageComponent } from "../login/support/support-page.component";

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: "support",
        component: SuportLoginPageComponent
    }
];

export const routing: ModuleWithProviders<LoginModule> = 
    RouterModule.forChild(routes);