import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
public blogs:any[]|undefined;
  constructor() { }

  ngOnInit(): void {
    this.blogs=[{},{},{},{},{},{},{},{},{},{},{},{}]
  }

}
