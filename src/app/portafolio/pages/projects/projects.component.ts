import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {PrimeNgModule} from "../../../prime-ng/prime-ng.module";
import {ProjectDialogComponent} from "../../components/project-dialog/project-dialog.component";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    PrimeNgModule,
    ProjectDialogComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  visible: boolean = false;

  projectsLength = 6;
  projects = Array.from({ length: 6 }, (_, index) => index);
  _netActive: boolean = false;
  _flutterActive: boolean = false;
  _angularActive: boolean = false;

  projectsName = {
    1: 'CPM Scientifica',
    2: 'ChopiLand',
    3: 'mHealthApp',
    4: 'SubzeroApi',
    5: 'Encuestador - Notificador',
    6: "Angular's Modules"
  };

  projectsImages = [
    '/assets/img/net-health2.jpg',
    '/assets/img/net-card.jpg',
    '/assets/img/flutter-mHealth.png',
    '/assets/img/net-api.png',
    '/assets/img/flutter-maps.png',
    "/assets/img/angular3.jpg"
  ];

  projectsTech = {
    1: '.NET MVC5 C#',
    2: '.Net Core C#, e-commerce',
    3: 'Flutter & Dart, Python & Flask, mHealth',
    4: '.Net Core, Postgres, API Rest, Microservices',
    5: 'Flutter & Dart, JSON, .NET Framework & WebForms',
    6: "Angular & TypeScript, Node.js, MongoDB"
  };

  projectsText = {
    1: 'Sistema destinado a administrar y supervisar\n' +
      'el inventario de equipos médicos.',
    2: 'eCommerce para la venta de artículos varios.',
    3: 'Aplicación móvil para el estudio de lesiones\n' +
      'en la piel y software para la depuración de imágenes,\n' +
      'detección y posterior clasificación de lunares.',
    4: 'Software con autenticación, reportes\n' +
      'y modelación para controlar un sistema de reparto y\n' +
      'almacenamiento de productos congelados.',
    5: 'Aplicaciones móviles cartográficas, una para\n' +
      'recoger información asociada a propiedades geolocalizables\n' +
      'y otra para notificar que la encuesta a dichas propiedades fue\n' +
      'realizada.',
    6: 'Módulo de autenticación con JWT más backend\n' +
      'en Node.js con Express y MongoDB para el registro y login de\n' +
      'usuarios.\n' +
      'Aplicación para la visualización y gestión de mapas usando\n' +
      'MapBox.\n' +
      'Módulo para representar datos mediante gráficas con\n' +
      'NgChartsModule.\n' +
      'Módulos para la búsqueda y gestión de países e imágenes usando\n' +
      'APIs como API Rest Countries y API Giphy respectivamente.\n'
  };

  showDialog() {
    this.visible = true;
  }

  filter(index: number) {
    if(index == 1) {
      this._flutterActive = !this._flutterActive;
    } else if (index == 2) {
      this._netActive = !this._netActive;
    } else {
      this._angularActive = !this._angularActive;
    }

    let _numRep: number = 0;
    let _repArray: number[] = [];
    if (this._flutterActive) {
      _numRep = 2;
      _repArray = [2, 4];
    }
    if (this._netActive) {
      _numRep = _numRep + 3;
      _repArray = _repArray.concat([0, 1, 3]);
    }
    if (this._angularActive) {
      _numRep = _numRep + 1;
      _repArray = _repArray.concat([5]);
    }

    if(!this._flutterActive && !this._netActive && !this._angularActive) {
      this.projectsLength = 6;
      this.projects = Array.from({ length: 6 }, (_, index) => index);
    } else {
      this.projectsLength = _numRep;
      this.projects = _repArray;
    }

  }



}
