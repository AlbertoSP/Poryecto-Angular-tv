import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  element;
  filteredEpisode: Array<any>;
  sidebarShowHide = "sidebar";
  moveCarousel = "";
  carousel_ele: Array<any>;
  url = "https://orangetv.orange.es/pc/api/rtv/v1/";
  endpoint =
    "GetUnifiedList?client=json&external_category_id=SED_14462&filter_empty_categories=true&statuses=published";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //resuesting api and initializing arrays
    this.http.get(this.url + this.endpoint).subscribe((result: any) => {
      this.filteredEpisode = this.carousel_ele = result.response;
    });
  }
  //showing sidebar to filter episode
  openNav() {
    this.sidebarShowHide = "sidebar1";
    this.moveCarousel = "carousel_moved";
  }
  //closing sidebar
  closeNav() {
    this.sidebarShowHide = "sidebar";
    this.moveCarousel = "";
  }
  //filtering episodes
  filter(query: string) {
    //search if value entred by user contain in one of episode title
    this.filteredEpisode = query
      ? this.carousel_ele.filter(e =>
          e.name.toLowerCase().includes(query.toLowerCase())
        )
      : this.carousel_ele;
  }
}
