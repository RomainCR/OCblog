import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  articles = [
    {
      title: 'Bonjour',
      content: 'blablabla',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Bonjour2',
      content: 'blablabla',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Bonjour3',
      content: 'blablabla',
      loveIts: 0,
      created_at: new Date()
    },
  ];

  constructor() {

  }

}
