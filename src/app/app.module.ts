import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AnunciosComponent } from './paginas/anuncios/anuncios.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { CheckoutComponent } from './paginas/checkout/checkout.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FeaturesComponent } from './paginas/features/features.component';
import { PhotosComponent } from './paginas/photos/photos.component';
import { ShopComponent } from './paginas/shop/shop.component';
import { LoginComponent } from './bloques/login/login.component';
import { MenuComponent } from './bloques/menu/menu.component';
import { CarrocompraComponent } from './bloques/carrocompra/carrocompra.component';
import { PasswordComponent } from './bloques/password/password.component';
import { PerfilComponent } from './bloques/perfil/perfil.component';
import { RegistroComponent } from './bloques/registro/registro.component';
import { SiguenosComponent } from './bloques/siguenos/siguenos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AnunciosComponent,
    CategoriasComponent,
    CheckoutComponent,
    ContactoComponent,
    FeaturesComponent,
    PhotosComponent,
    ShopComponent,
    LoginComponent,
    MenuComponent,
    CarrocompraComponent,
    PasswordComponent,
    PerfilComponent,
    RegistroComponent,
    SiguenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
