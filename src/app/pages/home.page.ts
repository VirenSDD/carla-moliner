import { Component } from "@angular/core";

import { json } from "../data/survey";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
})
export class HomePage {
  json;

  constructor() {
    this.json = json;
  }

  sendData(result) {
    console.log(result);
  }
}
