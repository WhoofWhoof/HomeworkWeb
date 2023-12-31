import { NgModule } from "@angular/core";
import { LoginPageComponent } from "../login/login-page.component";
import { routing } from "./login.routing";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClickableIconComponent } from "../login/clickable-icon/clickable-icon.component";
import { SuportLoginPageComponent } from "../login/support/support-page.component";

@NgModule(
  {
    imports: [
      routing,
      CommonModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      ReactiveFormsModule,
      
    ],
    declarations: [
      LoginPageComponent,
      ClickableIconComponent,
      SuportLoginPageComponent
    ],
    exports: [
      LoginPageComponent,
    ],
    
  })

  export class LoginModule { }