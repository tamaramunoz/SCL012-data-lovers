import POKEMON from '../src/data/pokemon/pokemon.js';
import { filterType, weakness } from '../src/data';

describe('POKEMON', () => {
  it('debería ser un objeto', () => {
    expect(typeof POKEMON).toBe('object');
  });
}),

describe('filterType', () => {
  it('debería ser una función', () => {
    expect(typeof filterType).toBe('function');
  });
  it('debería retornar "Mankey" para pokeFilter[0].name con filtrado tipo "Fighting"', () => {
    const pokeFilter = filterType('Fighting');
    expect(pokeFilter[0].name).toBe('Mankey');
  });
  it('debería retornar "Gengar" para pokeFilter[3].name con filtrado tipo "Ghost"', () => {
    const pokeFilter = filterType('Ghost');
    expect(pokeFilter[2].name).toBe('Gengar');
  });
},

describe('weakness', () => {
  it('debería ser una función', () => {
    expect(typeof weakness).toBe('function');
  });
  it('debería retornar "Paras" para pokeFilter[0].name con filtrado debilidad "Bug"', () => {
    const pokeWeak = weakness('Bug');
    expect(pokeWeak[0].name).toBe('Paras');
  });

}));

