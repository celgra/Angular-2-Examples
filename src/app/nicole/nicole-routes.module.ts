import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NicoleComponent} from "./nicole.component";

const routes : Routes = [
    {path: "", redirectTo: "/hero-list", pathMatch:"full"},
    {path: "Nicole", component: NicoleComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class NicoleRoutesModule{

}