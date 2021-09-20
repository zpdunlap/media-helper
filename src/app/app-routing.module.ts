import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main/main.component';
import { WatchTogetherComponent } from './watch-together-component/watch-together.component';

const routes: Routes = [
  { path: '', component: MainAppComponent },
  { path: 'watch-together', component: WatchTogetherComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
