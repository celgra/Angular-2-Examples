import { Component, Input } from "@angular/core";

@Component({
    selector: "hero",
    templateUrl: "./hero.component.html",
})

export class HeroComponent {
    @Input() name: string;
    @Input() age: number;
}
