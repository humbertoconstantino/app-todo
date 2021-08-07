import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public taskList: Array<TaskList> = [
   {task: "teste", checked:true}
  ];

  public deleteItemTaskList(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Tem certeza que deseja Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }


}
