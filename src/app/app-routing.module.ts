import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenCodeComponent } from './components/layout-components/gen-code/gen-code.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/layout-components/gen-code/gen-code.module').then(m => m.GenCodeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
