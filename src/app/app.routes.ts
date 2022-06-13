import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./components/client-views/about-us/about-us.component";
import { HomeComponent } from "./components/client-views/home/home.component";
import { ProductsComponent } from "./components/client-views/products/products.component";
import { ProfileComponent } from "./components/client-views/profile/profile.component";
import { ShoppingCarComponent } from "./components/client-views/shopping-car/shopping-car.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/client-views/sign-up/sign-up.component";
import { HomeAdminComponent } from "./components/admin/home-admin/home-admin.component";
import { ProductsAdminComponent } from "./components/admin/products-admin/products-admin.component";
import { OrdersAdminComponent } from "./components/admin/orders-admin/orders-admin.component";
import { ClientsAdminComponent } from "./components/admin/clients-admin/clients-admin.component";
import { ProvidersAdminComponent } from "./components/admin/providers-admin/providers-admin.component";

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home-admin', component: HomeAdminComponent},
    { path: 'products-admin', component: ProductsAdminComponent },
    { path: 'orders-admin', component: OrdersAdminComponent },
    { path: 'clients-admin', component: ClientsAdminComponent },
    { path: 'providers-admin', component: ProvidersAdminComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'shopping-car', component: ShoppingCarComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const ROUTING = RouterModule.forRoot(ROUTES, {useHash:true});