import { NgModule } from "@angular/core";
import {NicoleRoutesModule} from "./nicole-routes.module";
import { NicoleComponent } from "./nicole.component";

@NgModule({
    imports:[NicoleRoutesModule],
    declarations:[NicoleComponent]

})

export class NicoleModule{

}
