import { faker } from "@faker-js/faker/locale/en";

// create random
// movies and songs
export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};

export const createRandomSong = () => {
  return faker.music.songName();
};
