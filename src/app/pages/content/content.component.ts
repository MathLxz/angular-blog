import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-content',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './content.component.html',
	styleUrl: './content.component.css',
})
export class ContentComponent {
	constructor(private route: ActivatedRoute) {}
	@Input()
	contentPhoto: string ='';

	@Input()
	contentTitle: string = '';

	@Input()
	contentText: string = '';

	private id: string | null = '0';

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id: string | null) {
		const result = dataFake.filter((article) => article.id == id)[0];

		this.contentTitle = result.title;
		this.contentText = result.description;
		this.contentPhoto = result.photo;
	}
}
