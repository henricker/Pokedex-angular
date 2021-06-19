import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { ResponsePokemonApi } from '../models/ResponsePokemonApi.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {

  }

}
