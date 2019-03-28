import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home/home.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { SmallCarouselComponent } from "./small-carousel/small-carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    SmallCarouselComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
