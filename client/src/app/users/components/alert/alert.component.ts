import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() alertClose = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
    this.message = 'alert!!';
  }
  onClose() {
    this.alertClose.emit();
  }
}
