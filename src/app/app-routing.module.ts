import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { Top5Component, AuthGuard } from './pages/top5/top5.component';
import { HistogramaComponent } from './pages/histograma/histograma.component';
import { LoginComponent, tokenKey } from './pages/login/login.component'
import { OnlyBar } from './components/navigation/navbar/navbar.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'top5', component: Top5Component, canActivate:[AuthGuard] },
  { path: 'histograma', component: HistogramaComponent, canActivate:[OnlyBar]},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
