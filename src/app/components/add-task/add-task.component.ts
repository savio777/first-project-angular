import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../../ITasks';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  showAddTask: boolean = false;
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

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
