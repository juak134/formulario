import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { AuthGuard } from '../guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
