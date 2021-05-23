import { Component, OnInit } from '@angular/core';

import { Task } from '../../ITasks';
import TASKS from '../../mock-task-test';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
