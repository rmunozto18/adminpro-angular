//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Graficas
import { ChartsModule } from 'ng2-charts';
//Rutas
import { APP_ROUTES } from './app.routes';
//Componntes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';
//servicios
//import { SettingsService } from './services/service.index';
import { ServiceModule } from './services/service.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ChartsModule,
    ServiceModule
  ],
  providers: [
    //SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
