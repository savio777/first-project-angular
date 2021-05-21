import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | null;
  @Input() color: string;

  constructor() {
    this.text = null;
    this.color = 'black';
  }

  ngOnInit(): void {}

  onClick(): void {
    console.log('click');
  }
}
