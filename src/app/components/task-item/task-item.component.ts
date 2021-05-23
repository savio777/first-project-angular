import { Component, OnInit, Input } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../ITasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}