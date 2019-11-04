import { Component, ViewChild } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment, {static:false}) segment: IonSegment;
  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;

  noticias: Article[] = [];
  page: Number = 1;
  categoria: string;

  categorias = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.categoria = this.categorias[0];
    this.noticiasService.getTopHeadLinesCategoria(this.categoria, this.page.valueOf())
                        .subscribe( resp => {
                          this.noticias.push(...resp.articles);
                        });;;
  }

  segmentChanged(event) {
    this.noticias = [];
    this.page = 1;
    this.categoria = event.detail.value;
    this.infiniteScroll.disabled = false;
    this.noticiasService.getTopHeadLinesCategoria(this.categoria, this.page.valueOf())
      .subscribe( resp => {
        this.noticias.push(...resp.articles);
      });;
  }

  loadData(event) {
    this.page = this.page.valueOf() + 1;
    this.noticiasService.getTopHeadLinesCategoria(this.categoria, this.page.valueOf())
    .subscribe( resp => {
        this.noticias.push(...resp.articles);
        event.target.complete();
        if (resp.articles.length == 0) {
          event.target.disabled = true;
        }
      });;
  }
}
