import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CarouselComponent } from "./carousel/carousel.component";

const routes: Routes = [
  {
    path: "home/:id",
    component: HomeComponent
  },
  {
    path: "",
    component: CarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
