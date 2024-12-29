import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'lht-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {
  @Input() contentTemp!: TemplateRef<any>;
  @Input() style: object = {};
  @Input() modal: boolean = true;

  _isVisible = false;
  @Input() set isVisible(value: boolean) {
    if(this._isVisible !== value) {
      this._isVisible = value;
      this.isVisibleChange.emit(value);
    }
  }
  get isVisible(): boolean {
    return this._isVisible;
  }
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
}
