import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/ITasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a title task!');
      return;
    } else if (!this.day) {
      alert('Please add a date!');
      return;
    }

    const newTask = { text: this.text, day: this.day, reminder: this.reminder };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
