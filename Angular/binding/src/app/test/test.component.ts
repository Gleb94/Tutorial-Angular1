import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '
  <h2>
    Welcome {{name}}
  </h2>
  <h2 [style.color] ="hasError? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color] = "hightlightColor">Style Binding2</h2>
  <h2 [ngStyle] = "titleSryles">Style Binding3</h2>',',
  styleUrls: []
})
export class TestComponent implements OnInit {
  public name = "codevolution";
  public hasError = false;
  public isSpeciak = true;
  public hightlightColor = "orenge";
  public titleSryles = {
    color: "blue",
    frontStyle: "Italic"
  }
  constructor(){}
  
  ngOnInit(){

  }
}
