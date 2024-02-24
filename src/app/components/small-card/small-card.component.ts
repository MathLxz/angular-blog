import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-small-card',
	standalone: true,
	imports: [],
	templateUrl: './small-card.component.html',
	styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
	@Input()
	scPhotoCover: string = '';
	@Input()
	scTitle: string = '';
	constructor() {}
}
