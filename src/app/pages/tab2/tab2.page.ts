import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment, {static:false}) segment: IonSegment;

  noticias: Article[] = [];

  categorias = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.getTopHeadLinesCategoria(this.categorias[0])
                        .subscribe( resp => {
                          this.noticias = resp.articles;
                        });;;
  }

  segmentChanged(event) {
    this.noticiasService.getTopHeadLinesCategoria(event.detail.value)
                        .subscribe( resp => {
                          this.noticias = resp.articles;
                        });;
  }
}
