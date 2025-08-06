import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./views/footer/footer.component";
import { HeaderComponent } from "./views/header/header.component";
import { ThemeService } from "./services/theme.service";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "angular-mobile-squeleton";

    constructor(private theme: ThemeService) {}

    ngOnInit(): void {
        this.theme.initTheme();
    }
}
