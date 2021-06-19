import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ResponsePokemonApi } from '../models/ResponsePokemonApi.model';
import { Pokemon } from '../models/Pokemon.model';
import { UtilPokemon } from '../util/getPokemonNumber.util';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  pokemons: Pokemon[] = [];


  ngOnInit(): void {
    this.fetchApi();
  }

  async fetchApi() {
    this.pokemons =  (await this.pokemonService.getPokemons());
  }
}
