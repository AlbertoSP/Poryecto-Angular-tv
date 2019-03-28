import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-small-carousel",
  templateUrl: "./small-carousel.component.html",
  styleUrls: ["./small-carousel.component.css"]
})
export class SmallCarouselComponent implements OnInit {
  //all element from api
  elements: Array<any>;
  url = "https://orangetv.orange.es/pc/api/rtv/v1/";
  endpoint =
    "GetUnifiedList?client=json&external_category_id=SED_14462&filter_empty_categories=true&statuses=published";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //requesting the api
    this.http.get(this.url + this.endpoint).subscribe((result: any) => {
      //sotring the elements returned from api
      this.elements = result.response;
    });
  }
}
