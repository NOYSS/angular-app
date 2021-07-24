import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingComponent } from './components/app-setting/app-setting.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [AppSettingComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
