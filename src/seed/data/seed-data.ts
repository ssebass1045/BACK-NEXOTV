import { Status, Type } from 'src/content/dto/enums/content.enum';
import { CreateContentInput } from 'src/content/dto/inputs/create-content.input';

export const SEED_DATA: CreateContentInput[] = [
  {
    title: 'Arcane Season 2: Official Teaser movie',
    description:
      'Teaser movie for the highly anticipated second season of Arcane.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNWE5Y2JmZjUtZDlhZS00Njg3LWJlODUtMjhmMGFjYzZmNmU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: '2:15',
    category: ['Animation', 'Fantasy', 'Action'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="Bo3sXsozPj1gOi1gb1NZi4huAWxmImDDlB2JFWYSYNEmZgBer" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Blanca Nieves: Tráiler Oficial',
    description: 'Official movie of the new Snow White movie.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjQ1YWZlMTMtNzc4ZC00N2UwLTk1N2YtMGMyYTIwODk5MzU4XkEyXkFqcGc@._V1_.jpg',
    duration: '1:45',
    category: ['Drama', 'Fantasy'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="KJGf1tnPHdObJxENWHs0urAeWRh1Xqiv_AMVeDRaeK7AQwdUB" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'The Penguin',
    description:
      'Teaser for active series like The Penguin, The White Lotus, and The Last of Us on Max.',
    image:
      'https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: '2:30',
    category: ['Drama', 'Thriller'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="3x4AdC9YGO86w1h4L1wRn0bjaHUKHBDOfrINJytccN17gjpgM" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Deadpool & Wolverine: Tráiler Oficial',
    description: 'Official movie of Deadpool and Wolverine.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDg5ZmVmZDUtNGYzMC00ZWZlLWFmMDAtMTk3NzMzN2NiMWY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: '2:05',
    category: ['Action', 'Comedy'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="AsZcFtDqOUDBglcV2EQ-utvfAAyGwTiyhwtQFdrHPabYEh0gX" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Hellboy: The Crooked Man - Official movie',
    description:
      'Official movie of Hellboy: The Crooked Man, premiering at Comic Con 2024.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMWZmMGI1ZTctN2IxMC00MTczLWIyN2UtMTMyZDM4Njc5MjY0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg',
    duration: '2:20',
    category: ['Fantasy', 'Action'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="EbmADx8dM9aejsVf0wVh5BvYX86GADaw05IxDSNZSYa3K3Fwf" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Joker: Folie À Deux - Official movie',
    description: 'Official movie for Joker: Folie À Deux.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: '2:30',
    category: ['Drama', 'Thriller'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="YLuJ1VyuNYTLj9sa1gSaWNO6tEiEHjNWz0tLQI1UnVJk6Wt8S" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Mufasa: El Rey León - Tráiler Oficial',
    description: 'Official movie of Mufasa: El Rey León.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmMzNDhlZDgtMGU4Mi00MzRiLWI4ODAtNzY0MGY2ZWZiZWI5XkEyXkFqcGdeQXVyMzUxNTM4ODc@._V1_FMjpg_UX1000_.jpg',
    duration: '2:00',
    category: ['Animation', 'Drama'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="W0WfFt3Dx_bIGdYPdxMDApsRPSFslWyWglMVQ3Ntbdb4OyxmS" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Secret Level - Teaser movie',
    description: "Teaser movie for Prime Video's active series, Secret Level.",
    image:
      'https://m.media-amazon.com/images/M/MV5BODliZTk4YTQtY2NhNS00NmQxLWE1MTAtYTVlOWQ2NTU1NWFjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg',
    duration: '1:50',
    category: ['Thriller', 'Sci-Fi'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="gl6rcHgs2CdHGN4Ef5hzUhtPeWQvGSDXO5YnmEgBAMlbP3a4a" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'The Lord of the Rings: The Rings of Power - Season 2 movie',
    description:
      'Official movie for the second season of The Rings of Power on Prime Video.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjIwZjQ5YTctZDg0ZS00YTI0LTk5YjEtYzVmYTJmYzRiNGUyXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg',
    duration: '2:10',
    category: ['Fantasy', 'Adventure'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="AhqcgVWiUh7RxBVCdVxMrwMrCEixEqZiu3swsz96TKrcFB0RZ" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'The Lord of the Rings: The War of the Rohirrim - Official movie',
    description:
      'Official movie for The Lord of the Rings: The War of the Rohirrim.',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjI1NTMzNjgtYjFmOS00YzFjLTg3MTEtMDgxZTcwZTE2NDM2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_FMjpg_UX1000_.jpg',
    duration: '2:20',
    category: ['Fantasy', 'Adventure'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="M8_D2B-3GhaK3lAaiQTIVNdkDLaCvtFMXtXKMYF2RN6raRA9K" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'The Penguin - Official movie',
    description: 'Official movie for The Penguin, coming to Max.',
    image:
      'https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: '2:05',
    category: ['Crime', 'Drama'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="BKXOFnF4R0VaBkRX5KkApAZjKk6sAzStW2EqWsJpDfZHRVRhL" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'VENOM: THE LAST DANCE – Official movie',
    description: 'Official movie for Venom: The Last Dance.',
    image:
      'https://m.media-amazon.com/images/M/MV5BODAxMDNhYWMtYWUzNS00ZTY3LThmZDUtODRjMTdhM2Y5ZGEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg',
    duration: '2:30',
    category: ['Action', 'Sci-Fi'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="H1sNznPbEacfRR7MKnZhz8MMO3wLFnSWlihFQW5CSmL5bKU6L" data-ratio="1.779167" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77917 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
];
