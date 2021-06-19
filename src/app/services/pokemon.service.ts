import { Pokemon } from './../models/Pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsePokemonApi } from '../models/ResponsePokemonApi.model';
import { UtilPokemon } from '../util/getPokemonNumber.util';
import { Type } from '../models/Type.enum';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly url: string = "https://pokeapi.co/api/v2/pokemon/?limit=151";


  constructor(
    private httpClient: HttpClient
  ) { }

  async getPokemons() {
    const pokemonResponse: ResponsePokemonApi[] = (await this.httpClient.get<ResponsePokemonApi[]>(this.url).toPromise())["results"];
    const pokemons: Pokemon[] = [];

    pokemonResponse.forEach(async pokeRes => {
      const name = pokeRes.name;
      const pokeInfo = await this.httpClient.get(pokeRes.url).toPromise();

      const types: Type[] = pokeInfo["types"].map(t => t.type.name);
      const number = UtilPokemon.getPokemonNumber(pokeInfo["id"]);
      const image = UtilPokemon.getPokemonImage(number);

      const pokemon: Pokemon = {
        name,
        image,
        number,
        types
      }

      pokemons.push(pokemon);
    });

    return pokemons;
  }
}

