import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { PrimeNgModule } from "../../../prime-ng/prime-ng.module";

import { PLATFORM_ID, Inject } from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-project-dialog',
  standalone: true,
    imports: [
        PrimeNgModule
    ],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent implements OnInit {

  visible: boolean = false;
  images?: any[];
  header: string = '';
  tech: string = '';
  text: string = '';
  imgUrl: string = '/assets/home.jpg';

  responsiveOptions: any[] | undefined;

  @HostBinding('style.--img-url') backgroundImage: string = `url('${this.imgUrl}')`;

  @Input() index: number = 0;
  @Input() projectsName: any;
  @Input() projectsText: any;
  @Input() projectsTech: any;
  @Input() set imageUrl(value: string) {
    this.imgUrl = value;
    this.backgroundImage = `url('${this.imgUrl}')`;
  };

  constructor(private renderer: Renderer2, private el: ElementRef,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.header = this.projectsName[this.index+1];
    this.text = this.projectsText[this.index+1];
    this.tech = this.projectsTech[this.index+1];

    this.imageUrl = this.imgUrl;

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  loadImagesAndShowDialog() {
    this.images = [];
    this.getImages().then(() => {
      this.showDialog();
    });
  }

  showDialog() {
    this.visible = true;
  }

  getImages(): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      const folderName = (this.index + 1).toString();

      const loadNextImage = (index: number) => {
        const imageUrl = `/assets/${folderName}/${index}.jpg`;
        const imageUrlPng = `/assets/${folderName}/${index}.png`;

        this.createImageElement(imageUrl)
          .then((imageElement) => {
            this.images!.push({
              name: 'Bamboo Watch',
              description: 'Product Description',
              image: `${folderName}/${index}.jpg`
            });

            loadNextImage(index + 1);
          })
          .catch((error) => {
            this.createImageElement(imageUrlPng)
              .then((imageElement) => {
                this.images!.push({
                  name: 'Bamboo Watch',
                  description: 'Product Description',
                  image: `${folderName}/${index}.png`
                });

                loadNextImage(index + 1);
              })
              .catch((error) => {
                resolve();
              });
          });
      };

      loadNextImage(1);
    });
  }


  createImageElement(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject();
      };
    });
  }

}
