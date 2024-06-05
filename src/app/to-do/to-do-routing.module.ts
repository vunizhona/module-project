import {RouterModule, Routes} from "@angular/router";
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {NgModule} from "@angular/core";
import {ToDoListItemComponent} from "./components/to-do-list-item/to-do-list-item.component";


const listRoutes: Routes = [
  {path: '', component: ToDoListComponent},
  {path: 'item', component: ToDoListItemComponent}
]

@NgModule({
    imports: [RouterModule.forChild(listRoutes)],
    exports: [RouterModule]
  }
)

export class ListRoutingModule {

}
