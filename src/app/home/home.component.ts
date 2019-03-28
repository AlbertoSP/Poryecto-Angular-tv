import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //the id passed by url
  id;
  //the element correspond to url id
  attachment: Array<any>;
  url = "https://orangetv.orange.es/pc/api/rtv/v1/";
  endpoint =
    "GetUnifiedList?client=json&external_category_id=SED_14462&filter_empty_categories=true&statuses=published";

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.http.get(this.url + this.endpoint).subscribe((result: any) => {
      this.attachment = result.response[this.id];
    });
  }
}
