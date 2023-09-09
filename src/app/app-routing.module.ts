import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AnunciosComponent } from './paginas/anuncios/anuncios.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { CheckoutComponent } from './paginas/checkout/checkout.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FeaturesComponent } from './paginas/features/features.component';
import { PhotosComponent } from './paginas/photos/photos.component';
import { ShopComponent } from './paginas/shop/shop.component';
import { LoginComponent } from './bloques/login/login.component';

const routes: Routes = [

  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'anuncios', component: AnunciosComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'features', component: FeaturesComponent},
  {path:'photos', component: PhotosComponent},
  {path:'shop', component: ShopComponent},
  {path:'**', pathMatch: 'full', redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
