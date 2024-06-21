import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon.interface';
import { PokemonsService } from '../../pokemons.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonsService.getPokemonById(id).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}
