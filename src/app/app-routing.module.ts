import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { FormularioComponent } from './formulario/formulario/formulario.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',

  },
  {
    path: 'formulario',
    loadChildren: () => 
      import("./formulario/formulario.module").then((m) => m.FormularioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
