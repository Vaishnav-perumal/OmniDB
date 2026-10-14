import { PlatformListing, PriceHistoryPoint } from '../types/database';
import { NINTENDO_GAMES_PART_1 } from './nintendoGamesPart1';
import { NINTENDO_GAMES_PART_2 } from './nintendoGamesPart2';

const ALL_50_GAMES = [...NINTENDO_GAMES_PART_1, ...NINTENDO_GAMES_PART_2];

export const NINTENDO_50_LISTINGS: PlatformListing[] = ALL_50_GAMES.flatMap((game, idx) => {
  // Determine standard price and discounts
  const isRetro = parseInt(game.release_date.slice(0, 4), 10) < 2010;
  const isMarioRabbids = game.id.includes('mario-rabbids');
  
  let origPrice = 59.99;
  let currPrice = 59.99;
  let discount = 0;
  let histLow = 39.99;

  if (isRetro) {
    origPrice = 9.99;
    currPrice = 9.99;
    discount = 0;
    histLow = 6.99;
  } else if (isMarioRabbids) {
    origPrice = 59.99;
    currPrice = 19.99;
    discount = 67;
    histLow = 14.99;
  } else if (idx % 3 === 0) {
    // Some on active 33% Nintendo sale
    discount = 33;
    currPrice = 39.99;
    histLow = 39.99;
  }

  const listings: PlatformListing[] = [
    {
      id: `listing_${game.id.replace(/-/g, '_')}_nintendo`,
      game_id: game.id,
      platform_id: 'nintendo',
      store_app_id: `eshop_${game.id}`,
      store_url: `https://www.nintendo.com/store/products/${game.slug}-switch/`,
      currency: 'USD',
      original_price: origPrice,
      current_price: currPrice,
      discount_percent: discount,
      historical_low_price: histLow,
      historical_low_date: '2024-11-25',
      drm_type: 'Nintendo eShop Digital',
      is_available: true,
      current_players: Math.floor(1200 + (game.rating_score * 35)),
      peak_players_24h: Math.floor(4500 + (game.rating_score * 90)),
      all_time_peak_players: Math.floor(45000 + (game.rating_score * 850)),
      rating_positive_percent: game.rating_score,
      review_count: Math.floor(12000 + (game.rating_score * 420)),
      updated_at: '2026-09-28T12:00:00Z'
    }
  ];

  return listings;
});

export const NINTENDO_50_PRICE_HISTORIES: PriceHistoryPoint[] = NINTENDO_50_LISTINGS.flatMap((listing, idx) => [
  {
    id: 90000 + idx * 3,
    listing_id: listing.id,
    recorded_date: '2023-11-20',
    price: listing.original_price,
    discount_percent: 0,
    event_name: 'Launch Store Price'
  },
  {
    id: 90000 + idx * 3 + 1,
    listing_id: listing.id,
    recorded_date: '2024-11-25',
    price: listing.historical_low_price,
    discount_percent: Math.round(((listing.original_price - listing.historical_low_price) / listing.original_price) * 100),
    event_name: 'Cyber Deals Holiday Sale'
  },
  {
    id: 90000 + idx * 3 + 2,
    listing_id: listing.id,
    recorded_date: '2026-09-28',
    price: listing.current_price,
    discount_percent: listing.discount_percent,
    event_name: listing.discount_percent > 0 ? 'Nintendo Publisher Spotlight' : 'Standard Digital Edition'
  }
]);
