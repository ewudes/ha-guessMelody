export const FIRST_GAME_STEP = 0;
export const MAX_MISTAKE_COUNT = 3;

export const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`,
  GAME: `/game`,
};

export const APIRoute = {
  QUESTIONS: `/questions`,
  LOGIN: `/login`,
};

export const city = {
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10
};

export const points = [
  {
    lat: 40.816881,
    lng: -73.872768,
    title: `Парк Саундвью`
  }, {
    lat: 40.814909,
    lng: -73.830682,
    title: `Парк Ферри Поинт`
  }, {
    lat: 40.862413,
    lng: -73.879357,
    title: `Парк Бронкс`
  }, {
    lat: 40.870817,
    lng: -73.927112,
    title: `Парк Инвуд-Хилл`
  }, {
    lat: 40.877312,
    lng: -73.807182,
    title: `Пелхэм-Бей-Парк`
  }
];
