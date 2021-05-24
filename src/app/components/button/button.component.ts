import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | null;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
    this.text = null;
    this.color = 'black';
  }

  ngOnInit(): void {}

  onClick(): void {
    this.btnClick.emit();
  }
}
