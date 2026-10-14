import { Game, PlatformListing, PriceHistoryPoint, Developer } from '../types/database';
import { Franchise, FranchiseGame } from '../types/franchise';
import { NINTENDO_DEV_ADDITIONS, NINTENDO_GAMES_PART_1 } from './nintendoGamesPart1';
import { NINTENDO_GAMES_PART_2 } from './nintendoGamesPart2';
import { NINTENDO_50_LISTINGS, NINTENDO_50_PRICE_HISTORIES } from './nintendoListings';

export const ALL_NINTENDO_50_GAMES: Game[] = [
  ...NINTENDO_GAMES_PART_1,
  ...NINTENDO_GAMES_PART_2
];

export const NINTENDO_ALL_DEVELOPERS: Developer[] = NINTENDO_DEV_ADDITIONS;
export const NINTENDO_ALL_LISTINGS: PlatformListing[] = NINTENDO_50_LISTINGS;
export const NINTENDO_ALL_PRICE_HISTORIES: PriceHistoryPoint[] = NINTENDO_50_PRICE_HISTORIES;

export interface CuratedFranchiseData {
  franchise: Franchise;
  games: FranchiseGame[];
}

export const NINTENDO_FRANCHISES_RECORD: Record<string, CuratedFranchiseData> = {
  mario: {
    franchise: {
      id: 'mario',
      name: 'Super Mario',
      slug: 'super-mario',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co2wyh.jpg',
      description: 'The world-famous platforming and adventure series created by Shigeru Miyamoto and Nintendo.',
      gameCount: 22,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('mario') || g.id.includes('mario') || g.id.includes('luigi')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'mario',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  },
  zelda: {
    franchise: {
      id: 'zelda',
      name: 'The Legend of Zelda',
      slug: 'the-legend-of-zelda',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co3p2d.jpg',
      description: 'The critically acclaimed fantasy adventure saga following Link, Princess Zelda, and the Triforce across the kingdom of Hyrule.',
      gameCount: 11,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('zelda') || g.id.includes('zelda')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'zelda',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  },
  pokemon: {
    franchise: {
      id: 'pokemon',
      name: 'Pokémon',
      slug: 'pokemon',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co4jnq.jpg',
      description: 'The highest-grossing media franchise in history. Catch, train, and battle fantastical creatures in sprawling fantasy regions.',
      gameCount: 10,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('pokémon') || g.id.includes('pokemon')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'pokemon',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  },
  'donkey-kong': {
    franchise: {
      id: 'donkey-kong',
      name: 'Donkey Kong',
      slug: 'donkey-kong',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co1m7j.jpg',
      description: 'The thrilling jungle platforming series starring Donkey Kong, Diddy Kong, and the Kong family.',
      gameCount: 2,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('donkey kong')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'donkey-kong',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  },
  kirby: {
    franchise: {
      id: 'kirby',
      name: 'Kirby',
      slug: 'kirby',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co4a03.jpg',
      description: 'The delightful adventures of the pink puffball hero who inhales enemies to copy their abilities in Planet Popstar.',
      gameCount: 3,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('kirby')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'kirby',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  },
  metroid: {
    franchise: {
      id: 'metroid',
      name: 'Metroid',
      slug: 'metroid',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co624m.jpg',
      description: 'Atmospheric sci-fi action adventures following intergalactic bounty hunter Samus Aran against Space Pirates and Metroids.',
      gameCount: 2,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('metroid')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'metroid',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  },
  pikmin: {
    franchise: {
      id: 'pikmin',
      name: 'Pikmin',
      slug: 'pikmin',
      coverImage: 'https://images.igdb.com/igdb/image/upload/t_1080p/co608x.jpg',
      description: 'Shigeru Miyamoto’s inventive real-time strategy series exploring lush micro-ecosystems with plantlike creatures.',
      gameCount: 2,
      created_at: '2026-09-01T00:00:00Z',
      last_checked_at: '2026-09-28T00:00:00Z'
    },
    games: ALL_NINTENDO_50_GAMES.filter(g =>
      g.title.toLowerCase().includes('pikmin')
    ).map((g, idx) => ({
      id: g.id,
      franchiseId: 'pikmin',
      title: g.title,
      release_date: g.release_date,
      platforms: ['nintendo'],
      cover: g.header_image,
      genres: g.genres,
      type: 'main_game',
      seriesOrder: idx + 1,
      summary: g.summary,
      status: 'released',
      lowest_current_price: 39.99
    }))
  }
};
