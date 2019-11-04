import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];
  page: Number = 1;
  
  constructor(private noticiasService: NoticiasService) {}
  
  ngOnInit() {
    this.noticiasService.getTopHeadlines(this.page.valueOf())
    .subscribe( resp => {
      console.log("noticias", resp.totalResults);
      this.noticias.push(...resp.articles);
    });
  }

  loadData(event) {
    this.page = this.page.valueOf() + 1;
    this.noticiasService.getTopHeadlines(this.page.valueOf())
    .subscribe( resp => {
        this.noticias.push(...resp.articles);
        event.target.complete();
        if (resp.articles.length == 0) {
          event.target.disabled = true;
        }
      });;
  }
}
