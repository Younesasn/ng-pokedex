import { Component, Input } from '@angular/core';
import { Name, Sprites, Stats, Talents, Types } from '../../pokemon.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() poke_id!: string;
  @Input() name!: string;
  @Input() category!: string;
  @Input() types!: Types[];
  @Input() talents!: Talents[];
  @Input() image!: string;
  @Input() hp!: string;

}
