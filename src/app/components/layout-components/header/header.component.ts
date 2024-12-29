import { Component, OnInit } from '@angular/core';
import { drag_img_left_to_right } from 'assets/layout/styles/meo-library/img_move'

@Component({
  selector: 'lht-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    drag_img_left_to_right("text-move")
  }

}
