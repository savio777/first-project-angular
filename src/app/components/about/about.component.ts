import { Component, OnInit } from '@angular/core';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title: string = 'Task Tracker';
  version: string = '0.0.1';

  iconBack = faArrowLeft;

  constructor() {}

  ngOnInit(): void {}
}
