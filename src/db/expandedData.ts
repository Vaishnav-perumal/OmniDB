import { Game, PlatformListing, PriceHistoryPoint, Developer, Publisher } from '../types/database';

export const EXPANDED_GAMES: Game[] = [
  {
    "id": "grand-theft-auto-v",
    "ugdb_id": "UGDB-000026",
    "title": "Grand Theft Auto V",
    "alternate_titles": [
      "GTA 5",
      "GTAV",
      "GTA V",
      "Grand Theft Auto 5",
      "GTA Online"
    ],
    "slug": "grand-theft-auto-v",
    "summary": "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with the criminal underworld, they must pull off a series of dangerous heists to survive in a ruthless city.",
    "description": "Grand Theft Auto V also includes Grand Theft Auto Online, the dynamic and ever-evolving online universe for up to 30 players, including all gameplay upgrades and content released since launch.",
    "release_date": "2015-04-14",
    "developer_id": "rockstarnorth",
    "publisher_id": "rockstargames",
    "developer_name": "Rockstar North",
    "publisher_name": "Rockstar Games",
    "genres": [
      "Action-Adventure",
      "Open World",
      "Crime",
      "Shooter"
    ],
    "tags": [
      "Open World",
      "Action",
      "Multiplayer",
      "Automobile Sim",
      "Crime"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Online Co-op",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 95,
    "metacritic_score": 96,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.1920x1080.jpg?t=1765387725",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.1920x1080.jpg?t=1765387725",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.1920x1080.jpg?t=1765387725"
    ]
  },
  {
    "id": "skyrim-se",
    "ugdb_id": "UGDB-000027",
    "title": "The Elder Scrolls V: Skyrim Special Edition",
    "alternate_titles": [
      "Skyrim",
      "Skyrim SE",
      "TESV",
      "The Elder Scrolls 5",
      "TES 5"
    ],
    "slug": "skyrim-se",
    "summary": "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life with remastered art and effects, volumetric god rays, dynamic depth of field, and full modding support.",
    "description": "The Special Edition includes the critically acclaimed game and add-ons (Dawnguard, Hearthfire, and Dragonborn) plus all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, and screen-space reflections.",
    "release_date": "2016-10-28",
    "developer_id": "bethesdags",
    "publisher_id": "bethesdasoftworks",
    "developer_name": "Bethesda Game Studios",
    "publisher_name": "Bethesda Softworks",
    "genres": [
      "RPG",
      "Open World",
      "Fantasy",
      "Action"
    ],
    "tags": [
      "Open World",
      "RPG",
      "Adventure",
      "Singleplayer",
      "Moddable",
      "Fantasy"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 94,
    "metacritic_score": 94,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/489830/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/489830/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg?t=1786648247",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_d64b646612ab1402bdda8e400672aa0dbcb352ea.1920x1080.jpg?t=1786648247",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/ss_b6bb6f79278505b3f48567f08c21f7a0eb171c68.1920x1080.jpg?t=1786648247"
    ]
  },
  {
    "id": "fallout-4",
    "ugdb_id": "UGDB-000028",
    "title": "Fallout 4: Game of the Year Edition",
    "alternate_titles": [
      "Fallout 4",
      "FO4",
      "Fallout 4 GOTY",
      "Commonwealth"
    ],
    "slug": "fallout-4",
    "summary": "As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland.",
    "description": "Winner of over 50 Game of the Year awards, including top honors at the 2016 BAFTA and 2016 D.I.C.E. Awards. Fallout 4 is the studio most ambitious game yet, featuring immense open-world crafting, settlement building, and combat.",
    "release_date": "2015-11-10",
    "developer_id": "bethesdags",
    "publisher_id": "bethesdasoftworks",
    "developer_name": "Bethesda Game Studios",
    "publisher_name": "Bethesda Softworks",
    "genres": [
      "RPG",
      "Post-apocalyptic",
      "Open World",
      "Shooter"
    ],
    "tags": [
      "Open World",
      "Post-apocalyptic",
      "RPG",
      "Singleplayer",
      "Sci-fi"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 83,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg?t=1786648137",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg?t=1786648137",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg?t=1786648137"
    ]
  },
  {
    "id": "dark-souls-3",
    "ugdb_id": "UGDB-000029",
    "title": "Dark Souls III",
    "alternate_titles": [
      "DS3",
      "Dark Souls 3",
      "Lothric",
      "Ashen One"
    ],
    "slug": "dark-souls-3",
    "summary": "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
    "description": "As fires fade and the world falls into ruin, developer FromSoftware and director Hidetaka Miyazaki continue their genre-defining series with Dark Souls III. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics.",
    "release_date": "2016-04-11",
    "developer_id": "fromsoftware",
    "publisher_id": "bandainamco",
    "developer_name": "FromSoftware Inc.",
    "publisher_name": "Bandai Namco Entertainment",
    "genres": [
      "Action RPG",
      "Souls-like",
      "Dark Fantasy",
      "Difficult"
    ],
    "tags": [
      "Souls-like",
      "Dark Fantasy",
      "Difficult",
      "Action RPG",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Online Co-op",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_5efd318b85a3917d1c6e717f4cb813b47547cd6f.1920x1080.jpg?t=1748630784",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1c0fa39091901496d77cf4cecfea4ffb056d6452.1920x1080.jpg?t=1748630784",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1318a04ef11d87f38aebe6d47a96124f8f888ca8.1920x1080.jpg?t=1748630784"
    ]
  },
  {
    "id": "sekiro",
    "ugdb_id": "UGDB-000030",
    "title": "Sekiro: Shadows Die Twice - GOTY Edition",
    "alternate_titles": [
      "Sekiro",
      "Shadows Die Twice",
      "Sekiro GOTY",
      "Wolf FromSoft"
    ],
    "slug": "sekiro",
    "summary": "Carve your own clever path to vengeance in the award-winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
    "description": "In Sekiro: Shadows Die Twice you are the one-armed wolf, a disgraced and disfigured warrior rescued from the brink of death. Explore late 1500s Sengoku Japan as you face larger than life foes in a dark and twisted world.",
    "release_date": "2019-03-21",
    "developer_id": "fromsoftware",
    "publisher_id": "activision",
    "developer_name": "FromSoftware Inc.",
    "publisher_name": "Activision",
    "genres": [
      "Action",
      "Souls-like",
      "Ninja",
      "Difficult",
      "Singleplayer"
    ],
    "tags": [
      "Souls-like",
      "Difficult",
      "Action",
      "Singleplayer",
      "Atmospheric",
      "Ninja"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 95,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg?t=1762888662",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.1920x1080.jpg?t=1762888662",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.1920x1080.jpg?t=1762888662"
    ]
  },
  {
    "id": "marvel-spider-man-remastered",
    "ugdb_id": "UGDB-000031",
    "title": "Marvel's Spider-Man Remastered",
    "alternate_titles": [
      "Spider-Man PC",
      "Spiderman Remastered",
      "Peter Parker",
      "Insomniac Spiderman"
    ],
    "slug": "marvel-spider-man-remastered",
    "summary": "Developed by Insomniac Games in collaboration with Marvel, Marvel Spider-Man Remastered introduces an experienced Peter Parker fighting big crime and iconic villains in Marvel New York.",
    "description": "In Marvel Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel New York.",
    "release_date": "2022-08-12",
    "developer_id": "insomniac",
    "publisher_id": "playstationpub",
    "developer_name": "Insomniac Games",
    "publisher_name": "PlayStation Publishing LLC",
    "genres": [
      "Action",
      "Open World",
      "Superhero",
      "Adventure"
    ],
    "tags": [
      "Superhero",
      "Open World",
      "Action",
      "Singleplayer",
      "Story Rich"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 96,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfe778bf6d66e952e4acd4e1f926f7615b609ddf.1920x1080.jpg?t=1787838689",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_427677cf78195df94702f0a963cd9eaeb9d8935a.1920x1080.jpg?t=1787838689",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_dfba6f2477bfa42be69ddfdffbd421d3943d20bf.1920x1080.jpg?t=1787838689"
    ]
  },
  {
    "id": "hogwarts-legacy",
    "ugdb_id": "UGDB-000032",
    "title": "Hogwarts Legacy",
    "alternate_titles": [
      "Harry Potter Game",
      "Wizarding World",
      "Hogwarts RPG"
    ],
    "slug": "hogwarts-legacy",
    "summary": "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
    "description": "Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world.",
    "release_date": "2023-02-10",
    "developer_id": "avalanchesoftware",
    "publisher_id": "wb_games",
    "developer_name": "Avalanche Software",
    "publisher_name": "Warner Bros. Games",
    "genres": [
      "Action RPG",
      "Open World",
      "Magic",
      "Fantasy",
      "Adventure"
    ],
    "tags": [
      "Magic",
      "Open World",
      "Fantasy",
      "RPG",
      "Adventure",
      "Singleplayer"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 92,
    "metacritic_score": 84,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/990080/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/990080/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.1920x1080.jpg?t=1790708992",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1790708992",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg?t=1790708992"
    ]
  },
  {
    "id": "doom-eternal",
    "ugdb_id": "UGDB-000033",
    "title": "DOOM Eternal",
    "alternate_titles": [
      "Doom Eternal",
      "Doom 2020",
      "Doom Slayer",
      "id Software Doom"
    ],
    "slug": "doom-eternal",
    "summary": "Hell armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.",
    "description": "Experience the ultimate combination of speed and power in DOOM Eternal the next leap in push-forward, first-person combat. Armed with a shoulder-mounted flamethrower, retractable wrist blade, upgraded guns and mods, you are faster, stronger, and more versatile than ever.",
    "release_date": "2020-03-20",
    "developer_id": "idsoftware",
    "publisher_id": "bethesdasoftworks",
    "developer_name": "id Software",
    "publisher_name": "Bethesda Softworks",
    "genres": [
      "FPS",
      "Action",
      "Gore",
      "Fast-Paced",
      "Sci-fi"
    ],
    "tags": [
      "FPS",
      "Gore",
      "Action",
      "Demons",
      "Fast-Paced",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 91,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/782330/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/782330/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_4f93a7c5003d49cb32f6c0c6e547452b284580a0.1920x1080.jpg?t=1783432602",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_7e6a2148321c8024285e3924903d8897cac95358.1920x1080.jpg?t=1783432602",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_af3b43c4be0029b52ceefaf55ebe1918e2cb3471.1920x1080.jpg?t=1783432602"
    ]
  },
  {
    "id": "civilization-6",
    "ugdb_id": "UGDB-000034",
    "title": "Sid Meier's Civilization VI",
    "alternate_titles": [
      "Civ 6",
      "Civilization 6",
      "Civ VI",
      "Sid Meiers Civ 6"
    ],
    "slug": "civilization-6",
    "summary": "Civilization VI offers new ways to interact with your world: cities now physically expand across the map, active research in technology and culture unlocks new potential, and competing leaders will pursue their own agendas.",
    "description": "Originally created by legendary game designer Sid Meier, Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age.",
    "release_date": "2016-10-21",
    "developer_id": "firaxis",
    "publisher_id": "twokgames",
    "developer_name": "Firaxis Games",
    "publisher_name": "2K Games",
    "genres": [
      "Strategy",
      "4X",
      "Turn-Based",
      "Historical"
    ],
    "tags": [
      "Strategy",
      "Turn-Based Strategy",
      "4X",
      "Historical",
      "Multiplayer"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "LAN PvP",
      "Steam Achievements",
      "Steam Workshop"
    ],
    "rating_score": 86,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/289070/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/289070/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_12cc6e1f4084de5bc0f66bfdbe3aaf3e59388b53.1920x1080.jpg?t=1784651829",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_6c4a3cfb61f1a9677cf2ac549c2816a4e651f741.1920x1080.jpg?t=1784651829",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_b2bf12299c38214fe520af0f724a6349d17ed330.1920x1080.jpg?t=1784651829"
    ]
  },
  {
    "id": "terraria",
    "ugdb_id": "UGDB-000035",
    "title": "Terraria",
    "alternate_titles": [
      "Terraria 2D",
      "Re-Logic Terraria"
    ],
    "slug": "terraria",
    "summary": "Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Delve deep into cavernous expanses, test your mettle in combat, or construct your own city!",
    "description": "In the World of Terraria, the choice is yours! Blending elements of classic action games with the freedom of sandbox-style creativity, Terraria is a unique gaming experience where both the journey and the destination are completely in the player control.",
    "release_date": "2011-05-16",
    "developer_id": "relogic",
    "publisher_id": "relogic",
    "developer_name": "Re-Logic",
    "publisher_name": "Re-Logic",
    "genres": [
      "Sandbox",
      "Survival",
      "2D",
      "Adventure",
      "Crafting"
    ],
    "tags": [
      "Sandbox",
      "Survival",
      "2D",
      "Multiplayer",
      "Crafting",
      "Adventure"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "LAN Co-op",
      "Steam Achievements",
      "Steam Workshop"
    ],
    "rating_score": 97,
    "metacritic_score": 83,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg?t=1769844435"
    ]
  },
  {
    "id": "borderlands-3",
    "ugdb_id": "UGDB-000036",
    "title": "Borderlands 3",
    "alternate_titles": [
      "BL3",
      "Borderlands 3 Super Deluxe",
      "Gearbox Borderlands"
    ],
    "slug": "borderlands-3",
    "summary": "The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds and enemies as one of four new Vault Hunters.",
    "description": "Stop the fanatical Calypso Twins from uniting the bandit clans and claiming the galaxy ultimate power. Only you, a thrill-seeking Vault Hunter, have the arsenal and allies to take them down.",
    "release_date": "2020-03-13",
    "developer_id": "gearbox",
    "publisher_id": "twokgames",
    "developer_name": "Gearbox Software",
    "publisher_name": "2K Games",
    "genres": [
      "Looter Shooter",
      "FPS",
      "Action RPG",
      "Co-op"
    ],
    "tags": [
      "Looter Shooter",
      "FPS",
      "Co-op",
      "Action RPG",
      "Comedy",
      "Guns"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 85,
    "metacritic_score": 81,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/397540/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/397540/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_9868ee40f39749a4c8222502cf86525ee32c1bef.1920x1080.jpg?t=1750802377",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_f2053d688ec55f2269c47b24313539938bef9064.1920x1080.jpg?t=1750802377",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_624638e46ed590d4bb1835558a5ab0981f7baadd.1920x1080.jpg?t=1750802377"
    ]
  },
  {
    "id": "mortal-kombat-11",
    "ugdb_id": "UGDB-000037",
    "title": "Mortal Kombat 11",
    "alternate_titles": [
      "MK11",
      "Mortal Kombat XI",
      "NetherRealm MK11"
    ],
    "slug": "mortal-kombat-11",
    "summary": "Mortal Kombat is back and better than ever in the next evolution of the iconic franchise. The all new Custom Character Variations give you unprecedented control of your fighters.",
    "description": "The all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it.",
    "release_date": "2019-04-23",
    "developer_id": "netherrealm",
    "publisher_id": "wb_games",
    "developer_name": "NetherRealm Studios",
    "publisher_name": "Warner Bros. Games",
    "genres": [
      "Fighting",
      "Action",
      "Gore",
      "Competitive",
      "Multiplayer"
    ],
    "tags": [
      "Fighting",
      "Gore",
      "Multiplayer",
      "Action",
      "Blood",
      "Arcade"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Shared/Split Screen PvP",
      "Steam Achievements"
    ],
    "rating_score": 89,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976310/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976310/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976310/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_e5cd8debd74027dbfafd9729fc32986a63393333.1920x1080.jpg?t=1780429525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_4fa4fd2ea1b7ff6c6b699dc9eb717986f80845a4.1920x1080.jpg?t=1780429525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_aa70f659fe14e3c07033474249096b60c17021b3.1920x1080.jpg?t=1780429525"
    ]
  },
  {
    "id": "street-fighter-6",
    "ugdb_id": "UGDB-000038",
    "title": "Street Fighter 6",
    "alternate_titles": [
      "SF6",
      "Street Fighter VI",
      "Capcom Fighting"
    ],
    "slug": "street-fighter-6",
    "summary": "Here comes Capcom newest challenger! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub.",
    "description": "Powered by Capcom proprietary RE ENGINE, Street Fighter 6 spans three distinct game modes: World Tour, Fighting Ground and Battle Hub. Your Path to Becoming a World Warrior Starts Here.",
    "release_date": "2023-06-02",
    "developer_id": "capcom",
    "publisher_id": "capcom",
    "developer_name": "Capcom",
    "publisher_name": "Capcom",
    "genres": [
      "Fighting",
      "Action",
      "2D Fighter",
      "Competitive"
    ],
    "tags": [
      "2D Fighter",
      "Action",
      "Competitive",
      "Multiplayer",
      "Arcade"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 88,
    "metacritic_score": 92,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.1920x1080.jpg?t=1789611360",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.1920x1080.jpg?t=1789611360",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.1920x1080.jpg?t=1789611360"
    ]
  },
  {
    "id": "tekken-8",
    "ugdb_id": "UGDB-000039",
    "title": "TEKKEN 8",
    "alternate_titles": [
      "T8",
      "Tekken 8",
      "Mishima Saga",
      "Bandai Tekken"
    ],
    "slug": "tekken-8",
    "summary": "Get ready for the next chapter in the legendary fighting game franchise, TEKKEN 8. Completely redesigned character visuals and high-fidelity models break the limits of new-gen hardware.",
    "description": "Holding the record for being the longest-running video game storyline, the TEKKEN series begins a new chapter as TEKKEN 8 continues the tragic saga of the Mishima and Kazama bloodlines, and their world-shaking father-and-son grudge matches.",
    "release_date": "2024-01-26",
    "developer_id": "bandainamcostudios",
    "publisher_id": "bandainamco",
    "developer_name": "Bandai Namco Studios Inc.",
    "publisher_name": "Bandai Namco Entertainment",
    "genres": [
      "Fighting",
      "Action",
      "3D Fighter",
      "Competitive"
    ],
    "tags": [
      "3D Fighter",
      "Action",
      "Multiplayer",
      "Competitive",
      "Martial Arts"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 87,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1778820/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1778820/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_62e6ec252bc1a641e8e42dba07f23631d5da85e6.1920x1080.jpg?t=1787180720",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_99dabe34abc0f92adc39d7099908c9540be7eb3f.1920x1080.jpg?t=1787180720",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/ss_bbd38a5fe748ec966cbc85ffcd4931f0f2da8ffd.1920x1080.jpg?t=1787180720"
    ]
  },
  {
    "id": "final-fantasy-7-remake",
    "ugdb_id": "UGDB-000040",
    "title": "FINAL FANTASY VII REMAKE INTERGRADE",
    "alternate_titles": [
      "FF7 Remake",
      "FFVII Remake",
      "Cloud Strife",
      "Final Fantasy 7 Intergrade"
    ],
    "slug": "final-fantasy-7-remake",
    "summary": "Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology and a new battle system.",
    "description": "FINAL FANTASY VII REMAKE is a bold reimagining of the original FINAL FANTASY VII, originally released in 1997 for the PlayStation. Developed under the guidance of key original creators, the first game in this epic project features immersive storytelling.",
    "release_date": "2022-06-17",
    "developer_id": "squareenix",
    "publisher_id": "squareenix",
    "developer_name": "Square Enix",
    "publisher_name": "Square Enix",
    "genres": [
      "JRPG",
      "Action RPG",
      "Fantasy",
      "Story Rich"
    ],
    "tags": [
      "JRPG",
      "Action RPG",
      "Great Soundtrack",
      "Story Rich",
      "Fantasy"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 90,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1462040/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1462040/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_20a352a2c20dd4bfb08fa131dc4c2e763510f584.1920x1080.jpg?t=1789446715",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_55903e74751601e42fb7f858d5c07ec048386ce2.1920x1080.jpg?t=1789446715",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/ss_ac55306d00923f2902de20bb5ade7f9cc190e8cf.1920x1080.jpg?t=1789446715"
    ]
  },
  {
    "id": "assassins-creed-valhalla",
    "ugdb_id": "UGDB-000041",
    "title": "Assassin's Creed Valhalla",
    "alternate_titles": [
      "AC Valhalla",
      "Valhalla",
      "Assassins Creed Viking",
      "Eivor"
    ],
    "slug": "assassins-creed-valhalla",
    "summary": "Become Eivor, a legendary Viking warrior raised on tales of battle and glory. Explore England Dark Ages as you raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.",
    "description": "Advanced RPG mechanics allow you to shape the growth of your character and influence the world around you. With every choice you make, from political alliances and combat strategy to dialogue and gear progression, you will carve your own path to glory.",
    "release_date": "2022-12-06",
    "developer_id": "ubisoftmontreal",
    "publisher_id": "ubisoft",
    "developer_name": "Ubisoft Montreal",
    "publisher_name": "Ubisoft",
    "genres": [
      "Action RPG",
      "Open World",
      "Historical",
      "Stealth"
    ],
    "tags": [
      "Open World",
      "Action RPG",
      "Vikings",
      "Historical",
      "Adventure"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 81,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2208920/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2208920/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/ss_103481084a59b34837113daf27c04679caf743f3.1920x1080.jpg?t=1786637382",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/ss_e7310b36689ec722d2ea4643efc15bd8fa720c67.1920x1080.jpg?t=1786637382",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/ss_c3bff917ead50268eb7708ef3bf30e07b58929e9.1920x1080.jpg?t=1786637382"
    ]
  },
  {
    "id": "far-cry-6",
    "ugdb_id": "UGDB-000042",
    "title": "Far Cry 6",
    "alternate_titles": [
      "FC6",
      "Far Cry 6 Yara",
      "Anton Castillo",
      "Ubisoft Far Cry"
    ],
    "slug": "far-cry-6",
    "summary": "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps.",
    "description": "Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara! Explore jungles, beaches, and cities on foot, horseback, or in a wide variety of vehicles.",
    "release_date": "2023-05-11",
    "developer_id": "ubisofttoronto",
    "publisher_id": "ubisoft",
    "developer_name": "Ubisoft Toronto",
    "publisher_name": "Ubisoft",
    "genres": [
      "FPS",
      "Open World",
      "Action",
      "Shooter"
    ],
    "tags": [
      "Open World",
      "FPS",
      "Action",
      "Co-op",
      "Shooter",
      "Singleplayer"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 76,
    "metacritic_score": 79,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2369390/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2369390/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_65c6467467795423bb959aa2c76ad2659f6553cd.1920x1080.jpg?t=1790173132",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_195eb286dad05d3b9e56f22eafacce7efe9c9ebf.1920x1080.jpg?t=1790173132",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_8bf4118728c0df8340c665329b78e428ed0a7c9f.1920x1080.jpg?t=1790173132"
    ]
  },
  {
    "id": "batman-arkham-knight",
    "ugdb_id": "UGDB-000043",
    "title": "Batman: Arkham Knight",
    "alternate_titles": [
      "Arkham Knight",
      "Batman Arkham 3",
      "Batmobile Arkham"
    ],
    "slug": "batman-arkham-knight",
    "summary": "Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady uniquely designed version of the Batmobile.",
    "description": "The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of Gotham City.",
    "release_date": "2015-06-23",
    "developer_id": "rocksteady",
    "publisher_id": "wb_games",
    "developer_name": "Rocksteady Studios",
    "publisher_name": "Warner Bros. Games",
    "genres": [
      "Action-Adventure",
      "Superhero",
      "Open World",
      "Stealth"
    ],
    "tags": [
      "Superhero",
      "Action",
      "Open World",
      "Batman",
      "Stealth",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 93,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/ss_90026e46a995760d53bfa2dc1612b73960c84c94.1920x1080.jpg?t=1745534372",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/ss_4c9d5fb849b1a7169184a37db000919b276056fe.1920x1080.jpg?t=1745534372",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/ss_5da3185e4f7da999300555747be6b84b8f16164f.1920x1080.jpg?t=1745534372"
    ]
  },
  {
    "id": "halo-master-chief-collection",
    "ugdb_id": "UGDB-000044",
    "title": "Halo: The Master Chief Collection",
    "alternate_titles": [
      "Halo MCC",
      "Master Chief Collection",
      "Halo Reach",
      "Halo 3"
    ],
    "slug": "halo-master-chief-collection",
    "summary": "The Master Chief iconic journey includes six games, collected in a single integrated experience. Whether you are a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.",
    "description": "Featuring Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST Campaign, and Halo 4, this is the definitive Halo experience with 67 campaign missions and over 120 multiplayer maps.",
    "release_date": "2019-12-03",
    "developer_id": "threefourthree",
    "publisher_id": "xboxgamestudios",
    "developer_name": "343 Industries",
    "publisher_name": "Xbox Game Studios",
    "genres": [
      "FPS",
      "Sci-fi",
      "Shooter",
      "Classic",
      "Multiplayer"
    ],
    "tags": [
      "FPS",
      "Classic",
      "Sci-fi",
      "Multiplayer",
      "Great Soundtrack",
      "Co-op"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Online Co-op",
      "Steam Achievements",
      "Cross-Platform Multiplayer"
    ],
    "rating_score": 93,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976730/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976730/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/ss_ce40a85f9f7f3fa0f620a87f8919f3212ab8e46e.1920x1080.jpg?t=1774466074",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/ss_62bbd86f4735893ef6cd53206cf8c93f87eb86ec.1920x1080.jpg?t=1774466074",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976730/ss_fdaf8ebd7f3c62e08398f39c9bfa486294ea5a0a.1920x1080.jpg?t=1774466074"
    ]
  },
  {
    "id": "control-ultimate-edition",
    "ugdb_id": "UGDB-000045",
    "title": "Control Ultimate Edition",
    "alternate_titles": [
      "Control",
      "Control UE",
      "Jesse Faden",
      "Federal Bureau of Control"
    ],
    "slug": "control-ultimate-edition",
    "summary": "Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat. Blending open-ended environments with the renowned world-building and storytelling of developer Remedy.",
    "description": "A corruptive presence has invaded the Federal Bureau of Control... Only you have the power to stop it. The world is now your weapon in an epic fight to annihilate an ominous enemy through deep and unpredictable environments.",
    "release_date": "2020-08-27",
    "developer_id": "remedy",
    "publisher_id": "fivezerofive",
    "developer_name": "Remedy Entertainment",
    "publisher_name": "505 Games",
    "genres": [
      "Action-Adventure",
      "Sci-fi",
      "Supernatural",
      "Metroidvania",
      "Third-Person"
    ],
    "tags": [
      "Supernatural",
      "Sci-fi",
      "Third-Person Shooter",
      "Atmospheric",
      "Destruction"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 90,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/870780/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/870780/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_8376498631b089e52fb5c75ffe119e0de5e6aed1.1920x1080.jpg?t=1781607969",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_5a16ce565951479e142c56a23f19d88333d84945.1920x1080.jpg?t=1781607969",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_c038bb7b20d72ba5d33cc95f7235aefa0b84a706.1920x1080.jpg?t=1781607969"
    ]
  },
  {
    "id": "gears-5",
    "ugdb_id": "UGDB-000046",
    "title": "Gears 5",
    "alternate_titles": [
      "Gears of War 5",
      "Gears 5 Kait",
      "The Coalition Gears"
    ],
    "slug": "gears-5",
    "summary": "From one of gaming most acclaimed sagas, Gears is bigger than ever, with five thrilling modes and the deepest campaign yet. With all-out war descending, Kait Diaz breaks away to uncover her connection to the enemy.",
    "description": "With all-out war descending, Kait Diaz breaks away to uncover her connection to the enemy and discovers the true danger to Sera herself. Play three-player campaign co-op online or in split-screen.",
    "release_date": "2019-09-09",
    "developer_id": "thecoalition",
    "publisher_id": "xboxgamestudios",
    "developer_name": "The Coalition",
    "publisher_name": "Xbox Game Studios",
    "genres": [
      "Third-Person Shooter",
      "Action",
      "Gore",
      "Sci-fi",
      "Co-op"
    ],
    "tags": [
      "Third-Person Shooter",
      "Action",
      "Co-op",
      "Gore",
      "Multiplayer"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 80,
    "metacritic_score": 84,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1097840/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1097840/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1097840/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097840/ss_7f5ef63810c77809b65c19734ba66ea56cf15ee2.1920x1080.jpg?t=1780003997",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097840/ss_9429a77bad31287dc7c68a6925eb893eeee65f5e.1920x1080.jpg?t=1780003997",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097840/ss_4869da09b43f0a38ee69e36c76e9a88d5641f03a.1920x1080.jpg?t=1780003997"
    ]
  },
  {
    "id": "sea-of-thieves",
    "ugdb_id": "UGDB-000047",
    "title": "Sea of Thieves: 2024 Edition",
    "alternate_titles": [
      "Sea of Thieves",
      "SoT",
      "Rare Pirate Game"
    ],
    "slug": "sea-of-thieves",
    "summary": "Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting everything you need to live the pirate life and become a legend in your own right.",
    "description": "With no set roles, you have complete freedom to approach the world, and other players, however you choose. Whether you are voyaging as a group or sailing solo, you are bound to encounter other crews in this shared-world adventure.",
    "release_date": "2020-06-03",
    "developer_id": "rare",
    "publisher_id": "xboxgamestudios",
    "developer_name": "Rare Ltd",
    "publisher_name": "Xbox Game Studios",
    "genres": [
      "Adventure",
      "Open World",
      "Pirates",
      "Multiplayer",
      "Co-op"
    ],
    "tags": [
      "Pirates",
      "Open World",
      "Multiplayer",
      "Adventure",
      "Co-op",
      "Sailing"
    ],
    "features": [
      "Online PvP",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 90,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172620/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172620/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_ec623c77d75dfa098c622b547b1ab21ad4cae0a8.1920x1080.jpg?t=1789650456",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_6ea04bdc415c336a195555aec4b97a73a9910fc1.1920x1080.jpg?t=1789650456",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_2144ac860fd64d82cb9cc49680f5087c7bb8fe2f.1920x1080.jpg?t=1789650456"
    ]
  },
  {
    "id": "the-sims-4",
    "ugdb_id": "UGDB-000048",
    "title": "The Sims 4",
    "alternate_titles": [
      "Sims 4",
      "TS4",
      "Maxis Sims"
    ],
    "slug": "the-sims-4",
    "summary": "Play with life and discover the possibilities. Unleash your imagination and create a unique world of Sims that an expression of you! Explore and customize every detail from Sims to homes, and much more.",
    "description": "Customize a variety of Sims, each with distinct appearances, dynamic personalities, and inspiring aspirations. Use robust customization features to bring your imagination to life. Create yourself, your favorite celebrities, your fantasy, or your friends!",
    "release_date": "2020-06-18",
    "developer_id": "maxis",
    "publisher_id": "ea",
    "developer_name": "Maxis",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Simulation",
      "Life Sim",
      "Sandbox",
      "Casual"
    ],
    "tags": [
      "Life Sim",
      "Simulation",
      "Building",
      "Character Customization",
      "Sandbox"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 87,
    "metacritic_score": 80,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222670/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222670/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/ss_537683e5e29c2d6d02c64aa7321dcb26166f7d82.1920x1080.jpg?t=1790028362",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/ss_2fc938d99a1e87893852cb2d2113478190607941.1920x1080.jpg?t=1790028362",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/ss_b447d6436d2d00cd5e7c170e509b2246dfc879e8.1920x1080.jpg?t=1790028362"
    ]
  },
  {
    "id": "need-for-speed-unbound",
    "ugdb_id": "UGDB-000049",
    "title": "Need for Speed Unbound",
    "alternate_titles": [
      "NFS Unbound",
      "Need for Speed 2022",
      "Lakeshore NFS"
    ],
    "slug": "need-for-speed-unbound",
    "summary": "Race against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore ultimate street racing challenge. Pack your garage with precision-tuned, custom rides and light up the streets with your style.",
    "description": "Graffiti comes to life in Need for Speed Unbound with an all-new, unique visual style that blends elements of the freshest street art with the most realistic looking cars in Need for Speed history.",
    "release_date": "2022-11-29",
    "developer_id": "criterion",
    "publisher_id": "ea",
    "developer_name": "Criterion Games",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Racing",
      "Automobile Sim",
      "Open World",
      "Action",
      "Street Racing"
    ],
    "tags": [
      "Racing",
      "Open World",
      "Driving",
      "Automobile Sim",
      "Customization"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 75,
    "metacritic_score": 77,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1846380/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1846380/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/ss_e588ffa6c4a219f7d45e359d838075329fb75e93.1920x1080.jpg?t=1777394467",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/ss_9363c669c80fec75684c22a2203d6490a176bf6c.1920x1080.jpg?t=1777394467",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/ss_62104cb0a8f10f467f14976d3f042f7a97a1c1f9.1920x1080.jpg?t=1777394467"
    ]
  },
  {
    "id": "battlefield-2042",
    "ugdb_id": "UGDB-000050",
    "title": "Battlefield 2042",
    "alternate_titles": [
      "BF2042",
      "Battlefield 6",
      "DICE Battlefield"
    ],
    "slug": "battlefield-2042",
    "summary": "Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. Adapt and overcome in a near-future world transformed by disorder.",
    "description": "Squad up and bring a cutting-edge arsenal into 128-player battles across massive battlegrounds with dynamic storms, environmental hazards, and unprecedented scale.",
    "release_date": "2021-11-19",
    "developer_id": "dice",
    "publisher_id": "ea",
    "developer_name": "DICE",
    "publisher_name": "Electronic Arts",
    "genres": [
      "FPS",
      "War",
      "Military",
      "Action",
      "Multiplayer"
    ],
    "tags": [
      "FPS",
      "Multiplayer",
      "Military",
      "Shooter",
      "Action",
      "War"
    ],
    "features": [
      "Online PvP",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 65,
    "metacritic_score": 68,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1517290/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1517290/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/4443207b9a21def316907bda32c5f32c7d42fcb6/ss_4443207b9a21def316907bda32c5f32c7d42fcb6.1920x1080.jpg?t=1777324359",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/931142c4907822f144340f34cc51c64b523669ff/ss_931142c4907822f144340f34cc51c64b523669ff.1920x1080.jpg?t=1777324359",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/cf954bff997292185b157a6024a59350544f8147/ss_cf954bff997292185b157a6024a59350544f8147.1920x1080.jpg?t=1777324359"
    ]
  },
  {
    "id": "ea-sports-fc-24",
    "ugdb_id": "UGDB-000051",
    "title": "EA SPORTS FC 24",
    "alternate_titles": [
      "FC 24",
      "FIFA 24",
      "EA Sports FC",
      "Ultimate Team 24"
    ],
    "slug": "ea-sports-fc-24",
    "summary": "EA SPORTS FC 24 welcomes you to The World Game: the most true-to-football experience ever with HyperMotionV, PlayStyles optimised by Opta, and a revolutionized Frostbite Engine.",
    "description": "HyperMotionV captures the game as it truly played, using volumetric data from 180+ pro men and women matches to ensure movement in-game accurately reflects real-world action on the pitch.",
    "release_date": "2023-09-29",
    "developer_id": "eacanada",
    "publisher_id": "ea",
    "developer_name": "EA Canada",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Sports",
      "Football",
      "Soccer",
      "Simulation",
      "Competitive"
    ],
    "tags": [
      "Sports",
      "Football",
      "Soccer",
      "Simulation",
      "Multiplayer"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 68,
    "metacritic_score": 76,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/ss_f3d31c7cffc2a6ab42fb76aaac2bc9d5258bc142.1920x1080.jpg?t=1752167366",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/ss_6c1ef918ffe94050e72dcb2cfad3a95ee3d69f08.1920x1080.jpg?t=1752167366",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/ss_eb8f5def662f28726c875e641cd5faff75e6b16d.1920x1080.jpg?t=1752167366"
    ]
  },
  {
    "id": "diablo-4",
    "ugdb_id": "UGDB-000052",
    "title": "Diablo IV",
    "alternate_titles": [
      "Diablo 4",
      "D4",
      "Sanctuary Blizzard",
      "Lilith Diablo"
    ],
    "slug": "diablo-4",
    "summary": "The endless battle between the High Heavens and the Burning Hells rages on as chaos threatens to consume Sanctuary. With ceaseless demons to slaughter, countless Abilities to master, nightmarish Dungeons, and Legendary loot.",
    "description": "Diablo IV is the ultimate action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish dungeons, and legendary loot. Embark on the campaign solo or with friends.",
    "release_date": "2023-10-17",
    "developer_id": "blizzard",
    "publisher_id": "blizzard",
    "developer_name": "Blizzard Entertainment",
    "publisher_name": "Blizzard Entertainment",
    "genres": [
      "Action RPG",
      "Hack and Slash",
      "Dark Fantasy",
      "Loot",
      "Co-op"
    ],
    "tags": [
      "Action RPG",
      "Dark Fantasy",
      "Hack and Slash",
      "Loot",
      "Multiplayer"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 72,
    "metacritic_score": 86,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2344520/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2344520/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/8512b560be0ddef49cb0da366b7d2ddf5df18cab/ss_8512b560be0ddef49cb0da366b7d2ddf5df18cab.1920x1080.jpg?t=1789491624",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/24952fc1c8779c9a7a555c01489c76f9814f70a7/ss_24952fc1c8779c9a7a555c01489c76f9814f70a7.1920x1080.jpg?t=1789491624",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/7eda1d661ffde2750d56517e1a46406f340675e5/ss_7eda1d661ffde2750d56517e1a46406f340675e5.1920x1080.jpg?t=1789491624"
    ]
  },
  {
    "id": "subnautica",
    "ugdb_id": "UGDB-000053",
    "title": "Subnautica",
    "alternate_titles": [
      "Subnautica 1",
      "Subnautica Underwater",
      "Unknown Worlds Underwater"
    ],
    "slug": "subnautica",
    "summary": "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
    "description": "You have crash-landed on an alien ocean world, and the only way to go is down. Subnautica oceans range from sun drenched shallow coral reefs to treacherous deep-sea trenches, lava fields, and bio-luminescent underwater rivers.",
    "release_date": "2018-01-23",
    "developer_id": "unknownworlds",
    "publisher_id": "unknownworlds",
    "developer_name": "Unknown Worlds Entertainment",
    "publisher_name": "Unknown Worlds Entertainment",
    "genres": [
      "Survival",
      "Open World",
      "Underwater",
      "Exploration",
      "Sci-fi"
    ],
    "tags": [
      "Survival",
      "Open World",
      "Underwater",
      "Exploration",
      "Sci-fi",
      "Crafting"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "VR Support"
    ],
    "rating_score": 96,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_e182b6b20bb797500f9f63c561586d920d44e37c.1920x1080.jpg?t=1777456112",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_970a13f246e33e0df26d93baf9f8e975732adb4b.1920x1080.jpg?t=1777456112",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/ss_5f2f2ea498cdc632cbffd6cf37c1a09670eb3272.1920x1080.jpg?t=1777456112"
    ]
  },
  {
    "id": "celeste",
    "ugdb_id": "UGDB-000054",
    "title": "Celeste",
    "alternate_titles": [
      "Celeste Mountain",
      "Madeline Celeste",
      "EXOK Celeste"
    ],
    "slug": "celeste",
    "summary": "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.",
    "description": "A narrative-driven, single-player adventure like mom used to make, with a charming cast of characters and a touching story of self-discovery. A massive mountain teeming with 700+ screens of hardcore platforming challenges.",
    "release_date": "2018-01-25",
    "developer_id": "extremelyok",
    "publisher_id": "extremelyok",
    "developer_name": "Extremely OK Games",
    "publisher_name": "Extremely OK Games",
    "genres": [
      "Platformer",
      "Precision Platformer",
      "Pixel Graphics",
      "Indie",
      "Difficult"
    ],
    "tags": [
      "Precision Platformer",
      "Difficult",
      "Pixel Graphics",
      "Great Soundtrack",
      "Female Protagonist"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 97,
    "metacritic_score": 94,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/504230/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/504230/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_1ad297c2044cdcf450ee83e56350cafb590da755.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_03bfe6bd5ddac7f747c8d2aa1a4f82cfd53c6dcb.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_4b0f0222341b64a37114033aca9994551f27c161.1920x1080.jpg?t=1714089525"
    ]
  },
  {
    "id": "cuphead",
    "ugdb_id": "UGDB-000055",
    "title": "Cuphead",
    "alternate_titles": [
      "Cuphead and Mugman",
      "Studio MDHR Cuphead",
      "Delicious Last Course"
    ],
    "slug": "cuphead",
    "summary": "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era.",
    "description": "Play as Cuphead or Mugman (in single player or local co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets while you try to pay your debt back to the devil!",
    "release_date": "2017-09-29",
    "developer_id": "studiomdhr",
    "publisher_id": "studiomdhr",
    "developer_name": "Studio MDHR Entertainment Inc.",
    "publisher_name": "Studio MDHR Entertainment Inc.",
    "genres": [
      "Action",
      "Platformer",
      "Hand-drawn",
      "Difficult",
      "Run and Gun"
    ],
    "tags": [
      "Difficult",
      "Hand-drawn",
      "Action",
      "Great Soundtrack",
      "Co-op",
      "2D"
    ],
    "features": [
      "Single-player",
      "Shared/Split Screen Co-op",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 96,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/268910/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/268910/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_e3096a5555cb77d88db165c83d5ef3a24af1354a.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_483fb089be0093beeef03525276803a9ca4f66a1.1920x1080.jpg?t=1709068852"
    ]
  },
  {
    "id": "ori-and-the-will-of-the-wisps",
    "ugdb_id": "UGDB-000056",
    "title": "Ori and the Will of the Wisps",
    "alternate_titles": [
      "Ori 2",
      "Will of the Wisps",
      "Moon Studios Ori"
    ],
    "slug": "ori-and-the-will-of-the-wisps",
    "summary": "Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you will encounter towering enemies and challenging puzzles on your quest to unravel Ori destiny.",
    "description": "The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm way, it will take more than bravery to bring a family back together, heal a broken land, and discover Ori true destiny.",
    "release_date": "2020-03-11",
    "developer_id": "moonstudios",
    "publisher_id": "xboxgamestudios",
    "developer_name": "Moon Studios GmbH",
    "publisher_name": "Xbox Game Studios",
    "genres": [
      "Metroidvania",
      "Platformer",
      "Beautiful",
      "Atmospheric",
      "Action"
    ],
    "tags": [
      "Metroidvania",
      "Atmospheric",
      "Great Soundtrack",
      "Beautiful",
      "Platformer"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 96,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1057090/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1057090/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1057090/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_0cf0ec6681ae5771173790dbc99ddb3bf3b886ad.1920x1080.jpg?t=1759530749",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_f8ac174b7949e89fe1939a7bd2c471785dee55f0.1920x1080.jpg?t=1759530749",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1057090/ss_3ae04b208aaff3869f69617c47449ec1d7a06513.1920x1080.jpg?t=1759530749"
    ]
  },
  {
    "id": "disco-elysium",
    "ugdb_id": "UGDB-000057",
    "title": "Disco Elysium - The Final Cut",
    "alternate_titles": [
      "Disco Elysium",
      "Revachol",
      "ZA/UM Detective RPG"
    ],
    "slug": "disco-elysium",
    "summary": "Disco Elysium - The Final Cut is the definitive edition of the groundbreaking role playing game. You are a detective with a unique skill system at your disposal and a whole city to carve your path across.",
    "description": "Interrogate unforgettable characters, crack murders, or take bribes. Become a hero or an absolute disaster of a human being. The Final Cut brings the city of Revachol to life with full voice acting for every single character.",
    "release_date": "2019-10-15",
    "developer_id": "zaum",
    "publisher_id": "zaum",
    "developer_name": "ZA/UM",
    "publisher_name": "ZA/UM",
    "genres": [
      "RPG",
      "Story Rich",
      "Detective",
      "Choices Matter",
      "Isomeric"
    ],
    "tags": [
      "RPG",
      "Story Rich",
      "Choices Matter",
      "Detective",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 93,
    "metacritic_score": 97,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632470/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632470/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/ss_b3694e99ffdb686d1bbbbe16a540d3d2ccd509c4.1920x1080.jpg?t=1780913406",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/ss_9125a718ee9ba85386ae5d4eb820f3266073fc97.1920x1080.jpg?t=1780913406",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/ss_4f5fdc3cf42feca8dafb1f7d2910ef96e62708a2.1920x1080.jpg?t=1780913406"
    ]
  },
  {
    "id": "lies-of-p",
    "ugdb_id": "UGDB-000058",
    "title": "Lies of P",
    "alternate_titles": [
      "Lies of P Pinocchio",
      "Neowiz Souls-like",
      "Krat Lies of P"
    ],
    "slug": "lies-of-p",
    "summary": "Lies of P is a thrilling soulslike that takes the story of Pinocchio, turns it on its head, and sets it against the darkly elegant backdrop of the Belle Époque era.",
    "description": "You are a puppet created by Geppetto who caught in a web of lies with unimaginable monsters and untrustworthy figures standing between you and the events that have befallen the city of Krat.",
    "release_date": "2023-09-18",
    "developer_id": "neowiz",
    "publisher_id": "neowiz",
    "developer_name": "NEOWIZ",
    "publisher_name": "NEOWIZ",
    "genres": [
      "Souls-like",
      "Action RPG",
      "Dark Fantasy",
      "Steampunk",
      "Difficult"
    ],
    "tags": [
      "Souls-like",
      "Dark Fantasy",
      "Difficult",
      "Action RPG",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 92,
    "metacritic_score": 83,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1627720/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1627720/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1627720/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/ss_cef0c2964b82e2b80ab0756da08f61c27d9fa33c.1920x1080.jpg?t=1764565054",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/ss_b510d9d65802c3cc776d1296c3daa1e9a79e3615.1920x1080.jpg?t=1764565054",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/ss_132a6579a7c2f3241e55ef9ce3eae798786168ad.1920x1080.jpg?t=1764565054"
    ]
  },
  {
    "id": "armored-core-6",
    "ugdb_id": "UGDB-000059",
    "title": "ARMORED CORE VI FIRES OF RUBICON",
    "alternate_titles": [
      "AC6",
      "Armored Core 6",
      "Fires of Rubicon",
      "FromSoftware Mecha"
    ],
    "slug": "armored-core-6",
    "summary": "A new action game based on the concept of the ARMORED CORE series that uses the knowledge gained from FromSoftware recent action game development. Players will pilot their mech in fast-paced, omnidirectional battles.",
    "description": "Combining FromSoftware longstanding expertise in mech games with their signature action gameplay, ARMORED CORE VI FIRES OF RUBICON brings a brand-new action experience to the series.",
    "release_date": "2023-08-25",
    "developer_id": "fromsoftware",
    "publisher_id": "bandainamco",
    "developer_name": "FromSoftware Inc.",
    "publisher_name": "Bandai Namco Entertainment",
    "genres": [
      "Mecha",
      "Action",
      "Fast-Paced",
      "Sci-fi",
      "Difficult"
    ],
    "tags": [
      "Mecha",
      "Action",
      "Sci-fi",
      "Difficult",
      "Customization",
      "Fast-Paced"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 90,
    "metacritic_score": 86,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888160/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888160/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888160/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888160/ss_549f55589c10866bc31243d277324e31ad155b29.1920x1080.jpg?t=1748630736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888160/ss_dcd98899647b45246cfb296aa5a3b40b2ae87e9e.1920x1080.jpg?t=1748630736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888160/ss_c92110c39a9c64376af5e8da31a0e6ffa9747334.1920x1080.jpg?t=1748630736"
    ]
  },
  {
    "id": "dragons-dogma-2",
    "ugdb_id": "UGDB-000060",
    "title": "Dragon's Dogma 2",
    "alternate_titles": [
      "DD2",
      "Dragons Dogma 2",
      "Capcom Arisen",
      "Pawns RPG"
    ],
    "slug": "dragons-dogma-2",
    "summary": "Dragon Dogma 2 is a single player, narrative driven action-RPG that challenges the players to choose their own experience from the appearance of their Arisen, their vocation, their party, how to approach different situations and more.",
    "description": "On your journey, you’ll be joined by Pawns, mysterious otherworldly beings, in an adventure so unique you will feel as if accompanied by other players while on your own adventure.",
    "release_date": "2024-03-22",
    "developer_id": "capcom",
    "publisher_id": "capcom",
    "developer_name": "Capcom",
    "publisher_name": "Capcom",
    "genres": [
      "Action RPG",
      "Open World",
      "Fantasy",
      "Character Customization"
    ],
    "tags": [
      "Open World",
      "Action RPG",
      "Fantasy",
      "Singleplayer",
      "Character Customization"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 72,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2054970/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2054970/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2054970/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_f419f8b6577558b40ce8c384f4bfaabbf44c8a8e.1920x1080.jpg?t=1788308490",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_084be4d2bf3c7365c2b684c4b5578a1ad8deefac.1920x1080.jpg?t=1788308490",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/ss_037861574d85abdfb8908204e446544abd92effe.1920x1080.jpg?t=1788308490"
    ]
  },
  {
    "id": "remnant-2",
    "ugdb_id": "UGDB-000061",
    "title": "Remnant II",
    "alternate_titles": [
      "Remnant 2",
      "Gunfire Remnant",
      "Root Gunfire"
    ],
    "slug": "remnant-2",
    "summary": "Remnant II pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds. Play solo or co-op with two other friends to explore the depths of the unknown.",
    "description": "Remnant II is the sequel to the best-selling game Remnant: From the Ashes that pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds.",
    "release_date": "2023-07-25",
    "developer_id": "gunfiregames",
    "publisher_id": "arcgames",
    "developer_name": "Gunfire Games",
    "publisher_name": "Arc Games",
    "genres": [
      "Action RPG",
      "Souls-like",
      "Third-Person Shooter",
      "Co-op",
      "Loot"
    ],
    "tags": [
      "Souls-like",
      "Third-Person Shooter",
      "Co-op",
      "Action RPG",
      "Loot"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 85,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1282100/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1282100/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1282100/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282100/ss_00d09f2e2cc5eee5e3af45c6f158120deb0fcef3.1920x1080.jpg?t=1764659459",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282100/ss_8091da48416dad9dee09ca57a912c62b20f4d171.1920x1080.jpg?t=1764659459",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282100/ss_99a1020923f500c3f8668b67a2b5e04fa6eb7558.1920x1080.jpg?t=1764659459"
    ]
  },
  {
    "id": "dave-the-diver",
    "ugdb_id": "UGDB-000062",
    "title": "DAVE THE DIVER",
    "alternate_titles": [
      "Dave The Diver",
      "Bancho Sushi",
      "Mintrocket Dave"
    ],
    "slug": "dave-the-diver",
    "summary": "DAVE THE DIVER is a casual, singleplayer adventure RPG featuring deep-sea exploration and fishing during the day and sushi restaurant management at night. Join Dave and his quirky friends.",
    "description": "Explore the ever-changing Blue Hole and use a harpoon and other weapons to catch fish and various creatures. Upgrade and forge equipment with collected resources and sushi restaurant profits.",
    "release_date": "2023-06-28",
    "developer_id": "mintrocket",
    "publisher_id": "mintrocket",
    "developer_name": "MINTROCKET",
    "publisher_name": "MINTROCKET",
    "genres": [
      "Adventure",
      "Casual",
      "RPG",
      "Management",
      "Pixel Graphics"
    ],
    "tags": [
      "Pixel Graphics",
      "Management",
      "Fishing",
      "Casual",
      "Underwater",
      "Adventure"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 97,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1868140/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1868140/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1868140/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_7c86a17d545b6260ecdcfdd62622e49dcc9011bd.1920x1080.jpg?t=1789456375",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_783e1f6c2d4c358fb494d055c47c0e888922abd5.1920x1080.jpg?t=1789456375",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/ss_6eac5a3b59e181d1ffa26757b041be521bfe1779.1920x1080.jpg?t=1789456375"
    ]
  },
  {
    "id": "deep-rock-galactic",
    "ugdb_id": "UGDB-000063",
    "title": "Deep Rock Galactic",
    "alternate_titles": [
      "DRG",
      "Rock and Stone",
      "Ghost Ship Dwarves"
    ],
    "slug": "deep-rock-galactic",
    "summary": "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
    "description": "Work together as a team to dig, explore, and fight your way through a massive cave system filled with hordes of deadly enemies and valuable resources. You will need to rely on your teammates if you want to survive the most hostile cave systems in the galaxy!",
    "release_date": "2020-05-13",
    "developer_id": "ghostship",
    "publisher_id": "coffeestain",
    "developer_name": "Ghost Ship Games",
    "publisher_name": "Coffee Stain Publishing",
    "genres": [
      "FPS",
      "Co-op",
      "Mining",
      "Procedural Generation",
      "Action"
    ],
    "tags": [
      "Co-op",
      "FPS",
      "Mining",
      "PvE",
      "Action",
      "Space",
      "Dwarves"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 97,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/548430/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/548430/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/49a57d16c55b74a6f835c590421d299d417af4f8/ss_49a57d16c55b74a6f835c590421d299d417af4f8.1920x1080.jpg?t=1790248272",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/5ffa803484da48da16db9006d7f4313db8999c2a/ss_5ffa803484da48da16db9006d7f4313db8999c2a.1920x1080.jpg?t=1790248272",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/cf8c347fac940f99a9a256730aca3cb647cb563f/ss_cf8c347fac940f99a9a256730aca3cb647cb563f.1920x1080.jpg?t=1790248272"
    ]
  },
  {
    "id": "it-takes-two",
    "ugdb_id": "UGDB-000064",
    "title": "It Takes Two",
    "alternate_titles": [
      "It Takes 2",
      "Hazelight Co-op",
      "Cody and May"
    ],
    "slug": "it-takes-two",
    "summary": "Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend Pass and work together across a huge variety of gleefully disruptive gameplay challenges.",
    "description": "Winner of Game of the Year at The Game Awards 2021. Master unique and connected character abilities in every new level. Help each other through an abundance of unexpected obstacles and laugh-out-loud moments.",
    "release_date": "2021-03-26",
    "developer_id": "hazelight",
    "publisher_id": "ea",
    "developer_name": "Hazelight Studios",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Co-op",
      "Platformer",
      "Adventure",
      "Puzzle",
      "Split Screen"
    ],
    "tags": [
      "Co-op",
      "Multiplayer",
      "Puzzle",
      "Adventure",
      "Split Screen",
      "Family Friendly"
    ],
    "features": [
      "Online Co-op",
      "Shared/Split Screen Co-op",
      "Steam Achievements",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_3e59753eefaba9a7704a18e902b48e8d38e95e0b.1920x1080.jpg?t=1777395376",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_6e987a0678b013bfd0073a9ac4703e1f04ca4dea.1920x1080.jpg?t=1777395376",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_fdac523e3ea4d2f32a44449bb8c224857563bd7d.1920x1080.jpg?t=1777395376"
    ]
  },
  {
    "id": "mass-effect-legendary-edition",
    "ugdb_id": "UGDB-000065",
    "title": "Mass Effect Legendary Edition",
    "alternate_titles": [
      "Mass Effect Trilogy",
      "Commander Shepard",
      "MELE",
      "BioWare Mass Effect"
    ],
    "slug": "mass-effect-legendary-edition",
    "summary": "The Mass Effect Legendary Edition includes single-player base content and over 40 DLC from the highly acclaimed Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons, armors, and packs.",
    "description": "Relive the cinematic saga with over 40 DLC items from the critically acclaimed games, all remastered and optimized for 4K Ultra HD. Create and customize your own character from appearance and skills to a personalized arsenal.",
    "release_date": "2021-05-14",
    "developer_id": "bioware",
    "publisher_id": "ea",
    "developer_name": "BioWare",
    "publisher_name": "Electronic Arts",
    "genres": [
      "RPG",
      "Sci-fi",
      "Third-Person Shooter",
      "Story Rich",
      "Space"
    ],
    "tags": [
      "Sci-fi",
      "Story Rich",
      "RPG",
      "Space",
      "Choices Matter",
      "Third-Person Shooter"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 93,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1328670/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1328670/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_3cfdbd8a5d94f9005d33ba17bb6b163dc458ddf7.1920x1080.jpg?t=1777395134",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_4e226eb092381ba6c4ea9c164a1d18574c993a8a.1920x1080.jpg?t=1777395134",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/ss_8994024759b1e6afb09a99381637c8b6fb4e4075.1920x1080.jpg?t=1777395134"
    ]
  },
  {
    "id": "among-us",
    "ugdb_id": "UGDB-000066",
    "title": "Among Us",
    "alternate_titles": [
      "AmongUs",
      "Impostor Game",
      "Innersloth Among Us"
    ],
    "slug": "among-us",
    "summary": "An online and local party game of teamwork and betrayal for 4-15 players... in space! Play with 4-15 player online or via local WiFi as you attempt to prep your spaceship for departure, but beware as one or more random players among the Crew are Impostors.",
    "description": "Life as a Crewmate: Complete all your tasks on the ship to win, but watch out for Impostors! Report dead bodies and call emergency meetings to vote the Impostors out. Hope you guessed correctly!",
    "release_date": "2018-11-16",
    "developer_id": "innersloth",
    "publisher_id": "innersloth",
    "developer_name": "Innersloth",
    "publisher_name": "Innersloth",
    "genres": [
      "Social Deduction",
      "Multiplayer",
      "Casual",
      "Party Game",
      "Space"
    ],
    "tags": [
      "Social Deduction",
      "Multiplayer",
      "Party Game",
      "Space",
      "Casual",
      "Funny"
    ],
    "features": [
      "Online PvP",
      "LAN PvP",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 92,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_b7374128e5b786a302a716bca038d604b00ffe46.1920x1080.jpg?t=1787088490",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_719484b5e0314cc2ae43793786448e032056a31d.1920x1080.jpg?t=1787088490",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_ffd9c8926cbd7fce3ca5e5efb4399c47bb196bc8.1920x1080.jpg?t=1787088490"
    ]
  },
  {
    "id": "destiny-2",
    "ugdb_id": "UGDB-000067",
    "title": "Destiny 2",
    "alternate_titles": [
      "D2",
      "Destiny 2 Lightfall",
      "The Final Shape",
      "Bungie Destiny"
    ],
    "slug": "destiny-2",
    "summary": "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free. Dive into the world of Destiny 2 to explore the mysteries of the solar system.",
    "description": "You are a Guardian, defender of the Last City of humanity in a solar system under siege by infamous villains. Look to the stars and stand against the darkness. Your legend begins now.",
    "release_date": "2019-10-01",
    "developer_id": "bungie",
    "publisher_id": "bungie",
    "developer_name": "Bungie",
    "publisher_name": "Bungie",
    "genres": [
      "FPS",
      "Looter Shooter",
      "MMORPG",
      "Sci-fi",
      "Co-op"
    ],
    "tags": [
      "FPS",
      "Looter Shooter",
      "MMO",
      "Sci-fi",
      "Co-op",
      "Multiplayer"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Steam Achievements"
    ],
    "rating_score": 82,
    "metacritic_score": 83,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1085660/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1085660/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/d7038cee22b9de60003e7bbc07d65069ad6044ab/ss_d7038cee22b9de60003e7bbc07d65069ad6044ab.1920x1080.jpg?t=1781815889",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/766aedcb8d2eb8fcb08002919ee10f5ac6c02d79/ss_766aedcb8d2eb8fcb08002919ee10f5ac6c02d79.1920x1080.jpg?t=1781815889",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/d3a51ac12ac9b30af96b7e7a5bcef8f56abf5ca4/ss_d3a51ac12ac9b30af96b7e7a5bcef8f56abf5ca4.1920x1080.jpg?t=1781815889"
    ]
  },
  {
    "id": "portal-2",
    "ugdb_id": "UGDB-000068",
    "title": "Portal 2",
    "alternate_titles": [
      "Portal 2 GLaDOS",
      "Wheatley Portal",
      "Valve Portal 2"
    ],
    "slug": "portal-2",
    "summary": "The \"Perpetual Testing Initiative\" has been expanded to allow you to design co-op puzzles for you and your friends! Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original over 70 accolades.",
    "description": "The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs.",
    "release_date": "2011-04-19",
    "developer_id": "valve",
    "publisher_id": "valve",
    "developer_name": "Valve",
    "publisher_name": "Valve",
    "genres": [
      "Puzzle",
      "First-Person",
      "Sci-fi",
      "Comedy",
      "Co-op"
    ],
    "tags": [
      "Puzzle",
      "Co-op",
      "First-Person",
      "Sci-fi",
      "Comedy",
      "Story Rich"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Shared/Split Screen Co-op",
      "Steam Achievements",
      "Steam Workshop"
    ],
    "rating_score": 99,
    "metacritic_score": 95,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_f3f6787d74739d3b2ec8a484b5c994b3d31ef325.1920x1080.jpg?t=1790187113",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_6a4f5afdaa98402de9cf0b59fed27bab3256a6f4.1920x1080.jpg?t=1790187113",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_0cdd90fafc160b52d08b303d205f9fd4e83cf164.1920x1080.jpg?t=1790187113"
    ]
  },
  {
    "id": "outer-wilds",
    "ugdb_id": "UGDB-000069",
    "title": "Outer Wilds",
    "alternate_titles": [
      "Outer Wilds Archaeologist",
      "Mobius Space Exploration",
      "Nomai Space Game"
    ],
    "slug": "outer-wilds",
    "summary": "Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.",
    "description": "You are the newest recruit of Outer Wilds Ventures, a fledgling space program searching for answers in a strange, constantly evolving solar system. Who built the ruins on the moon? What lurks in the heart of Dark Bramble?",
    "release_date": "2020-06-18",
    "developer_id": "mobiusdigital",
    "publisher_id": "annapurnainteractive",
    "developer_name": "Mobius Digital",
    "publisher_name": "Annapurna Interactive",
    "genres": [
      "Exploration",
      "Mystery",
      "Space",
      "Sci-fi",
      "Adventure"
    ],
    "tags": [
      "Space",
      "Exploration",
      "Mystery",
      "Time Travel",
      "Great Soundtrack",
      "Story Rich"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 96,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/753640/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/753640/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/ss_ec95a283483f0438be40d033f08b9d956e748d54.1920x1080.jpg?t=1785424341",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/ss_09f0fa8d9b8d7da1408cf4e03303d896cbd9be18.1920x1080.jpg?t=1785424341",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/ss_c624a6b8edca0d451605592edd927dbcc14917a8.1920x1080.jpg?t=1785424341"
    ]
  },
  {
    "id": "the-last-of-us-part-1",
    "ugdb_id": "UGDB-000070",
    "title": "The Last of Us Part I",
    "alternate_titles": [
      "TLOU",
      "The Last of Us Part 1",
      "Joel and Ellie",
      "Naughty Dog TLOU"
    ],
    "slug": "the-last-of-us-part-1",
    "summary": "Experience the emotional storytelling and unforgettable characters in The Last of Us, winner of over 200 Game of the Year awards. In a ravaged civilization, infected and hardened survivors run rampant.",
    "description": "Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.",
    "release_date": "2023-03-28",
    "developer_id": "naughtydog",
    "publisher_id": "playstationpub",
    "developer_name": "Naughty Dog LLC",
    "publisher_name": "PlayStation Publishing LLC",
    "genres": [
      "Action-Adventure",
      "Post-apocalyptic",
      "Story Rich",
      "Survival Horror",
      "Third-Person"
    ],
    "tags": [
      "Story Rich",
      "Post-apocalyptic",
      "Zombies",
      "Action",
      "Survival Horror"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 82,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_3f1805ecddafacee7f61f87cb8e4624435a83ee3.1920x1080.jpg?t=1750959031",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_89fffc2857dcae29dee2a09f1be33d745610e19d.1920x1080.jpg?t=1750959031",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_8cd55ab975b2e47f4d4d9a0da4ae6948040ef807.1920x1080.jpg?t=1750959031"
    ]
  },
  {
    "id": "horizon-zero-dawn",
    "ugdb_id": "UGDB-000071",
    "title": "Horizon Zero Dawn Complete Edition",
    "alternate_titles": [
      "HZD",
      "Horizon Zero Dawn",
      "Aloy Horizon",
      "Guerrilla Horizon"
    ],
    "slug": "horizon-zero-dawn",
    "summary": "Experience Aloy legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    "description": "Earth is ours no more. Experience Aloy entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her past, discover her destiny... and stop a catastrophic threat to the future.",
    "release_date": "2020-08-07",
    "developer_id": "guerrilla",
    "publisher_id": "playstationpub",
    "developer_name": "Guerrilla Games",
    "publisher_name": "PlayStation Publishing LLC",
    "genres": [
      "Action RPG",
      "Open World",
      "Post-apocalyptic",
      "Sci-fi",
      "Female Protagonist"
    ],
    "tags": [
      "Open World",
      "Post-apocalyptic",
      "Action RPG",
      "Female Protagonist",
      "Sci-fi"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 87,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1151640/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1151640/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_d09106060fb7de8bf342c23df18b14debc8a15a3.1920x1080.jpg?t=1776465788",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_271f850eec3f96b22aa17be35b948268e0771c7f.1920x1080.jpg?t=1776465788",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/ss_15f5759c441e4e5f51e1a8ee333e4ab9df9aa783.1920x1080.jpg?t=1776465788"
    ]
  },
  {
    "id": "uncharted-legacy-of-thieves",
    "ugdb_id": "UGDB-000072",
    "title": "UNCHARTED: Legacy of Thieves Collection",
    "alternate_titles": [
      "Uncharted 4",
      "Uncharted Collection",
      "Nathan Drake",
      "Legacy of Thieves"
    ],
    "slug": "uncharted-legacy-of-thieves",
    "summary": "Play as Nathan Drake and Chloe Frazer in their own standalone adventures as they are forced to confront their pasts and forge their own legacies. This game includes the critically acclaimed single-player stories from UNCHARTED 4: A Thief End and UNCHARTED: The Lost Legacy.",
    "description": "Seek your fortune and leave your mark on the map in UNCHARTED: Legacy of Thieves Collection. Uncover the thrilling cinematic storytelling and the largest blockbuster action set pieces in the iconic franchise.",
    "release_date": "2022-10-19",
    "developer_id": "naughtydog",
    "publisher_id": "playstationpub",
    "developer_name": "Naughty Dog LLC",
    "publisher_name": "PlayStation Publishing LLC",
    "genres": [
      "Action-Adventure",
      "Third-Person",
      "Cinematic",
      "Story Rich"
    ],
    "tags": [
      "Adventure",
      "Action",
      "Story Rich",
      "Third Person",
      "Cinematic"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 89,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1659420/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/e59420593825cddd6c5718561b1ffa44d4086f4d/ss_e59420593825cddd6c5718561b1ffa44d4086f4d.1920x1080.jpg?t=1779309472",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/1bb804eb1e1ac1b23840c977586c8f9c2c0393a8/ss_1bb804eb1e1ac1b23840c977586c8f9c2c0393a8.1920x1080.jpg?t=1779309472",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/074469c3a7070c2a821ae984705276028ebf34c2/ss_074469c3a7070c2a821ae984705276028ebf34c2.1920x1080.jpg?t=1779309472"
    ]
  },
  {
    "id": "death-stranding",
    "ugdb_id": "UGDB-000073",
    "title": "DEATH STRANDING DIRECTOR'S CUT",
    "alternate_titles": [
      "Death Stranding",
      "Sam Bridges",
      "Kojima Death Stranding",
      "DSDC"
    ],
    "slug": "death-stranding",
    "summary": "From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR CUT. In the future, a mysterious event known as the Death Stranding has opened a doorway between the living and the dead.",
    "description": "Starring Norman Reedus, Mads Mikkelsen, Léa Seydoux, and Lindsay Wagner. In the future, a mysterious event known as the Death Stranding has opened a doorway between the living and the dead, leading to grotesque creatures from the afterlife roaming the fallen world.",
    "release_date": "2022-03-30",
    "developer_id": "kojimaproductions",
    "publisher_id": "fivezerofive",
    "developer_name": "KOJIMA PRODUCTIONS",
    "publisher_name": "505 Games",
    "genres": [
      "Action",
      "Open World",
      "Atmospheric",
      "Sci-fi",
      "Cinematic"
    ],
    "tags": [
      "Atmospheric",
      "Open World",
      "Story Rich",
      "Sci-fi",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 93,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1850570/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1850570/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/ss_f64a1140651ff5af30eb63bb6e5b41753d00a98e.1920x1080.jpg?t=1773400635",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/ss_4b6d7d010d1701b2b57bf8ef1b4975a04b3d632f.1920x1080.jpg?t=1773400635",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/ss_bc8812817c074772822c1d1e8a6b016983cf05e8.1920x1080.jpg?t=1773400635"
    ]
  },
  {
    "id": "bioshock-infinite",
    "ugdb_id": "UGDB-000074",
    "title": "BioShock Infinite: Complete Edition",
    "alternate_titles": [
      "BioShock Infinite",
      "Columbia BioShock",
      "Booker DeWitt",
      "Elizabeth BioShock"
    ],
    "slug": "bioshock-infinite",
    "summary": "Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood in the flying city of Columbia.",
    "description": "Forced to trust one another, Booker and Elizabeth form a powerful bond during their daring escape. Together, they learn to harness an expanding arsenal of weapons and abilities, as they fight on zeppelins in the clouds, along high-speed Sky-Lines, and down in the streets of Columbia.",
    "release_date": "2013-03-25",
    "developer_id": "irrationalgames",
    "publisher_id": "twokgames",
    "developer_name": "Irrational Games",
    "publisher_name": "2K Games",
    "genres": [
      "FPS",
      "Story Rich",
      "Steampunk",
      "Sci-fi",
      "Action"
    ],
    "tags": [
      "Story Rich",
      "FPS",
      "Atmospheric",
      "Steampunk",
      "Great Soundtrack",
      "Sci-fi"
    ],
    "features": [
      "Single-player",
      "Steam Achievements",
      "Full Controller Support",
      "Steam Cloud"
    ],
    "rating_score": 95,
    "metacritic_score": 94,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/8870/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/8870/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/8870/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_26e2d983948edfb911db3e0d2c3679900b4ef9fa.1920x1080.jpg?t=1728673518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_c6f3fbf3e9f4cb1777462150203a7174608dfcd9.1920x1080.jpg?t=1728673518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8870/ss_dc76723504ce89c1ed1f66fd468682ba76548c32.1920x1080.jpg?t=1728673518"
    ]
  },
  {
    "id": "animal-crossing-new-horizons",
    "ugdb_id": "UGDB-000075",
    "title": "Animal Crossing: New Horizons",
    "alternate_titles": [
      "ACNH",
      "Animal Crossing Switch",
      "Tom Nook Island"
    ],
    "slug": "animal-crossing-new-horizons",
    "summary": "Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts.",
    "description": "Hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.",
    "release_date": "2020-03-20",
    "developer_id": "nintendoepd",
    "publisher_id": "nintendo",
    "developer_name": "Nintendo EPD",
    "publisher_name": "Nintendo",
    "genres": [
      "Life Sim",
      "Cozy",
      "Simulation",
      "Social",
      "Crafting"
    ],
    "tags": [
      "Life Sim",
      "Relaxing",
      "Cute",
      "Multiplayer",
      "Crafting",
      "Family Friendly"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Local Co-op"
    ],
    "rating_score": 91,
    "metacritic_score": 90,
    "header_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1m6y.jpg",
    "poster_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1m6y.jpg",
    "background_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1m6y.jpg",
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_1080p/co1m6y.jpg"
    ]
  }
];

export const EXPANDED_LISTINGS: PlatformListing[] = [
  {
    "id": "listing_grand_theft_auto_v_steam",
    "game_id": "grand-theft-auto-v",
    "platform_id": "steam",
    "store_app_id": "271590",
    "store_url": "https://store.steampowered.com/app/271590/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 145000,
    "peak_players_24h": 232000,
    "all_time_peak_players": 609000,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_grand_theft_auto_v_epic",
    "game_id": "grand-theft-auto-v",
    "platform_id": "epic",
    "store_app_id": "grand-theft-auto-v",
    "store_url": "https://store.epicgames.com/p/grand-theft-auto-v",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_grand_theft_auto_v_playstation",
    "game_id": "grand-theft-auto-v",
    "platform_id": "playstation",
    "store_app_id": "PPSA11590_00",
    "store_url": "https://store.playstation.com/concept/101590",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_grand_theft_auto_v_xbox",
    "game_id": "grand-theft-auto-v",
    "platform_id": "xbox",
    "store_app_id": "9N271590X",
    "store_url": "https://www.xbox.com/games/store/grand-theft-auto-v/9N271590X",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 20.99,
    "discount_percent": 30,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_skyrim_se_steam",
    "game_id": "skyrim-se",
    "platform_id": "steam",
    "store_app_id": "489830",
    "store_url": "https://store.steampowered.com/app/489830/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 28500,
    "peak_players_24h": 45600,
    "all_time_peak_players": 119700,
    "rating_positive_percent": 94,
    "review_count": 94900,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_skyrim_se_gog",
    "game_id": "skyrim-se",
    "platform_id": "gog",
    "store_app_id": "1400489830",
    "store_url": "https://www.gog.com/game/skyrim-se",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 94900,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_skyrim_se_playstation",
    "game_id": "skyrim-se",
    "platform_id": "playstation",
    "store_app_id": "PPSA13830_00",
    "store_url": "https://store.playstation.com/concept/139830",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 94900,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_skyrim_se_xbox",
    "game_id": "skyrim-se",
    "platform_id": "xbox",
    "store_app_id": "9N489830X",
    "store_url": "https://www.xbox.com/games/store/skyrim-se/9N489830X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 94900,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_skyrim_se_nintendo",
    "game_id": "skyrim-se",
    "platform_id": "nintendo",
    "store_app_id": "70010000048983",
    "store_url": "https://www.nintendo.com/store/products/skyrim-se-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 23.99,
    "discount_percent": 40,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 94900,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_fallout_4_steam",
    "game_id": "fallout-4",
    "platform_id": "steam",
    "store_app_id": "377160",
    "store_url": "https://store.steampowered.com/app/377160/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-04-15",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 42000,
    "peak_players_24h": 67200,
    "all_time_peak_players": 176400,
    "rating_positive_percent": 83,
    "review_count": 85550,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_fallout_4_gog",
    "game_id": "fallout-4",
    "platform_id": "gog",
    "store_app_id": "1400377160",
    "store_url": "https://www.gog.com/game/fallout-4",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-04-15",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 83,
    "review_count": 85550,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_fallout_4_playstation",
    "game_id": "fallout-4",
    "platform_id": "playstation",
    "store_app_id": "PPSA18160_00",
    "store_url": "https://store.playstation.com/concept/117160",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-04-15",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 83,
    "review_count": 85550,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_fallout_4_xbox",
    "game_id": "fallout-4",
    "platform_id": "xbox",
    "store_app_id": "9N377160X",
    "store_url": "https://www.xbox.com/games/store/fallout-4/9N377160X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-04-15",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 83,
    "review_count": 85550,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dark_souls_3_steam",
    "game_id": "dark-souls-3",
    "platform_id": "steam",
    "store_app_id": "374320",
    "store_url": "https://store.steampowered.com/app/374320/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2022-01-05",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 18200,
    "peak_players_24h": 29120,
    "all_time_peak_players": 76440,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dark_souls_3_playstation",
    "game_id": "dark-souls-3",
    "platform_id": "playstation",
    "store_app_id": "PPSA15320_00",
    "store_url": "https://store.playstation.com/concept/114320",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2022-01-05",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dark_souls_3_xbox",
    "game_id": "dark-souls-3",
    "platform_id": "xbox",
    "store_app_id": "9N374320X",
    "store_url": "https://www.xbox.com/games/store/dark-souls-3/9N374320X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 14.99,
    "historical_low_date": "2022-01-05",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_sekiro_steam",
    "game_id": "sekiro",
    "platform_id": "steam",
    "store_app_id": "814380",
    "store_url": "https://store.steampowered.com/app/814380/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 29.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 16400,
    "peak_players_24h": 26240,
    "all_time_peak_players": 68880,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_sekiro_playstation",
    "game_id": "sekiro",
    "platform_id": "playstation",
    "store_app_id": "PPSA14380_00",
    "store_url": "https://store.playstation.com/concept/104380",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 29.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_sekiro_xbox",
    "game_id": "sekiro",
    "platform_id": "xbox",
    "store_app_id": "9N814380X",
    "store_url": "https://www.xbox.com/games/store/sekiro/9N814380X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 29.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_marvel_spider_man_remastered_steam",
    "game_id": "marvel-spider-man-remastered",
    "platform_id": "steam",
    "store_app_id": "1817070",
    "store_url": "https://store.steampowered.com/app/1817070/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 35.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 12500,
    "peak_players_24h": 20000,
    "all_time_peak_players": 52500,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_marvel_spider_man_remastered_epic",
    "game_id": "marvel-spider-man-remastered",
    "platform_id": "epic",
    "store_app_id": "marvel-spider-man-remastered",
    "store_url": "https://store.epicgames.com/p/marvel-spider-man-remastered",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 35.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_marvel_spider_man_remastered_playstation",
    "game_id": "marvel-spider-man-remastered",
    "platform_id": "playstation",
    "store_app_id": "PPSA18070_00",
    "store_url": "https://store.playstation.com/concept/117070",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 35.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_hogwarts_legacy_steam",
    "game_id": "hogwarts-legacy",
    "platform_id": "steam",
    "store_app_id": "990080",
    "store_url": "https://store.steampowered.com/app/990080/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 24800,
    "peak_players_24h": 39680,
    "all_time_peak_players": 104160,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_hogwarts_legacy_epic",
    "game_id": "hogwarts-legacy",
    "platform_id": "epic",
    "store_app_id": "hogwarts-legacy",
    "store_url": "https://store.epicgames.com/p/hogwarts-legacy",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_hogwarts_legacy_playstation",
    "game_id": "hogwarts-legacy",
    "platform_id": "playstation",
    "store_app_id": "PPSA10080_00",
    "store_url": "https://store.playstation.com/concept/100080",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_hogwarts_legacy_xbox",
    "game_id": "hogwarts-legacy",
    "platform_id": "xbox",
    "store_app_id": "9N990080X",
    "store_url": "https://www.xbox.com/games/store/hogwarts-legacy/9N990080X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_hogwarts_legacy_nintendo",
    "game_id": "hogwarts-legacy",
    "platform_id": "nintendo",
    "store_app_id": "70010000099008",
    "store_url": "https://www.nintendo.com/store/products/hogwarts-legacy-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_doom_eternal_steam",
    "game_id": "doom-eternal",
    "platform_id": "steam",
    "store_app_id": "782330",
    "store_url": "https://store.steampowered.com/app/782330/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 9100,
    "peak_players_24h": 14560,
    "all_time_peak_players": 38220,
    "rating_positive_percent": 91,
    "review_count": 92350,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_doom_eternal_playstation",
    "game_id": "doom-eternal",
    "platform_id": "playstation",
    "store_app_id": "PPSA18330_00",
    "store_url": "https://store.playstation.com/concept/162330",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 92350,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_doom_eternal_xbox",
    "game_id": "doom-eternal",
    "platform_id": "xbox",
    "store_app_id": "9N782330X",
    "store_url": "https://www.xbox.com/games/store/doom-eternal/9N782330X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 92350,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_doom_eternal_nintendo",
    "game_id": "doom-eternal",
    "platform_id": "nintendo",
    "store_app_id": "70010000078233",
    "store_url": "https://www.nintendo.com/store/products/doom-eternal-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 23.99,
    "discount_percent": 40,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 92350,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_civilization_6_steam",
    "game_id": "civilization-6",
    "platform_id": "steam",
    "store_app_id": "289070",
    "store_url": "https://store.steampowered.com/app/289070/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 5.99,
    "discount_percent": 90,
    "historical_low_price": 2.99,
    "historical_low_date": "2024-06-15",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 55000,
    "peak_players_24h": 88000,
    "all_time_peak_players": 231000,
    "rating_positive_percent": 86,
    "review_count": 88100,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_civilization_6_epic",
    "game_id": "civilization-6",
    "platform_id": "epic",
    "store_app_id": "civilization-6",
    "store_url": "https://store.epicgames.com/p/civilization-6",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 5.99,
    "discount_percent": 90,
    "historical_low_price": 2.99,
    "historical_low_date": "2024-06-15",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 88100,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_civilization_6_playstation",
    "game_id": "civilization-6",
    "platform_id": "playstation",
    "store_app_id": "PPSA11070_00",
    "store_url": "https://store.playstation.com/concept/119070",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 5.99,
    "discount_percent": 90,
    "historical_low_price": 2.99,
    "historical_low_date": "2024-06-15",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 88100,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_civilization_6_xbox",
    "game_id": "civilization-6",
    "platform_id": "xbox",
    "store_app_id": "9N289070X",
    "store_url": "https://www.xbox.com/games/store/civilization-6/9N289070X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 2.99,
    "historical_low_date": "2024-06-15",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 88100,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_civilization_6_nintendo",
    "game_id": "civilization-6",
    "platform_id": "nintendo",
    "store_app_id": "70010000028907",
    "store_url": "https://www.nintendo.com/store/products/civilization-6-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 2.99,
    "historical_low_date": "2024-06-15",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 88100,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_terraria_steam",
    "game_id": "terraria",
    "platform_id": "steam",
    "store_app_id": "105600",
    "store_url": "https://store.steampowered.com/app/105600/",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 4.99,
    "discount_percent": 50,
    "historical_low_price": 2.49,
    "historical_low_date": "2021-06-24",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 48000,
    "peak_players_24h": 76800,
    "all_time_peak_players": 201600,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_terraria_gog",
    "game_id": "terraria",
    "platform_id": "gog",
    "store_app_id": "1400105600",
    "store_url": "https://www.gog.com/game/terraria",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 4.99,
    "discount_percent": 50,
    "historical_low_price": 2.49,
    "historical_low_date": "2021-06-24",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_terraria_playstation",
    "game_id": "terraria",
    "platform_id": "playstation",
    "store_app_id": "PPSA16600_00",
    "store_url": "https://store.playstation.com/concept/115600",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 6.99,
    "discount_percent": 30,
    "historical_low_price": 2.49,
    "historical_low_date": "2021-06-24",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_terraria_xbox",
    "game_id": "terraria",
    "platform_id": "xbox",
    "store_app_id": "9N105600X",
    "store_url": "https://www.xbox.com/games/store/terraria/9N105600X",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 6.99,
    "discount_percent": 30,
    "historical_low_price": 2.49,
    "historical_low_date": "2021-06-24",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_terraria_nintendo",
    "game_id": "terraria",
    "platform_id": "nintendo",
    "store_app_id": "70010000010560",
    "store_url": "https://www.nintendo.com/store/products/terraria-switch/",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 5.99,
    "discount_percent": 40,
    "historical_low_price": 2.49,
    "historical_low_date": "2021-06-24",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_borderlands_3_steam",
    "game_id": "borderlands-3",
    "platform_id": "steam",
    "store_app_id": "397540",
    "store_url": "https://store.steampowered.com/app/397540/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-01",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 8500,
    "peak_players_24h": 13600,
    "all_time_peak_players": 35700,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_borderlands_3_epic",
    "game_id": "borderlands-3",
    "platform_id": "epic",
    "store_app_id": "borderlands-3",
    "store_url": "https://store.epicgames.com/p/borderlands-3",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-01",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_borderlands_3_playstation",
    "game_id": "borderlands-3",
    "platform_id": "playstation",
    "store_app_id": "PPSA11540_00",
    "store_url": "https://store.playstation.com/concept/137540",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-01",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_borderlands_3_xbox",
    "game_id": "borderlands-3",
    "platform_id": "xbox",
    "store_app_id": "9N397540X",
    "store_url": "https://www.xbox.com/games/store/borderlands-3/9N397540X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-01",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_borderlands_3_nintendo",
    "game_id": "borderlands-3",
    "platform_id": "nintendo",
    "store_app_id": "70010000039754",
    "store_url": "https://www.nintendo.com/store/products/borderlands-3-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-01",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mortal_kombat_11_steam",
    "game_id": "mortal-kombat-11",
    "platform_id": "steam",
    "store_app_id": "976310",
    "store_url": "https://store.steampowered.com/app/976310/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 4.99,
    "discount_percent": 90,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-05-16",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3800,
    "peak_players_24h": 6080,
    "all_time_peak_players": 15960,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mortal_kombat_11_playstation",
    "game_id": "mortal-kombat-11",
    "platform_id": "playstation",
    "store_app_id": "PPSA14310_00",
    "store_url": "https://store.playstation.com/concept/176310",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 34.99,
    "discount_percent": 30,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-05-16",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mortal_kombat_11_xbox",
    "game_id": "mortal-kombat-11",
    "platform_id": "xbox",
    "store_app_id": "9N976310X",
    "store_url": "https://www.xbox.com/games/store/mortal-kombat-11/9N976310X",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 34.99,
    "discount_percent": 30,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-05-16",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mortal_kombat_11_nintendo",
    "game_id": "mortal-kombat-11",
    "platform_id": "nintendo",
    "store_app_id": "70010000097631",
    "store_url": "https://www.nintendo.com/store/products/mortal-kombat-11-switch/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 29.99,
    "discount_percent": 40,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-05-16",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_street_fighter_6_steam",
    "game_id": "street-fighter-6",
    "platform_id": "steam",
    "store_app_id": "1364780",
    "store_url": "https://store.steampowered.com/app/1364780/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 29.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 28000,
    "peak_players_24h": 44800,
    "all_time_peak_players": 117600,
    "rating_positive_percent": 88,
    "review_count": 89800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_street_fighter_6_playstation",
    "game_id": "street-fighter-6",
    "platform_id": "playstation",
    "store_app_id": "PPSA15780_00",
    "store_url": "https://store.playstation.com/concept/114780",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 29.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 88,
    "review_count": 89800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_street_fighter_6_xbox",
    "game_id": "street-fighter-6",
    "platform_id": "xbox",
    "store_app_id": "9N136478X",
    "store_url": "https://www.xbox.com/games/store/street-fighter-6/9N136478X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 29.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 88,
    "review_count": 89800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_tekken_8_steam",
    "game_id": "tekken-8",
    "platform_id": "steam",
    "store_app_id": "1778820",
    "store_url": "https://store.steampowered.com/app/1778820/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 39.99,
    "discount_percent": 43,
    "historical_low_price": 39.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 14200,
    "peak_players_24h": 22720,
    "all_time_peak_players": 59640,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_tekken_8_playstation",
    "game_id": "tekken-8",
    "platform_id": "playstation",
    "store_app_id": "PPSA15820_00",
    "store_url": "https://store.playstation.com/concept/168820",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 39.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_tekken_8_xbox",
    "game_id": "tekken-8",
    "platform_id": "xbox",
    "store_app_id": "9N177882X",
    "store_url": "https://www.xbox.com/games/store/tekken-8/9N177882X",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 39.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_final_fantasy_7_remake_steam",
    "game_id": "final-fantasy-7-remake",
    "platform_id": "steam",
    "store_app_id": "1462040",
    "store_url": "https://store.steampowered.com/app/1462040/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 34.99,
    "discount_percent": 50,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 6500,
    "peak_players_24h": 10400,
    "all_time_peak_players": 27300,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_final_fantasy_7_remake_epic",
    "game_id": "final-fantasy-7-remake",
    "platform_id": "epic",
    "store_app_id": "final-fantasy-7-remake",
    "store_url": "https://store.epicgames.com/p/final-fantasy-7-remake",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 34.99,
    "discount_percent": 50,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_final_fantasy_7_remake_playstation",
    "game_id": "final-fantasy-7-remake",
    "platform_id": "playstation",
    "store_app_id": "PPSA14040_00",
    "store_url": "https://store.playstation.com/concept/122040",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_assassins_creed_valhalla_steam",
    "game_id": "assassins-creed-valhalla",
    "platform_id": "steam",
    "store_app_id": "2208920",
    "store_url": "https://store.steampowered.com/app/2208920/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 14.99,
    "discount_percent": 75,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 11200,
    "peak_players_24h": 17920,
    "all_time_peak_players": 47040,
    "rating_positive_percent": 81,
    "review_count": 83850,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_assassins_creed_valhalla_epic",
    "game_id": "assassins-creed-valhalla",
    "platform_id": "epic",
    "store_app_id": "assassins-creed-valhalla",
    "store_url": "https://store.epicgames.com/p/assassins-creed-valhalla",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 14.99,
    "discount_percent": 75,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 81,
    "review_count": 83850,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_assassins_creed_valhalla_playstation",
    "game_id": "assassins-creed-valhalla",
    "platform_id": "playstation",
    "store_app_id": "PPSA13920_00",
    "store_url": "https://store.playstation.com/concept/148920",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 14.99,
    "discount_percent": 75,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 81,
    "review_count": 83850,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_assassins_creed_valhalla_xbox",
    "game_id": "assassins-creed-valhalla",
    "platform_id": "xbox",
    "store_app_id": "9N220892X",
    "store_url": "https://www.xbox.com/games/store/assassins-creed-valhalla/9N220892X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 81,
    "review_count": 83850,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_far_cry_6_steam",
    "game_id": "far-cry-6",
    "platform_id": "steam",
    "store_app_id": "2369390",
    "store_url": "https://store.steampowered.com/app/2369390/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 14.99,
    "discount_percent": 75,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 4300,
    "peak_players_24h": 6880,
    "all_time_peak_players": 18060,
    "rating_positive_percent": 76,
    "review_count": 79600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_far_cry_6_epic",
    "game_id": "far-cry-6",
    "platform_id": "epic",
    "store_app_id": "far-cry-6",
    "store_url": "https://store.epicgames.com/p/far-cry-6",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 14.99,
    "discount_percent": 75,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 76,
    "review_count": 79600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_far_cry_6_playstation",
    "game_id": "far-cry-6",
    "platform_id": "playstation",
    "store_app_id": "PPSA12390_00",
    "store_url": "https://store.playstation.com/concept/129390",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 14.99,
    "discount_percent": 75,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 76,
    "review_count": 79600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_far_cry_6_xbox",
    "game_id": "far-cry-6",
    "platform_id": "xbox",
    "store_app_id": "9N236939X",
    "store_url": "https://www.xbox.com/games/store/far-cry-6/9N236939X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 76,
    "review_count": 79600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_batman_arkham_knight_steam",
    "game_id": "batman-arkham-knight",
    "platform_id": "steam",
    "store_app_id": "208650",
    "store_url": "https://store.steampowered.com/app/208650/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 3.99,
    "discount_percent": 80,
    "historical_low_price": 3.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 5600,
    "peak_players_24h": 8960,
    "all_time_peak_players": 23520,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_batman_arkham_knight_gog",
    "game_id": "batman-arkham-knight",
    "platform_id": "gog",
    "store_app_id": "1400208650",
    "store_url": "https://www.gog.com/game/batman-arkham-knight",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 3.99,
    "discount_percent": 80,
    "historical_low_price": 3.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_batman_arkham_knight_epic",
    "game_id": "batman-arkham-knight",
    "platform_id": "epic",
    "store_app_id": "batman-arkham-knight",
    "store_url": "https://store.epicgames.com/p/batman-arkham-knight",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 3.99,
    "discount_percent": 80,
    "historical_low_price": 3.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_batman_arkham_knight_playstation",
    "game_id": "batman-arkham-knight",
    "platform_id": "playstation",
    "store_app_id": "PPSA11650_00",
    "store_url": "https://store.playstation.com/concept/128650",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 3.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_batman_arkham_knight_xbox",
    "game_id": "batman-arkham-knight",
    "platform_id": "xbox",
    "store_app_id": "9N208650X",
    "store_url": "https://www.xbox.com/games/store/batman-arkham-knight/9N208650X",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 3.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_batman_arkham_knight_nintendo",
    "game_id": "batman-arkham-knight",
    "platform_id": "nintendo",
    "store_app_id": "70010000020865",
    "store_url": "https://www.nintendo.com/store/products/batman-arkham-knight-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 3.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_halo_master_chief_collection_steam",
    "game_id": "halo-master-chief-collection",
    "platform_id": "steam",
    "store_app_id": "976730",
    "store_url": "https://store.steampowered.com/app/976730/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 9400,
    "peak_players_24h": 15040,
    "all_time_peak_players": 39480,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_halo_master_chief_collection_xbox",
    "game_id": "halo-master-chief-collection",
    "platform_id": "xbox",
    "store_app_id": "9N976730X",
    "store_url": "https://www.xbox.com/games/store/halo-master-chief-collection/9N976730X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_control_ultimate_edition_steam",
    "game_id": "control-ultimate-edition",
    "platform_id": "steam",
    "store_app_id": "870780",
    "store_url": "https://store.steampowered.com/app/870780/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 2800,
    "peak_players_24h": 4480,
    "all_time_peak_players": 11760,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_control_ultimate_edition_gog",
    "game_id": "control-ultimate-edition",
    "platform_id": "gog",
    "store_app_id": "1400870780",
    "store_url": "https://www.gog.com/game/control-ultimate-edition",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_control_ultimate_edition_epic",
    "game_id": "control-ultimate-edition",
    "platform_id": "epic",
    "store_app_id": "control-ultimate-edition",
    "store_url": "https://store.epicgames.com/p/control-ultimate-edition",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_control_ultimate_edition_playstation",
    "game_id": "control-ultimate-edition",
    "platform_id": "playstation",
    "store_app_id": "PPSA16780_00",
    "store_url": "https://store.playstation.com/concept/160780",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_control_ultimate_edition_xbox",
    "game_id": "control-ultimate-edition",
    "platform_id": "xbox",
    "store_app_id": "9N870780X",
    "store_url": "https://www.xbox.com/games/store/control-ultimate-edition/9N870780X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_control_ultimate_edition_nintendo",
    "game_id": "control-ultimate-edition",
    "platform_id": "nintendo",
    "store_app_id": "70010000087078",
    "store_url": "https://www.nintendo.com/store/products/control-ultimate-edition-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 23.99,
    "discount_percent": 40,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-05-02",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_gears_5_steam",
    "game_id": "gears-5",
    "platform_id": "steam",
    "store_app_id": "1097840",
    "store_url": "https://store.steampowered.com/app/1097840/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 1800,
    "peak_players_24h": 2880,
    "all_time_peak_players": 7560,
    "rating_positive_percent": 80,
    "review_count": 83000,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_gears_5_xbox",
    "game_id": "gears-5",
    "platform_id": "xbox",
    "store_app_id": "9N109784X",
    "store_url": "https://www.xbox.com/games/store/gears-5/9N109784X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 7.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 80,
    "review_count": 83000,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_sea_of_thieves_steam",
    "game_id": "sea-of-thieves",
    "platform_id": "steam",
    "store_app_id": "1172620",
    "store_url": "https://store.steampowered.com/app/1172620/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 18500,
    "peak_players_24h": 29600,
    "all_time_peak_players": 77700,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_sea_of_thieves_playstation",
    "game_id": "sea-of-thieves",
    "platform_id": "playstation",
    "store_app_id": "PPSA12620_00",
    "store_url": "https://store.playstation.com/concept/102620",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_sea_of_thieves_xbox",
    "game_id": "sea-of-thieves",
    "platform_id": "xbox",
    "store_app_id": "9N117262X",
    "store_url": "https://www.xbox.com/games/store/sea-of-thieves/9N117262X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_sims_4_steam",
    "game_id": "the-sims-4",
    "platform_id": "steam",
    "store_app_id": "1222670",
    "store_url": "https://store.steampowered.com/app/1222670/",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2022-10-18",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 64000,
    "peak_players_24h": 102400,
    "all_time_peak_players": 268800,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_sims_4_epic",
    "game_id": "the-sims-4",
    "platform_id": "epic",
    "store_app_id": "the-sims-4",
    "store_url": "https://store.epicgames.com/p/the-sims-4",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2022-10-18",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_sims_4_playstation",
    "game_id": "the-sims-4",
    "platform_id": "playstation",
    "store_app_id": "PPSA17670_00",
    "store_url": "https://store.playstation.com/concept/152670",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2022-10-18",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_sims_4_xbox",
    "game_id": "the-sims-4",
    "platform_id": "xbox",
    "store_app_id": "9N122267X",
    "store_url": "https://www.xbox.com/games/store/the-sims-4/9N122267X",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2022-10-18",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_need_for_speed_unbound_steam",
    "game_id": "need-for-speed-unbound",
    "platform_id": "steam",
    "store_app_id": "1846380",
    "store_url": "https://store.steampowered.com/app/1846380/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 9.79,
    "discount_percent": 86,
    "historical_low_price": 9.79,
    "historical_low_date": "2024-05-13",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3200,
    "peak_players_24h": 5120,
    "all_time_peak_players": 13440,
    "rating_positive_percent": 75,
    "review_count": 78750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_need_for_speed_unbound_epic",
    "game_id": "need-for-speed-unbound",
    "platform_id": "epic",
    "store_app_id": "need-for-speed-unbound",
    "store_url": "https://store.epicgames.com/p/need-for-speed-unbound",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 9.79,
    "discount_percent": 86,
    "historical_low_price": 9.79,
    "historical_low_date": "2024-05-13",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 75,
    "review_count": 78750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_need_for_speed_unbound_playstation",
    "game_id": "need-for-speed-unbound",
    "platform_id": "playstation",
    "store_app_id": "PPSA11380_00",
    "store_url": "https://store.playstation.com/concept/146380",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 9.79,
    "historical_low_date": "2024-05-13",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 75,
    "review_count": 78750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_need_for_speed_unbound_xbox",
    "game_id": "need-for-speed-unbound",
    "platform_id": "xbox",
    "store_app_id": "9N184638X",
    "store_url": "https://www.xbox.com/games/store/need-for-speed-unbound/9N184638X",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 9.79,
    "discount_percent": 86,
    "historical_low_price": 9.79,
    "historical_low_date": "2024-05-13",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 75,
    "review_count": 78750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_battlefield_2042_steam",
    "game_id": "battlefield-2042",
    "platform_id": "steam",
    "store_app_id": "1517290",
    "store_url": "https://store.steampowered.com/app/1517290/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 14000,
    "peak_players_24h": 22400,
    "all_time_peak_players": 58800,
    "rating_positive_percent": 65,
    "review_count": 70250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_battlefield_2042_epic",
    "game_id": "battlefield-2042",
    "platform_id": "epic",
    "store_app_id": "battlefield-2042",
    "store_url": "https://store.epicgames.com/p/battlefield-2042",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 65,
    "review_count": 70250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_battlefield_2042_playstation",
    "game_id": "battlefield-2042",
    "platform_id": "playstation",
    "store_app_id": "PPSA15290_00",
    "store_url": "https://store.playstation.com/concept/177290",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 65,
    "review_count": 70250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_battlefield_2042_xbox",
    "game_id": "battlefield-2042",
    "platform_id": "xbox",
    "store_app_id": "9N151729X",
    "store_url": "https://www.xbox.com/games/store/battlefield-2042/9N151729X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 65,
    "review_count": 70250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ea_sports_fc_24_steam",
    "game_id": "ea-sports-fc-24",
    "platform_id": "steam",
    "store_app_id": "2195250",
    "store_url": "https://store.steampowered.com/app/2195250/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 13.99,
    "discount_percent": 80,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-05-23",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 48000,
    "peak_players_24h": 76800,
    "all_time_peak_players": 201600,
    "rating_positive_percent": 68,
    "review_count": 72800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ea_sports_fc_24_epic",
    "game_id": "ea-sports-fc-24",
    "platform_id": "epic",
    "store_app_id": "ea-sports-fc-24",
    "store_url": "https://store.epicgames.com/p/ea-sports-fc-24",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 13.99,
    "discount_percent": 80,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-05-23",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 68,
    "review_count": 72800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ea_sports_fc_24_playstation",
    "game_id": "ea-sports-fc-24",
    "platform_id": "playstation",
    "store_app_id": "PPSA18250_00",
    "store_url": "https://store.playstation.com/concept/135250",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 13.99,
    "discount_percent": 80,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-05-23",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 68,
    "review_count": 72800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ea_sports_fc_24_xbox",
    "game_id": "ea-sports-fc-24",
    "platform_id": "xbox",
    "store_app_id": "9N219525X",
    "store_url": "https://www.xbox.com/games/store/ea-sports-fc-24/9N219525X",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-05-23",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 68,
    "review_count": 72800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ea_sports_fc_24_nintendo",
    "game_id": "ea-sports-fc-24",
    "platform_id": "nintendo",
    "store_app_id": "70010000021952",
    "store_url": "https://www.nintendo.com/store/products/ea-sports-fc-24-switch/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 41.99,
    "discount_percent": 40,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-05-23",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 68,
    "review_count": 72800,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_diablo_4_steam",
    "game_id": "diablo-4",
    "platform_id": "steam",
    "store_app_id": "2344520",
    "store_url": "https://store.steampowered.com/app/2344520/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 34.99,
    "discount_percent": 50,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 18500,
    "peak_players_24h": 29600,
    "all_time_peak_players": 77700,
    "rating_positive_percent": 72,
    "review_count": 76200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_diablo_4_playstation",
    "game_id": "diablo-4",
    "platform_id": "playstation",
    "store_app_id": "PPSA14520_00",
    "store_url": "https://store.playstation.com/concept/104520",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 72,
    "review_count": 76200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_diablo_4_xbox",
    "game_id": "diablo-4",
    "platform_id": "xbox",
    "store_app_id": "9N234452X",
    "store_url": "https://www.xbox.com/games/store/diablo-4/9N234452X",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 34.99,
    "discount_percent": 50,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 72,
    "review_count": 76200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_subnautica_steam",
    "game_id": "subnautica",
    "platform_id": "steam",
    "store_app_id": "264710",
    "store_url": "https://store.steampowered.com/app/264710/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 9.89,
    "discount_percent": 67,
    "historical_low_price": 9.89,
    "historical_low_date": "2024-03-14",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 7200,
    "peak_players_24h": 11520,
    "all_time_peak_players": 30240,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_subnautica_epic",
    "game_id": "subnautica",
    "platform_id": "epic",
    "store_app_id": "subnautica",
    "store_url": "https://store.epicgames.com/p/subnautica",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 9.89,
    "discount_percent": 67,
    "historical_low_price": 9.89,
    "historical_low_date": "2024-03-14",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_subnautica_gog",
    "game_id": "subnautica",
    "platform_id": "gog",
    "store_app_id": "1400264710",
    "store_url": "https://www.gog.com/game/subnautica",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 9.89,
    "discount_percent": 67,
    "historical_low_price": 9.89,
    "historical_low_date": "2024-03-14",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_subnautica_playstation",
    "game_id": "subnautica",
    "platform_id": "playstation",
    "store_app_id": "PPSA13710_00",
    "store_url": "https://store.playstation.com/concept/184710",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 9.89,
    "discount_percent": 67,
    "historical_low_price": 9.89,
    "historical_low_date": "2024-03-14",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_subnautica_xbox",
    "game_id": "subnautica",
    "platform_id": "xbox",
    "store_app_id": "9N264710X",
    "store_url": "https://www.xbox.com/games/store/subnautica/9N264710X",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 20.99,
    "discount_percent": 30,
    "historical_low_price": 9.89,
    "historical_low_date": "2024-03-14",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_subnautica_nintendo",
    "game_id": "subnautica",
    "platform_id": "nintendo",
    "store_app_id": "70010000026471",
    "store_url": "https://www.nintendo.com/store/products/subnautica-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 9.89,
    "historical_low_date": "2024-03-14",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_celeste_steam",
    "game_id": "celeste",
    "platform_id": "steam",
    "store_app_id": "504230",
    "store_url": "https://store.steampowered.com/app/504230/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 4.99,
    "discount_percent": 75,
    "historical_low_price": 1.99,
    "historical_low_date": "2024-01-25",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3100,
    "peak_players_24h": 4960,
    "all_time_peak_players": 13020,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_celeste_epic",
    "game_id": "celeste",
    "platform_id": "epic",
    "store_app_id": "celeste",
    "store_url": "https://store.epicgames.com/p/celeste",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 4.99,
    "discount_percent": 75,
    "historical_low_price": 1.99,
    "historical_low_date": "2024-01-25",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_celeste_gog",
    "game_id": "celeste",
    "platform_id": "gog",
    "store_app_id": "1400504230",
    "store_url": "https://www.gog.com/game/celeste",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 4.99,
    "discount_percent": 75,
    "historical_low_price": 1.99,
    "historical_low_date": "2024-01-25",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_celeste_playstation",
    "game_id": "celeste",
    "platform_id": "playstation",
    "store_app_id": "PPSA10230_00",
    "store_url": "https://store.playstation.com/concept/154230",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 4.99,
    "discount_percent": 75,
    "historical_low_price": 1.99,
    "historical_low_date": "2024-01-25",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_celeste_xbox",
    "game_id": "celeste",
    "platform_id": "xbox",
    "store_app_id": "9N504230X",
    "store_url": "https://www.xbox.com/games/store/celeste/9N504230X",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 4.99,
    "discount_percent": 75,
    "historical_low_price": 1.99,
    "historical_low_date": "2024-01-25",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_celeste_nintendo",
    "game_id": "celeste",
    "platform_id": "nintendo",
    "store_app_id": "70010000050423",
    "store_url": "https://www.nintendo.com/store/products/celeste-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 1.99,
    "historical_low_date": "2024-01-25",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_cuphead_steam",
    "game_id": "cuphead",
    "platform_id": "steam",
    "store_app_id": "268910",
    "store_url": "https://store.steampowered.com/app/268910/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 4200,
    "peak_players_24h": 6720,
    "all_time_peak_players": 17640,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_cuphead_gog",
    "game_id": "cuphead",
    "platform_id": "gog",
    "store_app_id": "1400268910",
    "store_url": "https://www.gog.com/game/cuphead",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_cuphead_playstation",
    "game_id": "cuphead",
    "platform_id": "playstation",
    "store_app_id": "PPSA17910_00",
    "store_url": "https://store.playstation.com/concept/188910",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_cuphead_xbox",
    "game_id": "cuphead",
    "platform_id": "xbox",
    "store_app_id": "9N268910X",
    "store_url": "https://www.xbox.com/games/store/cuphead/9N268910X",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_cuphead_nintendo",
    "game_id": "cuphead",
    "platform_id": "nintendo",
    "store_app_id": "70010000026891",
    "store_url": "https://www.nintendo.com/store/products/cuphead-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 13.99,
    "historical_low_date": "2023-12-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ori_and_the_will_of_the_wisps_steam",
    "game_id": "ori-and-the-will-of-the-wisps",
    "platform_id": "steam",
    "store_app_id": "1057090",
    "store_url": "https://store.steampowered.com/app/1057090/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 9.89,
    "discount_percent": 67,
    "historical_low_price": 5.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 2600,
    "peak_players_24h": 4160,
    "all_time_peak_players": 10920,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ori_and_the_will_of_the_wisps_xbox",
    "game_id": "ori-and-the-will-of-the-wisps",
    "platform_id": "xbox",
    "store_app_id": "9N105709X",
    "store_url": "https://www.xbox.com/games/store/ori-and-the-will-of-the-wisps/9N105709X",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 20.99,
    "discount_percent": 30,
    "historical_low_price": 5.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_ori_and_the_will_of_the_wisps_nintendo",
    "game_id": "ori-and-the-will-of-the-wisps",
    "platform_id": "nintendo",
    "store_app_id": "70010000010570",
    "store_url": "https://www.nintendo.com/store/products/ori-and-the-will-of-the-wisps-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 5.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_disco_elysium_steam",
    "game_id": "disco-elysium",
    "platform_id": "steam",
    "store_app_id": "632470",
    "store_url": "https://store.steampowered.com/app/632470/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 3.99,
    "historical_low_date": "2024-06-13",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3500,
    "peak_players_24h": 5600,
    "all_time_peak_players": 14700,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_disco_elysium_gog",
    "game_id": "disco-elysium",
    "platform_id": "gog",
    "store_app_id": "1400632470",
    "store_url": "https://www.gog.com/game/disco-elysium",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 3.99,
    "historical_low_date": "2024-06-13",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_disco_elysium_epic",
    "game_id": "disco-elysium",
    "platform_id": "epic",
    "store_app_id": "disco-elysium",
    "store_url": "https://store.epicgames.com/p/disco-elysium",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 3.99,
    "historical_low_date": "2024-06-13",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_disco_elysium_playstation",
    "game_id": "disco-elysium",
    "platform_id": "playstation",
    "store_app_id": "PPSA12470_00",
    "store_url": "https://store.playstation.com/concept/102470",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 9.99,
    "discount_percent": 75,
    "historical_low_price": 3.99,
    "historical_low_date": "2024-06-13",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_disco_elysium_xbox",
    "game_id": "disco-elysium",
    "platform_id": "xbox",
    "store_app_id": "9N632470X",
    "store_url": "https://www.xbox.com/games/store/disco-elysium/9N632470X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 3.99,
    "historical_low_date": "2024-06-13",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_disco_elysium_nintendo",
    "game_id": "disco-elysium",
    "platform_id": "nintendo",
    "store_app_id": "70010000063247",
    "store_url": "https://www.nintendo.com/store/products/disco-elysium-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 23.99,
    "discount_percent": 40,
    "historical_low_price": 3.99,
    "historical_low_date": "2024-06-13",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_lies_of_p_steam",
    "game_id": "lies-of-p",
    "platform_id": "steam",
    "store_app_id": "1627720",
    "store_url": "https://store.steampowered.com/app/1627720/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 5900,
    "peak_players_24h": 9440,
    "all_time_peak_players": 24780,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_lies_of_p_playstation",
    "game_id": "lies-of-p",
    "platform_id": "playstation",
    "store_app_id": "PPSA17720_00",
    "store_url": "https://store.playstation.com/concept/107720",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_lies_of_p_xbox",
    "game_id": "lies-of-p",
    "platform_id": "xbox",
    "store_app_id": "9N162772X",
    "store_url": "https://www.xbox.com/games/store/lies-of-p/9N162772X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_armored_core_6_steam",
    "game_id": "armored-core-6",
    "platform_id": "steam",
    "store_app_id": "1888160",
    "store_url": "https://store.steampowered.com/app/1888160/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 7800,
    "peak_players_24h": 12480,
    "all_time_peak_players": 32760,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_armored_core_6_playstation",
    "game_id": "armored-core-6",
    "platform_id": "playstation",
    "store_app_id": "PPSA17160_00",
    "store_url": "https://store.playstation.com/concept/188160",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_armored_core_6_xbox",
    "game_id": "armored-core-6",
    "platform_id": "xbox",
    "store_app_id": "9N188816X",
    "store_url": "https://www.xbox.com/games/store/armored-core-6/9N188816X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 91500,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dragons_dogma_2_steam",
    "game_id": "dragons-dogma-2",
    "platform_id": "steam",
    "store_app_id": "2054970",
    "store_url": "https://store.steampowered.com/app/2054970/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 55.99,
    "discount_percent": 20,
    "historical_low_price": 55.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 11000,
    "peak_players_24h": 17600,
    "all_time_peak_players": 46200,
    "rating_positive_percent": 72,
    "review_count": 76200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dragons_dogma_2_playstation",
    "game_id": "dragons-dogma-2",
    "platform_id": "playstation",
    "store_app_id": "PPSA12970_00",
    "store_url": "https://store.playstation.com/concept/174970",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 55.99,
    "discount_percent": 20,
    "historical_low_price": 55.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 72,
    "review_count": 76200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dragons_dogma_2_xbox",
    "game_id": "dragons-dogma-2",
    "platform_id": "xbox",
    "store_app_id": "9N205497X",
    "store_url": "https://www.xbox.com/games/store/dragons-dogma-2/9N205497X",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 48.99,
    "discount_percent": 30,
    "historical_low_price": 55.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 72,
    "review_count": 76200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_remnant_2_steam",
    "game_id": "remnant-2",
    "platform_id": "steam",
    "store_app_id": "1282100",
    "store_url": "https://store.steampowered.com/app/1282100/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 7400,
    "peak_players_24h": 11840,
    "all_time_peak_players": 31080,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_remnant_2_epic",
    "game_id": "remnant-2",
    "platform_id": "epic",
    "store_app_id": "remnant-2",
    "store_url": "https://store.epicgames.com/p/remnant-2",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_remnant_2_playstation",
    "game_id": "remnant-2",
    "platform_id": "playstation",
    "store_app_id": "PPSA14100_00",
    "store_url": "https://store.playstation.com/concept/122100",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_remnant_2_xbox",
    "game_id": "remnant-2",
    "platform_id": "xbox",
    "store_app_id": "9N128210X",
    "store_url": "https://www.xbox.com/games/store/remnant-2/9N128210X",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 34.99,
    "discount_percent": 30,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 87250,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dave_the_diver_steam",
    "game_id": "dave-the-diver",
    "platform_id": "steam",
    "store_app_id": "1868140",
    "store_url": "https://store.steampowered.com/app/1868140/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 12800,
    "peak_players_24h": 20480,
    "all_time_peak_players": 53760,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dave_the_diver_playstation",
    "game_id": "dave-the-diver",
    "platform_id": "playstation",
    "store_app_id": "PPSA15140_00",
    "store_url": "https://store.playstation.com/concept/168140",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_dave_the_diver_nintendo",
    "game_id": "dave-the-diver",
    "platform_id": "nintendo",
    "store_app_id": "70010000018681",
    "store_url": "https://www.nintendo.com/store/products/dave-the-diver-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_deep_rock_galactic_steam",
    "game_id": "deep-rock-galactic",
    "platform_id": "steam",
    "store_app_id": "548430",
    "store_url": "https://store.steampowered.com/app/548430/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 9.89,
    "discount_percent": 67,
    "historical_low_price": 8.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 22000,
    "peak_players_24h": 35200,
    "all_time_peak_players": 92400,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_deep_rock_galactic_playstation",
    "game_id": "deep-rock-galactic",
    "platform_id": "playstation",
    "store_app_id": "PPSA18430_00",
    "store_url": "https://store.playstation.com/concept/108430",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 20.99,
    "discount_percent": 30,
    "historical_low_price": 8.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_deep_rock_galactic_xbox",
    "game_id": "deep-rock-galactic",
    "platform_id": "xbox",
    "store_app_id": "9N548430X",
    "store_url": "https://www.xbox.com/games/store/deep-rock-galactic/9N548430X",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 20.99,
    "discount_percent": 30,
    "historical_low_price": 8.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 97450,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_it_takes_two_steam",
    "game_id": "it-takes-two",
    "platform_id": "steam",
    "store_app_id": "1426210",
    "store_url": "https://store.steampowered.com/app/1426210/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 13.99,
    "discount_percent": 65,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 18000,
    "peak_players_24h": 28800,
    "all_time_peak_players": 75600,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_it_takes_two_playstation",
    "game_id": "it-takes-two",
    "platform_id": "playstation",
    "store_app_id": "PPSA14210_00",
    "store_url": "https://store.playstation.com/concept/176210",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 13.99,
    "discount_percent": 65,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_it_takes_two_xbox",
    "game_id": "it-takes-two",
    "platform_id": "xbox",
    "store_app_id": "9N142621X",
    "store_url": "https://www.xbox.com/games/store/it-takes-two/9N142621X",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 13.99,
    "discount_percent": 65,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_it_takes_two_nintendo",
    "game_id": "it-takes-two",
    "platform_id": "nintendo",
    "store_app_id": "70010000014262",
    "store_url": "https://www.nintendo.com/store/products/it-takes-two-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 23.99,
    "discount_percent": 40,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mass_effect_legendary_edition_steam",
    "game_id": "mass-effect-legendary-edition",
    "platform_id": "steam",
    "store_app_id": "1328670",
    "store_url": "https://store.steampowered.com/app/1328670/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 8200,
    "peak_players_24h": 13120,
    "all_time_peak_players": 34440,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mass_effect_legendary_edition_epic",
    "game_id": "mass-effect-legendary-edition",
    "platform_id": "epic",
    "store_app_id": "mass-effect-legendary-edition",
    "store_url": "https://store.epicgames.com/p/mass-effect-legendary-edition",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mass_effect_legendary_edition_playstation",
    "game_id": "mass-effect-legendary-edition",
    "platform_id": "playstation",
    "store_app_id": "PPSA15670_00",
    "store_url": "https://store.playstation.com/concept/168670",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 8.99,
    "discount_percent": 85,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_mass_effect_legendary_edition_xbox",
    "game_id": "mass-effect-legendary-edition",
    "platform_id": "xbox",
    "store_app_id": "9N132867X",
    "store_url": "https://www.xbox.com/games/store/mass-effect-legendary-edition/9N132867X",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 5.99,
    "historical_low_date": "2024-03-14",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_among_us_steam",
    "game_id": "among-us",
    "platform_id": "steam",
    "store_app_id": "945360",
    "store_url": "https://store.steampowered.com/app/945360/",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 2.99,
    "discount_percent": 40,
    "historical_low_price": 2.49,
    "historical_low_date": "2023-12-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 14500,
    "peak_players_24h": 23200,
    "all_time_peak_players": 60900,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_among_us_epic",
    "game_id": "among-us",
    "platform_id": "epic",
    "store_app_id": "among-us",
    "store_url": "https://store.epicgames.com/p/among-us",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 2.99,
    "discount_percent": 40,
    "historical_low_price": 2.49,
    "historical_low_date": "2023-12-21",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_among_us_playstation",
    "game_id": "among-us",
    "platform_id": "playstation",
    "store_app_id": "PPSA10360_00",
    "store_url": "https://store.playstation.com/concept/145360",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 2.99,
    "discount_percent": 40,
    "historical_low_price": 2.49,
    "historical_low_date": "2023-12-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_among_us_xbox",
    "game_id": "among-us",
    "platform_id": "xbox",
    "store_app_id": "9N945360X",
    "store_url": "https://www.xbox.com/games/store/among-us/9N945360X",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 2.99,
    "discount_percent": 40,
    "historical_low_price": 2.49,
    "historical_low_date": "2023-12-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_among_us_nintendo",
    "game_id": "among-us",
    "platform_id": "nintendo",
    "store_app_id": "70010000094536",
    "store_url": "https://www.nintendo.com/store/products/among-us-switch/",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 2.99,
    "discount_percent": 40,
    "historical_low_price": 2.49,
    "historical_low_date": "2023-12-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 93200,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_destiny_2_steam",
    "game_id": "destiny-2",
    "platform_id": "steam",
    "store_app_id": "1085660",
    "store_url": "https://store.steampowered.com/app/1085660/",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2019-10-01",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 58000,
    "peak_players_24h": 92800,
    "all_time_peak_players": 243600,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_destiny_2_epic",
    "game_id": "destiny-2",
    "platform_id": "epic",
    "store_app_id": "destiny-2",
    "store_url": "https://store.epicgames.com/p/destiny-2",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2019-10-01",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_destiny_2_playstation",
    "game_id": "destiny-2",
    "platform_id": "playstation",
    "store_app_id": "PPSA15660_00",
    "store_url": "https://store.playstation.com/concept/105660",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2019-10-01",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_destiny_2_xbox",
    "game_id": "destiny-2",
    "platform_id": "xbox",
    "store_app_id": "9N108566X",
    "store_url": "https://www.xbox.com/games/store/destiny-2/9N108566X",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2019-10-01",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_portal_2_steam",
    "game_id": "portal-2",
    "platform_id": "steam",
    "store_app_id": "620",
    "store_url": "https://store.steampowered.com/app/620/",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 0.99,
    "discount_percent": 90,
    "historical_low_price": 0.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 4800,
    "peak_players_24h": 7680,
    "all_time_peak_players": 20160,
    "rating_positive_percent": 99,
    "review_count": 99150,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_portal_2_nintendo",
    "game_id": "portal-2",
    "platform_id": "nintendo",
    "store_app_id": "700100000620",
    "store_url": "https://www.nintendo.com/store/products/portal-2-switch/",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 5.99,
    "discount_percent": 40,
    "historical_low_price": 0.99,
    "historical_low_date": "2023-11-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 99,
    "review_count": 99150,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_outer_wilds_steam",
    "game_id": "outer-wilds",
    "platform_id": "steam",
    "store_app_id": "753640",
    "store_url": "https://store.steampowered.com/app/753640/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 14.99,
    "discount_percent": 40,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3800,
    "peak_players_24h": 6080,
    "all_time_peak_players": 15960,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_outer_wilds_epic",
    "game_id": "outer-wilds",
    "platform_id": "epic",
    "store_app_id": "outer-wilds",
    "store_url": "https://store.epicgames.com/p/outer-wilds",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 14.99,
    "discount_percent": 40,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_outer_wilds_playstation",
    "game_id": "outer-wilds",
    "platform_id": "playstation",
    "store_app_id": "PPSA16640_00",
    "store_url": "https://store.playstation.com/concept/133640",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 17.49,
    "discount_percent": 30,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_outer_wilds_xbox",
    "game_id": "outer-wilds",
    "platform_id": "xbox",
    "store_app_id": "9N753640X",
    "store_url": "https://www.xbox.com/games/store/outer-wilds/9N753640X",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 14.99,
    "discount_percent": 40,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_outer_wilds_nintendo",
    "game_id": "outer-wilds",
    "platform_id": "nintendo",
    "store_app_id": "70010000075364",
    "store_url": "https://www.nintendo.com/store/products/outer-wilds-switch/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 14.99,
    "discount_percent": 40,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 96600,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_last_of_us_part_1_steam",
    "game_id": "the-last-of-us-part-1",
    "platform_id": "steam",
    "store_app_id": "1888930",
    "store_url": "https://store.steampowered.com/app/1888930/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 40.19,
    "discount_percent": 33,
    "historical_low_price": 40.19,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 5600,
    "peak_players_24h": 8960,
    "all_time_peak_players": 23520,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_last_of_us_part_1_epic",
    "game_id": "the-last-of-us-part-1",
    "platform_id": "epic",
    "store_app_id": "the-last-of-us-part-1",
    "store_url": "https://store.epicgames.com/p/the-last-of-us-part-1",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 40.19,
    "discount_percent": 33,
    "historical_low_price": 40.19,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_the_last_of_us_part_1_playstation",
    "game_id": "the-last-of-us-part-1",
    "platform_id": "playstation",
    "store_app_id": "PPSA17930_00",
    "store_url": "https://store.playstation.com/concept/188930",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 41.99,
    "discount_percent": 30,
    "historical_low_price": 40.19,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 84700,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_horizon_zero_dawn_steam",
    "game_id": "horizon-zero-dawn",
    "platform_id": "steam",
    "store_app_id": "1151640",
    "store_url": "https://store.steampowered.com/app/1151640/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 12.49,
    "discount_percent": 75,
    "historical_low_price": 12.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 4800,
    "peak_players_24h": 7680,
    "all_time_peak_players": 20160,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_horizon_zero_dawn_epic",
    "game_id": "horizon-zero-dawn",
    "platform_id": "epic",
    "store_app_id": "horizon-zero-dawn",
    "store_url": "https://store.epicgames.com/p/horizon-zero-dawn",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 12.49,
    "discount_percent": 75,
    "historical_low_price": 12.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_horizon_zero_dawn_gog",
    "game_id": "horizon-zero-dawn",
    "platform_id": "gog",
    "store_app_id": "1401151640",
    "store_url": "https://www.gog.com/game/horizon-zero-dawn",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 12.49,
    "discount_percent": 75,
    "historical_low_price": 12.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_horizon_zero_dawn_playstation",
    "game_id": "horizon-zero-dawn",
    "platform_id": "playstation",
    "store_app_id": "PPSA18640_00",
    "store_url": "https://store.playstation.com/concept/171640",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 12.49,
    "discount_percent": 75,
    "historical_low_price": 12.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 88950,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_uncharted_legacy_of_thieves_steam",
    "game_id": "uncharted-legacy-of-thieves",
    "platform_id": "steam",
    "store_app_id": "1659420",
    "store_url": "https://store.steampowered.com/app/1659420/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3200,
    "peak_players_24h": 5120,
    "all_time_peak_players": 13440,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_uncharted_legacy_of_thieves_epic",
    "game_id": "uncharted-legacy-of-thieves",
    "platform_id": "epic",
    "store_app_id": "uncharted-legacy-of-thieves",
    "store_url": "https://store.epicgames.com/p/uncharted-legacy-of-thieves",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_uncharted_legacy_of_thieves_playstation",
    "game_id": "uncharted-legacy-of-thieves",
    "platform_id": "playstation",
    "store_app_id": "PPSA13420_00",
    "store_url": "https://store.playstation.com/concept/139420",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 34.99,
    "discount_percent": 30,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 90650,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_death_stranding_steam",
    "game_id": "death-stranding",
    "platform_id": "steam",
    "store_app_id": "1850570",
    "store_url": "https://store.steampowered.com/app/1850570/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 3900,
    "peak_players_24h": 6240,
    "all_time_peak_players": 16380,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_death_stranding_epic",
    "game_id": "death-stranding",
    "platform_id": "epic",
    "store_app_id": "death-stranding",
    "store_url": "https://store.epicgames.com/p/death-stranding",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_death_stranding_playstation",
    "game_id": "death-stranding",
    "platform_id": "playstation",
    "store_app_id": "PPSA15570_00",
    "store_url": "https://store.playstation.com/concept/150570",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 27.99,
    "discount_percent": 30,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-06-27",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 94050,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_bioshock_infinite_steam",
    "game_id": "bioshock-infinite",
    "platform_id": "steam",
    "store_app_id": "8870",
    "store_url": "https://store.steampowered.com/app/8870/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 7.49,
    "discount_percent": 75,
    "historical_low_price": 7.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "Steamworks DRM",
    "is_available": true,
    "current_players": 2400,
    "peak_players_24h": 3840,
    "all_time_peak_players": 10080,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_bioshock_infinite_epic",
    "game_id": "bioshock-infinite",
    "platform_id": "epic",
    "store_app_id": "bioshock-infinite",
    "store_url": "https://store.epicgames.com/p/bioshock-infinite",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 7.49,
    "discount_percent": 75,
    "historical_low_price": 7.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "Epic Online Services",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_bioshock_infinite_gog",
    "game_id": "bioshock-infinite",
    "platform_id": "gog",
    "store_app_id": "1400008870",
    "store_url": "https://www.gog.com/game/bioshock-infinite",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 7.49,
    "discount_percent": 75,
    "historical_low_price": 7.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "DRM-Free (GOG Installer)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_bioshock_infinite_playstation",
    "game_id": "bioshock-infinite",
    "platform_id": "playstation",
    "store_app_id": "PPSA18870_00",
    "store_url": "https://store.playstation.com/concept/108870",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 20.99,
    "discount_percent": 30,
    "historical_low_price": 7.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "PlayStation Network (PSN)",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_bioshock_infinite_xbox",
    "game_id": "bioshock-infinite",
    "platform_id": "xbox",
    "store_app_id": "9N8870X",
    "store_url": "https://www.xbox.com/games/store/bioshock-infinite/9N8870X",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 7.49,
    "discount_percent": 75,
    "historical_low_price": 7.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "Xbox Live / Smart Delivery",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_bioshock_infinite_nintendo",
    "game_id": "bioshock-infinite",
    "platform_id": "nintendo",
    "store_app_id": "7001000008870",
    "store_url": "https://www.nintendo.com/store/products/bioshock-infinite-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 7.49,
    "historical_low_date": "2023-11-21",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 95750,
    "updated_at": "2026-09-28T12:00:00Z"
  },
  {
    "id": "listing_animal_crossing_new_horizons_nintendo",
    "game_id": "animal-crossing-new-horizons",
    "platform_id": "nintendo",
    "store_app_id": "70010000065432",
    "store_url": "https://www.nintendo.com/store/products/animal-crossing-new-horizons-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 59.99,
    "discount_percent": 0,
    "historical_low_price": 41.99,
    "historical_low_date": "2022-11-20",
    "drm_type": "Nintendo eShop Account",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 92350,
    "updated_at": "2026-09-28T12:00:00Z"
  }
];

export const EXPANDED_PRICE_HISTORIES: { listing_id: string; history: PriceHistoryPoint[] }[] = [
  {
    "listing_id": "listing_grand_theft_auto_v_steam",
    "history": [
      {
        "id": 2000,
        "listing_id": "listing_grand_theft_auto_v_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2001,
        "listing_id": "listing_grand_theft_auto_v_steam",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2002,
        "listing_id": "listing_grand_theft_auto_v_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2003,
        "listing_id": "listing_grand_theft_auto_v_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2004,
        "listing_id": "listing_grand_theft_auto_v_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_grand_theft_auto_v_epic",
    "history": [
      {
        "id": 2005,
        "listing_id": "listing_grand_theft_auto_v_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2006,
        "listing_id": "listing_grand_theft_auto_v_epic",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2007,
        "listing_id": "listing_grand_theft_auto_v_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2008,
        "listing_id": "listing_grand_theft_auto_v_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2009,
        "listing_id": "listing_grand_theft_auto_v_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_grand_theft_auto_v_playstation",
    "history": [
      {
        "id": 2010,
        "listing_id": "listing_grand_theft_auto_v_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2011,
        "listing_id": "listing_grand_theft_auto_v_playstation",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2012,
        "listing_id": "listing_grand_theft_auto_v_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2013,
        "listing_id": "listing_grand_theft_auto_v_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2014,
        "listing_id": "listing_grand_theft_auto_v_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_grand_theft_auto_v_xbox",
    "history": [
      {
        "id": 2015,
        "listing_id": "listing_grand_theft_auto_v_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2016,
        "listing_id": "listing_grand_theft_auto_v_xbox",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2017,
        "listing_id": "listing_grand_theft_auto_v_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2018,
        "listing_id": "listing_grand_theft_auto_v_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2019,
        "listing_id": "listing_grand_theft_auto_v_xbox",
        "price": 20.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_skyrim_se_steam",
    "history": [
      {
        "id": 2020,
        "listing_id": "listing_skyrim_se_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2021,
        "listing_id": "listing_skyrim_se_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2022,
        "listing_id": "listing_skyrim_se_steam",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2023,
        "listing_id": "listing_skyrim_se_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2024,
        "listing_id": "listing_skyrim_se_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_skyrim_se_gog",
    "history": [
      {
        "id": 2025,
        "listing_id": "listing_skyrim_se_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2026,
        "listing_id": "listing_skyrim_se_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2027,
        "listing_id": "listing_skyrim_se_gog",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2028,
        "listing_id": "listing_skyrim_se_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2029,
        "listing_id": "listing_skyrim_se_gog",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_skyrim_se_playstation",
    "history": [
      {
        "id": 2030,
        "listing_id": "listing_skyrim_se_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2031,
        "listing_id": "listing_skyrim_se_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2032,
        "listing_id": "listing_skyrim_se_playstation",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2033,
        "listing_id": "listing_skyrim_se_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2034,
        "listing_id": "listing_skyrim_se_playstation",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_skyrim_se_xbox",
    "history": [
      {
        "id": 2035,
        "listing_id": "listing_skyrim_se_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2036,
        "listing_id": "listing_skyrim_se_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2037,
        "listing_id": "listing_skyrim_se_xbox",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2038,
        "listing_id": "listing_skyrim_se_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2039,
        "listing_id": "listing_skyrim_se_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_skyrim_se_nintendo",
    "history": [
      {
        "id": 2040,
        "listing_id": "listing_skyrim_se_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2041,
        "listing_id": "listing_skyrim_se_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2042,
        "listing_id": "listing_skyrim_se_nintendo",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2043,
        "listing_id": "listing_skyrim_se_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2044,
        "listing_id": "listing_skyrim_se_nintendo",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_fallout_4_steam",
    "history": [
      {
        "id": 2045,
        "listing_id": "listing_fallout_4_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2046,
        "listing_id": "listing_fallout_4_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2047,
        "listing_id": "listing_fallout_4_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-04-15",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2048,
        "listing_id": "listing_fallout_4_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2049,
        "listing_id": "listing_fallout_4_steam",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_fallout_4_gog",
    "history": [
      {
        "id": 2050,
        "listing_id": "listing_fallout_4_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2051,
        "listing_id": "listing_fallout_4_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2052,
        "listing_id": "listing_fallout_4_gog",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-04-15",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2053,
        "listing_id": "listing_fallout_4_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2054,
        "listing_id": "listing_fallout_4_gog",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_fallout_4_playstation",
    "history": [
      {
        "id": 2055,
        "listing_id": "listing_fallout_4_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2056,
        "listing_id": "listing_fallout_4_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2057,
        "listing_id": "listing_fallout_4_playstation",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-04-15",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2058,
        "listing_id": "listing_fallout_4_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2059,
        "listing_id": "listing_fallout_4_playstation",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_fallout_4_xbox",
    "history": [
      {
        "id": 2060,
        "listing_id": "listing_fallout_4_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2061,
        "listing_id": "listing_fallout_4_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2062,
        "listing_id": "listing_fallout_4_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-04-15",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2063,
        "listing_id": "listing_fallout_4_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2064,
        "listing_id": "listing_fallout_4_xbox",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dark_souls_3_steam",
    "history": [
      {
        "id": 2065,
        "listing_id": "listing_dark_souls_3_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2066,
        "listing_id": "listing_dark_souls_3_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2067,
        "listing_id": "listing_dark_souls_3_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2022-01-05",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2068,
        "listing_id": "listing_dark_souls_3_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2069,
        "listing_id": "listing_dark_souls_3_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dark_souls_3_playstation",
    "history": [
      {
        "id": 2070,
        "listing_id": "listing_dark_souls_3_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2071,
        "listing_id": "listing_dark_souls_3_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2072,
        "listing_id": "listing_dark_souls_3_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2022-01-05",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2073,
        "listing_id": "listing_dark_souls_3_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2074,
        "listing_id": "listing_dark_souls_3_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dark_souls_3_xbox",
    "history": [
      {
        "id": 2075,
        "listing_id": "listing_dark_souls_3_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2076,
        "listing_id": "listing_dark_souls_3_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2077,
        "listing_id": "listing_dark_souls_3_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2022-01-05",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2078,
        "listing_id": "listing_dark_souls_3_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2079,
        "listing_id": "listing_dark_souls_3_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_sekiro_steam",
    "history": [
      {
        "id": 2080,
        "listing_id": "listing_sekiro_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2081,
        "listing_id": "listing_sekiro_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2082,
        "listing_id": "listing_sekiro_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2083,
        "listing_id": "listing_sekiro_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2084,
        "listing_id": "listing_sekiro_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_sekiro_playstation",
    "history": [
      {
        "id": 2085,
        "listing_id": "listing_sekiro_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2086,
        "listing_id": "listing_sekiro_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2087,
        "listing_id": "listing_sekiro_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2088,
        "listing_id": "listing_sekiro_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2089,
        "listing_id": "listing_sekiro_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_sekiro_xbox",
    "history": [
      {
        "id": 2090,
        "listing_id": "listing_sekiro_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2091,
        "listing_id": "listing_sekiro_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2092,
        "listing_id": "listing_sekiro_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2093,
        "listing_id": "listing_sekiro_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2094,
        "listing_id": "listing_sekiro_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_marvel_spider_man_remastered_steam",
    "history": [
      {
        "id": 2095,
        "listing_id": "listing_marvel_spider_man_remastered_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2096,
        "listing_id": "listing_marvel_spider_man_remastered_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2097,
        "listing_id": "listing_marvel_spider_man_remastered_steam",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2098,
        "listing_id": "listing_marvel_spider_man_remastered_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2099,
        "listing_id": "listing_marvel_spider_man_remastered_steam",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_marvel_spider_man_remastered_epic",
    "history": [
      {
        "id": 2100,
        "listing_id": "listing_marvel_spider_man_remastered_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2101,
        "listing_id": "listing_marvel_spider_man_remastered_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2102,
        "listing_id": "listing_marvel_spider_man_remastered_epic",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2103,
        "listing_id": "listing_marvel_spider_man_remastered_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2104,
        "listing_id": "listing_marvel_spider_man_remastered_epic",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_marvel_spider_man_remastered_playstation",
    "history": [
      {
        "id": 2105,
        "listing_id": "listing_marvel_spider_man_remastered_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2106,
        "listing_id": "listing_marvel_spider_man_remastered_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2107,
        "listing_id": "listing_marvel_spider_man_remastered_playstation",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2108,
        "listing_id": "listing_marvel_spider_man_remastered_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2109,
        "listing_id": "listing_marvel_spider_man_remastered_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_hogwarts_legacy_steam",
    "history": [
      {
        "id": 2110,
        "listing_id": "listing_hogwarts_legacy_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2111,
        "listing_id": "listing_hogwarts_legacy_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2112,
        "listing_id": "listing_hogwarts_legacy_steam",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2113,
        "listing_id": "listing_hogwarts_legacy_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2114,
        "listing_id": "listing_hogwarts_legacy_steam",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_hogwarts_legacy_epic",
    "history": [
      {
        "id": 2115,
        "listing_id": "listing_hogwarts_legacy_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2116,
        "listing_id": "listing_hogwarts_legacy_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2117,
        "listing_id": "listing_hogwarts_legacy_epic",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2118,
        "listing_id": "listing_hogwarts_legacy_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2119,
        "listing_id": "listing_hogwarts_legacy_epic",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_hogwarts_legacy_playstation",
    "history": [
      {
        "id": 2120,
        "listing_id": "listing_hogwarts_legacy_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2121,
        "listing_id": "listing_hogwarts_legacy_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2122,
        "listing_id": "listing_hogwarts_legacy_playstation",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2123,
        "listing_id": "listing_hogwarts_legacy_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2124,
        "listing_id": "listing_hogwarts_legacy_playstation",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_hogwarts_legacy_xbox",
    "history": [
      {
        "id": 2125,
        "listing_id": "listing_hogwarts_legacy_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2126,
        "listing_id": "listing_hogwarts_legacy_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2127,
        "listing_id": "listing_hogwarts_legacy_xbox",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2128,
        "listing_id": "listing_hogwarts_legacy_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2129,
        "listing_id": "listing_hogwarts_legacy_xbox",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_hogwarts_legacy_nintendo",
    "history": [
      {
        "id": 2130,
        "listing_id": "listing_hogwarts_legacy_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2131,
        "listing_id": "listing_hogwarts_legacy_nintendo",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2132,
        "listing_id": "listing_hogwarts_legacy_nintendo",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2133,
        "listing_id": "listing_hogwarts_legacy_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2134,
        "listing_id": "listing_hogwarts_legacy_nintendo",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_doom_eternal_steam",
    "history": [
      {
        "id": 2135,
        "listing_id": "listing_doom_eternal_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2136,
        "listing_id": "listing_doom_eternal_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2137,
        "listing_id": "listing_doom_eternal_steam",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2138,
        "listing_id": "listing_doom_eternal_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2139,
        "listing_id": "listing_doom_eternal_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_doom_eternal_playstation",
    "history": [
      {
        "id": 2140,
        "listing_id": "listing_doom_eternal_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2141,
        "listing_id": "listing_doom_eternal_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2142,
        "listing_id": "listing_doom_eternal_playstation",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2143,
        "listing_id": "listing_doom_eternal_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2144,
        "listing_id": "listing_doom_eternal_playstation",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_doom_eternal_xbox",
    "history": [
      {
        "id": 2145,
        "listing_id": "listing_doom_eternal_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2146,
        "listing_id": "listing_doom_eternal_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2147,
        "listing_id": "listing_doom_eternal_xbox",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2148,
        "listing_id": "listing_doom_eternal_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2149,
        "listing_id": "listing_doom_eternal_xbox",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_doom_eternal_nintendo",
    "history": [
      {
        "id": 2150,
        "listing_id": "listing_doom_eternal_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2151,
        "listing_id": "listing_doom_eternal_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2152,
        "listing_id": "listing_doom_eternal_nintendo",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2153,
        "listing_id": "listing_doom_eternal_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2154,
        "listing_id": "listing_doom_eternal_nintendo",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_civilization_6_steam",
    "history": [
      {
        "id": 2155,
        "listing_id": "listing_civilization_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2156,
        "listing_id": "listing_civilization_6_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2157,
        "listing_id": "listing_civilization_6_steam",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-15",
        "discount_percent": 95,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2158,
        "listing_id": "listing_civilization_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2159,
        "listing_id": "listing_civilization_6_steam",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 90,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_civilization_6_epic",
    "history": [
      {
        "id": 2160,
        "listing_id": "listing_civilization_6_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2161,
        "listing_id": "listing_civilization_6_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2162,
        "listing_id": "listing_civilization_6_epic",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-15",
        "discount_percent": 95,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2163,
        "listing_id": "listing_civilization_6_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2164,
        "listing_id": "listing_civilization_6_epic",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 90,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_civilization_6_playstation",
    "history": [
      {
        "id": 2165,
        "listing_id": "listing_civilization_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2166,
        "listing_id": "listing_civilization_6_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2167,
        "listing_id": "listing_civilization_6_playstation",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-15",
        "discount_percent": 95,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2168,
        "listing_id": "listing_civilization_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2169,
        "listing_id": "listing_civilization_6_playstation",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 90,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_civilization_6_xbox",
    "history": [
      {
        "id": 2170,
        "listing_id": "listing_civilization_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2171,
        "listing_id": "listing_civilization_6_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2172,
        "listing_id": "listing_civilization_6_xbox",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-15",
        "discount_percent": 95,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2173,
        "listing_id": "listing_civilization_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2174,
        "listing_id": "listing_civilization_6_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_civilization_6_nintendo",
    "history": [
      {
        "id": 2175,
        "listing_id": "listing_civilization_6_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2176,
        "listing_id": "listing_civilization_6_nintendo",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2177,
        "listing_id": "listing_civilization_6_nintendo",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-15",
        "discount_percent": 95,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2178,
        "listing_id": "listing_civilization_6_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2179,
        "listing_id": "listing_civilization_6_nintendo",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_terraria_steam",
    "history": [
      {
        "id": 2180,
        "listing_id": "listing_terraria_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2181,
        "listing_id": "listing_terraria_steam",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2182,
        "listing_id": "listing_terraria_steam",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2021-06-24",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2183,
        "listing_id": "listing_terraria_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2184,
        "listing_id": "listing_terraria_steam",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_terraria_gog",
    "history": [
      {
        "id": 2185,
        "listing_id": "listing_terraria_gog",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2186,
        "listing_id": "listing_terraria_gog",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2187,
        "listing_id": "listing_terraria_gog",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2021-06-24",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2188,
        "listing_id": "listing_terraria_gog",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2189,
        "listing_id": "listing_terraria_gog",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_terraria_playstation",
    "history": [
      {
        "id": 2190,
        "listing_id": "listing_terraria_playstation",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2191,
        "listing_id": "listing_terraria_playstation",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2192,
        "listing_id": "listing_terraria_playstation",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2021-06-24",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2193,
        "listing_id": "listing_terraria_playstation",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2194,
        "listing_id": "listing_terraria_playstation",
        "price": 6.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_terraria_xbox",
    "history": [
      {
        "id": 2195,
        "listing_id": "listing_terraria_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2196,
        "listing_id": "listing_terraria_xbox",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2197,
        "listing_id": "listing_terraria_xbox",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2021-06-24",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2198,
        "listing_id": "listing_terraria_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2199,
        "listing_id": "listing_terraria_xbox",
        "price": 6.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_terraria_nintendo",
    "history": [
      {
        "id": 2200,
        "listing_id": "listing_terraria_nintendo",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2201,
        "listing_id": "listing_terraria_nintendo",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2202,
        "listing_id": "listing_terraria_nintendo",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2021-06-24",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2203,
        "listing_id": "listing_terraria_nintendo",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2204,
        "listing_id": "listing_terraria_nintendo",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_borderlands_3_steam",
    "history": [
      {
        "id": 2205,
        "listing_id": "listing_borderlands_3_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2206,
        "listing_id": "listing_borderlands_3_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2207,
        "listing_id": "listing_borderlands_3_steam",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-01",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2208,
        "listing_id": "listing_borderlands_3_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2209,
        "listing_id": "listing_borderlands_3_steam",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_borderlands_3_epic",
    "history": [
      {
        "id": 2210,
        "listing_id": "listing_borderlands_3_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2211,
        "listing_id": "listing_borderlands_3_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2212,
        "listing_id": "listing_borderlands_3_epic",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-01",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2213,
        "listing_id": "listing_borderlands_3_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2214,
        "listing_id": "listing_borderlands_3_epic",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_borderlands_3_playstation",
    "history": [
      {
        "id": 2215,
        "listing_id": "listing_borderlands_3_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2216,
        "listing_id": "listing_borderlands_3_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2217,
        "listing_id": "listing_borderlands_3_playstation",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-01",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2218,
        "listing_id": "listing_borderlands_3_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2219,
        "listing_id": "listing_borderlands_3_playstation",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_borderlands_3_xbox",
    "history": [
      {
        "id": 2220,
        "listing_id": "listing_borderlands_3_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2221,
        "listing_id": "listing_borderlands_3_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2222,
        "listing_id": "listing_borderlands_3_xbox",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-01",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2223,
        "listing_id": "listing_borderlands_3_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2224,
        "listing_id": "listing_borderlands_3_xbox",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_borderlands_3_nintendo",
    "history": [
      {
        "id": 2225,
        "listing_id": "listing_borderlands_3_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2226,
        "listing_id": "listing_borderlands_3_nintendo",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2227,
        "listing_id": "listing_borderlands_3_nintendo",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-01",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2228,
        "listing_id": "listing_borderlands_3_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2229,
        "listing_id": "listing_borderlands_3_nintendo",
        "price": 35.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mortal_kombat_11_steam",
    "history": [
      {
        "id": 2230,
        "listing_id": "listing_mortal_kombat_11_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2231,
        "listing_id": "listing_mortal_kombat_11_steam",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2232,
        "listing_id": "listing_mortal_kombat_11_steam",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-05-16",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2233,
        "listing_id": "listing_mortal_kombat_11_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2234,
        "listing_id": "listing_mortal_kombat_11_steam",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 90,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mortal_kombat_11_playstation",
    "history": [
      {
        "id": 2235,
        "listing_id": "listing_mortal_kombat_11_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2236,
        "listing_id": "listing_mortal_kombat_11_playstation",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2237,
        "listing_id": "listing_mortal_kombat_11_playstation",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-05-16",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2238,
        "listing_id": "listing_mortal_kombat_11_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2239,
        "listing_id": "listing_mortal_kombat_11_playstation",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mortal_kombat_11_xbox",
    "history": [
      {
        "id": 2240,
        "listing_id": "listing_mortal_kombat_11_xbox",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2241,
        "listing_id": "listing_mortal_kombat_11_xbox",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2242,
        "listing_id": "listing_mortal_kombat_11_xbox",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-05-16",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2243,
        "listing_id": "listing_mortal_kombat_11_xbox",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2244,
        "listing_id": "listing_mortal_kombat_11_xbox",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mortal_kombat_11_nintendo",
    "history": [
      {
        "id": 2245,
        "listing_id": "listing_mortal_kombat_11_nintendo",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2246,
        "listing_id": "listing_mortal_kombat_11_nintendo",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2247,
        "listing_id": "listing_mortal_kombat_11_nintendo",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-05-16",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2248,
        "listing_id": "listing_mortal_kombat_11_nintendo",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2249,
        "listing_id": "listing_mortal_kombat_11_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_street_fighter_6_steam",
    "history": [
      {
        "id": 2250,
        "listing_id": "listing_street_fighter_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2251,
        "listing_id": "listing_street_fighter_6_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2252,
        "listing_id": "listing_street_fighter_6_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2253,
        "listing_id": "listing_street_fighter_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2254,
        "listing_id": "listing_street_fighter_6_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_street_fighter_6_playstation",
    "history": [
      {
        "id": 2255,
        "listing_id": "listing_street_fighter_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2256,
        "listing_id": "listing_street_fighter_6_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2257,
        "listing_id": "listing_street_fighter_6_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2258,
        "listing_id": "listing_street_fighter_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2259,
        "listing_id": "listing_street_fighter_6_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_street_fighter_6_xbox",
    "history": [
      {
        "id": 2260,
        "listing_id": "listing_street_fighter_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2261,
        "listing_id": "listing_street_fighter_6_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2262,
        "listing_id": "listing_street_fighter_6_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2263,
        "listing_id": "listing_street_fighter_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2264,
        "listing_id": "listing_street_fighter_6_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_tekken_8_steam",
    "history": [
      {
        "id": 2265,
        "listing_id": "listing_tekken_8_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2266,
        "listing_id": "listing_tekken_8_steam",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2267,
        "listing_id": "listing_tekken_8_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 43,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2268,
        "listing_id": "listing_tekken_8_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2269,
        "listing_id": "listing_tekken_8_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 43,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_tekken_8_playstation",
    "history": [
      {
        "id": 2270,
        "listing_id": "listing_tekken_8_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2271,
        "listing_id": "listing_tekken_8_playstation",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2272,
        "listing_id": "listing_tekken_8_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 43,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2273,
        "listing_id": "listing_tekken_8_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2274,
        "listing_id": "listing_tekken_8_playstation",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_tekken_8_xbox",
    "history": [
      {
        "id": 2275,
        "listing_id": "listing_tekken_8_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2276,
        "listing_id": "listing_tekken_8_xbox",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2277,
        "listing_id": "listing_tekken_8_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 43,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2278,
        "listing_id": "listing_tekken_8_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2279,
        "listing_id": "listing_tekken_8_xbox",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_final_fantasy_7_remake_steam",
    "history": [
      {
        "id": 2280,
        "listing_id": "listing_final_fantasy_7_remake_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2281,
        "listing_id": "listing_final_fantasy_7_remake_steam",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2282,
        "listing_id": "listing_final_fantasy_7_remake_steam",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2283,
        "listing_id": "listing_final_fantasy_7_remake_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2284,
        "listing_id": "listing_final_fantasy_7_remake_steam",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_final_fantasy_7_remake_epic",
    "history": [
      {
        "id": 2285,
        "listing_id": "listing_final_fantasy_7_remake_epic",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2286,
        "listing_id": "listing_final_fantasy_7_remake_epic",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2287,
        "listing_id": "listing_final_fantasy_7_remake_epic",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2288,
        "listing_id": "listing_final_fantasy_7_remake_epic",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2289,
        "listing_id": "listing_final_fantasy_7_remake_epic",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_final_fantasy_7_remake_playstation",
    "history": [
      {
        "id": 2290,
        "listing_id": "listing_final_fantasy_7_remake_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2291,
        "listing_id": "listing_final_fantasy_7_remake_playstation",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2292,
        "listing_id": "listing_final_fantasy_7_remake_playstation",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2293,
        "listing_id": "listing_final_fantasy_7_remake_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2294,
        "listing_id": "listing_final_fantasy_7_remake_playstation",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_assassins_creed_valhalla_steam",
    "history": [
      {
        "id": 2295,
        "listing_id": "listing_assassins_creed_valhalla_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2296,
        "listing_id": "listing_assassins_creed_valhalla_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2297,
        "listing_id": "listing_assassins_creed_valhalla_steam",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2298,
        "listing_id": "listing_assassins_creed_valhalla_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2299,
        "listing_id": "listing_assassins_creed_valhalla_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_assassins_creed_valhalla_epic",
    "history": [
      {
        "id": 2300,
        "listing_id": "listing_assassins_creed_valhalla_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2301,
        "listing_id": "listing_assassins_creed_valhalla_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2302,
        "listing_id": "listing_assassins_creed_valhalla_epic",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2303,
        "listing_id": "listing_assassins_creed_valhalla_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2304,
        "listing_id": "listing_assassins_creed_valhalla_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_assassins_creed_valhalla_playstation",
    "history": [
      {
        "id": 2305,
        "listing_id": "listing_assassins_creed_valhalla_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2306,
        "listing_id": "listing_assassins_creed_valhalla_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2307,
        "listing_id": "listing_assassins_creed_valhalla_playstation",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2308,
        "listing_id": "listing_assassins_creed_valhalla_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2309,
        "listing_id": "listing_assassins_creed_valhalla_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_assassins_creed_valhalla_xbox",
    "history": [
      {
        "id": 2310,
        "listing_id": "listing_assassins_creed_valhalla_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2311,
        "listing_id": "listing_assassins_creed_valhalla_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2312,
        "listing_id": "listing_assassins_creed_valhalla_xbox",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2313,
        "listing_id": "listing_assassins_creed_valhalla_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2314,
        "listing_id": "listing_assassins_creed_valhalla_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_far_cry_6_steam",
    "history": [
      {
        "id": 2315,
        "listing_id": "listing_far_cry_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2316,
        "listing_id": "listing_far_cry_6_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2317,
        "listing_id": "listing_far_cry_6_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2318,
        "listing_id": "listing_far_cry_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2319,
        "listing_id": "listing_far_cry_6_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_far_cry_6_epic",
    "history": [
      {
        "id": 2320,
        "listing_id": "listing_far_cry_6_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2321,
        "listing_id": "listing_far_cry_6_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2322,
        "listing_id": "listing_far_cry_6_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2323,
        "listing_id": "listing_far_cry_6_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2324,
        "listing_id": "listing_far_cry_6_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_far_cry_6_playstation",
    "history": [
      {
        "id": 2325,
        "listing_id": "listing_far_cry_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2326,
        "listing_id": "listing_far_cry_6_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2327,
        "listing_id": "listing_far_cry_6_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2328,
        "listing_id": "listing_far_cry_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2329,
        "listing_id": "listing_far_cry_6_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_far_cry_6_xbox",
    "history": [
      {
        "id": 2330,
        "listing_id": "listing_far_cry_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2331,
        "listing_id": "listing_far_cry_6_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2332,
        "listing_id": "listing_far_cry_6_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2333,
        "listing_id": "listing_far_cry_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2334,
        "listing_id": "listing_far_cry_6_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_batman_arkham_knight_steam",
    "history": [
      {
        "id": 2335,
        "listing_id": "listing_batman_arkham_knight_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2336,
        "listing_id": "listing_batman_arkham_knight_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2337,
        "listing_id": "listing_batman_arkham_knight_steam",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2338,
        "listing_id": "listing_batman_arkham_knight_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2339,
        "listing_id": "listing_batman_arkham_knight_steam",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_batman_arkham_knight_gog",
    "history": [
      {
        "id": 2340,
        "listing_id": "listing_batman_arkham_knight_gog",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2341,
        "listing_id": "listing_batman_arkham_knight_gog",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2342,
        "listing_id": "listing_batman_arkham_knight_gog",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2343,
        "listing_id": "listing_batman_arkham_knight_gog",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2344,
        "listing_id": "listing_batman_arkham_knight_gog",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_batman_arkham_knight_epic",
    "history": [
      {
        "id": 2345,
        "listing_id": "listing_batman_arkham_knight_epic",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2346,
        "listing_id": "listing_batman_arkham_knight_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2347,
        "listing_id": "listing_batman_arkham_knight_epic",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2348,
        "listing_id": "listing_batman_arkham_knight_epic",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2349,
        "listing_id": "listing_batman_arkham_knight_epic",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_batman_arkham_knight_playstation",
    "history": [
      {
        "id": 2350,
        "listing_id": "listing_batman_arkham_knight_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2351,
        "listing_id": "listing_batman_arkham_knight_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2352,
        "listing_id": "listing_batman_arkham_knight_playstation",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2353,
        "listing_id": "listing_batman_arkham_knight_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2354,
        "listing_id": "listing_batman_arkham_knight_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_batman_arkham_knight_xbox",
    "history": [
      {
        "id": 2355,
        "listing_id": "listing_batman_arkham_knight_xbox",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2356,
        "listing_id": "listing_batman_arkham_knight_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2357,
        "listing_id": "listing_batman_arkham_knight_xbox",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2358,
        "listing_id": "listing_batman_arkham_knight_xbox",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2359,
        "listing_id": "listing_batman_arkham_knight_xbox",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_batman_arkham_knight_nintendo",
    "history": [
      {
        "id": 2360,
        "listing_id": "listing_batman_arkham_knight_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2361,
        "listing_id": "listing_batman_arkham_knight_nintendo",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2362,
        "listing_id": "listing_batman_arkham_knight_nintendo",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2363,
        "listing_id": "listing_batman_arkham_knight_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2364,
        "listing_id": "listing_batman_arkham_knight_nintendo",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_halo_master_chief_collection_steam",
    "history": [
      {
        "id": 2365,
        "listing_id": "listing_halo_master_chief_collection_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2366,
        "listing_id": "listing_halo_master_chief_collection_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2367,
        "listing_id": "listing_halo_master_chief_collection_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2368,
        "listing_id": "listing_halo_master_chief_collection_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2369,
        "listing_id": "listing_halo_master_chief_collection_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_halo_master_chief_collection_xbox",
    "history": [
      {
        "id": 2370,
        "listing_id": "listing_halo_master_chief_collection_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2371,
        "listing_id": "listing_halo_master_chief_collection_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2372,
        "listing_id": "listing_halo_master_chief_collection_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2373,
        "listing_id": "listing_halo_master_chief_collection_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2374,
        "listing_id": "listing_halo_master_chief_collection_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_control_ultimate_edition_steam",
    "history": [
      {
        "id": 2375,
        "listing_id": "listing_control_ultimate_edition_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2376,
        "listing_id": "listing_control_ultimate_edition_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2377,
        "listing_id": "listing_control_ultimate_edition_steam",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2378,
        "listing_id": "listing_control_ultimate_edition_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2379,
        "listing_id": "listing_control_ultimate_edition_steam",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_control_ultimate_edition_gog",
    "history": [
      {
        "id": 2380,
        "listing_id": "listing_control_ultimate_edition_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2381,
        "listing_id": "listing_control_ultimate_edition_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2382,
        "listing_id": "listing_control_ultimate_edition_gog",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2383,
        "listing_id": "listing_control_ultimate_edition_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2384,
        "listing_id": "listing_control_ultimate_edition_gog",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_control_ultimate_edition_epic",
    "history": [
      {
        "id": 2385,
        "listing_id": "listing_control_ultimate_edition_epic",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2386,
        "listing_id": "listing_control_ultimate_edition_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2387,
        "listing_id": "listing_control_ultimate_edition_epic",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2388,
        "listing_id": "listing_control_ultimate_edition_epic",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2389,
        "listing_id": "listing_control_ultimate_edition_epic",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_control_ultimate_edition_playstation",
    "history": [
      {
        "id": 2390,
        "listing_id": "listing_control_ultimate_edition_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2391,
        "listing_id": "listing_control_ultimate_edition_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2392,
        "listing_id": "listing_control_ultimate_edition_playstation",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2393,
        "listing_id": "listing_control_ultimate_edition_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2394,
        "listing_id": "listing_control_ultimate_edition_playstation",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_control_ultimate_edition_xbox",
    "history": [
      {
        "id": 2395,
        "listing_id": "listing_control_ultimate_edition_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2396,
        "listing_id": "listing_control_ultimate_edition_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2397,
        "listing_id": "listing_control_ultimate_edition_xbox",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2398,
        "listing_id": "listing_control_ultimate_edition_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2399,
        "listing_id": "listing_control_ultimate_edition_xbox",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_control_ultimate_edition_nintendo",
    "history": [
      {
        "id": 2400,
        "listing_id": "listing_control_ultimate_edition_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2401,
        "listing_id": "listing_control_ultimate_edition_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2402,
        "listing_id": "listing_control_ultimate_edition_nintendo",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2024-05-02",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2403,
        "listing_id": "listing_control_ultimate_edition_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2404,
        "listing_id": "listing_control_ultimate_edition_nintendo",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_gears_5_steam",
    "history": [
      {
        "id": 2405,
        "listing_id": "listing_gears_5_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2406,
        "listing_id": "listing_gears_5_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2407,
        "listing_id": "listing_gears_5_steam",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2408,
        "listing_id": "listing_gears_5_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2409,
        "listing_id": "listing_gears_5_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_gears_5_xbox",
    "history": [
      {
        "id": 2410,
        "listing_id": "listing_gears_5_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2411,
        "listing_id": "listing_gears_5_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2412,
        "listing_id": "listing_gears_5_xbox",
        "price": 7.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2413,
        "listing_id": "listing_gears_5_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2414,
        "listing_id": "listing_gears_5_xbox",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_sea_of_thieves_steam",
    "history": [
      {
        "id": 2415,
        "listing_id": "listing_sea_of_thieves_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2416,
        "listing_id": "listing_sea_of_thieves_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2417,
        "listing_id": "listing_sea_of_thieves_steam",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2418,
        "listing_id": "listing_sea_of_thieves_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2419,
        "listing_id": "listing_sea_of_thieves_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_sea_of_thieves_playstation",
    "history": [
      {
        "id": 2420,
        "listing_id": "listing_sea_of_thieves_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2421,
        "listing_id": "listing_sea_of_thieves_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2422,
        "listing_id": "listing_sea_of_thieves_playstation",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2423,
        "listing_id": "listing_sea_of_thieves_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2424,
        "listing_id": "listing_sea_of_thieves_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_sea_of_thieves_xbox",
    "history": [
      {
        "id": 2425,
        "listing_id": "listing_sea_of_thieves_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2426,
        "listing_id": "listing_sea_of_thieves_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2427,
        "listing_id": "listing_sea_of_thieves_xbox",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2428,
        "listing_id": "listing_sea_of_thieves_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2429,
        "listing_id": "listing_sea_of_thieves_xbox",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_the_sims_4_steam",
    "history": [
      {
        "id": 2430,
        "listing_id": "listing_the_sims_4_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2431,
        "listing_id": "listing_the_sims_4_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2432,
        "listing_id": "listing_the_sims_4_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2022-10-18",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2433,
        "listing_id": "listing_the_sims_4_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2434,
        "listing_id": "listing_the_sims_4_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_the_sims_4_epic",
    "history": [
      {
        "id": 2435,
        "listing_id": "listing_the_sims_4_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2436,
        "listing_id": "listing_the_sims_4_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2437,
        "listing_id": "listing_the_sims_4_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2022-10-18",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2438,
        "listing_id": "listing_the_sims_4_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2439,
        "listing_id": "listing_the_sims_4_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_the_sims_4_playstation",
    "history": [
      {
        "id": 2440,
        "listing_id": "listing_the_sims_4_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2441,
        "listing_id": "listing_the_sims_4_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2442,
        "listing_id": "listing_the_sims_4_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2022-10-18",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2443,
        "listing_id": "listing_the_sims_4_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2444,
        "listing_id": "listing_the_sims_4_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_the_sims_4_xbox",
    "history": [
      {
        "id": 2445,
        "listing_id": "listing_the_sims_4_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2446,
        "listing_id": "listing_the_sims_4_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2447,
        "listing_id": "listing_the_sims_4_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2022-10-18",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2448,
        "listing_id": "listing_the_sims_4_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2449,
        "listing_id": "listing_the_sims_4_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_need_for_speed_unbound_steam",
    "history": [
      {
        "id": 2450,
        "listing_id": "listing_need_for_speed_unbound_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2451,
        "listing_id": "listing_need_for_speed_unbound_steam",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2452,
        "listing_id": "listing_need_for_speed_unbound_steam",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-05-13",
        "discount_percent": 86,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2453,
        "listing_id": "listing_need_for_speed_unbound_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2454,
        "listing_id": "listing_need_for_speed_unbound_steam",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 86,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_need_for_speed_unbound_epic",
    "history": [
      {
        "id": 2455,
        "listing_id": "listing_need_for_speed_unbound_epic",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2456,
        "listing_id": "listing_need_for_speed_unbound_epic",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2457,
        "listing_id": "listing_need_for_speed_unbound_epic",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-05-13",
        "discount_percent": 86,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2458,
        "listing_id": "listing_need_for_speed_unbound_epic",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2459,
        "listing_id": "listing_need_for_speed_unbound_epic",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 86,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_need_for_speed_unbound_playstation",
    "history": [
      {
        "id": 2460,
        "listing_id": "listing_need_for_speed_unbound_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2461,
        "listing_id": "listing_need_for_speed_unbound_playstation",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2462,
        "listing_id": "listing_need_for_speed_unbound_playstation",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-05-13",
        "discount_percent": 86,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2463,
        "listing_id": "listing_need_for_speed_unbound_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2464,
        "listing_id": "listing_need_for_speed_unbound_playstation",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_need_for_speed_unbound_xbox",
    "history": [
      {
        "id": 2465,
        "listing_id": "listing_need_for_speed_unbound_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2466,
        "listing_id": "listing_need_for_speed_unbound_xbox",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2467,
        "listing_id": "listing_need_for_speed_unbound_xbox",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-05-13",
        "discount_percent": 86,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2468,
        "listing_id": "listing_need_for_speed_unbound_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2469,
        "listing_id": "listing_need_for_speed_unbound_xbox",
        "price": 9.79,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 86,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_battlefield_2042_steam",
    "history": [
      {
        "id": 2470,
        "listing_id": "listing_battlefield_2042_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2471,
        "listing_id": "listing_battlefield_2042_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2472,
        "listing_id": "listing_battlefield_2042_steam",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2473,
        "listing_id": "listing_battlefield_2042_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2474,
        "listing_id": "listing_battlefield_2042_steam",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_battlefield_2042_epic",
    "history": [
      {
        "id": 2475,
        "listing_id": "listing_battlefield_2042_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2476,
        "listing_id": "listing_battlefield_2042_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2477,
        "listing_id": "listing_battlefield_2042_epic",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2478,
        "listing_id": "listing_battlefield_2042_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2479,
        "listing_id": "listing_battlefield_2042_epic",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_battlefield_2042_playstation",
    "history": [
      {
        "id": 2480,
        "listing_id": "listing_battlefield_2042_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2481,
        "listing_id": "listing_battlefield_2042_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2482,
        "listing_id": "listing_battlefield_2042_playstation",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2483,
        "listing_id": "listing_battlefield_2042_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2484,
        "listing_id": "listing_battlefield_2042_playstation",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_battlefield_2042_xbox",
    "history": [
      {
        "id": 2485,
        "listing_id": "listing_battlefield_2042_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2486,
        "listing_id": "listing_battlefield_2042_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2487,
        "listing_id": "listing_battlefield_2042_xbox",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-21",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2488,
        "listing_id": "listing_battlefield_2042_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2489,
        "listing_id": "listing_battlefield_2042_xbox",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ea_sports_fc_24_steam",
    "history": [
      {
        "id": 2490,
        "listing_id": "listing_ea_sports_fc_24_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2491,
        "listing_id": "listing_ea_sports_fc_24_steam",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2492,
        "listing_id": "listing_ea_sports_fc_24_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-05-23",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2493,
        "listing_id": "listing_ea_sports_fc_24_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2494,
        "listing_id": "listing_ea_sports_fc_24_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ea_sports_fc_24_epic",
    "history": [
      {
        "id": 2495,
        "listing_id": "listing_ea_sports_fc_24_epic",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2496,
        "listing_id": "listing_ea_sports_fc_24_epic",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2497,
        "listing_id": "listing_ea_sports_fc_24_epic",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-05-23",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2498,
        "listing_id": "listing_ea_sports_fc_24_epic",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2499,
        "listing_id": "listing_ea_sports_fc_24_epic",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ea_sports_fc_24_playstation",
    "history": [
      {
        "id": 2500,
        "listing_id": "listing_ea_sports_fc_24_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2501,
        "listing_id": "listing_ea_sports_fc_24_playstation",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2502,
        "listing_id": "listing_ea_sports_fc_24_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-05-23",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2503,
        "listing_id": "listing_ea_sports_fc_24_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2504,
        "listing_id": "listing_ea_sports_fc_24_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 80,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ea_sports_fc_24_xbox",
    "history": [
      {
        "id": 2505,
        "listing_id": "listing_ea_sports_fc_24_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2506,
        "listing_id": "listing_ea_sports_fc_24_xbox",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2507,
        "listing_id": "listing_ea_sports_fc_24_xbox",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-05-23",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2508,
        "listing_id": "listing_ea_sports_fc_24_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2509,
        "listing_id": "listing_ea_sports_fc_24_xbox",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ea_sports_fc_24_nintendo",
    "history": [
      {
        "id": 2510,
        "listing_id": "listing_ea_sports_fc_24_nintendo",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2511,
        "listing_id": "listing_ea_sports_fc_24_nintendo",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2512,
        "listing_id": "listing_ea_sports_fc_24_nintendo",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-05-23",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2513,
        "listing_id": "listing_ea_sports_fc_24_nintendo",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2514,
        "listing_id": "listing_ea_sports_fc_24_nintendo",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_diablo_4_steam",
    "history": [
      {
        "id": 2515,
        "listing_id": "listing_diablo_4_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2516,
        "listing_id": "listing_diablo_4_steam",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2517,
        "listing_id": "listing_diablo_4_steam",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2518,
        "listing_id": "listing_diablo_4_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2519,
        "listing_id": "listing_diablo_4_steam",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_diablo_4_playstation",
    "history": [
      {
        "id": 2520,
        "listing_id": "listing_diablo_4_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2521,
        "listing_id": "listing_diablo_4_playstation",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2522,
        "listing_id": "listing_diablo_4_playstation",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2523,
        "listing_id": "listing_diablo_4_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2524,
        "listing_id": "listing_diablo_4_playstation",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_diablo_4_xbox",
    "history": [
      {
        "id": 2525,
        "listing_id": "listing_diablo_4_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2526,
        "listing_id": "listing_diablo_4_xbox",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2527,
        "listing_id": "listing_diablo_4_xbox",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2528,
        "listing_id": "listing_diablo_4_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2529,
        "listing_id": "listing_diablo_4_xbox",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_subnautica_steam",
    "history": [
      {
        "id": 2530,
        "listing_id": "listing_subnautica_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2531,
        "listing_id": "listing_subnautica_steam",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2532,
        "listing_id": "listing_subnautica_steam",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 67,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2533,
        "listing_id": "listing_subnautica_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2534,
        "listing_id": "listing_subnautica_steam",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 67,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_subnautica_epic",
    "history": [
      {
        "id": 2535,
        "listing_id": "listing_subnautica_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2536,
        "listing_id": "listing_subnautica_epic",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2537,
        "listing_id": "listing_subnautica_epic",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 67,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2538,
        "listing_id": "listing_subnautica_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2539,
        "listing_id": "listing_subnautica_epic",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 67,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_subnautica_gog",
    "history": [
      {
        "id": 2540,
        "listing_id": "listing_subnautica_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2541,
        "listing_id": "listing_subnautica_gog",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2542,
        "listing_id": "listing_subnautica_gog",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 67,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2543,
        "listing_id": "listing_subnautica_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2544,
        "listing_id": "listing_subnautica_gog",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 67,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_subnautica_playstation",
    "history": [
      {
        "id": 2545,
        "listing_id": "listing_subnautica_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2546,
        "listing_id": "listing_subnautica_playstation",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2547,
        "listing_id": "listing_subnautica_playstation",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 67,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2548,
        "listing_id": "listing_subnautica_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2549,
        "listing_id": "listing_subnautica_playstation",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 67,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_subnautica_xbox",
    "history": [
      {
        "id": 2550,
        "listing_id": "listing_subnautica_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2551,
        "listing_id": "listing_subnautica_xbox",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2552,
        "listing_id": "listing_subnautica_xbox",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 67,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2553,
        "listing_id": "listing_subnautica_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2554,
        "listing_id": "listing_subnautica_xbox",
        "price": 20.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_subnautica_nintendo",
    "history": [
      {
        "id": 2555,
        "listing_id": "listing_subnautica_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2556,
        "listing_id": "listing_subnautica_nintendo",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2557,
        "listing_id": "listing_subnautica_nintendo",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 67,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2558,
        "listing_id": "listing_subnautica_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2559,
        "listing_id": "listing_subnautica_nintendo",
        "price": 17.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_celeste_steam",
    "history": [
      {
        "id": 2560,
        "listing_id": "listing_celeste_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2561,
        "listing_id": "listing_celeste_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2562,
        "listing_id": "listing_celeste_steam",
        "price": 1.99,
        "currency": "USD",
        "recorded_date": "2024-01-25",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2563,
        "listing_id": "listing_celeste_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2564,
        "listing_id": "listing_celeste_steam",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_celeste_epic",
    "history": [
      {
        "id": 2565,
        "listing_id": "listing_celeste_epic",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2566,
        "listing_id": "listing_celeste_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2567,
        "listing_id": "listing_celeste_epic",
        "price": 1.99,
        "currency": "USD",
        "recorded_date": "2024-01-25",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2568,
        "listing_id": "listing_celeste_epic",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2569,
        "listing_id": "listing_celeste_epic",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_celeste_gog",
    "history": [
      {
        "id": 2570,
        "listing_id": "listing_celeste_gog",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2571,
        "listing_id": "listing_celeste_gog",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2572,
        "listing_id": "listing_celeste_gog",
        "price": 1.99,
        "currency": "USD",
        "recorded_date": "2024-01-25",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2573,
        "listing_id": "listing_celeste_gog",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2574,
        "listing_id": "listing_celeste_gog",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_celeste_playstation",
    "history": [
      {
        "id": 2575,
        "listing_id": "listing_celeste_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2576,
        "listing_id": "listing_celeste_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2577,
        "listing_id": "listing_celeste_playstation",
        "price": 1.99,
        "currency": "USD",
        "recorded_date": "2024-01-25",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2578,
        "listing_id": "listing_celeste_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2579,
        "listing_id": "listing_celeste_playstation",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_celeste_xbox",
    "history": [
      {
        "id": 2580,
        "listing_id": "listing_celeste_xbox",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2581,
        "listing_id": "listing_celeste_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2582,
        "listing_id": "listing_celeste_xbox",
        "price": 1.99,
        "currency": "USD",
        "recorded_date": "2024-01-25",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2583,
        "listing_id": "listing_celeste_xbox",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2584,
        "listing_id": "listing_celeste_xbox",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_celeste_nintendo",
    "history": [
      {
        "id": 2585,
        "listing_id": "listing_celeste_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2586,
        "listing_id": "listing_celeste_nintendo",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2587,
        "listing_id": "listing_celeste_nintendo",
        "price": 1.99,
        "currency": "USD",
        "recorded_date": "2024-01-25",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2588,
        "listing_id": "listing_celeste_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2589,
        "listing_id": "listing_celeste_nintendo",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_cuphead_steam",
    "history": [
      {
        "id": 2590,
        "listing_id": "listing_cuphead_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2591,
        "listing_id": "listing_cuphead_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2592,
        "listing_id": "listing_cuphead_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2593,
        "listing_id": "listing_cuphead_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2594,
        "listing_id": "listing_cuphead_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_cuphead_gog",
    "history": [
      {
        "id": 2595,
        "listing_id": "listing_cuphead_gog",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2596,
        "listing_id": "listing_cuphead_gog",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2597,
        "listing_id": "listing_cuphead_gog",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2598,
        "listing_id": "listing_cuphead_gog",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2599,
        "listing_id": "listing_cuphead_gog",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_cuphead_playstation",
    "history": [
      {
        "id": 2600,
        "listing_id": "listing_cuphead_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2601,
        "listing_id": "listing_cuphead_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2602,
        "listing_id": "listing_cuphead_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2603,
        "listing_id": "listing_cuphead_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2604,
        "listing_id": "listing_cuphead_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_cuphead_xbox",
    "history": [
      {
        "id": 2605,
        "listing_id": "listing_cuphead_xbox",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2606,
        "listing_id": "listing_cuphead_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2607,
        "listing_id": "listing_cuphead_xbox",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2608,
        "listing_id": "listing_cuphead_xbox",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2609,
        "listing_id": "listing_cuphead_xbox",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_cuphead_nintendo",
    "history": [
      {
        "id": 2610,
        "listing_id": "listing_cuphead_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2611,
        "listing_id": "listing_cuphead_nintendo",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2612,
        "listing_id": "listing_cuphead_nintendo",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2613,
        "listing_id": "listing_cuphead_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2614,
        "listing_id": "listing_cuphead_nintendo",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ori_and_the_will_of_the_wisps_steam",
    "history": [
      {
        "id": 2615,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2616,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_steam",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2617,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_steam",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2618,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2619,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_steam",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 67,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ori_and_the_will_of_the_wisps_xbox",
    "history": [
      {
        "id": 2620,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2621,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_xbox",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2622,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_xbox",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2623,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2624,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_xbox",
        "price": 20.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_ori_and_the_will_of_the_wisps_nintendo",
    "history": [
      {
        "id": 2625,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2626,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_nintendo",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2627,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_nintendo",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 80,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2628,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2629,
        "listing_id": "listing_ori_and_the_will_of_the_wisps_nintendo",
        "price": 17.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_disco_elysium_steam",
    "history": [
      {
        "id": 2630,
        "listing_id": "listing_disco_elysium_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2631,
        "listing_id": "listing_disco_elysium_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2632,
        "listing_id": "listing_disco_elysium_steam",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-13",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2633,
        "listing_id": "listing_disco_elysium_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2634,
        "listing_id": "listing_disco_elysium_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_disco_elysium_gog",
    "history": [
      {
        "id": 2635,
        "listing_id": "listing_disco_elysium_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2636,
        "listing_id": "listing_disco_elysium_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2637,
        "listing_id": "listing_disco_elysium_gog",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-13",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2638,
        "listing_id": "listing_disco_elysium_gog",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2639,
        "listing_id": "listing_disco_elysium_gog",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_disco_elysium_epic",
    "history": [
      {
        "id": 2640,
        "listing_id": "listing_disco_elysium_epic",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2641,
        "listing_id": "listing_disco_elysium_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2642,
        "listing_id": "listing_disco_elysium_epic",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-13",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2643,
        "listing_id": "listing_disco_elysium_epic",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2644,
        "listing_id": "listing_disco_elysium_epic",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_disco_elysium_playstation",
    "history": [
      {
        "id": 2645,
        "listing_id": "listing_disco_elysium_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2646,
        "listing_id": "listing_disco_elysium_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2647,
        "listing_id": "listing_disco_elysium_playstation",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-13",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2648,
        "listing_id": "listing_disco_elysium_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2649,
        "listing_id": "listing_disco_elysium_playstation",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_disco_elysium_xbox",
    "history": [
      {
        "id": 2650,
        "listing_id": "listing_disco_elysium_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2651,
        "listing_id": "listing_disco_elysium_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2652,
        "listing_id": "listing_disco_elysium_xbox",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-13",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2653,
        "listing_id": "listing_disco_elysium_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2654,
        "listing_id": "listing_disco_elysium_xbox",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_disco_elysium_nintendo",
    "history": [
      {
        "id": 2655,
        "listing_id": "listing_disco_elysium_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2656,
        "listing_id": "listing_disco_elysium_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2657,
        "listing_id": "listing_disco_elysium_nintendo",
        "price": 3.99,
        "currency": "USD",
        "recorded_date": "2024-06-13",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2658,
        "listing_id": "listing_disco_elysium_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2659,
        "listing_id": "listing_disco_elysium_nintendo",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_lies_of_p_steam",
    "history": [
      {
        "id": 2660,
        "listing_id": "listing_lies_of_p_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2661,
        "listing_id": "listing_lies_of_p_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2662,
        "listing_id": "listing_lies_of_p_steam",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2663,
        "listing_id": "listing_lies_of_p_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2664,
        "listing_id": "listing_lies_of_p_steam",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_lies_of_p_playstation",
    "history": [
      {
        "id": 2665,
        "listing_id": "listing_lies_of_p_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2666,
        "listing_id": "listing_lies_of_p_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2667,
        "listing_id": "listing_lies_of_p_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2668,
        "listing_id": "listing_lies_of_p_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2669,
        "listing_id": "listing_lies_of_p_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_lies_of_p_xbox",
    "history": [
      {
        "id": 2670,
        "listing_id": "listing_lies_of_p_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2671,
        "listing_id": "listing_lies_of_p_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2672,
        "listing_id": "listing_lies_of_p_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2673,
        "listing_id": "listing_lies_of_p_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2674,
        "listing_id": "listing_lies_of_p_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_armored_core_6_steam",
    "history": [
      {
        "id": 2675,
        "listing_id": "listing_armored_core_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2676,
        "listing_id": "listing_armored_core_6_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2677,
        "listing_id": "listing_armored_core_6_steam",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2678,
        "listing_id": "listing_armored_core_6_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2679,
        "listing_id": "listing_armored_core_6_steam",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_armored_core_6_playstation",
    "history": [
      {
        "id": 2680,
        "listing_id": "listing_armored_core_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2681,
        "listing_id": "listing_armored_core_6_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2682,
        "listing_id": "listing_armored_core_6_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2683,
        "listing_id": "listing_armored_core_6_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2684,
        "listing_id": "listing_armored_core_6_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_armored_core_6_xbox",
    "history": [
      {
        "id": 2685,
        "listing_id": "listing_armored_core_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2686,
        "listing_id": "listing_armored_core_6_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2687,
        "listing_id": "listing_armored_core_6_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2688,
        "listing_id": "listing_armored_core_6_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2689,
        "listing_id": "listing_armored_core_6_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dragons_dogma_2_steam",
    "history": [
      {
        "id": 2690,
        "listing_id": "listing_dragons_dogma_2_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2691,
        "listing_id": "listing_dragons_dogma_2_steam",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2692,
        "listing_id": "listing_dragons_dogma_2_steam",
        "price": 55.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 20,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2693,
        "listing_id": "listing_dragons_dogma_2_steam",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2694,
        "listing_id": "listing_dragons_dogma_2_steam",
        "price": 55.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 20,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dragons_dogma_2_playstation",
    "history": [
      {
        "id": 2695,
        "listing_id": "listing_dragons_dogma_2_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2696,
        "listing_id": "listing_dragons_dogma_2_playstation",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2697,
        "listing_id": "listing_dragons_dogma_2_playstation",
        "price": 55.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 20,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2698,
        "listing_id": "listing_dragons_dogma_2_playstation",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2699,
        "listing_id": "listing_dragons_dogma_2_playstation",
        "price": 55.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 20,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dragons_dogma_2_xbox",
    "history": [
      {
        "id": 2700,
        "listing_id": "listing_dragons_dogma_2_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2701,
        "listing_id": "listing_dragons_dogma_2_xbox",
        "price": 52.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2702,
        "listing_id": "listing_dragons_dogma_2_xbox",
        "price": 55.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 20,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2703,
        "listing_id": "listing_dragons_dogma_2_xbox",
        "price": 69.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2704,
        "listing_id": "listing_dragons_dogma_2_xbox",
        "price": 48.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_remnant_2_steam",
    "history": [
      {
        "id": 2705,
        "listing_id": "listing_remnant_2_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2706,
        "listing_id": "listing_remnant_2_steam",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2707,
        "listing_id": "listing_remnant_2_steam",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2708,
        "listing_id": "listing_remnant_2_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2709,
        "listing_id": "listing_remnant_2_steam",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_remnant_2_epic",
    "history": [
      {
        "id": 2710,
        "listing_id": "listing_remnant_2_epic",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2711,
        "listing_id": "listing_remnant_2_epic",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2712,
        "listing_id": "listing_remnant_2_epic",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2713,
        "listing_id": "listing_remnant_2_epic",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2714,
        "listing_id": "listing_remnant_2_epic",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_remnant_2_playstation",
    "history": [
      {
        "id": 2715,
        "listing_id": "listing_remnant_2_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2716,
        "listing_id": "listing_remnant_2_playstation",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2717,
        "listing_id": "listing_remnant_2_playstation",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2718,
        "listing_id": "listing_remnant_2_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2719,
        "listing_id": "listing_remnant_2_playstation",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_remnant_2_xbox",
    "history": [
      {
        "id": 2720,
        "listing_id": "listing_remnant_2_xbox",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2721,
        "listing_id": "listing_remnant_2_xbox",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2722,
        "listing_id": "listing_remnant_2_xbox",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2723,
        "listing_id": "listing_remnant_2_xbox",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2724,
        "listing_id": "listing_remnant_2_xbox",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dave_the_diver_steam",
    "history": [
      {
        "id": 2725,
        "listing_id": "listing_dave_the_diver_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2726,
        "listing_id": "listing_dave_the_diver_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2727,
        "listing_id": "listing_dave_the_diver_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2728,
        "listing_id": "listing_dave_the_diver_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2729,
        "listing_id": "listing_dave_the_diver_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dave_the_diver_playstation",
    "history": [
      {
        "id": 2730,
        "listing_id": "listing_dave_the_diver_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2731,
        "listing_id": "listing_dave_the_diver_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2732,
        "listing_id": "listing_dave_the_diver_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2733,
        "listing_id": "listing_dave_the_diver_playstation",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2734,
        "listing_id": "listing_dave_the_diver_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_dave_the_diver_nintendo",
    "history": [
      {
        "id": 2735,
        "listing_id": "listing_dave_the_diver_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2736,
        "listing_id": "listing_dave_the_diver_nintendo",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2737,
        "listing_id": "listing_dave_the_diver_nintendo",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2738,
        "listing_id": "listing_dave_the_diver_nintendo",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2739,
        "listing_id": "listing_dave_the_diver_nintendo",
        "price": 11.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_deep_rock_galactic_steam",
    "history": [
      {
        "id": 2740,
        "listing_id": "listing_deep_rock_galactic_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2741,
        "listing_id": "listing_deep_rock_galactic_steam",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2742,
        "listing_id": "listing_deep_rock_galactic_steam",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 70,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2743,
        "listing_id": "listing_deep_rock_galactic_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2744,
        "listing_id": "listing_deep_rock_galactic_steam",
        "price": 9.89,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 67,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_deep_rock_galactic_playstation",
    "history": [
      {
        "id": 2745,
        "listing_id": "listing_deep_rock_galactic_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2746,
        "listing_id": "listing_deep_rock_galactic_playstation",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2747,
        "listing_id": "listing_deep_rock_galactic_playstation",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 70,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2748,
        "listing_id": "listing_deep_rock_galactic_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2749,
        "listing_id": "listing_deep_rock_galactic_playstation",
        "price": 20.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_deep_rock_galactic_xbox",
    "history": [
      {
        "id": 2750,
        "listing_id": "listing_deep_rock_galactic_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2751,
        "listing_id": "listing_deep_rock_galactic_xbox",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2752,
        "listing_id": "listing_deep_rock_galactic_xbox",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 70,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2753,
        "listing_id": "listing_deep_rock_galactic_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2754,
        "listing_id": "listing_deep_rock_galactic_xbox",
        "price": 20.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_it_takes_two_steam",
    "history": [
      {
        "id": 2755,
        "listing_id": "listing_it_takes_two_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2756,
        "listing_id": "listing_it_takes_two_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2757,
        "listing_id": "listing_it_takes_two_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2758,
        "listing_id": "listing_it_takes_two_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2759,
        "listing_id": "listing_it_takes_two_steam",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 65,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_it_takes_two_playstation",
    "history": [
      {
        "id": 2760,
        "listing_id": "listing_it_takes_two_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2761,
        "listing_id": "listing_it_takes_two_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2762,
        "listing_id": "listing_it_takes_two_playstation",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2763,
        "listing_id": "listing_it_takes_two_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2764,
        "listing_id": "listing_it_takes_two_playstation",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 65,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_it_takes_two_xbox",
    "history": [
      {
        "id": 2765,
        "listing_id": "listing_it_takes_two_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2766,
        "listing_id": "listing_it_takes_two_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2767,
        "listing_id": "listing_it_takes_two_xbox",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2768,
        "listing_id": "listing_it_takes_two_xbox",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2769,
        "listing_id": "listing_it_takes_two_xbox",
        "price": 13.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 65,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_it_takes_two_nintendo",
    "history": [
      {
        "id": 2770,
        "listing_id": "listing_it_takes_two_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2771,
        "listing_id": "listing_it_takes_two_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2772,
        "listing_id": "listing_it_takes_two_nintendo",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2773,
        "listing_id": "listing_it_takes_two_nintendo",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2774,
        "listing_id": "listing_it_takes_two_nintendo",
        "price": 23.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mass_effect_legendary_edition_steam",
    "history": [
      {
        "id": 2775,
        "listing_id": "listing_mass_effect_legendary_edition_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2776,
        "listing_id": "listing_mass_effect_legendary_edition_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2777,
        "listing_id": "listing_mass_effect_legendary_edition_steam",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2778,
        "listing_id": "listing_mass_effect_legendary_edition_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2779,
        "listing_id": "listing_mass_effect_legendary_edition_steam",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mass_effect_legendary_edition_epic",
    "history": [
      {
        "id": 2780,
        "listing_id": "listing_mass_effect_legendary_edition_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2781,
        "listing_id": "listing_mass_effect_legendary_edition_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2782,
        "listing_id": "listing_mass_effect_legendary_edition_epic",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2783,
        "listing_id": "listing_mass_effect_legendary_edition_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2784,
        "listing_id": "listing_mass_effect_legendary_edition_epic",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mass_effect_legendary_edition_playstation",
    "history": [
      {
        "id": 2785,
        "listing_id": "listing_mass_effect_legendary_edition_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2786,
        "listing_id": "listing_mass_effect_legendary_edition_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2787,
        "listing_id": "listing_mass_effect_legendary_edition_playstation",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2788,
        "listing_id": "listing_mass_effect_legendary_edition_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2789,
        "listing_id": "listing_mass_effect_legendary_edition_playstation",
        "price": 8.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 85,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_mass_effect_legendary_edition_xbox",
    "history": [
      {
        "id": 2790,
        "listing_id": "listing_mass_effect_legendary_edition_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2791,
        "listing_id": "listing_mass_effect_legendary_edition_xbox",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2792,
        "listing_id": "listing_mass_effect_legendary_edition_xbox",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-03-14",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2793,
        "listing_id": "listing_mass_effect_legendary_edition_xbox",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2794,
        "listing_id": "listing_mass_effect_legendary_edition_xbox",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_among_us_steam",
    "history": [
      {
        "id": 2795,
        "listing_id": "listing_among_us_steam",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2796,
        "listing_id": "listing_among_us_steam",
        "price": 3.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2797,
        "listing_id": "listing_among_us_steam",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2798,
        "listing_id": "listing_among_us_steam",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2799,
        "listing_id": "listing_among_us_steam",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_among_us_epic",
    "history": [
      {
        "id": 2800,
        "listing_id": "listing_among_us_epic",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2801,
        "listing_id": "listing_among_us_epic",
        "price": 3.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2802,
        "listing_id": "listing_among_us_epic",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2803,
        "listing_id": "listing_among_us_epic",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2804,
        "listing_id": "listing_among_us_epic",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_among_us_playstation",
    "history": [
      {
        "id": 2805,
        "listing_id": "listing_among_us_playstation",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2806,
        "listing_id": "listing_among_us_playstation",
        "price": 3.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2807,
        "listing_id": "listing_among_us_playstation",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2808,
        "listing_id": "listing_among_us_playstation",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2809,
        "listing_id": "listing_among_us_playstation",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_among_us_xbox",
    "history": [
      {
        "id": 2810,
        "listing_id": "listing_among_us_xbox",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2811,
        "listing_id": "listing_among_us_xbox",
        "price": 3.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2812,
        "listing_id": "listing_among_us_xbox",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2813,
        "listing_id": "listing_among_us_xbox",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2814,
        "listing_id": "listing_among_us_xbox",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_among_us_nintendo",
    "history": [
      {
        "id": 2815,
        "listing_id": "listing_among_us_nintendo",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2816,
        "listing_id": "listing_among_us_nintendo",
        "price": 3.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2817,
        "listing_id": "listing_among_us_nintendo",
        "price": 2.49,
        "currency": "USD",
        "recorded_date": "2023-12-21",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2818,
        "listing_id": "listing_among_us_nintendo",
        "price": 4.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2819,
        "listing_id": "listing_among_us_nintendo",
        "price": 2.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_destiny_2_steam",
    "history": [
      {
        "id": 2820,
        "listing_id": "listing_destiny_2_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2821,
        "listing_id": "listing_destiny_2_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2822,
        "listing_id": "listing_destiny_2_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2019-10-01",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2823,
        "listing_id": "listing_destiny_2_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2824,
        "listing_id": "listing_destiny_2_steam",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_destiny_2_epic",
    "history": [
      {
        "id": 2825,
        "listing_id": "listing_destiny_2_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2826,
        "listing_id": "listing_destiny_2_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2827,
        "listing_id": "listing_destiny_2_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2019-10-01",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2828,
        "listing_id": "listing_destiny_2_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2829,
        "listing_id": "listing_destiny_2_epic",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_destiny_2_playstation",
    "history": [
      {
        "id": 2830,
        "listing_id": "listing_destiny_2_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2831,
        "listing_id": "listing_destiny_2_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2832,
        "listing_id": "listing_destiny_2_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2019-10-01",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2833,
        "listing_id": "listing_destiny_2_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2834,
        "listing_id": "listing_destiny_2_playstation",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_destiny_2_xbox",
    "history": [
      {
        "id": 2835,
        "listing_id": "listing_destiny_2_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2836,
        "listing_id": "listing_destiny_2_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2837,
        "listing_id": "listing_destiny_2_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2019-10-01",
        "discount_percent": 0,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2838,
        "listing_id": "listing_destiny_2_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2839,
        "listing_id": "listing_destiny_2_xbox",
        "price": 0,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  },
  {
    "listing_id": "listing_portal_2_steam",
    "history": [
      {
        "id": 2840,
        "listing_id": "listing_portal_2_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2841,
        "listing_id": "listing_portal_2_steam",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2842,
        "listing_id": "listing_portal_2_steam",
        "price": 0.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2843,
        "listing_id": "listing_portal_2_steam",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2844,
        "listing_id": "listing_portal_2_steam",
        "price": 0.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 90,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_portal_2_nintendo",
    "history": [
      {
        "id": 2845,
        "listing_id": "listing_portal_2_nintendo",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2846,
        "listing_id": "listing_portal_2_nintendo",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2847,
        "listing_id": "listing_portal_2_nintendo",
        "price": 0.99,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 90,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2848,
        "listing_id": "listing_portal_2_nintendo",
        "price": 9.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2849,
        "listing_id": "listing_portal_2_nintendo",
        "price": 5.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_outer_wilds_steam",
    "history": [
      {
        "id": 2850,
        "listing_id": "listing_outer_wilds_steam",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2851,
        "listing_id": "listing_outer_wilds_steam",
        "price": 18.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2852,
        "listing_id": "listing_outer_wilds_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2853,
        "listing_id": "listing_outer_wilds_steam",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2854,
        "listing_id": "listing_outer_wilds_steam",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_outer_wilds_epic",
    "history": [
      {
        "id": 2855,
        "listing_id": "listing_outer_wilds_epic",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2856,
        "listing_id": "listing_outer_wilds_epic",
        "price": 18.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2857,
        "listing_id": "listing_outer_wilds_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2858,
        "listing_id": "listing_outer_wilds_epic",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2859,
        "listing_id": "listing_outer_wilds_epic",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_outer_wilds_playstation",
    "history": [
      {
        "id": 2860,
        "listing_id": "listing_outer_wilds_playstation",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2861,
        "listing_id": "listing_outer_wilds_playstation",
        "price": 18.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2862,
        "listing_id": "listing_outer_wilds_playstation",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2863,
        "listing_id": "listing_outer_wilds_playstation",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2864,
        "listing_id": "listing_outer_wilds_playstation",
        "price": 17.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_outer_wilds_xbox",
    "history": [
      {
        "id": 2865,
        "listing_id": "listing_outer_wilds_xbox",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2866,
        "listing_id": "listing_outer_wilds_xbox",
        "price": 18.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2867,
        "listing_id": "listing_outer_wilds_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2868,
        "listing_id": "listing_outer_wilds_xbox",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2869,
        "listing_id": "listing_outer_wilds_xbox",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_outer_wilds_nintendo",
    "history": [
      {
        "id": 2870,
        "listing_id": "listing_outer_wilds_nintendo",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2871,
        "listing_id": "listing_outer_wilds_nintendo",
        "price": 18.74,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2872,
        "listing_id": "listing_outer_wilds_nintendo",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2873,
        "listing_id": "listing_outer_wilds_nintendo",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2874,
        "listing_id": "listing_outer_wilds_nintendo",
        "price": 14.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_the_last_of_us_part_1_steam",
    "history": [
      {
        "id": 2875,
        "listing_id": "listing_the_last_of_us_part_1_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2876,
        "listing_id": "listing_the_last_of_us_part_1_steam",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2877,
        "listing_id": "listing_the_last_of_us_part_1_steam",
        "price": 40.19,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 33,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2878,
        "listing_id": "listing_the_last_of_us_part_1_steam",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2879,
        "listing_id": "listing_the_last_of_us_part_1_steam",
        "price": 40.19,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 33,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_the_last_of_us_part_1_epic",
    "history": [
      {
        "id": 2880,
        "listing_id": "listing_the_last_of_us_part_1_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2881,
        "listing_id": "listing_the_last_of_us_part_1_epic",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2882,
        "listing_id": "listing_the_last_of_us_part_1_epic",
        "price": 40.19,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 33,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2883,
        "listing_id": "listing_the_last_of_us_part_1_epic",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2884,
        "listing_id": "listing_the_last_of_us_part_1_epic",
        "price": 40.19,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 33,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_the_last_of_us_part_1_playstation",
    "history": [
      {
        "id": 2885,
        "listing_id": "listing_the_last_of_us_part_1_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2886,
        "listing_id": "listing_the_last_of_us_part_1_playstation",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2887,
        "listing_id": "listing_the_last_of_us_part_1_playstation",
        "price": 40.19,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 33,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2888,
        "listing_id": "listing_the_last_of_us_part_1_playstation",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2889,
        "listing_id": "listing_the_last_of_us_part_1_playstation",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_horizon_zero_dawn_steam",
    "history": [
      {
        "id": 2890,
        "listing_id": "listing_horizon_zero_dawn_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2891,
        "listing_id": "listing_horizon_zero_dawn_steam",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2892,
        "listing_id": "listing_horizon_zero_dawn_steam",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2893,
        "listing_id": "listing_horizon_zero_dawn_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2894,
        "listing_id": "listing_horizon_zero_dawn_steam",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_horizon_zero_dawn_epic",
    "history": [
      {
        "id": 2895,
        "listing_id": "listing_horizon_zero_dawn_epic",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2896,
        "listing_id": "listing_horizon_zero_dawn_epic",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2897,
        "listing_id": "listing_horizon_zero_dawn_epic",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2898,
        "listing_id": "listing_horizon_zero_dawn_epic",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2899,
        "listing_id": "listing_horizon_zero_dawn_epic",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_horizon_zero_dawn_gog",
    "history": [
      {
        "id": 2900,
        "listing_id": "listing_horizon_zero_dawn_gog",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2901,
        "listing_id": "listing_horizon_zero_dawn_gog",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2902,
        "listing_id": "listing_horizon_zero_dawn_gog",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2903,
        "listing_id": "listing_horizon_zero_dawn_gog",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2904,
        "listing_id": "listing_horizon_zero_dawn_gog",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_horizon_zero_dawn_playstation",
    "history": [
      {
        "id": 2905,
        "listing_id": "listing_horizon_zero_dawn_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2906,
        "listing_id": "listing_horizon_zero_dawn_playstation",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2907,
        "listing_id": "listing_horizon_zero_dawn_playstation",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2908,
        "listing_id": "listing_horizon_zero_dawn_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2909,
        "listing_id": "listing_horizon_zero_dawn_playstation",
        "price": 12.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_uncharted_legacy_of_thieves_steam",
    "history": [
      {
        "id": 2910,
        "listing_id": "listing_uncharted_legacy_of_thieves_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2911,
        "listing_id": "listing_uncharted_legacy_of_thieves_steam",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2912,
        "listing_id": "listing_uncharted_legacy_of_thieves_steam",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2913,
        "listing_id": "listing_uncharted_legacy_of_thieves_steam",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2914,
        "listing_id": "listing_uncharted_legacy_of_thieves_steam",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_uncharted_legacy_of_thieves_epic",
    "history": [
      {
        "id": 2915,
        "listing_id": "listing_uncharted_legacy_of_thieves_epic",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2916,
        "listing_id": "listing_uncharted_legacy_of_thieves_epic",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2917,
        "listing_id": "listing_uncharted_legacy_of_thieves_epic",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2918,
        "listing_id": "listing_uncharted_legacy_of_thieves_epic",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2919,
        "listing_id": "listing_uncharted_legacy_of_thieves_epic",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_uncharted_legacy_of_thieves_playstation",
    "history": [
      {
        "id": 2920,
        "listing_id": "listing_uncharted_legacy_of_thieves_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2921,
        "listing_id": "listing_uncharted_legacy_of_thieves_playstation",
        "price": 37.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2922,
        "listing_id": "listing_uncharted_legacy_of_thieves_playstation",
        "price": 24.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2923,
        "listing_id": "listing_uncharted_legacy_of_thieves_playstation",
        "price": 49.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2924,
        "listing_id": "listing_uncharted_legacy_of_thieves_playstation",
        "price": 34.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_death_stranding_steam",
    "history": [
      {
        "id": 2925,
        "listing_id": "listing_death_stranding_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2926,
        "listing_id": "listing_death_stranding_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2927,
        "listing_id": "listing_death_stranding_steam",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2928,
        "listing_id": "listing_death_stranding_steam",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2929,
        "listing_id": "listing_death_stranding_steam",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_death_stranding_epic",
    "history": [
      {
        "id": 2930,
        "listing_id": "listing_death_stranding_epic",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2931,
        "listing_id": "listing_death_stranding_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2932,
        "listing_id": "listing_death_stranding_epic",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2933,
        "listing_id": "listing_death_stranding_epic",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2934,
        "listing_id": "listing_death_stranding_epic",
        "price": 19.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 50,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_death_stranding_playstation",
    "history": [
      {
        "id": 2935,
        "listing_id": "listing_death_stranding_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2936,
        "listing_id": "listing_death_stranding_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2937,
        "listing_id": "listing_death_stranding_playstation",
        "price": 15.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 60,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2938,
        "listing_id": "listing_death_stranding_playstation",
        "price": 39.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2939,
        "listing_id": "listing_death_stranding_playstation",
        "price": 27.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_bioshock_infinite_steam",
    "history": [
      {
        "id": 2940,
        "listing_id": "listing_bioshock_infinite_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2941,
        "listing_id": "listing_bioshock_infinite_steam",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2942,
        "listing_id": "listing_bioshock_infinite_steam",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2943,
        "listing_id": "listing_bioshock_infinite_steam",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2944,
        "listing_id": "listing_bioshock_infinite_steam",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_bioshock_infinite_epic",
    "history": [
      {
        "id": 2945,
        "listing_id": "listing_bioshock_infinite_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2946,
        "listing_id": "listing_bioshock_infinite_epic",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2947,
        "listing_id": "listing_bioshock_infinite_epic",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2948,
        "listing_id": "listing_bioshock_infinite_epic",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2949,
        "listing_id": "listing_bioshock_infinite_epic",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_bioshock_infinite_gog",
    "history": [
      {
        "id": 2950,
        "listing_id": "listing_bioshock_infinite_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2951,
        "listing_id": "listing_bioshock_infinite_gog",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2952,
        "listing_id": "listing_bioshock_infinite_gog",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2953,
        "listing_id": "listing_bioshock_infinite_gog",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2954,
        "listing_id": "listing_bioshock_infinite_gog",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_bioshock_infinite_playstation",
    "history": [
      {
        "id": 2955,
        "listing_id": "listing_bioshock_infinite_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2956,
        "listing_id": "listing_bioshock_infinite_playstation",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2957,
        "listing_id": "listing_bioshock_infinite_playstation",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2958,
        "listing_id": "listing_bioshock_infinite_playstation",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2959,
        "listing_id": "listing_bioshock_infinite_playstation",
        "price": 20.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 30,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_bioshock_infinite_xbox",
    "history": [
      {
        "id": 2960,
        "listing_id": "listing_bioshock_infinite_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2961,
        "listing_id": "listing_bioshock_infinite_xbox",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2962,
        "listing_id": "listing_bioshock_infinite_xbox",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2963,
        "listing_id": "listing_bioshock_infinite_xbox",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2964,
        "listing_id": "listing_bioshock_infinite_xbox",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 75,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_bioshock_infinite_nintendo",
    "history": [
      {
        "id": 2965,
        "listing_id": "listing_bioshock_infinite_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2966,
        "listing_id": "listing_bioshock_infinite_nintendo",
        "price": 22.49,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2967,
        "listing_id": "listing_bioshock_infinite_nintendo",
        "price": 7.49,
        "currency": "USD",
        "recorded_date": "2023-11-21",
        "discount_percent": 75,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2968,
        "listing_id": "listing_bioshock_infinite_nintendo",
        "price": 29.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2969,
        "listing_id": "listing_bioshock_infinite_nintendo",
        "price": 17.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 40,
        "event_name": "Current Publisher Promotion"
      }
    ]
  },
  {
    "listing_id": "listing_animal_crossing_new_horizons_nintendo",
    "history": [
      {
        "id": 2970,
        "listing_id": "listing_animal_crossing_new_horizons_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2023-01-15",
        "discount_percent": 0,
        "event_name": "Regular Store Price"
      },
      {
        "id": 2971,
        "listing_id": "listing_animal_crossing_new_horizons_nintendo",
        "price": 44.99,
        "currency": "USD",
        "recorded_date": "2023-06-25",
        "discount_percent": 25,
        "event_name": "Summer Sale Promotion"
      },
      {
        "id": 2972,
        "listing_id": "listing_animal_crossing_new_horizons_nintendo",
        "price": 41.99,
        "currency": "USD",
        "recorded_date": "2022-11-20",
        "discount_percent": 30,
        "event_name": "Black Friday Record Low"
      },
      {
        "id": 2973,
        "listing_id": "listing_animal_crossing_new_horizons_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-02-10",
        "discount_percent": 0,
        "event_name": "Sale Concluded"
      },
      {
        "id": 2974,
        "listing_id": "listing_animal_crossing_new_horizons_nintendo",
        "price": 59.99,
        "currency": "USD",
        "recorded_date": "2024-06-27",
        "discount_percent": 0,
        "event_name": "Standard Catalog Price"
      }
    ]
  }
];

export const EXPANDED_DEVELOPERS: Developer[] = [
  {
    "id": "rockstarnorth",
    "name": "Rockstar North",
    "slug": "rockstar-north",
    "headquarters": "United Kingdom",
    "founded_year": 1988,
    "website": "https://www.rockstargames.com"
  },
  {
    "id": "bethesdags",
    "name": "Bethesda Game Studios",
    "slug": "bethesda-game-studios",
    "headquarters": "United States",
    "founded_year": 2001,
    "website": "https://bethesdagamestudios.com"
  },
  {
    "id": "insomniac",
    "name": "Insomniac Games",
    "slug": "insomniac-games",
    "headquarters": "United States",
    "founded_year": 1994,
    "website": "https://insomniac.games"
  },
  {
    "id": "avalanchesoftware",
    "name": "Avalanche Software",
    "slug": "avalanche-software",
    "headquarters": "United States",
    "founded_year": 1995,
    "website": "https://avalanchesoftware.com"
  },
  {
    "id": "idsoftware",
    "name": "id Software",
    "slug": "id-software",
    "headquarters": "United States",
    "founded_year": 1991,
    "website": "https://www.idsoftware.com"
  },
  {
    "id": "firaxis",
    "name": "Firaxis Games",
    "slug": "firaxis-games",
    "headquarters": "United States",
    "founded_year": 1996,
    "website": "https://firaxis.com"
  },
  {
    "id": "relogic",
    "name": "Re-Logic",
    "slug": "re-logic",
    "headquarters": "United States",
    "founded_year": 2011,
    "website": "https://re-logic.com"
  },
  {
    "id": "gearbox",
    "name": "Gearbox Software",
    "slug": "gearbox-software",
    "headquarters": "United States",
    "founded_year": 1999,
    "website": "https://www.gearboxsoftware.com"
  },
  {
    "id": "netherrealm",
    "name": "NetherRealm Studios",
    "slug": "netherrealm-studios",
    "headquarters": "United States",
    "founded_year": 2010,
    "website": "https://www.netherrealm.com"
  },
  {
    "id": "bandainamcostudios",
    "name": "Bandai Namco Studios",
    "slug": "bandai-namco-studios",
    "headquarters": "Japan",
    "founded_year": 2012,
    "website": "https://www.bandainamcostudios.co.jp"
  },
  {
    "id": "squareenix",
    "name": "Square Enix",
    "slug": "square-enix",
    "headquarters": "Japan",
    "founded_year": 1986,
    "website": "https://www.square-enix.com"
  },
  {
    "id": "ubisoftmontreal",
    "name": "Ubisoft Montreal",
    "slug": "ubisoft-montreal",
    "headquarters": "Canada",
    "founded_year": 1997,
    "website": "https://montreal.ubisoft.com"
  },
  {
    "id": "ubisofttoronto",
    "name": "Ubisoft Toronto",
    "slug": "ubisoft-toronto",
    "headquarters": "Canada",
    "founded_year": 2010,
    "website": "https://toronto.ubisoft.com"
  },
  {
    "id": "rocksteady",
    "name": "Rocksteady Studios",
    "slug": "rocksteady-studios",
    "headquarters": "United Kingdom",
    "founded_year": 2004,
    "website": "https://rocksteadyltd.com"
  },
  {
    "id": "threefourthree",
    "name": "343 Industries",
    "slug": "343-industries",
    "headquarters": "United States",
    "founded_year": 2007,
    "website": "https://www.halowaypoint.com"
  },
  {
    "id": "thecoalition",
    "name": "The Coalition",
    "slug": "the-coalition",
    "headquarters": "Canada",
    "founded_year": 2010,
    "website": "https://thecoalitionstudio.com"
  },
  {
    "id": "rare",
    "name": "Rare Ltd",
    "slug": "rare-ltd",
    "headquarters": "United Kingdom",
    "founded_year": 1985,
    "website": "https://www.rare.co.uk"
  },
  {
    "id": "maxis",
    "name": "Maxis",
    "slug": "maxis",
    "headquarters": "United States",
    "founded_year": 1987,
    "website": "https://www.ea.com/ea-studios/maxis"
  },
  {
    "id": "criterion",
    "name": "Criterion Games",
    "slug": "criterion-games",
    "headquarters": "United Kingdom",
    "founded_year": 1996,
    "website": "https://www.ea.com/ea-studios/criterion-games"
  },
  {
    "id": "dice",
    "name": "DICE",
    "slug": "dice",
    "headquarters": "Sweden",
    "founded_year": 1992,
    "website": "https://www.ea.com/ea-studios/dice"
  },
  {
    "id": "eacanada",
    "name": "EA Canada",
    "slug": "ea-canada",
    "headquarters": "Canada",
    "founded_year": 1991,
    "website": "https://www.ea.com"
  },
  {
    "id": "blizzard",
    "name": "Blizzard Entertainment",
    "slug": "blizzard-entertainment",
    "headquarters": "United States",
    "founded_year": 1991,
    "website": "https://www.blizzard.com"
  },
  {
    "id": "unknownworlds",
    "name": "Unknown Worlds Entertainment",
    "slug": "unknown-worlds",
    "headquarters": "United States",
    "founded_year": 2001,
    "website": "https://unknownworlds.com"
  },
  {
    "id": "extremelyok",
    "name": "Extremely OK Games",
    "slug": "extremely-ok-games",
    "headquarters": "Canada",
    "founded_year": 2019,
    "website": "https://exok.com"
  },
  {
    "id": "studiomdhr",
    "name": "Studio MDHR Entertainment",
    "slug": "studio-mdhr",
    "headquarters": "Canada",
    "founded_year": 2013,
    "website": "https://studiomdhr.com"
  },
  {
    "id": "moonstudios",
    "name": "Moon Studios",
    "slug": "moon-studios",
    "headquarters": "Austria",
    "founded_year": 2010,
    "website": "https://www.moongamestudios.com"
  },
  {
    "id": "zaum",
    "name": "ZA/UM",
    "slug": "zaum",
    "headquarters": "United Kingdom",
    "founded_year": 2016,
    "website": "https://zaumstudio.com"
  },
  {
    "id": "neowiz",
    "name": "NEOWIZ",
    "slug": "neowiz",
    "headquarters": "South Korea",
    "founded_year": 1997,
    "website": "https://www.neowiz.com"
  },
  {
    "id": "gunfiregames",
    "name": "Gunfire Games",
    "slug": "gunfire-games",
    "headquarters": "United States",
    "founded_year": 2014,
    "website": "https://gunfiregames.com"
  },
  {
    "id": "mintrocket",
    "name": "MINTROCKET",
    "slug": "mintrocket",
    "headquarters": "South Korea",
    "founded_year": 2022,
    "website": "https://mintrocketgames.com"
  },
  {
    "id": "ghostship",
    "name": "Ghost Ship Games",
    "slug": "ghost-ship-games",
    "headquarters": "Denmark",
    "founded_year": 2016,
    "website": "https://ghostship.dk"
  },
  {
    "id": "hazelight",
    "name": "Hazelight Studios",
    "slug": "hazelight-studios",
    "headquarters": "Sweden",
    "founded_year": 2014,
    "website": "https://hazelight.se"
  },
  {
    "id": "bioware",
    "name": "BioWare",
    "slug": "bioware",
    "headquarters": "Canada",
    "founded_year": 1995,
    "website": "https://www.bioware.com"
  },
  {
    "id": "innersloth",
    "name": "Innersloth",
    "slug": "innersloth",
    "headquarters": "United States",
    "founded_year": 2015,
    "website": "https://innersloth.com"
  },
  {
    "id": "bungie",
    "name": "Bungie",
    "slug": "bungie",
    "headquarters": "United States",
    "founded_year": 1991,
    "website": "https://www.bungie.net"
  },
  {
    "id": "valve",
    "name": "Valve Corporation",
    "slug": "valve",
    "headquarters": "United States",
    "founded_year": 1996,
    "website": "https://www.valvesoftware.com"
  },
  {
    "id": "mobiusdigital",
    "name": "Mobius Digital",
    "slug": "mobius-digital",
    "headquarters": "United States",
    "founded_year": 2013,
    "website": "https://www.mobiusdigitalgames.com"
  },
  {
    "id": "naughtydog",
    "name": "Naughty Dog LLC",
    "slug": "naughty-dog",
    "headquarters": "United States",
    "founded_year": 1984,
    "website": "https://www.naughtydog.com"
  },
  {
    "id": "guerrilla",
    "name": "Guerrilla Games",
    "slug": "guerrilla-games",
    "headquarters": "Netherlands",
    "founded_year": 2000,
    "website": "https://www.guerrilla-games.com"
  },
  {
    "id": "kojimaproductions",
    "name": "KOJIMA PRODUCTIONS",
    "slug": "kojima-productions",
    "headquarters": "Japan",
    "founded_year": 2015,
    "website": "https://www.kojimaproductions.jp"
  },
  {
    "id": "irrationalgames",
    "name": "Irrational Games",
    "slug": "irrational-games",
    "headquarters": "United States",
    "founded_year": 1997,
    "website": "https://ghoststorygames.com"
  }
];

export const EXPANDED_PUBLISHERS: Publisher[] = [
  {
    "id": "rockstargames",
    "name": "Rockstar Games",
    "slug": "rockstar-games",
    "headquarters": "United States",
    "website": "https://www.rockstargames.com"
  },
  {
    "id": "bethesdasoftworks",
    "name": "Bethesda Softworks",
    "slug": "bethesda-softworks",
    "headquarters": "United States",
    "website": "https://bethesda.net"
  },
  {
    "id": "playstationpub",
    "name": "PlayStation Publishing LLC",
    "slug": "playstation-publishing",
    "headquarters": "United States",
    "website": "https://www.playstation.com"
  },
  {
    "id": "wb_games",
    "name": "Warner Bros. Games",
    "slug": "warner-bros-games",
    "headquarters": "United States",
    "website": "https://www.warnerbrosgames.com"
  },
  {
    "id": "twokgames",
    "name": "2K Games",
    "slug": "2k-games",
    "headquarters": "United States",
    "website": "https://2k.com"
  },
  {
    "id": "activision",
    "name": "Activision",
    "slug": "activision",
    "headquarters": "United States",
    "website": "https://www.activision.com"
  },
  {
    "id": "ubisoft",
    "name": "Ubisoft",
    "slug": "ubisoft",
    "headquarters": "France",
    "website": "https://www.ubisoft.com"
  },
  {
    "id": "xboxgamestudios",
    "name": "Xbox Game Studios",
    "slug": "xbox-game-studios",
    "headquarters": "United States",
    "website": "https://www.xbox.com/game-studios"
  },
  {
    "id": "fivezerofive",
    "name": "505 Games",
    "slug": "505-games",
    "headquarters": "Italy",
    "website": "https://505games.com"
  },
  {
    "id": "ea",
    "name": "Electronic Arts",
    "slug": "electronic-arts",
    "headquarters": "United States",
    "website": "https://www.ea.com"
  },
  {
    "id": "blizzard",
    "name": "Blizzard Entertainment",
    "slug": "blizzard-entertainment",
    "headquarters": "United States",
    "website": "https://www.blizzard.com"
  },
  {
    "id": "arcgames",
    "name": "Arc Games",
    "slug": "arc-games",
    "headquarters": "United States",
    "website": "https://www.arcgames.com"
  },
  {
    "id": "coffeestain",
    "name": "Coffee Stain Publishing",
    "slug": "coffee-stain",
    "headquarters": "Sweden",
    "website": "https://www.coffeestain.se"
  },
  {
    "id": "bungie",
    "name": "Bungie",
    "slug": "bungie",
    "headquarters": "United States",
    "website": "https://www.bungie.net"
  },
  {
    "id": "valve",
    "name": "Valve",
    "slug": "valve",
    "headquarters": "United States",
    "website": "https://www.valvesoftware.com"
  },
  {
    "id": "annapurnainteractive",
    "name": "Annapurna Interactive",
    "slug": "annapurna-interactive",
    "headquarters": "United States",
    "website": "https://annapurnainteractive.com"
  }
];
