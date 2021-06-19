import { Type } from "./Type.enum";

export interface Pokemon {
  image: string;
  number: string;
  name: string;
  types: Type[];
}

