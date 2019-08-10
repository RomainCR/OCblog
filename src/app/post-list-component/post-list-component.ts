import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "post-list-component",
  templateUrl: "./post-list-component.html",
  styleUrls: ["./post-list-component.scss"]
})
export class PostListComponent implements OnInit {
  @Input() articleTitle: string;
  @Input() articleContent: string;
  @Input() articleDate: Date;
  loveIts: number = 0;

  constructor() {}

  ngOnInit() {}

  onLove() {
    this.loveIts += 1;
    console.log(this.loveIts);
  }

  onDont() {
    this.loveIts -= 1;
    console.log(this.loveIts);
  }

  getColor() {
    if (this.loveIts > 0) {
      return "green";
    } else if (this.loveIts < 0) {
      return "red";
    }
  }
}
