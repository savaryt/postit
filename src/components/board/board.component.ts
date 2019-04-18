import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSelectionList } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as cuid from 'cuid';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit, OnDestroy {


  todo = [
    {
      task: 'Get up',
      assignee: 'Stephane',
      details: 'Before noon',
      duration: 0.5,
      progress: 0,
      key: cuid()
    },
  ];

  progress = [
    {
      task: 'Check email',
      assignee: 'Thibault',
      details: 'Everyday please',
      duration: 4,
      progress: 2.5,
      key: cuid()
    },
  ];

  done = [
    {
      task: 'Test app',
      assignee: 'Audrey',
      details: 'Thoughtfully',
      duration: 8,
      progress: 6,
      key: cuid()

    }
  ];

  assignees = [
    ...this.todo,
    ...this.done,
    ...this.progress,
  ].map(item => item.assignee);

  activeAssignees = this.assignees;

  @ViewChild('assigneeList') public assigneeList: MatSelectionList;
  form: FormGroup;
  assigneeSearchString = '';
  taskSearchString = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      task: [''],
      assignee: [''],
      details: [''],
      duration: [''],
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }

  onSelection(event, selected) {
    this.activeAssignees = selected.map(option => option.value);
  }
  isActive(assignee: string) {
    return this.activeAssignees.includes(assignee);
  }
  filterByAssignee(assignee: string) {
    if (this.assigneeSearchString !== '') {
      return assignee.toLowerCase().includes(this.assigneeSearchString.toLowerCase());
    } else {
      return true;
    }
  }
  filterByTask(task: string) {
    if (this.taskSearchString !== '') {
      return task.toLowerCase().includes(this.taskSearchString.toLowerCase());
    } else {
      return true;
    }
  }
  addTask() {
    this.todo.push({ ...this.form.value, key: cuid() });
  }
  removeTask(item) {
    this.todo = this.todo.filter(task => task.key !== item.key);
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.taskSearchString !== '') {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
      } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
    }
  }
}
