import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/client-views/home/home.component';
import { AboutUsComponent } from './components/client-views/about-us/about-us.component';
import { ProductsComponent } from './components/client-views/products/products.component';
import { CarouselComponent } from './components/client-views/carousel/carousel.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCarComponent } from './components/client-views/shopping-car/shopping-car.component';
import { ProfileComponent } from './components/client-views/profile/profile.component';
import { SignUpComponent } from './components/client-views/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { OrdersAdminComponent } from './components/admin/orders-admin/orders-admin.component';
import { ProductsAdminComponent } from './components/admin/products-admin/products-admin.component';
import { ClientsAdminComponent } from './components/admin/clients-admin/clients-admin.component';
import { ProvidersAdminComponent } from './components/admin/providers-admin/providers-admin.component';

import { AppRoutingModule } from './app-routing.module';
import { ROUTING } from './app.routes';

import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    CarouselComponent,
    FooterComponent,
    ShoppingCarComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent,
    HomeAdminComponent,
    OrdersAdminComponent,
    ProductsAdminComponent,
    ClientsAdminComponent,
    ProvidersAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ROUTING,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
