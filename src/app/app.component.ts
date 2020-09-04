import { Component, Injectable } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';

export interface Matrix {
  C0: number;
  C1: number;
  C2: number;
  C3: number;
}
const ELEMENT_DATA: Matrix[] = [
  { C0: 1, C1: 2, C2: 0, C3: 1 },
  { C0: 1, C1: 2, C2: 0, C3: 1 },
  { C0: 1, C1: 2, C2: 0, C3: 1 },
  { C0: 1, C1: 2, C2: 0, C3: 1 },
];
var test = [[1, 0, 0, 0], [4, 1, 1, 1], [1, 2, 1, 0], [2, 2, 1, 0]];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-game-app';
  displayedColumns = ['C0', 'C1', 'C2', 'C3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  heroes = test;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    // alert(event.code);
    this.Move(this.dataSource, event.code);

  }
  constructor(private matDialog: MatDialog) {}
  openDialog() {

    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogComponent, dialogConfig);
}
Move(itemArray, type) {
  var temp = itemArray.data;
  var a = test;
  // temp.forEach((element,index) => {
  //   a[index]=[];
  //   a[index].push (element.C0,element.C1,element.C2,element.C3);
  // });
  switch (type) {
    case "ArrowUp":
      var insertNew: number[] = [];
      var dirty = false;
      for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 3; i++) {
          var item1 = a[i][j], item2 = a[i + 1][j];
          if (item1 == 0) {
            a[i][j] = a[i + 1][j];
            a[i + 1][j] = 0;
            dirty = true;
          }
          else if (item1 == item2) {
            var x = a[i][j], y = a[i + 1][j];
            a[i][j] = x + y;
            a[i + 1][j] = 0;
            dirty = true;
          }
        }
      }
      if (dirty == false)
        // this.openDialog();
        alert("Game Over");
      for (var i = 0; i < 4; i++)
        if (a[3][i] == 0)
          insertNew.push(i);
      var item = Math.floor(Math.random() * 2) + 1;
      var pos = Math.floor(Math.random() * insertNew.length) + 1;
      a[3][insertNew[pos - 1]] = item;
      test = a;
    
      break;
    case "ArrowDown":
      var insertNew: number[] = [];
      var dirty = false;
      for (var j = 0; j < 4; j++) {
        for (var i = 3; i > 0; i--) {
          var item1 = a[i][j], item2 = a[i - 1][j];
          if (item1 == 0) {
            a[i][j] = a[i - 1][j];
            a[i - 1][j] = 0;
            dirty = true;
          }
          else if (item1 == item2) {
            var x = a[i][j], y = a[i - 1][j];
            a[i][j] = x + y;
            a[i - 1][j] = 0;
            dirty = true;
          }
        }
      }
      if (dirty == false)
      // this.openDialog();
       alert("Game Over");
      for (var i = 0; i < 4; i++)
        if (a[0][i] == 0)
          insertNew.push(i);
      var item = Math.floor(Math.random() * 2) + 1;
      var pos = Math.floor(Math.random() * insertNew.length) + 1;
      a[0][insertNew[pos - 1]] = item;
      test = a;
      break;
    case "ArrowRight":
      var insertNew: number[] = [];
      var dirty = false;
      for (var i = 0; i < 4; i++) {
        for (var j = 3; j > 0; j--) {
          var item1 = a[i][j], item2 = a[i][j-1];
          if (item1 == 0) {
            a[i][j] = a[i][j-1];
            a[i][j-1] = 0;
            dirty = true;
          }
          else if (item1 == item2) {
            var x = a[i][j], y = a[i][j-1];
            a[i][j] = x + y;
            a[i][j-1] = 0;
            dirty = true;
          }
        }
      }
      if (dirty == false)
      // this.openDialog();
      alert("Game Over");
      for (var i = 0; i < 4; i++)
        if (a[i][0] == 0)
          insertNew.push(i);
      var item = Math.floor(Math.random() * 2) + 1;
      var pos = Math.floor(Math.random() * insertNew.length) + 1;
      a[insertNew[pos - 1]][0] = item;
      test = a;
      break;
    case "ArrowLeft":
      var insertNew: number[] = [];
      var dirty = false;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          var item1 = a[i][j], item2 = a[i][j+1];
          if (item1 == 0) {
            a[i][j] = a[i][j+1];
            a[i][j+1] = 0;
            dirty = true;
          }
          else if (item1 == item2) {
            var x = a[i][j], y = a[i][j+1];
            a[i][j] = x + y;
            a[i][j+1] = 0;
            dirty = true;
          }
        }
      }
      if (dirty == false)
      // this.openDialog();
      alert("Game Over");
      for (var i = 0; i < 4; i++)
        if (a[i][3] == 0)
          insertNew.push(i);
      var item = Math.floor(Math.random() * 2) + 1;
      var pos = Math.floor(Math.random() * insertNew.length) + 1;
      a[insertNew[pos - 1]][3] = item;
      test = a;    
      break;
      default: break;
  }
}
}

