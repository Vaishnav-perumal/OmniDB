import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const p1 = require('./data_batch4/part1.cjs');
const p2 = require('./data_batch4/part2.cjs');
const p3 = require('./data_batch4/part3.cjs');
const p4 = require('./data_batch4/part4.cjs');

const allGames = [...p1, ...p2, ...p3, ...p4];
console.log(`Loaded ${allGames.length} games for Batch 4.`);

const resolvedImages = JSON.parse(fs.readFileSync('./scripts/resolvedImages.json', 'utf8'));
console.log(`Loaded resolved images for ${Object.keys(resolvedImages).length} games.`);

// Developers definition for Batch 4
const BATCH4_DEVELOPERS = [
  { id: 'four_a_games', name: '4A Games', slug: '4a-games', country: 'Malta', founded_year: 2006, website: 'https://www.4a-games.com.mt' },
  { id: 'techland', name: 'Techland', slug: 'techland', country: 'Poland', founded_year: 1991, website: 'https://techland.net' },
  { id: 'dambuster', name: 'Dambuster Studios', slug: 'dambuster-studios', country: 'United Kingdom', founded_year: 2014, website: 'https://www.dsdambuster.com' },
  { id: 'tripwire', name: 'Tripwire Interactive', slug: 'tripwire-interactive', country: 'United States', founded_year: 2005, website: 'https://tripwireinteractive.com' },
  { id: 'machinegames', name: 'MachineGames', slug: 'machinegames', country: 'Sweden', founded_year: 2009, website: 'https://www.machinegames.com' },
  { id: 'unitedfront', name: 'United Front Games', slug: 'united-front-games', country: 'Canada', founded_year: 2007, website: 'https://square-enix-games.com' },
  { id: 'hangarthirteen', name: 'Hangar 13', slug: 'hangar-13', country: 'United States', founded_year: 2014, website: 'https://hangar13games.com' },
  { id: 'teambondi', name: 'Team Bondi', slug: 'team-bondi', country: 'Australia', founded_year: 2003, website: 'https://rockstargames.com/lanoire' },
  { id: 'rockstarnewengland', name: 'Rockstar New England', slug: 'rockstar-new-england', country: 'United States', founded_year: 1999, website: 'https://www.rockstargames.com' },
  { id: 'yager', name: 'Yager Development', slug: 'yager-development', country: 'Germany', founded_year: 1999, website: 'https://www.yager.de' },
  { id: 'avalanchestew', name: 'Avalanche Studios Group', slug: 'avalanche-studios-group', country: 'Sweden', founded_year: 2003, website: 'https://avalanchestudios.com' },
  { id: 'monolith', name: 'Monolith Productions', slug: 'monolith-productions', country: 'United States', founded_year: 1994, website: 'https://www.lith.com' },
  { id: 'warhorse', name: 'Warhorse Studios', slug: 'warhorse-studios', country: 'Czech Republic', founded_year: 2011, website: 'https://warhorsestudios.cz' },
  { id: 'taleworlds', name: 'TaleWorlds Entertainment', slug: 'taleworlds-entertainment', country: 'Turkey', founded_year: 2005, website: 'https://www.taleworlds.com' },
  { id: 'studiozero', name: 'Studio Zero', slug: 'studio-zero', country: 'Japan', founded_year: 2016, website: 'https://metaphor.sega.com' },
  { id: 'claytechworks', name: 'Claytechworks', slug: 'claytechworks', country: 'Japan', founded_year: 2019, website: 'https://claytechworks.co.jp' },
  { id: 'level5', name: 'Level-5', slug: 'level-5', country: 'Japan', founded_year: 1998, website: 'https://www.level5.co.jp' },
  { id: 'monolithsoft', name: 'Monolith Soft', slug: 'monolith-soft', country: 'Japan', founded_year: 1999, website: 'https://www.monolithsoft.co.jp' },
  { id: 'intelligentsystems', name: 'Intelligent Systems', slug: 'intelligent-systems', country: 'Japan', founded_year: 1986, website: 'https://www.intsys.co.jp' },
  { id: 'redbarrels', name: 'Red Barrels', slug: 'red-barrels', country: 'Canada', founded_year: 2011, website: 'https://redbarrelsgames.com' },
  { id: 'frictional', name: 'Frictional Games', slug: 'frictional-games', country: 'Sweden', founded_year: 2007, website: 'https://frictionalgames.com' },
  { id: 'yachtclub', name: 'Yacht Club Games', slug: 'yacht-club-games', country: 'United States', founded_year: 2011, website: 'https://yachtclubgames.com' },
  { id: 'askiisoft', name: 'Askiisoft', slug: 'askiisoft', country: 'United States', founded_year: 2009, website: 'https://askiisoft.com' },
  { id: 'tobyfox', name: 'Toby Fox', slug: 'toby-fox', country: 'United States', founded_year: 2013, website: 'https://undertale.com' },
  { id: 'playdead', name: 'Playdead', slug: 'playdead', country: 'Denmark', founded_year: 2006, website: 'https://playdead.com' },
  { id: 'tarsier', name: 'Tarsier Studios', slug: 'tarsier-studios', country: 'Sweden', founded_year: 2004, website: 'https://tarsier.se' },
  { id: 'scssoftware', name: 'SCS Software', slug: 'scs-software', country: 'Czech Republic', founded_year: 1997, website: 'https://scssoft.com' },
  { id: 'colossalorder', name: 'Colossal Order', slug: 'colossal-order', country: 'Finland', founded_year: 2009, website: 'https://colossalorder.fi' },
  { id: 'squad', name: 'Squad', slug: 'squad', country: 'Mexico', founded_year: 2009, website: 'https://www.kerbalspaceprogram.com' },
  { id: 'hinterland', name: 'Hinterland Studio', slug: 'hinterland-studio', country: 'Canada', founded_year: 2012, website: 'https://hinterlandgames.com' },
  { id: 'thefunpimps', name: 'The Fun Pimps', slug: 'the-fun-pimps', country: 'United States', founded_year: 2012, website: 'https://7daystodie.com' },
  { id: 'studiowildcard', name: 'Studio Wildcard', slug: 'studio-wildcard', country: 'United States', founded_year: 2014, website: 'https://www.studiowildcard.com' },
  { id: 'systemera', name: 'System Era Softworks', slug: 'system-era-softworks', country: 'United States', founded_year: 2014, website: 'https://systemera.net' },
  { id: 'adamgryu', name: 'adamgryu', slug: 'adamgryu', country: 'Canada', founded_year: 2018, website: 'https://ashorthike.com' },
  { id: 'croteam', name: 'Croteam', slug: 'croteam', country: 'Croatia', founded_year: 1992, website: 'https://croteam.com' }
];

// Publishers definition for Batch 4
const BATCH4_PUBLISHERS = [
  { id: 'deep_silver', name: 'Deep Silver', slug: 'deep-silver', headquarters: 'Höfen, Austria', website: 'https://deepsilver.com' },
  { id: 'techland_pub', name: 'Techland Publishing', slug: 'techland-publishing', headquarters: 'Wrocław, Poland', website: 'https://techland.net' },
  { id: 'tripwire_pub', name: 'Tripwire Interactive', slug: 'tripwire-interactive-pub', headquarters: 'Roswell, Georgia', website: 'https://tripwireinteractive.com' },
  { id: 'taleworlds_pub', name: 'TaleWorlds Entertainment', slug: 'taleworlds-entertainment-pub', headquarters: 'Ankara, Turkey', website: 'https://www.taleworlds.com' },
  { id: 'redbarrels_pub', name: 'Red Barrels', slug: 'red-barrels-pub', headquarters: 'Montreal, Canada', website: 'https://redbarrelsgames.com' },
  { id: 'frictional_pub', name: 'Frictional Games', slug: 'frictional-games-pub', headquarters: 'Malmö, Sweden', website: 'https://frictionalgames.com' },
  { id: 'yachtclub_pub', name: 'Yacht Club Games', slug: 'yacht-club-games-pub', headquarters: 'Valencia, California', website: 'https://yachtclubgames.com' },
  { id: 'devolver', name: 'Devolver Digital', slug: 'devolver-digital', headquarters: 'Austin, Texas', website: 'https://devolverdigital.com' },
  { id: 'tobyfox_pub', name: 'Toby Fox', slug: 'toby-fox-pub', headquarters: 'United States', website: 'https://undertale.com' },
  { id: 'playdead_pub', name: 'Playdead', slug: 'playdead-pub', headquarters: 'Copenhagen, Denmark', website: 'https://playdead.com' },
  { id: 'scssoftware_pub', name: 'SCS Software', slug: 'scs-software-pub', headquarters: 'Prague, Czech Republic', website: 'https://scssoft.com' },
  { id: 'hinterland_pub', name: 'Hinterland Studio', slug: 'hinterland-studio-pub', headquarters: 'Vancouver, Canada', website: 'https://hinterlandgames.com' },
  { id: 'thefunpimps_pub', name: 'The Fun Pimps', slug: 'the-fun-pimps-pub', headquarters: 'Dallas, Texas', website: 'https://7daystodie.com' },
  { id: 'studiowildcard_pub', name: 'Studio Wildcard', slug: 'studio-wildcard-pub', headquarters: 'Kirkland, Washington', website: 'https://www.studiowildcard.com' },
  { id: 'systemera_pub', name: 'System Era Softworks', slug: 'system-era-softworks-pub', headquarters: 'Seattle, Washington', website: 'https://systemera.net' },
  { id: 'adamgryu_pub', name: 'adamgryu', slug: 'adamgryu-pub', headquarters: 'Toronto, Canada', website: 'https://ashorthike.com' }
];

// Helper to build store listings
let priceHistoryCurrentId = 6001;

const BATCH4_LISTINGS = [];
const BATCH4_PRICE_HISTORIES = [];

const drmMap = {
  steam: 'Steamworks DRM',
  epic: 'Epic Games DRM',
  gog: 'None (DRM-Free)',
  playstation: 'PlayStation Network',
  xbox: 'Xbox Live / Smart Delivery',
  nintendo: 'Nintendo eShop'
};

const storeUrlMap = {
  steam: (slug) => `https://store.steampowered.com/app/${slug}/`,
  epic: (slug) => `https://store.epicgames.com/p/${slug}`,
  gog: (slug) => `https://www.gog.com/game/${slug}`,
  playstation: (slug) => `https://store.playstation.com/concept/${slug}`,
  xbox: (slug) => `https://www.xbox.com/games/store/${slug}`,
  nintendo: (slug) => `https://www.nintendo.com/store/products/${slug}/`
};

const BATCH4_GAMES = allGames.map(rawGame => {
  const { platforms, base_price, current_price, discount_percent, historical_low, ...gameRecord } = rawGame;
  
  const resolved = resolvedImages[rawGame.id];
  if (resolved) {
    gameRecord.header_image = resolved.header_image;
    gameRecord.screenshots = resolved.screenshots;
    if (resolved.steam_app_id) {
      gameRecord.poster_image = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${resolved.steam_app_id}/library_600x900_2x.jpg`;
      gameRecord.background_image = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${resolved.steam_app_id}/page_bg_generated_v6b.jpg`;
    } else {
      gameRecord.poster_image = resolved.header_image;
      gameRecord.background_image = resolved.screenshots[0] || resolved.header_image;
    }
  }

  // Create platform listings for each specified platform
  const gameHistoryList = [];

  platforms.forEach(platform => {
    const cleanId = rawGame.id.replace(/[^a-z0-9]/g, '_');
    const listingId = `listing_${cleanId}_${platform}`;
    
    // Vary discount slightly on some stores for authenticity
    let pDisc = discount_percent;
    let pCurr = current_price;
    let pHlow = historical_low;

    if (platform === 'gog' && pDisc > 0) {
      // Extra 5% off on GOG occasionally
      pDisc = Math.min(90, pDisc + 5);
      pCurr = parseFloat((base_price * (1 - pDisc / 100)).toFixed(2));
      pHlow = Math.min(pHlow, pCurr);
    } else if (platform === 'nintendo') {
      // Nintendo sales might be slightly conservative
      if (pDisc > 60) {
        pDisc = 50;
        pCurr = parseFloat((base_price * (1 - pDisc / 100)).toFixed(2));
      }
    }

    const isSteam = platform === 'steam';
    const storeAppId = isSteam && resolved?.steam_app_id ? resolved.steam_app_id : `${rawGame.slug}_${platform}`;
    const storeUrl = isSteam && resolved?.steam_app_id
      ? `https://store.steampowered.com/app/${resolved.steam_app_id}/`
      : (storeUrlMap[platform] ? storeUrlMap[platform](rawGame.slug) : `https://store.steampowered.com/app/${rawGame.slug}/`);

    const listing = {
      id: listingId,
      game_id: rawGame.id,
      platform_id: platform,
      store_app_id: storeAppId,
      store_url: storeUrl,
      currency: 'USD',
      original_price: base_price,
      current_price: pCurr,
      discount_percent: pDisc,
      historical_low_price: pHlow,
      historical_low_date: '2024-11-28',
      drm_type: drmMap[platform] || 'Digital License',
      is_available: true,
      current_players: ['steam', 'epic'].includes(platform) ? Math.floor(Math.random() * 8000) + 400 : 0,
      peak_players_24h: ['steam', 'epic'].includes(platform) ? Math.floor(Math.random() * 15000) + 1200 : 0,
      all_time_peak_players: ['steam', 'epic'].includes(platform) ? Math.floor(Math.random() * 80000) + 10000 : 0,
      rating_positive_percent: Math.min(99, Math.max(78, rawGame.rating_score)),
      review_count: Math.floor(Math.random() * 60000) + 5000,
      updated_at: '2026-09-24T12:00:00Z'
    };

    BATCH4_LISTINGS.push(listing);

    // Build price history points
    const p1 = {
      id: priceHistoryCurrentId++,
      listing_id: listingId,
      recorded_date: '2023-11-15',
      price: base_price,
      discount_percent: 0,
      event_name: 'Standard Store Price'
    };

    const p2 = {
      id: priceHistoryCurrentId++,
      listing_id: listingId,
      recorded_date: '2024-06-27',
      price: pHlow,
      discount_percent: base_price > 0 ? Math.round(((base_price - pHlow) / base_price) * 100) : 0,
      event_name: 'Summer Season Historic Low Promotion'
    };

    const p3 = {
      id: priceHistoryCurrentId++,
      listing_id: listingId,
      recorded_date: '2026-09-20',
      price: pCurr,
      discount_percent: pDisc,
      event_name: pDisc > 0 ? 'Current Special Promotion' : 'Regular Price'
    };

    gameHistoryList.push(p1, p2, p3);
  });

  BATCH4_PRICE_HISTORIES.push({
    game_id: rawGame.id,
    history: gameHistoryList
  });

  return gameRecord;
});

console.log(`Generated:
- Games: ${BATCH4_GAMES.length}
- Listings: ${BATCH4_LISTINGS.length}
- Price Histories (games): ${BATCH4_PRICE_HISTORIES.length}
- Price History Points: ${BATCH4_PRICE_HISTORIES.reduce((s, h) => s + h.history.length, 0)}
- Developers: ${BATCH4_DEVELOPERS.length}
- Publishers: ${BATCH4_PUBLISHERS.length}
`);

// Now write src/db/expandedDataBatch4.ts
const fileContent = `import { Game, PlatformListing, PriceHistoryPoint, Developer, Publisher } from '../types/database';

export const BATCH4_GAMES: Game[] = ${JSON.stringify(BATCH4_GAMES, null, 2)};

export const BATCH4_LISTINGS: PlatformListing[] = ${JSON.stringify(BATCH4_LISTINGS, null, 2)};

export const BATCH4_PRICE_HISTORIES: { game_id: string; history: PriceHistoryPoint[] }[] = ${JSON.stringify(BATCH4_PRICE_HISTORIES, null, 2)};

export const BATCH4_DEVELOPERS: Developer[] = ${JSON.stringify(BATCH4_DEVELOPERS, null, 2)};

export const BATCH4_PUBLISHERS: Publisher[] = ${JSON.stringify(BATCH4_PUBLISHERS, null, 2)};
`;

fs.writeFileSync('src/db/expandedDataBatch4.ts', fileContent, 'utf8');
console.log('Successfully wrote src/db/expandedDataBatch4.ts!');
