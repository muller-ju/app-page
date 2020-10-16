import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'symphonie-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() contentText: string;
  constructor() { }
  @Input()
  color: 'btn-blue' | 'btn-indigo' = 'btn-indigo';
  ngOnInit(): void {
  }
  public get classes(): string[] {

    return [this.color];
  }
}
