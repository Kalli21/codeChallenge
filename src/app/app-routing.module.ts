import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaysComponent } from './pages/plays/plays.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {path: 'plays', component:PlaysComponent},
  {path: 'teams/:home_conference/:id', component:TeamsComponent},
  {path: 'games', component:GamesComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'teams'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
