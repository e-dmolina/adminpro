import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/service.index';

declare function initPlugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor( public _ajustes:SettingsService ) { }

  ngOnInit() {
    initPlugins();
  }

}
