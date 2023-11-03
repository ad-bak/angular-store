import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { BlobComponent } from "./pages/blob/blob.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "blob",
    component: BlobComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
