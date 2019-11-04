import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: Number;


  constructor(private iab: InAppBrowser, 
              public actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing) { }

  ngOnInit() {}

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {
    console.log("action-sheet");
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Compartir',
        cssClass: 'action-dark',
        icon: 'share',
        handler: () => {
          this.socialSharing.share(
            // this.
            // this.
            // this.
            // this.
          );
        }
      }, {
        text: 'Favorite',
        cssClass: 'action-dark',
        icon: 'star',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        cssClass: 'action-dark',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}


