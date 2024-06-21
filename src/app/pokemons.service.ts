import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private http = inject(HttpClient);
  readonly pokemonsUrl: string = 'https://tyradex.vercel.app/api/v1/gen/1';
  readonly pokemonUrl: string = 'https://tyradex.vercel.app/api/v1/pokemon'

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }

  getPokemonById(id: number|null): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }
}
