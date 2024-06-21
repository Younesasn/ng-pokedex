import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private pokemonsService = inject(PokemonsService);
  pokemons: Pokemon[] = []

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
    });
  }
}
