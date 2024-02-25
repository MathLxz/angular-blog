import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		TitleComponent,
		BigCardComponent,
		SmallCardComponent,
		MenuBarComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent {
	
	constructor() {}
}
