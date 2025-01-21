import { onMounted, ref } from 'vue';
import { GAMESTATUS, type PokemonListResponse } from '../interfaces';
import { pokemonAPI } from '../api/pokemonAPI';

export const usePokemonGame = () => {
  const STATUS = ref<GAMESTATUS>(GAMESTATUS.PLAYING); // 'playing', 'win', 'lose'

  const getPokemons = async () => {
    const response = await pokemonAPI.get<PokemonListResponse>('/?limit=150');

    console.log(response.data);
  };

  //esto indica que se ejecutara cuando se monte el componente
  onMounted(() => {
    getPokemons();
  });

  return {
    STATUS,
    getPokemons,
  };
};
