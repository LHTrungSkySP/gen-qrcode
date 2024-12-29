import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: any[] = [];
  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }
}
