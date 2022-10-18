import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttonValues!: string[];
  @Output() buttonClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(buttonValue: string): void {
    this.buttonClick.emit(buttonValue);
  }

}
