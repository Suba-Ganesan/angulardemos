import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EcomComponent } from './ecom/ecom.component';
import { CartComponent } from './ecom/cart/cart.component';
import { EcomproductComponent } from './ecom/ecomproduct/ecomproduct.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PostsComponent } from './posts/posts.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'server', component: ServerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'ecom', component: EcomComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'tforms', component: TformsComponent },
  { path: 'rforms', component: RformsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductsComponent,
    ProductComponent,
    EcomComponent,
    CartComponent,
    EcomproductComponent,
    NumbersComponent,
    BasicHighlightDirective,
    AccountsComponent,
    AccountComponent,
    NewaccountComponent,
    HomeComponent,
    ObservablesComponent,
    TformsComponent,
    RformsComponent,
    PostsComponent,
  
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}