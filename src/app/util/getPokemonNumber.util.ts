export class UtilPokemon {

  public static getPokemonNumber(numberPokemon: number | string, size = 3): string {

    let s = String(numberPokemon);

    if(s.length === 2) {
      s = '0' + s;
    }
    else if(s.length === 1) {
      s = '00' + s;
    }

    return s;
  }

  public static convertStringToNumber(numberId: string) {
    return Number(numberId);
  }

  public static getPokemonImage(numberPokemon: string): string {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberPokemon}.png`
  }
}
