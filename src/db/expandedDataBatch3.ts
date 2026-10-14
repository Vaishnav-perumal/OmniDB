import { Game, PlatformListing, PriceHistoryPoint, Developer, Publisher } from '../types/database';

export const BATCH3_GAMES: Game[] = [
  {
    "id": "minecraft",
    "ugdb_id": "UGDB-000126",
    "title": "Minecraft",
    "alternate_titles": [
      "MC",
      "Minecraft Java",
      "Minecraft Bedrock",
      "Mojang Minecraft"
    ],
    "slug": "minecraft",
    "summary": "Explore your own unique world, survive the night, and build anything you can imagine in this global sandbox phenomenon.",
    "description": "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape. Play with friends across platforms or craft monumental worlds on your own.",
    "release_date": "2011-11-18",
    "developer_id": "mojang",
    "publisher_id": "xboxpub",
    "developer_name": "Mojang Studios",
    "publisher_name": "Xbox Game Studios",
    "genres": [
      "Sandbox",
      "Survival",
      "Adventure",
      "Open World",
      "Crafting"
    ],
    "tags": [
      "Sandbox",
      "Survival",
      "Open World",
      "Crafting",
      "Multiplayer",
      "Building",
      "Voxel"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 93,
    "header_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co88xr.jpg",
    "poster_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co88xr.jpg",
    "background_image": "https://images.igdb.com/igdb/image/upload/t_1080p/sc9q6n.jpg",
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc9q6n.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc9q6o.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc9q6p.jpg"
    ]
  },
  {
    "id": "valheim",
    "ugdb_id": "UGDB-000127",
    "title": "Valheim",
    "alternate_titles": [
      "Valheim Viking",
      "Iron Gate Valheim",
      "Viking Survival"
    ],
    "slug": "valheim",
    "summary": "A brutal exploration and survival game for 1-10 players, set in a procedurally-generated world inspired by Norse mythology.",
    "description": "Craft powerful weapons, construct longhouses, and slay mighty foes of the Allfather to prove your worth to Odin! Explore misty forests, snowy peaks, and bountiful meadows as you sail the open seas.",
    "release_date": "2021-02-02",
    "developer_id": "irongate",
    "publisher_id": "coffeestain",
    "developer_name": "Iron Gate Studio",
    "publisher_name": "Coffee Stain Publishing",
    "genres": [
      "Survival",
      "Open World",
      "Action RPG",
      "Co-op",
      "Crafting"
    ],
    "tags": [
      "Survival",
      "Open World",
      "Crafting",
      "Co-op",
      "Building",
      "Vikings",
      "Exploration"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 94,
    "metacritic_score": 86,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/892970/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/892970/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "bloodborne",
    "ugdb_id": "UGDB-000128",
    "title": "Bloodborne",
    "alternate_titles": [
      "BB",
      "Bloodborne The Old Hunters",
      "Yharnam",
      "FromSoft Bloodborne"
    ],
    "slug": "bloodborne",
    "summary": "Hunt your nightmares as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets.",
    "description": "Face your fears as you enter the decaying city of Yharnam. Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.",
    "release_date": "2015-03-24",
    "developer_id": "fromsoftware",
    "publisher_id": "sony",
    "developer_name": "FromSoftware Inc.",
    "publisher_name": "Sony Interactive Entertainment",
    "genres": [
      "Action RPG",
      "Souls-like",
      "Dark Fantasy",
      "Horror"
    ],
    "tags": [
      "Souls-like",
      "Dark Fantasy",
      "Difficult",
      "Horror",
      "Lovecraftian",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Online PvP",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 92,
    "header_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1rba.jpg",
    "poster_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1rba.jpg",
    "background_image": "https://images.igdb.com/igdb/image/upload/t_1080p/sck66w.jpg",
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_1080p/sck66w.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sck66x.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sck66y.jpg"
    ]
  },
  {
    "id": "demons-souls",
    "ugdb_id": "UGDB-000129",
    "title": "Demon's Souls",
    "alternate_titles": [
      "Demons Souls PS5",
      "Bluepoint Demons Souls",
      "Boletaria",
      "DeS Remake"
    ],
    "slug": "demons-souls",
    "summary": "Entirely rebuilt from the ground up, this remake invites you to experience the unsettling story and ruthless combat of Demon's Souls.",
    "description": "In his quest for power, the 12th King of Boletaria, King Allant channeled the ancient soul arts, awakening a demon from the dawn of time itself, The Old One. Master the arts of sorcery and war in stunning next-generation fidelity.",
    "release_date": "2020-11-12",
    "developer_id": "bluepoint",
    "publisher_id": "sony",
    "developer_name": "Bluepoint Games",
    "publisher_name": "Sony Interactive Entertainment",
    "genres": [
      "Action RPG",
      "Souls-like",
      "Dark Fantasy"
    ],
    "tags": [
      "Souls-like",
      "Dark Fantasy",
      "Difficult",
      "Remake",
      "Atmospheric",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Online PvP",
      "DualSense Haptic Feedback"
    ],
    "rating_score": 93,
    "metacritic_score": 92,
    "header_image": "https://image.api.playstation.com/vulcan/img/cfn/11307HrNnxaPF4LutLQcF4Rg5EhgiBSqw9Vlgze8WBt0PQpsiv-9A8p3IcDTkx8Mq8HAW5HpgEGeDoZeldSzvGLZzm0D83p3.png",
    "poster_image": "https://image.api.playstation.com/vulcan/img/cfn/11307HrNnxaPF4LutLQcF4Rg5EhgiBSqw9Vlgze8WBt0PQpsiv-9A8p3IcDTkx8Mq8HAW5HpgEGeDoZeldSzvGLZzm0D83p3.png",
    "background_image": "https://image.api.playstation.com/cdn/UP1681/CUSA14282_00/TmSWznv3eDGUrapjv43jCflp4DFfRU12.jpg",
    "screenshots": [
      "https://image.api.playstation.com/cdn/UP1681/CUSA14282_00/FREE_CONTENTRmNAEv9H5kb7kyBHFQwL/PREVIEW_SCREENSHOT1_172218.jpg",
      "https://image.api.playstation.com/cdn/UP1681/CUSA14282_00/FREE_CONTENTVZlKo3lHx9fvzMRdiu4I/PREVIEW_SCREENSHOT2_172218.jpg",
      "https://image.api.playstation.com/cdn/UP1681/CUSA14282_00/FREE_CONTENThVJlYODIjq9xXEpmLb5r/PREVIEW_SCREENSHOT3_172218.jpg"
    ]
  },
  {
    "id": "no-mans-sky",
    "ugdb_id": "UGDB-000130",
    "title": "No Man's Sky",
    "alternate_titles": [
      "NMS",
      "Hello Games Space",
      "No Mans Sky Worlds"
    ],
    "slug": "no-mans-sky",
    "summary": "Inspired by the adventure and imagination of classic science-fiction, explore a galaxy of infinite procedurally-generated planets.",
    "description": "Fly seamlessly from deep space to planetary surfaces with no loading screens and no limits. Build bases, command freighter fleets, and discover unique ecosystems across an endless universe.",
    "release_date": "2016-08-12",
    "developer_id": "hellogames",
    "publisher_id": "hellogames_pub",
    "developer_name": "Hello Games",
    "publisher_name": "Hello Games",
    "genres": [
      "Space Sim",
      "Open World",
      "Survival",
      "Exploration",
      "Sci-fi"
    ],
    "tags": [
      "Space",
      "Open World",
      "Exploration",
      "Sci-fi",
      "Survival",
      "Procedural Generation"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Cross-Platform Multiplayer",
      "VR Support",
      "Steam Cloud"
    ],
    "rating_score": 87,
    "metacritic_score": 83,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/275850/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/275850/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/ss_40cf6116be1f7d4554b732152aaee16035985834.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/ss_495bc920cb95bc1bb81bf7d6110fdf48074667d4.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/ss_752a4e98f02909a32c2533ba17f300c0f4f9a039.1920x1080.jpg"
    ]
  },
  {
    "id": "rust",
    "ugdb_id": "UGDB-000131",
    "title": "Rust",
    "alternate_titles": [
      "Rust Survival",
      "Facepunch Rust",
      "Rust Game"
    ],
    "slug": "rust",
    "summary": "The only aim in Rust is to survive. Overcome struggles such as hunger, thirst and cold. Build a fire. Build a shelter. Kill animals. Protect yourself from other players.",
    "description": "Everything wants you to die - the island's wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
    "release_date": "2018-02-08",
    "developer_id": "facepunch",
    "publisher_id": "facepunch_pub",
    "developer_name": "Facepunch Studios",
    "publisher_name": "Facepunch Studios",
    "genres": [
      "Survival",
      "Multiplayer",
      "Open World",
      "Crafting",
      "PvP"
    ],
    "tags": [
      "Survival",
      "Multiplayer",
      "Open World",
      "PvP",
      "Crafting",
      "Base Building",
      "FPS"
    ],
    "features": [
      "Multiplayer",
      "Online PvP",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 87,
    "metacritic_score": 69,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_839a859426f30a996d11f81d113ae819d9b6d859.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_752a4e98f02909a32c2533ba17f300c0f4f9a039.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "factorio",
    "ugdb_id": "UGDB-000132",
    "title": "Factorio",
    "alternate_titles": [
      "Factorio Automation",
      "Wube Factorio",
      "The Factory Must Grow"
    ],
    "slug": "factorio",
    "summary": "Build and maintain factories. Mine resources, research technologies, build infrastructure, automate production, and fight enemies.",
    "description": "Use your imagination to design your factory, combine simple elements into ingenious structures, and apply management skills to keep it running smoothly while protecting it from creatures who don't like you.",
    "release_date": "2020-08-14",
    "developer_id": "wubesoftware",
    "publisher_id": "wubesoftware_pub",
    "developer_name": "Wube Software",
    "publisher_name": "Wube Software",
    "genres": [
      "Automation",
      "Base Building",
      "Resource Management",
      "Simulation",
      "Strategy"
    ],
    "tags": [
      "Automation",
      "Base Building",
      "Management",
      "Resource Management",
      "Engineering",
      "Moddable"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Cloud",
      "Mod Support"
    ],
    "rating_score": 98,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/427520/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/427520/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/427520/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "rimworld",
    "ugdb_id": "UGDB-000133",
    "title": "RimWorld",
    "alternate_titles": [
      "Rim World",
      "Ludeon RimWorld",
      "Colony Sim RimWorld"
    ],
    "slug": "rimworld",
    "summary": "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, and biomes.",
    "description": "You begin with three survivors of a shipwreck on a distant world. Manage colonists' moods, needs, wounds, illnesses and addictions. Build structures, craft weapons, and defend against pirate raids.",
    "release_date": "2018-10-17",
    "developer_id": "ludeon",
    "publisher_id": "ludeon_pub",
    "developer_name": "Ludeon Studios",
    "publisher_name": "Ludeon Studios",
    "genres": [
      "Colony Sim",
      "Survival",
      "Sandbox",
      "Sci-fi",
      "Strategy"
    ],
    "tags": [
      "Colony Sim",
      "Base Building",
      "Survival",
      "Sandbox",
      "Sci-fi",
      "Management",
      "Story Rich"
    ],
    "features": [
      "Single-player",
      "Steam Workshop",
      "Steam Cloud",
      "Mod Support"
    ],
    "rating_score": 98,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/294100/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/294100/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/294100/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "satisfactory",
    "ugdb_id": "UGDB-000134",
    "title": "Satisfactory",
    "alternate_titles": [
      "Satisfactory 1.0",
      "Coffee Stain Factory",
      "FICSIT Satisfactory"
    ],
    "slug": "satisfactory",
    "summary": "A first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends in an alien paradise.",
    "description": "Construct multi-story factories, automate vehicles, and run conveyor belts across an enormous handcrafted alien planet. FICSIT Inc. expects you to extract resources and construct the Project Assembly.",
    "release_date": "2024-09-10",
    "developer_id": "coffeestainstudios",
    "publisher_id": "coffeestain",
    "developer_name": "Coffee Stain Studios",
    "publisher_name": "Coffee Stain Publishing",
    "genres": [
      "Factory Sim",
      "Automation",
      "Open World",
      "Exploration",
      "First-Person"
    ],
    "tags": [
      "Automation",
      "Base Building",
      "Open World",
      "First-Person",
      "Exploration",
      "Co-op",
      "Resource Management"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 97,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/526870/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/526870/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/526870/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/526870/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/526870/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "lethal-company",
    "ugdb_id": "UGDB-000135",
    "title": "Lethal Company",
    "alternate_titles": [
      "LC",
      "Zeekerss Lethal Company",
      "Lethal Scrap"
    ],
    "slug": "lethal-company",
    "summary": "A co-op horror game about scavenging abandoned moons to sell scrap to the Company.",
    "description": "You are a contracted worker for the Company. Your job is to collect scrap from abandoned, industrialized moons to meet the Company's profit quota. Explore dark tunnels, avoid traps, and coordinate via proximity voice chat.",
    "release_date": "2023-10-23",
    "developer_id": "zeekerss",
    "publisher_id": "zeekerss_pub",
    "developer_name": "Zeekerss",
    "publisher_name": "Zeekerss",
    "genres": [
      "Co-op Horror",
      "Survival",
      "Sci-fi",
      "Comedy",
      "Roguelite"
    ],
    "tags": [
      "Online Co-Op",
      "Horror",
      "Sci-fi",
      "Comedy",
      "Survival Horror",
      "Multiplayer",
      "Proximity Chat"
    ],
    "features": [
      "Online Co-op",
      "Steam Cloud",
      "Mod Support"
    ],
    "rating_score": 97,
    "metacritic_score": 86,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1966720/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1966720/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "phasmophobia",
    "ugdb_id": "UGDB-000136",
    "title": "Phasmophobia",
    "alternate_titles": [
      "Phasmo",
      "Kinetic Games Phasmophobia",
      "Ghost Hunting Phasmo"
    ],
    "slug": "phasmophobia",
    "summary": "A 4 player online co-op psychological horror where you and your team of paranormal investigators enter haunted locations filled with ghosts.",
    "description": "Use your ghost hunting equipment to search for and record evidence of whatever ghost is haunting the location to sell onto a ghost removal team. Communicate via walkie-talkie and spirit box in terrifying proximity.",
    "release_date": "2020-09-18",
    "developer_id": "kineticgames",
    "publisher_id": "kineticgames_pub",
    "developer_name": "Kinetic Games",
    "publisher_name": "Kinetic Games",
    "genres": [
      "Psychological Horror",
      "Investigation",
      "Co-op",
      "VR"
    ],
    "tags": [
      "Horror",
      "Online Co-Op",
      "Multiplayer",
      "Psychological Horror",
      "Investigation",
      "VR"
    ],
    "features": [
      "Online Co-op",
      "VR Supported",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 96,
    "metacritic_score": 84,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "dead-by-daylight",
    "ugdb_id": "UGDB-000137",
    "title": "Dead by Daylight",
    "alternate_titles": [
      "DBD",
      "Dead By Daylight 4v1",
      "Entity Fog DBD"
    ],
    "slug": "dead-by-daylight",
    "summary": "A multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors.",
    "description": "Survivors play in third-person and have the advantage of better situational awareness. The Killer plays in first-person and is more focused on their prey. Survivors must repair generators and open the exit gates to escape the Realm of the Entity.",
    "release_date": "2016-06-14",
    "developer_id": "behaviour",
    "publisher_id": "behaviour_pub",
    "developer_name": "Behaviour Interactive",
    "publisher_name": "Behaviour Interactive",
    "genres": [
      "Asymmetric Multiplayer",
      "Survival Horror",
      "PvP",
      "Action"
    ],
    "tags": [
      "Survival Horror",
      "Multiplayer",
      "Online PvP",
      "Horror",
      "Co-op",
      "Dark",
      "Competitive"
    ],
    "features": [
      "Multiplayer",
      "Online PvP",
      "Cross-Platform Multiplayer",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 84,
    "metacritic_score": 71,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "hunt-showdown-1896",
    "ugdb_id": "UGDB-000138",
    "title": "Hunt: Showdown 1896",
    "alternate_titles": [
      "Hunt Showdown",
      "Crytek Hunt",
      "Hunt 1896",
      "Bayou Extraction"
    ],
    "slug": "hunt-showdown-1896",
    "summary": "A high-stakes, tactical PvPvE first-person shooter set in the corrupt and supernatural bayous and mountains of 1896.",
    "description": "Savage monsters roam the dark frontier, and you are part of a guild of rugged bounty hunters bound to rid the world of their presence. Track bounties, banish bosses, and extract before rival hunters put a bullet in your head.",
    "release_date": "2019-08-27",
    "developer_id": "crytek",
    "publisher_id": "crytek_pub",
    "developer_name": "Crytek",
    "publisher_name": "Crytek",
    "genres": [
      "Extraction Shooter",
      "PvPvE",
      "Tactical FPS",
      "Dark Fantasy",
      "Horror"
    ],
    "tags": [
      "Extraction Shooter",
      "FPS",
      "Atmospheric",
      "Multiplayer",
      "PvP",
      "Horror",
      "Tactical"
    ],
    "features": [
      "Multiplayer",
      "Online PvP",
      "Online Co-op",
      "Full Controller Support"
    ],
    "rating_score": 83,
    "metacritic_score": 81,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/594650/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/594650/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/594650/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "balatro",
    "ugdb_id": "UGDB-000139",
    "title": "Balatro",
    "alternate_titles": [
      "Balatro Poker",
      "LocalThunk Balatro",
      "Poker Roguelike"
    ],
    "slug": "balatro",
    "summary": "A poker-inspired roguelike deck builder all about creating powerful synergies and winning big.",
    "description": "Combine valid poker hands with unique Joker cards in order to create varied synergies and builds. Earn enough chips to beat devious blinds, all while uncovering hidden bonus hands and decks as you progress.",
    "release_date": "2024-02-20",
    "developer_id": "localthunk",
    "publisher_id": "playstack",
    "developer_name": "LocalThunk",
    "publisher_name": "Playstack",
    "genres": [
      "Roguelike Deckbuilder",
      "Card Game",
      "Strategy",
      "Casual"
    ],
    "tags": [
      "Card Battler",
      "Roguelike Deckbuilder",
      "Addictive",
      "Poker",
      "Casual",
      "Strategy",
      "Pixel Art"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 97,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2379780/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2379780/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2379780/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "cult-of-the-lamb",
    "ugdb_id": "UGDB-000140",
    "title": "Cult of the Lamb",
    "alternate_titles": [
      "COTL",
      "Massive Monster Lamb",
      "Devolver Cult"
    ],
    "slug": "cult-of-the-lamb",
    "summary": "Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers.",
    "description": "Collect and use resources to build new structures, perform dark rituals to appease the gods, and give sermons to reinforce the faith of your flock. Explore a sprawling, randomly generated world as you fight off hordes of enemies.",
    "release_date": "2022-08-11",
    "developer_id": "massivemonster",
    "publisher_id": "devolver",
    "developer_name": "Massive Monster",
    "publisher_name": "Devolver Digital",
    "genres": [
      "Roguelite",
      "Base Building",
      "Dark Comedy",
      "Action",
      "Colony Sim"
    ],
    "tags": [
      "Roguelite",
      "Base Building",
      "Action Roguelike",
      "Cute",
      "Dark Humor",
      "Atmospheric",
      "Indie"
    ],
    "features": [
      "Single-player",
      "Shared/Split Screen Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 93,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1313140/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1313140/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1313140/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "inscryption",
    "ugdb_id": "UGDB-000141",
    "title": "Inscryption",
    "alternate_titles": [
      "Daniel Mullins Inscryption",
      "Leshy Cabin",
      "Inscryption Deckbuilder"
    ],
    "slug": "inscryption",
    "summary": "An inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror.",
    "description": "Acquire a deck of woodland creature cards by draft, surgery, and self-mutilation. Unlock the secrets lurking behind the walls of Leshy's cabin and embark on an unexpected and deeply disturbing journey.",
    "release_date": "2021-10-19",
    "developer_id": "danielmullins",
    "publisher_id": "devolver",
    "developer_name": "Daniel Mullins Games",
    "publisher_name": "Devolver Digital",
    "genres": [
      "Psychological Horror",
      "Roguelike Deckbuilder",
      "Mystery",
      "Puzzle"
    ],
    "tags": [
      "Card Battler",
      "Psychological Horror",
      "Story Rich",
      "Roguelike Deckbuilder",
      "Mystery",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 96,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1075200/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1075200/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1075200/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1075200/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1075200/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1075200/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "risk-of-rain-2",
    "ugdb_id": "UGDB-000142",
    "title": "Risk of Rain 2",
    "alternate_titles": [
      "ROR2",
      "Hopoo Risk of Rain",
      "Risk of Rain 3D"
    ],
    "slug": "risk-of-rain-2",
    "summary": "Escape a chaotic alien planet by fighting through hordes of frenzied monsters with your friends, or on your own.",
    "description": "Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing. With over a dozen handcrafted locales and scaling difficulty, no two runs are ever the same.",
    "release_date": "2020-08-11",
    "developer_id": "hopoogames",
    "publisher_id": "gearboxpub",
    "developer_name": "Hopoo Games",
    "publisher_name": "Gearbox Publishing",
    "genres": [
      "Action Roguelike",
      "Third-Person Shooter",
      "Co-op",
      "Sci-fi"
    ],
    "tags": [
      "Third-Person Shooter",
      "Action Roguelike",
      "Multiplayer",
      "Co-op",
      "Difficult",
      "Great Soundtrack",
      "Sci-fi"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 93,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632360/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632360/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "the-binding-of-isaac-rebirth",
    "ugdb_id": "UGDB-000143",
    "title": "The Binding of Isaac: Rebirth",
    "alternate_titles": [
      "TBOI",
      "Isaac Rebirth",
      "Edmund McMillen Isaac",
      "Repentance"
    ],
    "slug": "the-binding-of-isaac-rebirth",
    "summary": "A randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey, players will find bizarre treasures.",
    "description": "When Isaac's mother starts hearing the voice of God demanding a sacrifice, Isaac escapes into the monster-filled basement. Uncover over 500 items, gruesome bosses, and infinite synergies across hundreds of rooms.",
    "release_date": "2014-11-04",
    "developer_id": "nicalis",
    "publisher_id": "nicalis_pub",
    "developer_name": "Nicalis, Inc.",
    "publisher_name": "Nicalis",
    "genres": [
      "Action Roguelike",
      "Dungeon Crawler",
      "Bullet Hell",
      "Indie"
    ],
    "tags": [
      "Roguelike",
      "Action Roguelike",
      "Difficult",
      "Replay Value",
      "Dungeon Crawler",
      "Dark",
      "Indie"
    ],
    "features": [
      "Single-player",
      "Shared/Split Screen Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 97,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/250900/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/250900/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/250900/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "enter-the-gungeon",
    "ugdb_id": "UGDB-000144",
    "title": "Enter the Gungeon",
    "alternate_titles": [
      "ETG",
      "Dodge Roll Gungeon",
      "Bullet Hell Gungeon"
    ],
    "slug": "enter-the-gungeon",
    "summary": "A bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution.",
    "description": "Select a hero and battle your way to the bottom of the Gungeon by surviving a challenging and evolving barrage of adorably deadly Gundead and fearsome Gungeon bosses armed to the teeth.",
    "release_date": "2016-04-05",
    "developer_id": "dodgeroll",
    "publisher_id": "devolver",
    "developer_name": "Dodge Roll",
    "publisher_name": "Devolver Digital",
    "genres": [
      "Bullet Hell",
      "Action Roguelike",
      "Twin Stick Shooter",
      "Pixel Graphics"
    ],
    "tags": [
      "Bullet Hell",
      "Roguelite",
      "Twin Stick Shooter",
      "Pixel Art",
      "Difficult",
      "Action",
      "Indie"
    ],
    "features": [
      "Single-player",
      "Shared/Split Screen Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 84,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/311690/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/311690/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/311690/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "vampire-survivors",
    "ugdb_id": "UGDB-000145",
    "title": "Vampire Survivors",
    "alternate_titles": [
      "VS",
      "poncle Vampire Survivors",
      "Garlic Survivor"
    ],
    "slug": "vampire-survivors",
    "summary": "Mow down thousands of night creatures and survive until dawn! A gothic horror casual game with rogue-lite elements.",
    "description": "The supernatural indie phenomenon that spawned a brand new genre. The game places you in a minimalist time-survival game where choices allow you to quickly snowball against the hundreds of monsters thrown at you.",
    "release_date": "2022-10-20",
    "developer_id": "poncle",
    "publisher_id": "poncle_pub",
    "developer_name": "poncle",
    "publisher_name": "poncle",
    "genres": [
      "Bullet Heaven",
      "Action Roguelike",
      "Casual",
      "Retro Pixel"
    ],
    "tags": [
      "Bullet Heaven",
      "Action Roguelike",
      "Pixel Art",
      "Casual",
      "Addictive",
      "Arcade",
      "Indie"
    ],
    "features": [
      "Single-player",
      "Shared/Split Screen Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 98,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1794680/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1794680/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "divinity-original-sin-2",
    "ugdb_id": "UGDB-000146",
    "title": "Divinity: Original Sin 2 - Definitive Edition",
    "alternate_titles": [
      "DOS2",
      "Divinity 2",
      "Larian Divinity",
      "Original Sin 2"
    ],
    "slug": "divinity-original-sin-2",
    "summary": "The critically acclaimed RPG that raised the bar. Gather your party and master deep, tactical combat in a world that reacts to who you are.",
    "description": "Choose your race and origin story from 6 unique origin characters or create your own custom hero. An open-world sandbox of systemic tactical choices where fire, water, electricity, and poison interact dynamically with the environment.",
    "release_date": "2017-09-14",
    "developer_id": "larian",
    "publisher_id": "larianpub",
    "developer_name": "Larian Studios",
    "publisher_name": "Larian Studios",
    "genres": [
      "CRPG",
      "Turn-Based Tactical",
      "Fantasy",
      "Story Rich",
      "Co-op"
    ],
    "tags": [
      "RPG",
      "Turn-Based Combat",
      "Story Rich",
      "Fantasy",
      "Co-op",
      "Tactical RPG",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Shared/Split Screen Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 93,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/435150/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/435150/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/435150/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/435150/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "the-outer-worlds",
    "ugdb_id": "UGDB-000147",
    "title": "The Outer Worlds",
    "alternate_titles": [
      "TOW",
      "Obsidian Outer Worlds",
      "Halcyon RPG"
    ],
    "slug": "the-outer-worlds",
    "summary": "A single-player sci-fi RPG from Obsidian Entertainment and Private Division where you explore a corporate-ruled colony on the edge of the galaxy.",
    "description": "Lost in transit while on a colonist ship bound for the furthest edge of the galaxy, you awake decades later only to find yourself in the midst of a deep conspiracy threatening to destroy the Halcyon colony. Player-driven narrative with satirical corporate humor.",
    "release_date": "2019-10-25",
    "developer_id": "obsidian",
    "publisher_id": "privatedivision",
    "developer_name": "Obsidian Entertainment",
    "publisher_name": "Private Division",
    "genres": [
      "Sci-Fi RPG",
      "First-Person Action",
      "Satire",
      "Open World"
    ],
    "tags": [
      "RPG",
      "Sci-fi",
      "First-Person",
      "Singleplayer",
      "Open World",
      "Story Rich",
      "Comedy"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 84,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578650/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578650/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578650/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "dragon-quest-11-s",
    "ugdb_id": "UGDB-000148",
    "title": "Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition",
    "alternate_titles": [
      "DQ11",
      "DQ11S",
      "Dragon Quest XI",
      "Luminary DQ"
    ],
    "slug": "dragon-quest-11-s",
    "summary": "The definitive edition of the critically acclaimed JRPG tells the tale of a hunted hero: the Luminary, who must uncover the mystery of his fate.",
    "description": "Includes all the content from the original release along with character-specific scenarios, fully orchestrated field and battle tracks, Japanese audio, and the option to switch between 3D HD and retro 16-bit 2D graphics.",
    "release_date": "2019-09-27",
    "developer_id": "squareenix_dev",
    "publisher_id": "squareenix",
    "developer_name": "Square Enix Creative Business Unit",
    "publisher_name": "Square Enix",
    "genres": [
      "JRPG",
      "Turn-Based",
      "Traditional Fantasy",
      "Adventure"
    ],
    "tags": [
      "JRPG",
      "Turn-Based",
      "Classic",
      "Fantasy",
      "Story Rich",
      "Great Soundtrack",
      "Anime"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 93,
    "metacritic_score": 91,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1295510/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1295510/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1295510/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295510/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295510/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295510/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "nier-automata",
    "ugdb_id": "UGDB-000149",
    "title": "NieR:Automata Game of the YoRHa Edition",
    "alternate_titles": [
      "Nier Automata",
      "2B Nier",
      "Yoko Taro Automata",
      "YoRHa Edition"
    ],
    "slug": "nier-automata",
    "summary": "Invaders from another world attack without warning, unleashing machine lifeforms. In a final effort to take back the planet, humans send an android military squad.",
    "description": "NieR:Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia. Fluid, high-speed combat directed by PlatinumGames and written by Yoko Taro with an award-winning soundtrack by Keiichi Okabe.",
    "release_date": "2017-03-17",
    "developer_id": "platinumgames",
    "publisher_id": "squareenix",
    "developer_name": "PlatinumGames",
    "publisher_name": "Square Enix",
    "genres": [
      "Action RPG",
      "Hack and Slash",
      "Sci-Fi",
      "Philosophical",
      "Bullet Hell"
    ],
    "tags": [
      "Great Soundtrack",
      "Story Rich",
      "Action RPG",
      "Hack and Slash",
      "Female Protagonist",
      "Masterpiece"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 93,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/524220/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/524220/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "final-fantasy-16",
    "ugdb_id": "UGDB-000150",
    "title": "FINAL FANTASY XVI",
    "alternate_titles": [
      "FF16",
      "Final Fantasy 16",
      "Clive Rosfield",
      "Square Enix FF16"
    ],
    "slug": "final-fantasy-16",
    "summary": "An epic dark fantasy world where the fate of the land is decided by the mighty Eikons and the Dominants who wield them.",
    "description": "Follow Clive Rosfield, a warrior granted the title \"First Shield of Rosaria\" and sworn to protect his younger brother Joshua—the dominant of the Phoenix. Cinematic Eikon clashes and fast-paced character action.",
    "release_date": "2023-06-22",
    "developer_id": "squareenix_dev",
    "publisher_id": "squareenix",
    "developer_name": "Square Enix Creative Business Unit",
    "publisher_name": "Square Enix",
    "genres": [
      "Action RPG",
      "Dark Fantasy",
      "Epic",
      "Hack and Slash"
    ],
    "tags": [
      "Action RPG",
      "Dark Fantasy",
      "Great Soundtrack",
      "Story Rich",
      "Cinematic",
      "Epic"
    ],
    "features": [
      "Single-player",
      "Full Controller Support",
      "DualSense Support",
      "Steam Cloud"
    ],
    "rating_score": 88,
    "metacritic_score": 87,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2515020/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2515020/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2515020/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "final-fantasy-7-rebirth",
    "ugdb_id": "UGDB-000151",
    "title": "FINAL FANTASY VII REBIRTH",
    "alternate_titles": [
      "FF7 Rebirth",
      "Final Fantasy 7 Rebirth",
      "FFVII Rebirth",
      "Sephiroth Rebirth"
    ],
    "slug": "final-fantasy-7-rebirth",
    "summary": "The journey into the unknown continues. Cloud and his allies escape the dystopian city of Midgar and pursue Sephiroth across a vibrant, expansive planet.",
    "description": "FINAL FANTASY VII REBIRTH is the second entry in the FINAL FANTASY VII remake project. Explore vast regions with chocobo traversal, deep synergy combat abilities, and iconic moments reimagined with emotional gravitas.",
    "release_date": "2024-02-29",
    "developer_id": "squareenix_dev",
    "publisher_id": "squareenix",
    "developer_name": "Square Enix Creative Business Unit",
    "publisher_name": "Square Enix",
    "genres": [
      "Action RPG",
      "Open World",
      "Fantasy",
      "Adventure"
    ],
    "tags": [
      "JRPG",
      "Action RPG",
      "Open World",
      "Story Rich",
      "Great Soundtrack",
      "Remake",
      "Party-Based Combat"
    ],
    "features": [
      "Single-player",
      "DualSense Haptic Feedback",
      "HDR Support",
      "Full Controller Support"
    ],
    "rating_score": 94,
    "metacritic_score": 92,
    "header_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co6qtk.jpg",
    "poster_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co6qtk.jpg",
    "background_image": "https://images.igdb.com/igdb/image/upload/t_1080p/sce1ox.jpg",
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_1080p/sce1ox.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sce1oy.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sce1oz.jpg"
    ]
  },
  {
    "id": "chrono-trigger",
    "ugdb_id": "UGDB-000152",
    "title": "Chrono Trigger",
    "alternate_titles": [
      "CT",
      "Square Chrono Trigger",
      "Crono Lavos",
      "Chrono Trigger Steam"
    ],
    "slug": "chrono-trigger",
    "summary": "The timeless RPG classic developed by the \"Dream Team\" of Yuji Horii, Akira Toriyama, and Hironobu Sakaguchi.",
    "description": "Travel through the forgotten past, the distant future, and to the very End of Time itself on an epic quest to save the planet from Lavos. Features active-time battle system and multiple branching endings.",
    "release_date": "1995-03-11",
    "developer_id": "squareenix_dev",
    "publisher_id": "squareenix",
    "developer_name": "Square Enix Creative Business Unit",
    "publisher_name": "Square Enix",
    "genres": [
      "Classic JRPG",
      "Time Travel",
      "Turn-Based",
      "Retro Pixel"
    ],
    "tags": [
      "Masterpiece",
      "Classic",
      "JRPG",
      "Great Soundtrack",
      "Time Travel",
      "Retro",
      "Story Rich"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 94,
    "metacritic_score": 92,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/613830/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/613830/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/613830/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/613830/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/613830/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/613830/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "persona-4-golden",
    "ugdb_id": "UGDB-000153",
    "title": "Persona 4 Golden",
    "alternate_titles": [
      "P4G",
      "Persona 4",
      "Inaba Investigation",
      "Yu Narukami"
    ],
    "slug": "persona-4-golden",
    "summary": "A coming-of-age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders in a rural Japanese town.",
    "description": "Explore the rural town of Inaba, bond with classmates through Social Links, and explore the mysterious Midnight Channel inside the TV world. One of the highest rated JRPGs of all time.",
    "release_date": "2012-06-14",
    "developer_id": "atlus",
    "publisher_id": "sega",
    "developer_name": "Atlus",
    "publisher_name": "SEGA",
    "genres": [
      "JRPG",
      "Turn-Based",
      "Mystery",
      "Life Sim",
      "Anime"
    ],
    "tags": [
      "JRPG",
      "Anime",
      "Story Rich",
      "Turn-Based Combat",
      "Great Soundtrack",
      "Mystery",
      "Social Sim"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 97,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1113000/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1113000/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1113000/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1113000/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1113000/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1113000/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "yakuza-0",
    "ugdb_id": "UGDB-000154",
    "title": "Yakuza 0",
    "alternate_titles": [
      "Y0",
      "Ryu Ga Gotoku Zero",
      "Kazuma Kiryu Majima",
      "Yakuza Zero"
    ],
    "slug": "yakuza-0",
    "summary": "The glitz, glamour, and unbridled decadence of the 80s are back in Yakuza 0. Fight like hell through Tokyo and Osaka with protagonist Kazuma Kiryu and Goro Majima.",
    "description": "An unmissable 80s crime drama where you play through the intersecting origin stories of Kazuma Kiryu and Goro Majima. Switch between bone-crunching combat styles, run real-estate and cabaret empires, and sing karaoke.",
    "release_date": "2015-03-12",
    "developer_id": "rggstudio",
    "publisher_id": "sega",
    "developer_name": "Ryu Ga Gotoku Studio",
    "publisher_name": "SEGA",
    "genres": [
      "Action-Adventure",
      "Beat 'em up",
      "Open World",
      "Crime Drama",
      "Comedy"
    ],
    "tags": [
      "Beat 'em up",
      "Story Rich",
      "Action",
      "Martial Arts",
      "Funny",
      "Great Soundtrack",
      "Open World"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 95,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/638970/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/638970/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/638970/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638970/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "like-a-dragon-infinite-wealth",
    "ugdb_id": "UGDB-000155",
    "title": "Like a Dragon: Infinite Wealth",
    "alternate_titles": [
      "LAD8",
      "Yakuza 8",
      "Infinite Wealth",
      "Kasuga Hawaii"
    ],
    "slug": "like-a-dragon-infinite-wealth",
    "summary": "Two larger-than-life heroes brought together by the hand of fate, or perhaps something more sinister… Ichiban Kasuga and Kazuma Kiryu.",
    "description": "Experience one-of-a-kind combat with dynamic, fast-paced RPG battles where the battlefield becomes your weapon. Live it up in Hawaii with expansive resort building, Sujimon battles, and heartwarming side quests.",
    "release_date": "2024-01-26",
    "developer_id": "rggstudio",
    "publisher_id": "sega",
    "developer_name": "Ryu Ga Gotoku Studio",
    "publisher_name": "SEGA",
    "genres": [
      "Turn-Based RPG",
      "Open World",
      "Comedy",
      "Crime Drama",
      "Adventure"
    ],
    "tags": [
      "Turn-Based Combat",
      "JRPG",
      "Story Rich",
      "Comedy",
      "Minigames",
      "Open World",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 92,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2072450/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2072450/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2072450/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2072450/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "resident-evil-village",
    "ugdb_id": "UGDB-000156",
    "title": "Resident Evil Village",
    "alternate_titles": [
      "RE8",
      "Resident Evil 8",
      "Biohazard Village",
      "Lady Dimitrescu"
    ],
    "slug": "resident-evil-village",
    "summary": "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.",
    "description": "Set a few years after the horrifying events in Resident Evil 7, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, until tragedy befalls them and Ethan must traverse a mysterious Romanian village ruled by four lords.",
    "release_date": "2021-05-07",
    "developer_id": "capcom",
    "publisher_id": "capcompub",
    "developer_name": "Capcom",
    "publisher_name": "Capcom",
    "genres": [
      "Survival Horror",
      "First-Person Action",
      "Gothic Horror",
      "Story Rich"
    ],
    "tags": [
      "Survival Horror",
      "Horror",
      "First-Person",
      "Action",
      "Atmospheric",
      "Gore",
      "Zombies"
    ],
    "features": [
      "Single-player",
      "Ray Tracing",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 95,
    "metacritic_score": 84,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "dead-space-remake",
    "ugdb_id": "UGDB-000157",
    "title": "Dead Space (2023)",
    "alternate_titles": [
      "Dead Space Remake",
      "Isaac Clarke USG Ishimura",
      "Dead Space Motive"
    ],
    "slug": "dead-space-remake",
    "summary": "The sci-fi survival-horror classic returns, completely rebuilt from the ground up to offer a deeper and more immersive experience.",
    "description": "Isaac Clarke is an everyman engineer on a mission to repair the USG Ishimura, only to discover the ship's crew has been slaughtered and his partner Nicole is lost somewhere on board. Dismember Necromorphs with industrial plasma cutters.",
    "release_date": "2023-01-27",
    "developer_id": "motive",
    "publisher_id": "ea",
    "developer_name": "Motive Studio",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Sci-Fi Survival Horror",
      "Third-Person Shooter",
      "Atmospheric",
      "Gore"
    ],
    "tags": [
      "Survival Horror",
      "Sci-fi",
      "Horror",
      "Atmospheric",
      "Space",
      "Remake",
      "Gore"
    ],
    "features": [
      "Single-player",
      "Ray Tracing",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 92,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1693980/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1693980/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1693980/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "alien-isolation",
    "ugdb_id": "UGDB-000158",
    "title": "Alien: Isolation",
    "alternate_titles": [
      "Alien Isolation",
      "Amanda Ripley Alien",
      "Sevastopol Xenomorph"
    ],
    "slug": "alien-isolation",
    "summary": "Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger.",
    "description": "Fifteen years after the events of Alien, Ellen Ripley's daughter, Amanda enters a desperate battle for survival, on a mission to unravel the truth behind her mother's disappearance on the decommissioned trading station Sevastopol, hunted by an unpredictable Xenomorph.",
    "release_date": "2014-10-06",
    "developer_id": "creativeassembly",
    "publisher_id": "sega",
    "developer_name": "Creative Assembly",
    "publisher_name": "SEGA",
    "genres": [
      "Sci-Fi Survival Horror",
      "Stealth",
      "Atmospheric",
      "First-Person"
    ],
    "tags": [
      "Survival Horror",
      "Horror",
      "Sci-fi",
      "Stealth",
      "Atmospheric",
      "Space",
      "Difficult"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 92,
    "metacritic_score": 81,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/214490/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/214490/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "signalis",
    "ugdb_id": "UGDB-000159",
    "title": "Signalis",
    "alternate_titles": [
      "SIGNALIS",
      "rose engine Signalis",
      "Elster Replika"
    ],
    "slug": "signalis",
    "summary": "A classic survival horror experience with a unique aesthetic, full of melancholic mystery, investigation, and cosmic psychological dread.",
    "description": "Awakening from cryostasis in a wrecked spacecraft, Replika technician Elster searches for her lost partner and her lost dreams across a desolate mining facility overrun with corrupted androids. Manage limited inventory and solve retro puzzles.",
    "release_date": "2022-10-27",
    "developer_id": "roseengine",
    "publisher_id": "humblegames",
    "developer_name": "rose-engine",
    "publisher_name": "Humble Games",
    "genres": [
      "Classic Survival Horror",
      "Retro Sci-Fi",
      "Psychological Horror",
      "Anime"
    ],
    "tags": [
      "Survival Horror",
      "Atmospheric",
      "Psychological Horror",
      "Retro",
      "Sci-fi",
      "Great Soundtrack",
      "Pixel Art"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 96,
    "metacritic_score": 81,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1262350/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1262350/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1262350/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262350/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262350/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262350/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "sons-of-the-forest",
    "ugdb_id": "UGDB-000160",
    "title": "Sons of the Forest",
    "alternate_titles": [
      "SOTF",
      "The Forest 2",
      "Endnight Sons",
      "Cannibal Island"
    ],
    "slug": "sons-of-the-forest",
    "summary": "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape.",
    "description": "Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator. Complete freedom to tackle the world however you want alongside AI companions Kelvin and Virginia.",
    "release_date": "2024-02-22",
    "developer_id": "endnightgames",
    "publisher_id": "newnight",
    "developer_name": "Endnight Games Ltd",
    "publisher_name": "Newnight",
    "genres": [
      "Survival Horror",
      "Open World",
      "Crafting",
      "Co-op",
      "Building"
    ],
    "tags": [
      "Survival",
      "Open World",
      "Survival Horror",
      "Crafting",
      "Co-op",
      "Building",
      "Multiplayer"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 86,
    "metacritic_score": 79,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "project-zomboid",
    "ugdb_id": "UGDB-000161",
    "title": "Project Zomboid",
    "alternate_titles": [
      "PZ",
      "The Indie Stone Zomboid",
      "Knox Event",
      "Zombie Survival PZ"
    ],
    "slug": "project-zomboid",
    "summary": "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive.",
    "description": "Set in Knox County, Kentucky, you must forage food, barricade doors, construct bases, manage depression, infections and wounds. A hardcore isometric RPG skill set with realistic survival mechanics. This is how you died.",
    "release_date": "2013-11-08",
    "developer_id": "theindiestone",
    "publisher_id": "theindiestone_pub",
    "developer_name": "The Indie Stone",
    "publisher_name": "The Indie Stone",
    "genres": [
      "Hardcore Zombie Survival",
      "Isometric RPG",
      "Sandbox",
      "Multiplayer"
    ],
    "tags": [
      "Survival",
      "Zombies",
      "Realistic",
      "Sandbox",
      "Multiplayer",
      "Post-apocalyptic",
      "Difficult"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Shared/Split Screen Co-op",
      "Steam Workshop"
    ],
    "rating_score": 94,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/108600/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/108600/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "dont-starve-together",
    "ugdb_id": "UGDB-000162",
    "title": "Don't Starve Together",
    "alternate_titles": [
      "DST",
      "Dont Starve Together",
      "Klei Survival",
      "Wilson Don't Starve"
    ],
    "slug": "dont-starve-together",
    "summary": "Fight, farm, build and explore together in the standalone multiplayer expansion to the uncompromising wilderness survival game, Don't Starve.",
    "description": "Enter a strange and unexplored world full of odd creatures, hidden dangers, and ancient secrets. Gather resources to craft items and build structures that match your survival style across distinct seasons.",
    "release_date": "2016-04-21",
    "developer_id": "klei",
    "publisher_id": "klei_pub",
    "developer_name": "Klei Entertainment",
    "publisher_name": "Klei Entertainment",
    "genres": [
      "Wilderness Survival",
      "Co-op",
      "Gothic Hand-drawn",
      "Crafting",
      "Roguelike"
    ],
    "tags": [
      "Survival",
      "Multiplayer",
      "Co-op",
      "Hand-drawn",
      "Difficult",
      "Crafting",
      "Open World"
    ],
    "features": [
      "Multiplayer",
      "Online Co-op",
      "Shared/Split Screen Co-op",
      "Steam Cloud"
    ],
    "rating_score": 95,
    "metacritic_score": 83,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/322330/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/322330/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/322330/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "titanfall-2",
    "ugdb_id": "UGDB-000163",
    "title": "Titanfall 2",
    "alternate_titles": [
      "TF2",
      "Titanfall 2 Campaign",
      "BT-7274",
      "Respawn Titanfall"
    ],
    "slug": "titanfall-2",
    "summary": "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience.",
    "description": "Pilot and Titan unite as never before. Featuring a critically acclaimed single player campaign that explores the unique bond between man and machine, alongside lightning-fast parkour mobility and tactical multiplayer combat.",
    "release_date": "2016-10-28",
    "developer_id": "respawn",
    "publisher_id": "ea",
    "developer_name": "Respawn Entertainment",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Fast-Paced FPS",
      "Mech",
      "Sci-Fi",
      "Campaign",
      "Multiplayer"
    ],
    "tags": [
      "FPS",
      "Fast-Paced",
      "Sci-fi",
      "Great Campaign",
      "Mechs",
      "Movement",
      "Shooter"
    ],
    "features": [
      "Single-player",
      "Multiplayer",
      "Online PvP",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 94,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1237970/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1237970/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1237970/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1237970/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1237970/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1237970/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "apex-legends",
    "ugdb_id": "UGDB-000164",
    "title": "Apex Legends",
    "alternate_titles": [
      "Apex",
      "Respawn Apex",
      "Apex Battle Royale",
      "Outlands Apex"
    ],
    "slug": "apex-legends",
    "summary": "Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up for glory.",
    "description": "Master an ever-growing roster of diverse Legends, deep tactical squad play, and bold new innovations that go beyond the Battle Royale experience—all within a rugged world where anything goes.",
    "release_date": "2019-02-04",
    "developer_id": "respawn",
    "publisher_id": "ea",
    "developer_name": "Respawn Entertainment",
    "publisher_name": "Electronic Arts",
    "genres": [
      "Battle Royale",
      "Hero Shooter",
      "Fast-Paced FPS",
      "Multiplayer"
    ],
    "tags": [
      "Battle Royale",
      "Free to Play",
      "Multiplayer",
      "Hero Shooter",
      "FPS",
      "Fast-Paced",
      "Team-Based"
    ],
    "features": [
      "Multiplayer",
      "Online PvP",
      "Cross-Platform Multiplayer",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 82,
    "metacritic_score": 88,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "space-marine-2",
    "ugdb_id": "UGDB-000165",
    "title": "Warhammer 40,000: Space Marine 2",
    "alternate_titles": [
      "Space Marine 2",
      "SM2",
      "Titus Ultramarine",
      "Warhammer Space Marine 2"
    ],
    "slug": "space-marine-2",
    "summary": "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and an arsenal of devastating weaponry to obliterate the relentless Tyranid hordes.",
    "description": "Heed the call of battle. For there is only war. Step into the power armor of Lieutenant Demetrian Titus and defend the Imperium in spectacular third-person action across solo and 3-player co-op campaigns.",
    "release_date": "2024-09-09",
    "developer_id": "saberinteractive",
    "publisher_id": "focusent",
    "developer_name": "Saber Interactive",
    "publisher_name": "Focus Entertainment",
    "genres": [
      "Third-Person Shooter",
      "Hack and Slash",
      "Grimdark Sci-Fi",
      "Co-op"
    ],
    "tags": [
      "Action",
      "Third-Person Shooter",
      "Warhammer 40k",
      "Co-op",
      "Gore",
      "Sci-fi",
      "Spectacle Shooter"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Online PvP",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 84,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2183900/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2183900/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2183900/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "sifu",
    "ugdb_id": "UGDB-000166",
    "title": "Sifu",
    "alternate_titles": [
      "Sifu Kung Fu",
      "Sloclap Sifu",
      "Pak Mei Sifu",
      "Revenge Sifu"
    ],
    "slug": "sifu",
    "summary": "Sifu is a realistic third-person brawler with tight Kung Fu combat mechanics and cinematic martial arts action.",
    "description": "Chasing the assassins of your family on a path of revenge, you possess a magical talisman that revives you upon death at the cost of aging. Master the Pak Mei Kung Fu style, use improvised weapons, and survive against overwhelming odds.",
    "release_date": "2022-02-08",
    "developer_id": "sloclap",
    "publisher_id": "keplerinteractive",
    "developer_name": "Sloclap",
    "publisher_name": "Kepler Interactive",
    "genres": [
      "Martial Arts Beat 'em up",
      "Action Roguelite",
      "Kung Fu",
      "Difficult"
    ],
    "tags": [
      "Martial Arts",
      "Difficult",
      "Action",
      "Beat 'em up",
      "Roguelite",
      "Hand-to-Hand",
      "Cinematic"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 92,
    "metacritic_score": 81,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2138710/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2138710/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "hi-fi-rush",
    "ugdb_id": "UGDB-000167",
    "title": "Hi-Fi RUSH",
    "alternate_titles": [
      "Hi Fi Rush",
      "Chai 808",
      "Tango HiFi",
      "Rhythm Action Hi-Fi"
    ],
    "slug": "hi-fi-rush",
    "summary": "Feel the beat as wannabe rockstar Chai and his ragtag team fight against a nefarious megacorp with raucous rhythm combat!",
    "description": "From Tango Gameworks comes an all-new action game where characters, world and combat stylishly sync to the music. Time your attacks, parries, and aerial combos to licensed rock tracks by Nine Inch Nails, The Black Keys, and Prodigy.",
    "release_date": "2023-01-25",
    "developer_id": "tangogameworks",
    "publisher_id": "bethesda",
    "developer_name": "Tango Gameworks",
    "publisher_name": "Bethesda Softworks",
    "genres": [
      "Rhythm Action",
      "Character Action",
      "Hack and Slash",
      "Stylized Comic"
    ],
    "tags": [
      "Rhythm",
      "Hack and Slash",
      "Great Soundtrack",
      "Stylized",
      "Action",
      "Comedy",
      "Singleplayer"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 97,
    "metacritic_score": 89,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817230/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817230/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817230/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817230/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "returnal",
    "ugdb_id": "UGDB-000168",
    "title": "Returnal",
    "alternate_titles": [
      "Returnal PC",
      "Selene Atropos",
      "Housemarque Returnal"
    ],
    "slug": "returnal",
    "summary": "Break the cycle of chaos on an always-altering alien planet. After crash-landing on Atropos, Selene must search through the barren landscape of an ancient civilization for her escape.",
    "description": "Designed for extreme replayability, the procedural world of Returnal invites you to dust yourself off in the face of defeat and take on new, evolving challenges with every rebirth. Master intense bullet hell third-person gunplay.",
    "release_date": "2021-04-30",
    "developer_id": "housemarque",
    "publisher_id": "sony",
    "developer_name": "Housemarque",
    "publisher_name": "Sony Interactive Entertainment",
    "genres": [
      "Third-Person Bullet Hell",
      "Sci-Fi Roguelike",
      "Psychological Horror"
    ],
    "tags": [
      "Roguelike",
      "Third-Person Shooter",
      "Bullet Hell",
      "Sci-fi",
      "Difficult",
      "Fast-Paced",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Online Co-op",
      "Ray Tracing",
      "DualSense Haptic Feedback",
      "Steam Cloud"
    ],
    "rating_score": 88,
    "metacritic_score": 86,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1895880/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1895880/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1895880/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1895880/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "stray",
    "ugdb_id": "UGDB-000169",
    "title": "Stray",
    "alternate_titles": [
      "Stray Cat Game",
      "BlueTwelve Stray",
      "Cyberpunk Cat"
    ],
    "slug": "stray",
    "summary": "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity.",
    "description": "See the world through the eyes of a stray cat and interact with the environment in playful ways. Roam neon-lit alleys and murky environments of a decaying cybercity populated by curious droids and dangerous Zurks.",
    "release_date": "2022-07-19",
    "developer_id": "bluetwelve",
    "publisher_id": "annapurna",
    "developer_name": "BlueTwelve Studio",
    "publisher_name": "Annapurna Interactive",
    "genres": [
      "Third-Person Cat Adventure",
      "Cyberpunk",
      "Atmospheric",
      "Puzzle"
    ],
    "tags": [
      "Cats",
      "Cyberpunk",
      "Atmospheric",
      "Exploration",
      "Adventure",
      "Cute",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 97,
    "metacritic_score": 83,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1332010/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1332010/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "tunic",
    "ugdb_id": "UGDB-000170",
    "title": "Tunic",
    "alternate_titles": [
      "TUNIC",
      "Fox Zelda",
      "Finji Tunic",
      "Andrew Shouldice Fox"
    ],
    "slug": "tunic",
    "summary": "Explore a land filled with lost legends, ancient powers, and ferocious monsters in TUNIC, an isometric action game about a small fox on a big adventure.",
    "description": "Stranded in a ruined land, armed with only your own curiosity, you will confront colossal beasts, collect strange and powerful items, and piece together the game's actual in-game retro instruction manual page by page.",
    "release_date": "2022-03-16",
    "developer_id": "tunicteam",
    "publisher_id": "finji",
    "developer_name": "TUNIC Team",
    "publisher_name": "Finji",
    "genres": [
      "Isometric Action-Adventure",
      "Soulslike",
      "Exploration",
      "Puzzle"
    ],
    "tags": [
      "Isometric",
      "Exploration",
      "Cute",
      "Soulslike",
      "Puzzle",
      "Adventure",
      "Great Soundtrack"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 93,
    "metacritic_score": 85,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553420/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553420/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553420/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553420/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553420/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553420/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "animal-well",
    "ugdb_id": "UGDB-000171",
    "title": "Animal Well",
    "alternate_titles": [
      "Animal Well Metroidvania",
      "Bigmode Animal Well",
      "Billy Basso Animal Well"
    ],
    "slug": "animal-well",
    "summary": "Hatch from a flower and explore the dense, interconnected labyrinth of ANIMAL WELL. A pixelated non-linear puzzle Metroidvania.",
    "description": "Explore a dense, interconnected labyrinth full of secrets, puzzles, and surprising encounters with creatures big and small. Manipulate the environment in surprising ways using simple items like yo-yos, bubble wands, and frisbees.",
    "release_date": "2024-05-09",
    "developer_id": "sharedmemory",
    "publisher_id": "bigmode",
    "developer_name": "Shared Memory",
    "publisher_name": "Bigmode",
    "genres": [
      "Atmospheric Metroidvania",
      "Non-Violent Puzzle",
      "Surreal",
      "Pixel Art"
    ],
    "tags": [
      "Metroidvania",
      "Pixel Art",
      "Atmospheric",
      "Puzzle",
      "Exploration",
      "Surreal",
      "Indie"
    ],
    "features": [
      "Single-player",
      "Steam Cloud",
      "Full Controller Support",
      "Steam Achievements"
    ],
    "rating_score": 96,
    "metacritic_score": 90,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/813230/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/813230/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/813230/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813230/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813230/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813230/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "a-plague-tale-requiem",
    "ugdb_id": "UGDB-000172",
    "title": "A Plague Tale: Requiem",
    "alternate_titles": [
      "Plague Tale 2",
      "Amicia and Hugo",
      "Requiem Plague Tale"
    ],
    "slug": "a-plague-tale-requiem",
    "summary": "Embark on a heartrending journey into a brutal, breathtaking world twisted by supernatural forces.",
    "description": "After escaping their devastated homeland, Amicia and Hugo travel far south, to new regions and vibrant cities. But when Hugo's powers reawaken, death and destruction return in a flood of devouring rats. Stealth and alchemical combat in 14th-century France.",
    "release_date": "2022-10-18",
    "developer_id": "asobostudio",
    "publisher_id": "focusent",
    "developer_name": "Asobo Studio",
    "publisher_name": "Focus Entertainment",
    "genres": [
      "Narrative Action-Adventure",
      "Stealth",
      "Medieval Historical",
      "Emotional"
    ],
    "tags": [
      "Story Rich",
      "Emotional",
      "Medieval",
      "Stealth",
      "Action-Adventure",
      "Female Protagonist",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Ray Tracing",
      "Steam Cloud",
      "Full Controller Support"
    ],
    "rating_score": 91,
    "metacritic_score": 82,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1443810/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1443810/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1443810/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1443810/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1443810/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1443810/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  },
  {
    "id": "super-smash-bros-ultimate",
    "ugdb_id": "UGDB-000173",
    "title": "Super Smash Bros. Ultimate",
    "alternate_titles": [
      "SSBU",
      "Smash Ultimate",
      "Smash Bros",
      "Sakurai Smash"
    ],
    "slug": "super-smash-bros-ultimate",
    "summary": "Gaming icons clash in the ultimate showdown you can play anytime, anywhere! Every fighter in Super Smash Bros. history joins the battle.",
    "description": "Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more.",
    "release_date": "2018-12-07",
    "developer_id": "bandainamco",
    "publisher_id": "nintendo",
    "developer_name": "Bandai Namco Studios / Sora Ltd.",
    "publisher_name": "Nintendo",
    "genres": [
      "Platform Fighter",
      "Multiplayer",
      "Fighting",
      "Crossover",
      "Family Friendly"
    ],
    "tags": [
      "Fighting",
      "Multiplayer",
      "Platform Fighter",
      "Competitive",
      "Great Soundtrack",
      "Crossover"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Local Co-op",
      "Shared/Split Screen PvP"
    ],
    "rating_score": 96,
    "metacritic_score": 93,
    "header_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1vcf.jpg",
    "poster_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co1vcf.jpg",
    "background_image": "https://images.igdb.com/igdb/image/upload/t_1080p/sc5z8n.jpg",
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc5z8n.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc5z8o.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc5z8p.jpg"
    ]
  },
  {
    "id": "metroid-dread",
    "ugdb_id": "UGDB-000174",
    "title": "Metroid Dread",
    "alternate_titles": [
      "Dread",
      "Samus Aran Dread",
      "Metroid 5",
      "MercurySteam Metroid"
    ],
    "slug": "metroid-dread",
    "summary": "Join intergalactic bounty hunter Samus Aran in her first new 2D Metroid story in 19 years as she explores planet ZDR hunted by deadly E.M.M.I. robots.",
    "description": "Upon descending on planet ZDR, Samus discovers she is hunted by lethal, DNA-extracting research robots called E.M.M.I. Maneuver past these mechanical terrors and acquire new and familiar abilities to overcome formidable alien foes.",
    "release_date": "2021-10-08",
    "developer_id": "mercurysteam",
    "publisher_id": "nintendo",
    "developer_name": "MercurySteam",
    "publisher_name": "Nintendo",
    "genres": [
      "Metroidvania",
      "2D Action",
      "Sci-Fi",
      "Fast-Paced"
    ],
    "tags": [
      "Metroidvania",
      "2D",
      "Female Protagonist",
      "Action",
      "Sci-fi",
      "Difficult",
      "Atmospheric"
    ],
    "features": [
      "Single-player",
      "Full Controller Support"
    ],
    "rating_score": 92,
    "metacritic_score": 88,
    "header_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co3a0q.jpg",
    "poster_image": "https://images.igdb.com/igdb/image/upload/t_1080p/co3a0q.jpg",
    "background_image": "https://images.igdb.com/igdb/image/upload/t_1080p/sc9y8u.jpg",
    "screenshots": [
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc9y8u.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc9y8v.jpg",
      "https://images.igdb.com/igdb/image/upload/t_1080p/sc9y8w.jpg"
    ]
  },
  {
    "id": "crusader-kings-3",
    "ugdb_id": "UGDB-000175",
    "title": "Crusader Kings III",
    "alternate_titles": [
      "CK3",
      "Crusader Kings 3",
      "Paradox CK3",
      "Medieval Dynasty Sim"
    ],
    "slug": "crusader-kings-3",
    "summary": "Love, fight, scheme, and claim greatness. Determine your noble house's legacy in the sprawling grand strategy of Crusader Kings III.",
    "description": "Death is only the beginning as you guide your dynasty's bloodline through the centuries in the rich and larger-than-life simulation of the Middle Ages. Wed for politics, scheme against rivals, and conquer lands from Iceland to India.",
    "release_date": "2020-09-01",
    "developer_id": "paradoxdev",
    "publisher_id": "paradox",
    "developer_name": "Paradox Development Studio",
    "publisher_name": "Paradox Interactive",
    "genres": [
      "Grand Strategy",
      "Medieval Role-Playing",
      "Simulation",
      "Historical"
    ],
    "tags": [
      "Grand Strategy",
      "Medieval",
      "Strategy",
      "RPG",
      "Historical",
      "Management",
      "Sandbox"
    ],
    "features": [
      "Single-player",
      "Online PvP",
      "Steam Cloud",
      "Steam Workshop"
    ],
    "rating_score": 92,
    "metacritic_score": 91,
    "header_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg",
    "poster_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1158310/library_600x900_2x.jpg",
    "background_image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1158310/library_hero.jpg",
    "screenshots": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/ss_891e4a6409d6fbbbe59942a6bc2dae954fe3be20.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/ss_37a1f8cb151aeaa1c94488b3f1245faae7b6cf7f.1920x1080.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/ss_e1e12724218ebfa60a16b9d88bb4a123985fa6b7.1920x1080.jpg"
    ]
  }
];

export const BATCH3_LISTINGS: PlatformListing[] = [
  {
    "id": "listing_minecraft_xbox",
    "game_id": "minecraft",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490S6",
    "store_url": "https://www.xbox.com/games/store/minecraft/9nxp44l490s6",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 19.99,
    "discount_percent": 33,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 380000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_minecraft_playstation",
    "game_id": "minecraft",
    "platform_id": "playstation",
    "store_app_id": "CUSA00572_00",
    "store_url": "https://store.playstation.com/concept/200000",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 19.99,
    "discount_percent": 33,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 290000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_minecraft_nintendo",
    "game_id": "minecraft",
    "platform_id": "nintendo",
    "store_app_id": "70010000000964",
    "store_url": "https://www.nintendo.com/store/products/minecraft-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 19.99,
    "discount_percent": 33,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 150000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_valheim_steam",
    "game_id": "valheim",
    "platform_id": "steam",
    "store_app_id": "892970",
    "store_url": "https://store.steampowered.com/app/892970/Valheim/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 9.99,
    "discount_percent": 50,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 28410,
    "peak_players_24h": 38354,
    "all_time_peak_players": 107958,
    "rating_positive_percent": 94.6,
    "review_count": 412000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_valheim_xbox",
    "game_id": "valheim",
    "platform_id": "xbox",
    "store_app_id": "9NK833BDG4LN_VH",
    "store_url": "https://www.xbox.com/games/store/valheim/9nk833bdg4ln",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 9.99,
    "discount_percent": 50,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 45000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_bloodborne_playstation",
    "game_id": "bloodborne",
    "platform_id": "playstation",
    "store_app_id": "CUSA00900_00",
    "store_url": "https://store.playstation.com/concept/200001",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 9.99,
    "discount_percent": 50,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 260000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_demons_souls_playstation",
    "game_id": "demons-souls",
    "platform_id": "playstation",
    "store_app_id": "PPSA01339_00",
    "store_url": "https://store.playstation.com/concept/10000851",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 29.39,
    "discount_percent": 58,
    "historical_low_price": 29.39,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 92000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_no_mans_sky_steam",
    "game_id": "no-mans-sky",
    "platform_id": "steam",
    "store_app_id": "275850",
    "store_url": "https://store.steampowered.com/app/275850/No_Mans_Sky/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 18450,
    "peak_players_24h": 24908,
    "all_time_peak_players": 70110,
    "rating_positive_percent": 88.5,
    "review_count": 245000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_no_mans_sky_gog",
    "game_id": "no-mans-sky",
    "platform_id": "gog",
    "store_app_id": "no_mans_sky",
    "store_url": "https://www.gog.com/game/no_mans_sky",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_no_mans_sky_playstation",
    "game_id": "no-mans-sky",
    "platform_id": "playstation",
    "store_app_id": "PPSA01411_00",
    "store_url": "https://store.playstation.com/concept/200005",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 85000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_no_mans_sky_xbox",
    "game_id": "no-mans-sky",
    "platform_id": "xbox",
    "store_app_id": "BQVQTLBRN2FS",
    "store_url": "https://www.xbox.com/games/store/no-mans-sky/bqvqtlbrn2fs",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 65000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_no_mans_sky_nintendo",
    "game_id": "no-mans-sky",
    "platform_id": "nintendo",
    "store_app_id": "70010000045618",
    "store_url": "https://www.nintendo.com/store/products/no-mans-sky-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 29.99,
    "discount_percent": 50,
    "historical_low_price": 29.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 84,
    "review_count": 22000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rust_steam",
    "game_id": "rust",
    "platform_id": "steam",
    "store_app_id": "252490",
    "store_url": "https://store.steampowered.com/app/252490/Rust/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 96420,
    "peak_players_24h": 130167,
    "all_time_peak_players": 366396,
    "rating_positive_percent": 87.2,
    "review_count": 885000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rust_playstation",
    "game_id": "rust",
    "platform_id": "playstation",
    "store_app_id": "CUSA17600_00",
    "store_url": "https://store.playstation.com/concept/200006",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 80,
    "review_count": 75000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rust_xbox",
    "game_id": "rust",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490S7",
    "store_url": "https://www.xbox.com/games/store/rust-console-edition/9nxp44l490s7",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 79,
    "review_count": 62000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_factorio_steam",
    "game_id": "factorio",
    "platform_id": "steam",
    "store_app_id": "427520",
    "store_url": "https://store.steampowered.com/app/427520/Factorio/",
    "currency": "USD",
    "original_price": 35,
    "current_price": 35,
    "discount_percent": 0,
    "historical_low_price": 17.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 41200,
    "peak_players_24h": 55620,
    "all_time_peak_players": 156560,
    "rating_positive_percent": 98.4,
    "review_count": 156000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_factorio_gog",
    "game_id": "factorio",
    "platform_id": "gog",
    "store_app_id": "factorio",
    "store_url": "https://www.gog.com/game/factorio",
    "currency": "USD",
    "original_price": 35,
    "current_price": 35,
    "discount_percent": 0,
    "historical_low_price": 17.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 98,
    "review_count": 12000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_factorio_nintendo",
    "game_id": "factorio",
    "platform_id": "nintendo",
    "store_app_id": "70010000056811",
    "store_url": "https://www.nintendo.com/store/products/factorio-switch/",
    "currency": "USD",
    "original_price": 35,
    "current_price": 35,
    "discount_percent": 0,
    "historical_low_price": 17.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rimworld_steam",
    "game_id": "rimworld",
    "platform_id": "steam",
    "store_app_id": "294100",
    "store_url": "https://store.steampowered.com/app/294100/RimWorld/",
    "currency": "USD",
    "original_price": 34.99,
    "current_price": 27.99,
    "discount_percent": 20,
    "historical_low_price": 17.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 24500,
    "peak_players_24h": 33075,
    "all_time_peak_players": 93100,
    "rating_positive_percent": 98.2,
    "review_count": 168000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rimworld_gog",
    "game_id": "rimworld",
    "platform_id": "gog",
    "store_app_id": "rimworld",
    "store_url": "https://www.gog.com/game/rimworld",
    "currency": "USD",
    "original_price": 34.99,
    "current_price": 27.99,
    "discount_percent": 20,
    "historical_low_price": 17.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 98,
    "review_count": 9500,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rimworld_playstation",
    "game_id": "rimworld",
    "platform_id": "playstation",
    "store_app_id": "CUSA32620_00",
    "store_url": "https://store.playstation.com/concept/200008",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 29.99,
    "discount_percent": 25,
    "historical_low_price": 20,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 21000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_rimworld_xbox",
    "game_id": "rimworld",
    "platform_id": "xbox",
    "store_app_id": "9P03KG6Z0065",
    "store_url": "https://www.xbox.com/games/store/rimworld-console-edition/9p03kg6z0065",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 29.99,
    "discount_percent": 25,
    "historical_low_price": 20,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_satisfactory_steam",
    "game_id": "satisfactory",
    "platform_id": "steam",
    "store_app_id": "526870",
    "store_url": "https://store.steampowered.com/app/526870/Satisfactory/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 33.99,
    "discount_percent": 15,
    "historical_low_price": 20,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 68200,
    "peak_players_24h": 92070,
    "all_time_peak_players": 259160,
    "rating_positive_percent": 97.4,
    "review_count": 162000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_satisfactory_epic",
    "game_id": "satisfactory",
    "platform_id": "epic",
    "store_app_id": "satisfactory",
    "store_url": "https://store.epicgames.com/p/satisfactory",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 33.99,
    "discount_percent": 15,
    "historical_low_price": 20,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 45000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_lethal_company_steam",
    "game_id": "lethal-company",
    "platform_id": "steam",
    "store_app_id": "1966720",
    "store_url": "https://store.steampowered.com/app/1966720/Lethal_Company/",
    "currency": "USD",
    "original_price": 9.99,
    "current_price": 6.99,
    "discount_percent": 30,
    "historical_low_price": 6.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 15400,
    "peak_players_24h": 20790,
    "all_time_peak_players": 58520,
    "rating_positive_percent": 97.1,
    "review_count": 395000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_phasmophobia_steam",
    "game_id": "phasmophobia",
    "platform_id": "steam",
    "store_app_id": "739630",
    "store_url": "https://store.steampowered.com/app/739630/Phasmophobia/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 15.99,
    "discount_percent": 20,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 22100,
    "peak_players_24h": 29835,
    "all_time_peak_players": 83980,
    "rating_positive_percent": 96.2,
    "review_count": 560000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_phasmophobia_playstation",
    "game_id": "phasmophobia",
    "platform_id": "playstation",
    "store_app_id": "CUSA41200_00",
    "store_url": "https://store.playstation.com/concept/200011",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 15.99,
    "discount_percent": 20,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 32000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_phasmophobia_xbox",
    "game_id": "phasmophobia",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490S8",
    "store_url": "https://www.xbox.com/games/store/phasmophobia/9nxp44l490s8",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 15.99,
    "discount_percent": 20,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 28000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_by_daylight_steam",
    "game_id": "dead-by-daylight",
    "platform_id": "steam",
    "store_app_id": "381210",
    "store_url": "https://store.steampowered.com/app/381210/Dead_by_Daylight/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 43200,
    "peak_players_24h": 58320,
    "all_time_peak_players": 164160,
    "rating_positive_percent": 84.1,
    "review_count": 540000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_by_daylight_epic",
    "game_id": "dead-by-daylight",
    "platform_id": "epic",
    "store_app_id": "dead-by-daylight",
    "store_url": "https://store.epicgames.com/p/dead-by-daylight",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 83,
    "review_count": 42000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_by_daylight_playstation",
    "game_id": "dead-by-daylight",
    "platform_id": "playstation",
    "store_app_id": "CUSA08444_00",
    "store_url": "https://store.playstation.com/concept/200012",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 110000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_by_daylight_xbox",
    "game_id": "dead-by-daylight",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490S9",
    "store_url": "https://www.xbox.com/games/store/dead-by-daylight/9nxp44l490s9",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 84,
    "review_count": 95000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_by_daylight_nintendo",
    "game_id": "dead-by-daylight",
    "platform_id": "nintendo",
    "store_app_id": "70010000018872",
    "store_url": "https://www.nintendo.com/store/products/dead-by-daylight-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 11.99,
    "discount_percent": 60,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 80,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hunt_showdown_1896_steam",
    "game_id": "hunt-showdown-1896",
    "platform_id": "steam",
    "store_app_id": "594650",
    "store_url": "https://store.steampowered.com/app/594650/Hunt_Showdown_1896/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 28500,
    "peak_players_24h": 38475,
    "all_time_peak_players": 108300,
    "rating_positive_percent": 83.2,
    "review_count": 162000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hunt_showdown_1896_playstation",
    "game_id": "hunt-showdown-1896",
    "platform_id": "playstation",
    "store_app_id": "PPSA21890_00",
    "store_url": "https://store.playstation.com/concept/200013",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 34000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hunt_showdown_1896_xbox",
    "game_id": "hunt-showdown-1896",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T1",
    "store_url": "https://www.xbox.com/games/store/hunt-showdown-1896/9nxp44l490t1",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 81,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_balatro_steam",
    "game_id": "balatro",
    "platform_id": "steam",
    "store_app_id": "2379780",
    "store_url": "https://store.steampowered.com/app/2379780/Balatro/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 13.49,
    "discount_percent": 10,
    "historical_low_price": 7.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 19800,
    "peak_players_24h": 26730,
    "all_time_peak_players": 75240,
    "rating_positive_percent": 97.4,
    "review_count": 68000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_balatro_playstation",
    "game_id": "balatro",
    "platform_id": "playstation",
    "store_app_id": "PPSA19780_00",
    "store_url": "https://store.playstation.com/concept/200014",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 13.49,
    "discount_percent": 10,
    "historical_low_price": 7.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_balatro_xbox",
    "game_id": "balatro",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T2",
    "store_url": "https://www.xbox.com/games/store/balatro/9nxp44l490t2",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 13.49,
    "discount_percent": 10,
    "historical_low_price": 7.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 16000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_balatro_nintendo",
    "game_id": "balatro",
    "platform_id": "nintendo",
    "store_app_id": "70010000072049",
    "store_url": "https://www.nintendo.com/store/products/balatro-switch/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 13.49,
    "discount_percent": 10,
    "historical_low_price": 7.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_cult_of_the_lamb_steam",
    "game_id": "cult-of-the-lamb",
    "platform_id": "steam",
    "store_app_id": "1313140",
    "store_url": "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 11200,
    "peak_players_24h": 15120,
    "all_time_peak_players": 42560,
    "rating_positive_percent": 93.5,
    "review_count": 78000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_cult_of_the_lamb_gog",
    "game_id": "cult-of-the-lamb",
    "platform_id": "gog",
    "store_app_id": "cult_of_the_lamb",
    "store_url": "https://www.gog.com/game/cult_of_the_lamb",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 4500,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_cult_of_the_lamb_playstation",
    "game_id": "cult-of-the-lamb",
    "platform_id": "playstation",
    "store_app_id": "CUSA33280_00",
    "store_url": "https://store.playstation.com/concept/200015",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_cult_of_the_lamb_xbox",
    "game_id": "cult-of-the-lamb",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T3",
    "store_url": "https://www.xbox.com/games/store/cult-of-the-lamb/9nxp44l490t3",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 22000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_cult_of_the_lamb_nintendo",
    "game_id": "cult-of-the-lamb",
    "platform_id": "nintendo",
    "store_app_id": "70010000047249",
    "store_url": "https://www.nintendo.com/store/products/cult-of-the-lamb-switch/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 31000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_inscryption_steam",
    "game_id": "inscryption",
    "platform_id": "steam",
    "store_app_id": "1075200",
    "store_url": "https://store.steampowered.com/app/1075200/Inscryption/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 3800,
    "peak_players_24h": 5130,
    "all_time_peak_players": 14440,
    "rating_positive_percent": 96.6,
    "review_count": 112000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_inscryption_gog",
    "game_id": "inscryption",
    "platform_id": "gog",
    "store_app_id": "inscryption",
    "store_url": "https://www.gog.com/game/inscryption",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 5200,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_inscryption_playstation",
    "game_id": "inscryption",
    "platform_id": "playstation",
    "store_app_id": "PPSA07480_00",
    "store_url": "https://store.playstation.com/concept/200016",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_inscryption_xbox",
    "game_id": "inscryption",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T4",
    "store_url": "https://www.xbox.com/games/store/inscryption/9nxp44l490t4",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 15000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_inscryption_nintendo",
    "game_id": "inscryption",
    "platform_id": "nintendo",
    "store_app_id": "70010000057280",
    "store_url": "https://www.nintendo.com/store/products/inscryption-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 7.99,
    "discount_percent": 60,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 19000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_risk_of_rain_2_steam",
    "game_id": "risk-of-rain-2",
    "platform_id": "steam",
    "store_app_id": "632360",
    "store_url": "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 14200,
    "peak_players_24h": 19170,
    "all_time_peak_players": 53960,
    "rating_positive_percent": 93.2,
    "review_count": 185000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_risk_of_rain_2_playstation",
    "game_id": "risk-of-rain-2",
    "platform_id": "playstation",
    "store_app_id": "CUSA14960_00",
    "store_url": "https://store.playstation.com/concept/200017",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_risk_of_rain_2_xbox",
    "game_id": "risk-of-rain-2",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T5",
    "store_url": "https://www.xbox.com/games/store/risk-of-rain-2/9nxp44l490t5",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_risk_of_rain_2_nintendo",
    "game_id": "risk-of-rain-2",
    "platform_id": "nintendo",
    "store_app_id": "70010000018598",
    "store_url": "https://www.nintendo.com/store/products/risk-of-rain-2-switch/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 12.49,
    "discount_percent": 50,
    "historical_low_price": 12.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 21000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_binding_of_isaac_rebirth_steam",
    "game_id": "the-binding-of-isaac-rebirth",
    "platform_id": "steam",
    "store_app_id": "250900",
    "store_url": "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 9.99,
    "discount_percent": 33,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 18200,
    "peak_players_24h": 24570,
    "all_time_peak_players": 69160,
    "rating_positive_percent": 97.4,
    "review_count": 260000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_binding_of_isaac_rebirth_playstation",
    "game_id": "the-binding-of-isaac-rebirth",
    "platform_id": "playstation",
    "store_app_id": "CUSA00790_00",
    "store_url": "https://store.playstation.com/concept/200018",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 9.99,
    "discount_percent": 33,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 48000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_binding_of_isaac_rebirth_xbox",
    "game_id": "the-binding-of-isaac-rebirth",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T6",
    "store_url": "https://www.xbox.com/games/store/the-binding-of-isaac-rebirth/9nxp44l490t6",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 9.99,
    "discount_percent": 33,
    "historical_low_price": 9.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 32000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_binding_of_isaac_rebirth_nintendo",
    "game_id": "the-binding-of-isaac-rebirth",
    "platform_id": "nintendo",
    "store_app_id": "70010000000854",
    "store_url": "https://www.nintendo.com/store/products/the-binding-of-isaac-afterbirth-plus-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 24.99,
    "discount_percent": 37,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 38000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_enter_the_gungeon_steam",
    "game_id": "enter-the-gungeon",
    "platform_id": "steam",
    "store_app_id": "311690",
    "store_url": "https://store.steampowered.com/app/311690/Enter_the_Gungeon/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.49,
    "discount_percent": 70,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 4100,
    "peak_players_24h": 5535,
    "all_time_peak_players": 15580,
    "rating_positive_percent": 95.8,
    "review_count": 75000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_enter_the_gungeon_gog",
    "game_id": "enter-the-gungeon",
    "platform_id": "gog",
    "store_app_id": "enter_the_gungeon",
    "store_url": "https://www.gog.com/game/enter_the_gungeon",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.49,
    "discount_percent": 70,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 4100,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_enter_the_gungeon_epic",
    "game_id": "enter-the-gungeon",
    "platform_id": "epic",
    "store_app_id": "enter-the-gungeon",
    "store_url": "https://store.epicgames.com/p/enter-the-gungeon",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.49,
    "discount_percent": 70,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 12000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_enter_the_gungeon_playstation",
    "game_id": "enter-the-gungeon",
    "platform_id": "playstation",
    "store_app_id": "CUSA01608_00",
    "store_url": "https://store.playstation.com/concept/200019",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.49,
    "discount_percent": 70,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 28000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_enter_the_gungeon_xbox",
    "game_id": "enter-the-gungeon",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T7",
    "store_url": "https://www.xbox.com/games/store/enter-the-gungeon/9nxp44l490t7",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.49,
    "discount_percent": 70,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 22000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_enter_the_gungeon_nintendo",
    "game_id": "enter-the-gungeon",
    "platform_id": "nintendo",
    "store_app_id": "70010000001859",
    "store_url": "https://www.nintendo.com/store/products/enter-the-gungeon-switch/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.49,
    "discount_percent": 70,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 34000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_vampire_survivors_steam",
    "game_id": "vampire-survivors",
    "platform_id": "steam",
    "store_app_id": "1794680",
    "store_url": "https://store.steampowered.com/app/1794680/Vampire_Survivors/",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 3.74,
    "discount_percent": 25,
    "historical_low_price": 2.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 12500,
    "peak_players_24h": 16875,
    "all_time_peak_players": 47500,
    "rating_positive_percent": 98.3,
    "review_count": 220000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_vampire_survivors_playstation",
    "game_id": "vampire-survivors",
    "platform_id": "playstation",
    "store_app_id": "PPSA20840_00",
    "store_url": "https://store.playstation.com/concept/200020",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 3.74,
    "discount_percent": 25,
    "historical_low_price": 2.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_vampire_survivors_xbox",
    "game_id": "vampire-survivors",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T8",
    "store_url": "https://www.xbox.com/games/store/vampire-survivors/9nxp44l490t8",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 3.74,
    "discount_percent": 25,
    "historical_low_price": 2.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_vampire_survivors_nintendo",
    "game_id": "vampire-survivors",
    "platform_id": "nintendo",
    "store_app_id": "70010000067644",
    "store_url": "https://www.nintendo.com/store/products/vampire-survivors-switch/",
    "currency": "USD",
    "original_price": 4.99,
    "current_price": 3.74,
    "discount_percent": 25,
    "historical_low_price": 2.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 98,
    "review_count": 31000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_divinity_original_sin_2_steam",
    "game_id": "divinity-original-sin-2",
    "platform_id": "steam",
    "store_app_id": "435150",
    "store_url": "https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/",
    "currency": "USD",
    "original_price": 44.99,
    "current_price": 13.49,
    "discount_percent": 70,
    "historical_low_price": 13.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 16400,
    "peak_players_24h": 22140,
    "all_time_peak_players": 62320,
    "rating_positive_percent": 95.3,
    "review_count": 158000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_divinity_original_sin_2_gog",
    "game_id": "divinity-original-sin-2",
    "platform_id": "gog",
    "store_app_id": "divinity_original_sin_2",
    "store_url": "https://www.gog.com/game/divinity_original_sin_2",
    "currency": "USD",
    "original_price": 44.99,
    "current_price": 13.49,
    "discount_percent": 70,
    "historical_low_price": 13.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_divinity_original_sin_2_playstation",
    "game_id": "divinity-original-sin-2",
    "platform_id": "playstation",
    "store_app_id": "CUSA12620_00",
    "store_url": "https://store.playstation.com/concept/200021",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 17.99,
    "discount_percent": 70,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 42000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_divinity_original_sin_2_xbox",
    "game_id": "divinity-original-sin-2",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490T9",
    "store_url": "https://www.xbox.com/games/store/divinity-original-sin-2-definitive-edition/9nxp44l490t9",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 17.99,
    "discount_percent": 70,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 31000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_divinity_original_sin_2_nintendo",
    "game_id": "divinity-original-sin-2",
    "platform_id": "nintendo",
    "store_app_id": "70010000021876",
    "store_url": "https://www.nintendo.com/store/products/divinity-original-sin-2-definitive-edition-switch/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 19000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_outer_worlds_steam",
    "game_id": "the-outer-worlds",
    "platform_id": "steam",
    "store_app_id": "578650",
    "store_url": "https://store.steampowered.com/app/578650/The_Outer_Worlds/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 2400,
    "peak_players_24h": 3240,
    "all_time_peak_players": 9120,
    "rating_positive_percent": 84.4,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_outer_worlds_gog",
    "game_id": "the-outer-worlds",
    "platform_id": "gog",
    "store_app_id": "the_outer_worlds",
    "store_url": "https://www.gog.com/game/the_outer_worlds",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 3100,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_outer_worlds_playstation",
    "game_id": "the-outer-worlds",
    "platform_id": "playstation",
    "store_app_id": "CUSA16180_00",
    "store_url": "https://store.playstation.com/concept/200022",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 84,
    "review_count": 34000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_outer_worlds_xbox",
    "game_id": "the-outer-worlds",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U1",
    "store_url": "https://www.xbox.com/games/store/the-outer-worlds/9nxp44l490u1",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 48000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_the_outer_worlds_nintendo",
    "game_id": "the-outer-worlds",
    "platform_id": "nintendo",
    "store_app_id": "70010000019623",
    "store_url": "https://www.nintendo.com/store/products/the-outer-worlds-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 76,
    "review_count": 11000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dragon_quest_11_s_steam",
    "game_id": "dragon-quest-11-s",
    "platform_id": "steam",
    "store_app_id": "1295510",
    "store_url": "https://store.steampowered.com/app/1295510/DRAGON_QUEST_XI_S_Echoes_of_an_Elusive_Age__Definitive_Edition/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 3200,
    "peak_players_24h": 4320,
    "all_time_peak_players": 12160,
    "rating_positive_percent": 93.6,
    "review_count": 16000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dragon_quest_11_s_playstation",
    "game_id": "dragon-quest-11-s",
    "platform_id": "playstation",
    "store_app_id": "CUSA18800_00",
    "store_url": "https://store.playstation.com/concept/200023",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dragon_quest_11_s_xbox",
    "game_id": "dragon-quest-11-s",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U2",
    "store_url": "https://www.xbox.com/games/store/dragon-quest-xi-s-echoes-of-an-elusive-age-definitive-edition/9nxp44l490u2",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 22000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dragon_quest_11_s_nintendo",
    "game_id": "dragon-quest-11-s",
    "platform_id": "nintendo",
    "store_app_id": "70010000008544",
    "store_url": "https://www.nintendo.com/store/products/dragon-quest-xi-s-echoes-of-an-elusive-age-definitive-edition-switch/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_nier_automata_steam",
    "game_id": "nier-automata",
    "platform_id": "steam",
    "store_app_id": "524220",
    "store_url": "https://store.steampowered.com/app/524220/NieRAutomata/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 6800,
    "peak_players_24h": 9180,
    "all_time_peak_players": 25840,
    "rating_positive_percent": 93.4,
    "review_count": 92000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_nier_automata_playstation",
    "game_id": "nier-automata",
    "platform_id": "playstation",
    "store_app_id": "CUSA04551_00",
    "store_url": "https://store.playstation.com/concept/200024",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 78000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_nier_automata_xbox",
    "game_id": "nier-automata",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U3",
    "store_url": "https://www.xbox.com/games/store/nier-automata-become-as-gods-edition/9nxp44l490u3",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_nier_automata_nintendo",
    "game_id": "nier-automata",
    "platform_id": "nintendo",
    "store_app_id": "70010000053982",
    "store_url": "https://www.nintendo.com/store/products/nier-automata-the-end-of-yorha-edition-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_final_fantasy_16_playstation",
    "game_id": "final-fantasy-16",
    "platform_id": "playstation",
    "store_app_id": "PPSA10664_00",
    "store_url": "https://store.playstation.com/concept/10002100",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 34.99,
    "discount_percent": 50,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 110000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_final_fantasy_16_steam",
    "game_id": "final-fantasy-16",
    "platform_id": "steam",
    "store_app_id": "2515020",
    "store_url": "https://store.steampowered.com/app/2515020/FINAL_FANTASY_XVI/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 39.99,
    "discount_percent": 20,
    "historical_low_price": 25,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 18200,
    "peak_players_24h": 24570,
    "all_time_peak_players": 69160,
    "rating_positive_percent": 88.2,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_final_fantasy_7_rebirth_playstation",
    "game_id": "final-fantasy-7-rebirth",
    "platform_id": "playstation",
    "store_app_id": "PPSA08666_00",
    "store_url": "https://store.playstation.com/concept/10003999",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 49.69,
    "discount_percent": 29,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 88000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_chrono_trigger_steam",
    "game_id": "chrono-trigger",
    "platform_id": "steam",
    "store_app_id": "613830",
    "store_url": "https://store.steampowered.com/app/613830/CHRONO_TRIGGER/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 7.49,
    "discount_percent": 50,
    "historical_low_price": 7.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 1200,
    "peak_players_24h": 1620,
    "all_time_peak_players": 4560,
    "rating_positive_percent": 94.2,
    "review_count": 19000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_persona_4_golden_steam",
    "game_id": "persona-4-golden",
    "platform_id": "steam",
    "store_app_id": "1113000",
    "store_url": "https://store.steampowered.com/app/1113000/Persona_4_Golden/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 4100,
    "peak_players_24h": 5535,
    "all_time_peak_players": 15580,
    "rating_positive_percent": 97.1,
    "review_count": 68000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_persona_4_golden_playstation",
    "game_id": "persona-4-golden",
    "platform_id": "playstation",
    "store_app_id": "CUSA33780_00",
    "store_url": "https://store.playstation.com/concept/200028",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_persona_4_golden_xbox",
    "game_id": "persona-4-golden",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U4",
    "store_url": "https://www.xbox.com/games/store/persona-4-golden/9nxp44l490u4",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_persona_4_golden_nintendo",
    "game_id": "persona-4-golden",
    "platform_id": "nintendo",
    "store_app_id": "70010000057474",
    "store_url": "https://www.nintendo.com/store/products/persona-4-golden-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 11.99,
    "discount_percent": 40,
    "historical_low_price": 11.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_yakuza_0_steam",
    "game_id": "yakuza-0",
    "platform_id": "steam",
    "store_app_id": "638970",
    "store_url": "https://store.steampowered.com/app/638970/Yakuza_0/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 6.99,
    "discount_percent": 65,
    "historical_low_price": 6.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 4800,
    "peak_players_24h": 6480,
    "all_time_peak_players": 18240,
    "rating_positive_percent": 95.4,
    "review_count": 72000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_yakuza_0_gog",
    "game_id": "yakuza-0",
    "platform_id": "gog",
    "store_app_id": "yakuza_0",
    "store_url": "https://www.gog.com/game/yakuza_0",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 6.99,
    "discount_percent": 65,
    "historical_low_price": 6.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 3800,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_yakuza_0_playstation",
    "game_id": "yakuza-0",
    "platform_id": "playstation",
    "store_app_id": "CUSA05070_00",
    "store_url": "https://store.playstation.com/concept/200029",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 6.99,
    "discount_percent": 65,
    "historical_low_price": 6.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 48000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_yakuza_0_xbox",
    "game_id": "yakuza-0",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U5",
    "store_url": "https://www.xbox.com/games/store/yakuza-0/9nxp44l490u5",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 6.99,
    "discount_percent": 65,
    "historical_low_price": 6.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 31000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_like_a_dragon_infinite_wealth_steam",
    "game_id": "like-a-dragon-infinite-wealth",
    "platform_id": "steam",
    "store_app_id": "2072450",
    "store_url": "https://store.steampowered.com/app/2072450/Like_a_Dragon_Infinite_Wealth/",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 41.99,
    "discount_percent": 40,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 8400,
    "peak_players_24h": 11340,
    "all_time_peak_players": 31920,
    "rating_positive_percent": 92.5,
    "review_count": 22000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_like_a_dragon_infinite_wealth_playstation",
    "game_id": "like-a-dragon-infinite-wealth",
    "platform_id": "playstation",
    "store_app_id": "PPSA10230_00",
    "store_url": "https://store.playstation.com/concept/200030",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 41.99,
    "discount_percent": 40,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_like_a_dragon_infinite_wealth_xbox",
    "game_id": "like-a-dragon-infinite-wealth",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U6",
    "store_url": "https://www.xbox.com/games/store/like-a-dragon-infinite-wealth/9nxp44l490u6",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 41.99,
    "discount_percent": 40,
    "historical_low_price": 41.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_resident_evil_village_steam",
    "game_id": "resident-evil-village",
    "platform_id": "steam",
    "store_app_id": "1196590",
    "store_url": "https://store.steampowered.com/app/1196590/Resident_Evil_Village/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 6200,
    "peak_players_24h": 8370,
    "all_time_peak_players": 23560,
    "rating_positive_percent": 95.2,
    "review_count": 88000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_resident_evil_village_playstation",
    "game_id": "resident-evil-village",
    "platform_id": "playstation",
    "store_app_id": "PPSA01556_00",
    "store_url": "https://store.playstation.com/concept/200031",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 76000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_resident_evil_village_xbox",
    "game_id": "resident-evil-village",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U7",
    "store_url": "https://www.xbox.com/games/store/resident-evil-village/9nxp44l490u7",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 45000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_resident_evil_village_nintendo",
    "game_id": "resident-evil-village",
    "platform_id": "nintendo",
    "store_app_id": "70010000055106",
    "store_url": "https://www.nintendo.com/store/products/resident-evil-village-cloud-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo Cloud Version",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 82,
    "review_count": 8500,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_space_remake_steam",
    "game_id": "dead-space-remake",
    "platform_id": "steam",
    "store_app_id": "1693980",
    "store_url": "https://store.steampowered.com/app/1693980/Dead_Space/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 17.99,
    "discount_percent": 70,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 4600,
    "peak_players_24h": 6210,
    "all_time_peak_players": 17480,
    "rating_positive_percent": 92.4,
    "review_count": 38000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_space_remake_epic",
    "game_id": "dead-space-remake",
    "platform_id": "epic",
    "store_app_id": "dead-space",
    "store_url": "https://store.epicgames.com/p/dead-space",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 17.99,
    "discount_percent": 70,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "EA App via Epic",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 11000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_space_remake_playstation",
    "game_id": "dead-space-remake",
    "platform_id": "playstation",
    "store_app_id": "PPSA05230_00",
    "store_url": "https://store.playstation.com/concept/200032",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 20.99,
    "discount_percent": 70,
    "historical_low_price": 20.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 42000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dead_space_remake_xbox",
    "game_id": "dead-space-remake",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U8",
    "store_url": "https://www.xbox.com/games/store/dead-space/9nxp44l490u8",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 20.99,
    "discount_percent": 70,
    "historical_low_price": 20.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / EA Play",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_alien_isolation_steam",
    "game_id": "alien-isolation",
    "platform_id": "steam",
    "store_app_id": "214490",
    "store_url": "https://store.steampowered.com/app/214490/Alien_Isolation/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 2800,
    "peak_players_24h": 3780,
    "all_time_peak_players": 10640,
    "rating_positive_percent": 92.8,
    "review_count": 62000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_alien_isolation_gog",
    "game_id": "alien-isolation",
    "platform_id": "gog",
    "store_app_id": "alien_isolation",
    "store_url": "https://www.gog.com/game/alien_isolation",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 4200,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_alien_isolation_epic",
    "game_id": "alien-isolation",
    "platform_id": "epic",
    "store_app_id": "alien-isolation",
    "store_url": "https://store.epicgames.com/p/alien-isolation",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_alien_isolation_playstation",
    "game_id": "alien-isolation",
    "platform_id": "playstation",
    "store_app_id": "CUSA00201_00",
    "store_url": "https://store.playstation.com/concept/200033",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 38000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_alien_isolation_xbox",
    "game_id": "alien-isolation",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490U9",
    "store_url": "https://www.xbox.com/games/store/alien-isolation/9nxp44l490u9",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 7.99,
    "discount_percent": 80,
    "historical_low_price": 7.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_alien_isolation_nintendo",
    "game_id": "alien-isolation",
    "platform_id": "nintendo",
    "store_app_id": "70010000017325",
    "store_url": "https://www.nintendo.com/store/products/alien-isolation-switch/",
    "currency": "USD",
    "original_price": 34.99,
    "current_price": 14.99,
    "discount_percent": 57,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 12000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_signalis_steam",
    "game_id": "signalis",
    "platform_id": "steam",
    "store_app_id": "1262350",
    "store_url": "https://store.steampowered.com/app/1262350/SIGNALIS/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 1600,
    "peak_players_24h": 2160,
    "all_time_peak_players": 6080,
    "rating_positive_percent": 96.5,
    "review_count": 21000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_signalis_gog",
    "game_id": "signalis",
    "platform_id": "gog",
    "store_app_id": "signalis",
    "store_url": "https://www.gog.com/game/signalis",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 2400,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_signalis_playstation",
    "game_id": "signalis",
    "platform_id": "playstation",
    "store_app_id": "CUSA35160_00",
    "store_url": "https://store.playstation.com/concept/200034",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 8500,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_signalis_xbox",
    "game_id": "signalis",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V1",
    "store_url": "https://www.xbox.com/games/store/signalis/9nxp44l490v1",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 6800,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_signalis_nintendo",
    "game_id": "signalis",
    "platform_id": "nintendo",
    "store_app_id": "70010000049286",
    "store_url": "https://www.nintendo.com/store/products/signalis-switch/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.99,
    "discount_percent": 30,
    "historical_low_price": 13.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 7900,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_sons_of_the_forest_steam",
    "game_id": "sons-of-the-forest",
    "platform_id": "steam",
    "store_app_id": "1326470",
    "store_url": "https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 16.49,
    "discount_percent": 45,
    "historical_low_price": 16.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 18400,
    "peak_players_24h": 24840,
    "all_time_peak_players": 69920,
    "rating_positive_percent": 86.4,
    "review_count": 195000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_project_zomboid_steam",
    "game_id": "project-zomboid",
    "platform_id": "steam",
    "store_app_id": "108600",
    "store_url": "https://store.steampowered.com/app/108600/Project_Zomboid/",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.39,
    "discount_percent": 33,
    "historical_low_price": 13.39,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 26500,
    "peak_players_24h": 35775,
    "all_time_peak_players": 100700,
    "rating_positive_percent": 94.1,
    "review_count": 245000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_project_zomboid_gog",
    "game_id": "project-zomboid",
    "platform_id": "gog",
    "store_app_id": "project_zomboid",
    "store_url": "https://www.gog.com/game/project_zomboid",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 13.39,
    "discount_percent": 33,
    "historical_low_price": 13.39,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 11000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dont_starve_together_steam",
    "game_id": "dont-starve-together",
    "platform_id": "steam",
    "store_app_id": "322330",
    "store_url": "https://store.steampowered.com/app/322330/Dont_Starve_Together/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.99,
    "discount_percent": 66,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 38400,
    "peak_players_24h": 51840,
    "all_time_peak_players": 145920,
    "rating_positive_percent": 95.8,
    "review_count": 310000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dont_starve_together_playstation",
    "game_id": "dont-starve-together",
    "platform_id": "playstation",
    "store_app_id": "CUSA05160_00",
    "store_url": "https://store.playstation.com/concept/200037",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.99,
    "discount_percent": 66,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 42000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dont_starve_together_xbox",
    "game_id": "dont-starve-together",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V2",
    "store_url": "https://www.xbox.com/games/store/dont-starve-together-console-edition/9nxp44l490v2",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.99,
    "discount_percent": 66,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 35000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_dont_starve_together_nintendo",
    "game_id": "dont-starve-together",
    "platform_id": "nintendo",
    "store_app_id": "70010000049586",
    "store_url": "https://www.nintendo.com/store/products/dont-starve-together-switch/",
    "currency": "USD",
    "original_price": 14.99,
    "current_price": 4.99,
    "discount_percent": 66,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_titanfall_2_steam",
    "game_id": "titanfall-2",
    "platform_id": "steam",
    "store_app_id": "1237970",
    "store_url": "https://store.steampowered.com/app/1237970/Titanfall_2/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 4.49,
    "discount_percent": 85,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "EA App via Steam",
    "is_available": true,
    "current_players": 4500,
    "peak_players_24h": 6075,
    "all_time_peak_players": 17100,
    "rating_positive_percent": 94.6,
    "review_count": 198000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_titanfall_2_playstation",
    "game_id": "titanfall-2",
    "platform_id": "playstation",
    "store_app_id": "CUSA04013_00",
    "store_url": "https://store.playstation.com/concept/200038",
    "currency": "USD",
    "original_price": 19.99,
    "current_price": 4.99,
    "discount_percent": 75,
    "historical_low_price": 4.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 88000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_titanfall_2_xbox",
    "game_id": "titanfall-2",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V3",
    "store_url": "https://www.xbox.com/games/store/titanfall-2-ultimate-edition/9nxp44l490v3",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 4.49,
    "discount_percent": 85,
    "historical_low_price": 4.49,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / EA Play",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 76000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_apex_legends_steam",
    "game_id": "apex-legends",
    "platform_id": "steam",
    "store_app_id": "1172470",
    "store_url": "https://store.steampowered.com/app/1172470/Apex_Legends/",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2024-11-28",
    "drm_type": "EA App via Steam",
    "is_available": true,
    "current_players": 145000,
    "peak_players_24h": 195750,
    "all_time_peak_players": 551000,
    "rating_positive_percent": 81.5,
    "review_count": 820000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_apex_legends_playstation",
    "game_id": "apex-legends",
    "platform_id": "playstation",
    "store_app_id": "CUSA12540_00",
    "store_url": "https://store.playstation.com/concept/200039",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 86,
    "review_count": 290000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_apex_legends_xbox",
    "game_id": "apex-legends",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V4",
    "store_url": "https://www.xbox.com/games/store/apex-legends/9nxp44l490v4",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 240000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_apex_legends_nintendo",
    "game_id": "apex-legends",
    "platform_id": "nintendo",
    "store_app_id": "70010000028564",
    "store_url": "https://www.nintendo.com/store/products/apex-legends-switch/",
    "currency": "USD",
    "original_price": 0,
    "current_price": 0,
    "discount_percent": 0,
    "historical_low_price": 0,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 80,
    "review_count": 68000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_space_marine_2_steam",
    "game_id": "space-marine-2",
    "platform_id": "steam",
    "store_app_id": "2183900",
    "store_url": "https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 47.99,
    "discount_percent": 20,
    "historical_low_price": 30,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 48500,
    "peak_players_24h": 65475,
    "all_time_peak_players": 184300,
    "rating_positive_percent": 84.5,
    "review_count": 88000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_space_marine_2_epic",
    "game_id": "space-marine-2",
    "platform_id": "epic",
    "store_app_id": "warhammer-40000-space-marine-2",
    "store_url": "https://store.epicgames.com/p/warhammer-40000-space-marine-2",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 47.99,
    "discount_percent": 20,
    "historical_low_price": 30,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 83,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_space_marine_2_playstation",
    "game_id": "space-marine-2",
    "platform_id": "playstation",
    "store_app_id": "PPSA04609_01",
    "store_url": "https://store.playstation.com/concept/200040",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 55.99,
    "discount_percent": 20,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 85,
    "review_count": 46000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_space_marine_2_xbox",
    "game_id": "space-marine-2",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V5",
    "store_url": "https://www.xbox.com/games/store/warhammer-40000-space-marine-2/9nxp44l490v5",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 55.99,
    "discount_percent": 20,
    "historical_low_price": 34.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 84,
    "review_count": 39000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_sifu_steam",
    "game_id": "sifu",
    "platform_id": "steam",
    "store_app_id": "2138710",
    "store_url": "https://store.steampowered.com/app/2138710/Sifu/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 3800,
    "peak_players_24h": 5130,
    "all_time_peak_players": 14440,
    "rating_positive_percent": 92.4,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_sifu_epic",
    "game_id": "sifu",
    "platform_id": "epic",
    "store_app_id": "sifu",
    "store_url": "https://store.epicgames.com/p/sifu",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_sifu_playstation",
    "game_id": "sifu",
    "platform_id": "playstation",
    "store_app_id": "CUSA25761_00",
    "store_url": "https://store.playstation.com/concept/200041",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 42000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_sifu_xbox",
    "game_id": "sifu",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V6",
    "store_url": "https://www.xbox.com/games/store/sifu/9nxp44l490v6",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 15.99,
    "discount_percent": 60,
    "historical_low_price": 15.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_sifu_nintendo",
    "game_id": "sifu",
    "platform_id": "nintendo",
    "store_app_id": "70010000057288",
    "store_url": "https://www.nintendo.com/store/products/sifu-switch/",
    "currency": "USD",
    "original_price": 39.99,
    "current_price": 19.99,
    "discount_percent": 50,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 88,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hi_fi_rush_steam",
    "game_id": "hi-fi-rush",
    "platform_id": "steam",
    "store_app_id": "1817230",
    "store_url": "https://store.steampowered.com/app/1817230/HiFi_RUSH/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 2600,
    "peak_players_24h": 3510,
    "all_time_peak_players": 9880,
    "rating_positive_percent": 97.2,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hi_fi_rush_epic",
    "game_id": "hi-fi-rush",
    "platform_id": "epic",
    "store_app_id": "hi-fi-rush",
    "store_url": "https://store.epicgames.com/p/hi-fi-rush",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 4500,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hi_fi_rush_xbox",
    "game_id": "hi-fi-rush",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V7",
    "store_url": "https://www.xbox.com/games/store/hi-fi-rush/9nxp44l490v7",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 36000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_hi_fi_rush_playstation",
    "game_id": "hi-fi-rush",
    "platform_id": "playstation",
    "store_app_id": "PPSA17480_00",
    "store_url": "https://store.playstation.com/concept/200042",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 97,
    "review_count": 22000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_returnal_playstation",
    "game_id": "returnal",
    "platform_id": "playstation",
    "store_app_id": "PPSA01284_00",
    "store_url": "https://store.playstation.com/concept/200043",
    "currency": "USD",
    "original_price": 69.99,
    "current_price": 29.39,
    "discount_percent": 58,
    "historical_low_price": 29.39,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 90,
    "review_count": 68000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_returnal_steam",
    "game_id": "returnal",
    "platform_id": "steam",
    "store_app_id": "1895880",
    "store_url": "https://store.steampowered.com/app/1895880/Returnal/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 35.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 3200,
    "peak_players_24h": 4320,
    "all_time_peak_players": 12160,
    "rating_positive_percent": 88.3,
    "review_count": 14000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_returnal_epic",
    "game_id": "returnal",
    "platform_id": "epic",
    "store_app_id": "returnal",
    "store_url": "https://store.epicgames.com/p/returnal",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 35.99,
    "discount_percent": 40,
    "historical_low_price": 35.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Epic DRM",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 87,
    "review_count": 3200,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_stray_steam",
    "game_id": "stray",
    "platform_id": "steam",
    "store_app_id": "1332010",
    "store_url": "https://store.steampowered.com/app/1332010/Stray/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 4100,
    "peak_players_24h": 5535,
    "all_time_peak_players": 15580,
    "rating_positive_percent": 97.4,
    "review_count": 142000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_stray_playstation",
    "game_id": "stray",
    "platform_id": "playstation",
    "store_app_id": "CUSA24890_00",
    "store_url": "https://store.playstation.com/concept/200044",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 76000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_stray_xbox",
    "game_id": "stray",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V8",
    "store_url": "https://www.xbox.com/games/store/stray/9nxp44l490v8",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 17.99,
    "discount_percent": 40,
    "historical_low_price": 17.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 32000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_stray_nintendo",
    "game_id": "stray",
    "platform_id": "nintendo",
    "store_app_id": "70010000078244",
    "store_url": "https://www.nintendo.com/store/products/stray-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 23.99,
    "discount_percent": 20,
    "historical_low_price": 15,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 16000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_tunic_steam",
    "game_id": "tunic",
    "platform_id": "steam",
    "store_app_id": "553420",
    "store_url": "https://store.steampowered.com/app/553420/TUNIC/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 1800,
    "peak_players_24h": 2430,
    "all_time_peak_players": 6840,
    "rating_positive_percent": 93.1,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_tunic_gog",
    "game_id": "tunic",
    "platform_id": "gog",
    "store_app_id": "tunic",
    "store_url": "https://www.gog.com/game/tunic",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 2800,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_tunic_playstation",
    "game_id": "tunic",
    "platform_id": "playstation",
    "store_app_id": "CUSA33880_00",
    "store_url": "https://store.playstation.com/concept/200045",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_tunic_xbox",
    "game_id": "tunic",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490V9",
    "store_url": "https://www.xbox.com/games/store/tunic/9nxp44l490v9",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 24000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_tunic_nintendo",
    "game_id": "tunic",
    "platform_id": "nintendo",
    "store_app_id": "70010000057294",
    "store_url": "https://www.nintendo.com/store/products/tunic-switch/",
    "currency": "USD",
    "original_price": 29.99,
    "current_price": 14.99,
    "discount_percent": 50,
    "historical_low_price": 14.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 94,
    "review_count": 21000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_animal_well_steam",
    "game_id": "animal-well",
    "platform_id": "steam",
    "store_app_id": "813230",
    "store_url": "https://store.steampowered.com/app/813230/ANIMAL_WELL/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 19.99,
    "discount_percent": 20,
    "historical_low_price": 12.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 3400,
    "peak_players_24h": 4590,
    "all_time_peak_players": 12920,
    "rating_positive_percent": 96.2,
    "review_count": 18000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_animal_well_playstation",
    "game_id": "animal-well",
    "platform_id": "playstation",
    "store_app_id": "PPSA15860_00",
    "store_url": "https://store.playstation.com/concept/200046",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 19.99,
    "discount_percent": 20,
    "historical_low_price": 12.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 95,
    "review_count": 12000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_animal_well_nintendo",
    "game_id": "animal-well",
    "platform_id": "nintendo",
    "store_app_id": "70010000057302",
    "store_url": "https://www.nintendo.com/store/products/animal-well-switch/",
    "currency": "USD",
    "original_price": 24.99,
    "current_price": 19.99,
    "discount_percent": 20,
    "historical_low_price": 12.5,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 16000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_a_plague_tale_requiem_steam",
    "game_id": "a-plague-tale-requiem",
    "platform_id": "steam",
    "store_app_id": "1443810",
    "store_url": "https://store.steampowered.com/app/1443810/A_Plague_Tale_Requiem/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 19.99,
    "discount_percent": 60,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 2800,
    "peak_players_24h": 3780,
    "all_time_peak_players": 10640,
    "rating_positive_percent": 91.5,
    "review_count": 42000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_a_plague_tale_requiem_gog",
    "game_id": "a-plague-tale-requiem",
    "platform_id": "gog",
    "store_app_id": "a_plague_tale_requiem",
    "store_url": "https://www.gog.com/game/a_plague_tale_requiem",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 19.99,
    "discount_percent": 60,
    "historical_low_price": 19.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "DRM-Free",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 3600,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_a_plague_tale_requiem_playstation",
    "game_id": "a-plague-tale-requiem",
    "platform_id": "playstation",
    "store_app_id": "PPSA04113_00",
    "store_url": "https://store.playstation.com/concept/200047",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 92,
    "review_count": 38000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_a_plague_tale_requiem_xbox",
    "game_id": "a-plague-tale-requiem",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490W1",
    "store_url": "https://www.xbox.com/games/store/a-plague-tale-requiem/9nxp44l490w1",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 23.99,
    "discount_percent": 60,
    "historical_low_price": 23.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 91,
    "review_count": 31000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_super_smash_bros_ultimate_nintendo",
    "game_id": "super-smash-bros-ultimate",
    "platform_id": "nintendo",
    "store_app_id": "70010000012332",
    "store_url": "https://www.nintendo.com/store/products/super-smash-bros-ultimate-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 59.99,
    "discount_percent": 0,
    "historical_low_price": 30,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 96,
    "review_count": 210000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_metroid_dread_nintendo",
    "game_id": "metroid-dread",
    "platform_id": "nintendo",
    "store_app_id": "70010000042924",
    "store_url": "https://www.nintendo.com/store/products/metroid-dread-switch/",
    "currency": "USD",
    "original_price": 59.99,
    "current_price": 39.99,
    "discount_percent": 33,
    "historical_low_price": 39.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Nintendo eShop",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 93,
    "review_count": 74000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_crusader_kings_3_steam",
    "game_id": "crusader-kings-3",
    "platform_id": "steam",
    "store_app_id": "1158310",
    "store_url": "https://store.steampowered.com/app/1158310/Crusader_Kings_III/",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Steamworks",
    "is_available": true,
    "current_players": 24800,
    "peak_players_24h": 33480,
    "all_time_peak_players": 94240,
    "rating_positive_percent": 92.4,
    "review_count": 122000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_crusader_kings_3_playstation",
    "game_id": "crusader-kings-3",
    "platform_id": "playstation",
    "store_app_id": "PPSA03330_00",
    "store_url": "https://store.playstation.com/concept/200050",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "PlayStation Network",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 88,
    "review_count": 26000,
    "updated_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "listing_crusader_kings_3_xbox",
    "game_id": "crusader-kings-3",
    "platform_id": "xbox",
    "store_app_id": "9NXP44L490W2",
    "store_url": "https://www.xbox.com/games/store/crusader-kings-iii/9nxp44l490w2",
    "currency": "USD",
    "original_price": 49.99,
    "current_price": 24.99,
    "discount_percent": 50,
    "historical_low_price": 24.99,
    "historical_low_date": "2024-11-28",
    "drm_type": "Xbox Live / Game Pass",
    "is_available": true,
    "current_players": 0,
    "peak_players_24h": 0,
    "all_time_peak_players": 0,
    "rating_positive_percent": 89,
    "review_count": 29000,
    "updated_at": "2026-09-24T12:00:00Z"
  }
];

export const BATCH3_PRICE_HISTORIES: { game_id: string; history: PriceHistoryPoint[] }[] = [
  {
    "game_id": "minecraft",
    "history": [
      {
        "id": 5001,
        "listing_id": "listing_minecraft_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5002,
        "listing_id": "listing_minecraft_xbox",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5003,
        "listing_id": "listing_minecraft_xbox",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5004,
        "listing_id": "listing_minecraft_playstation",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5005,
        "listing_id": "listing_minecraft_playstation",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5006,
        "listing_id": "listing_minecraft_playstation",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5007,
        "listing_id": "listing_minecraft_nintendo",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5008,
        "listing_id": "listing_minecraft_nintendo",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5009,
        "listing_id": "listing_minecraft_nintendo",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "valheim",
    "history": [
      {
        "id": 5010,
        "listing_id": "listing_valheim_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5011,
        "listing_id": "listing_valheim_steam",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5012,
        "listing_id": "listing_valheim_steam",
        "recorded_date": "2026-09-20",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5013,
        "listing_id": "listing_valheim_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5014,
        "listing_id": "listing_valheim_xbox",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5015,
        "listing_id": "listing_valheim_xbox",
        "recorded_date": "2026-09-20",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "bloodborne",
    "history": [
      {
        "id": 5016,
        "listing_id": "listing_bloodborne_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5017,
        "listing_id": "listing_bloodborne_playstation",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5018,
        "listing_id": "listing_bloodborne_playstation",
        "recorded_date": "2026-09-20",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "demons-souls",
    "history": [
      {
        "id": 5019,
        "listing_id": "listing_demons_souls_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5020,
        "listing_id": "listing_demons_souls_playstation",
        "recorded_date": "2024-06-27",
        "price": 29.39,
        "discount_percent": 58,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5021,
        "listing_id": "listing_demons_souls_playstation",
        "recorded_date": "2026-09-20",
        "price": 29.39,
        "discount_percent": 58,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "no-mans-sky",
    "history": [
      {
        "id": 5022,
        "listing_id": "listing_no_mans_sky_steam",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5023,
        "listing_id": "listing_no_mans_sky_steam",
        "recorded_date": "2024-06-27",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5024,
        "listing_id": "listing_no_mans_sky_steam",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5025,
        "listing_id": "listing_no_mans_sky_gog",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5026,
        "listing_id": "listing_no_mans_sky_gog",
        "recorded_date": "2024-06-27",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5027,
        "listing_id": "listing_no_mans_sky_gog",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5028,
        "listing_id": "listing_no_mans_sky_playstation",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5029,
        "listing_id": "listing_no_mans_sky_playstation",
        "recorded_date": "2024-06-27",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5030,
        "listing_id": "listing_no_mans_sky_playstation",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5031,
        "listing_id": "listing_no_mans_sky_xbox",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5032,
        "listing_id": "listing_no_mans_sky_xbox",
        "recorded_date": "2024-06-27",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5033,
        "listing_id": "listing_no_mans_sky_xbox",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5034,
        "listing_id": "listing_no_mans_sky_nintendo",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5035,
        "listing_id": "listing_no_mans_sky_nintendo",
        "recorded_date": "2024-06-27",
        "price": 29.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5036,
        "listing_id": "listing_no_mans_sky_nintendo",
        "recorded_date": "2026-09-20",
        "price": 29.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "rust",
    "history": [
      {
        "id": 5037,
        "listing_id": "listing_rust_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5038,
        "listing_id": "listing_rust_steam",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5039,
        "listing_id": "listing_rust_steam",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5040,
        "listing_id": "listing_rust_playstation",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5041,
        "listing_id": "listing_rust_playstation",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5042,
        "listing_id": "listing_rust_playstation",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5043,
        "listing_id": "listing_rust_xbox",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5044,
        "listing_id": "listing_rust_xbox",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5045,
        "listing_id": "listing_rust_xbox",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "factorio",
    "history": [
      {
        "id": 5046,
        "listing_id": "listing_factorio_steam",
        "recorded_date": "2023-11-15",
        "price": 35,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5047,
        "listing_id": "listing_factorio_steam",
        "recorded_date": "2024-06-27",
        "price": 17.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5048,
        "listing_id": "listing_factorio_steam",
        "recorded_date": "2026-09-20",
        "price": 35,
        "discount_percent": 0,
        "event_name": "Regular Price"
      },
      {
        "id": 5049,
        "listing_id": "listing_factorio_gog",
        "recorded_date": "2023-11-15",
        "price": 35,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5050,
        "listing_id": "listing_factorio_gog",
        "recorded_date": "2024-06-27",
        "price": 17.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5051,
        "listing_id": "listing_factorio_gog",
        "recorded_date": "2026-09-20",
        "price": 35,
        "discount_percent": 0,
        "event_name": "Regular Price"
      },
      {
        "id": 5052,
        "listing_id": "listing_factorio_nintendo",
        "recorded_date": "2023-11-15",
        "price": 35,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5053,
        "listing_id": "listing_factorio_nintendo",
        "recorded_date": "2024-06-27",
        "price": 17.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5054,
        "listing_id": "listing_factorio_nintendo",
        "recorded_date": "2026-09-20",
        "price": 35,
        "discount_percent": 0,
        "event_name": "Regular Price"
      }
    ]
  },
  {
    "game_id": "rimworld",
    "history": [
      {
        "id": 5055,
        "listing_id": "listing_rimworld_steam",
        "recorded_date": "2023-11-15",
        "price": 34.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5056,
        "listing_id": "listing_rimworld_steam",
        "recorded_date": "2024-06-27",
        "price": 17.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5057,
        "listing_id": "listing_rimworld_steam",
        "recorded_date": "2026-09-20",
        "price": 27.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5058,
        "listing_id": "listing_rimworld_gog",
        "recorded_date": "2023-11-15",
        "price": 34.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5059,
        "listing_id": "listing_rimworld_gog",
        "recorded_date": "2024-06-27",
        "price": 17.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5060,
        "listing_id": "listing_rimworld_gog",
        "recorded_date": "2026-09-20",
        "price": 27.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5061,
        "listing_id": "listing_rimworld_playstation",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5062,
        "listing_id": "listing_rimworld_playstation",
        "recorded_date": "2024-06-27",
        "price": 20,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5063,
        "listing_id": "listing_rimworld_playstation",
        "recorded_date": "2026-09-20",
        "price": 29.99,
        "discount_percent": 25,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5064,
        "listing_id": "listing_rimworld_xbox",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5065,
        "listing_id": "listing_rimworld_xbox",
        "recorded_date": "2024-06-27",
        "price": 20,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5066,
        "listing_id": "listing_rimworld_xbox",
        "recorded_date": "2026-09-20",
        "price": 29.99,
        "discount_percent": 25,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "satisfactory",
    "history": [
      {
        "id": 5067,
        "listing_id": "listing_satisfactory_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5068,
        "listing_id": "listing_satisfactory_steam",
        "recorded_date": "2024-06-27",
        "price": 20,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5069,
        "listing_id": "listing_satisfactory_steam",
        "recorded_date": "2026-09-20",
        "price": 33.99,
        "discount_percent": 15,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5070,
        "listing_id": "listing_satisfactory_epic",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5071,
        "listing_id": "listing_satisfactory_epic",
        "recorded_date": "2024-06-27",
        "price": 20,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5072,
        "listing_id": "listing_satisfactory_epic",
        "recorded_date": "2026-09-20",
        "price": 33.99,
        "discount_percent": 15,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "lethal-company",
    "history": [
      {
        "id": 5073,
        "listing_id": "listing_lethal_company_steam",
        "recorded_date": "2023-11-15",
        "price": 9.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5074,
        "listing_id": "listing_lethal_company_steam",
        "recorded_date": "2024-06-27",
        "price": 6.99,
        "discount_percent": 30,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5075,
        "listing_id": "listing_lethal_company_steam",
        "recorded_date": "2026-09-20",
        "price": 6.99,
        "discount_percent": 30,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "phasmophobia",
    "history": [
      {
        "id": 5076,
        "listing_id": "listing_phasmophobia_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5077,
        "listing_id": "listing_phasmophobia_steam",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5078,
        "listing_id": "listing_phasmophobia_steam",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5079,
        "listing_id": "listing_phasmophobia_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5080,
        "listing_id": "listing_phasmophobia_playstation",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5081,
        "listing_id": "listing_phasmophobia_playstation",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5082,
        "listing_id": "listing_phasmophobia_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5083,
        "listing_id": "listing_phasmophobia_xbox",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5084,
        "listing_id": "listing_phasmophobia_xbox",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "dead-by-daylight",
    "history": [
      {
        "id": 5085,
        "listing_id": "listing_dead_by_daylight_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5086,
        "listing_id": "listing_dead_by_daylight_steam",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5087,
        "listing_id": "listing_dead_by_daylight_steam",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5088,
        "listing_id": "listing_dead_by_daylight_epic",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5089,
        "listing_id": "listing_dead_by_daylight_epic",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5090,
        "listing_id": "listing_dead_by_daylight_epic",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5091,
        "listing_id": "listing_dead_by_daylight_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5092,
        "listing_id": "listing_dead_by_daylight_playstation",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5093,
        "listing_id": "listing_dead_by_daylight_playstation",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5094,
        "listing_id": "listing_dead_by_daylight_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5095,
        "listing_id": "listing_dead_by_daylight_xbox",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5096,
        "listing_id": "listing_dead_by_daylight_xbox",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5097,
        "listing_id": "listing_dead_by_daylight_nintendo",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5098,
        "listing_id": "listing_dead_by_daylight_nintendo",
        "recorded_date": "2024-06-27",
        "price": 11.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5099,
        "listing_id": "listing_dead_by_daylight_nintendo",
        "recorded_date": "2026-09-20",
        "price": 11.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "hunt-showdown-1896",
    "history": [
      {
        "id": 5100,
        "listing_id": "listing_hunt_showdown_1896_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5101,
        "listing_id": "listing_hunt_showdown_1896_steam",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5102,
        "listing_id": "listing_hunt_showdown_1896_steam",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5103,
        "listing_id": "listing_hunt_showdown_1896_playstation",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5104,
        "listing_id": "listing_hunt_showdown_1896_playstation",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5105,
        "listing_id": "listing_hunt_showdown_1896_playstation",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5106,
        "listing_id": "listing_hunt_showdown_1896_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5107,
        "listing_id": "listing_hunt_showdown_1896_xbox",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5108,
        "listing_id": "listing_hunt_showdown_1896_xbox",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "balatro",
    "history": [
      {
        "id": 5109,
        "listing_id": "listing_balatro_steam",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5110,
        "listing_id": "listing_balatro_steam",
        "recorded_date": "2024-06-27",
        "price": 7.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5111,
        "listing_id": "listing_balatro_steam",
        "recorded_date": "2026-09-20",
        "price": 13.49,
        "discount_percent": 10,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5112,
        "listing_id": "listing_balatro_playstation",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5113,
        "listing_id": "listing_balatro_playstation",
        "recorded_date": "2024-06-27",
        "price": 7.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5114,
        "listing_id": "listing_balatro_playstation",
        "recorded_date": "2026-09-20",
        "price": 13.49,
        "discount_percent": 10,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5115,
        "listing_id": "listing_balatro_xbox",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5116,
        "listing_id": "listing_balatro_xbox",
        "recorded_date": "2024-06-27",
        "price": 7.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5117,
        "listing_id": "listing_balatro_xbox",
        "recorded_date": "2026-09-20",
        "price": 13.49,
        "discount_percent": 10,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5118,
        "listing_id": "listing_balatro_nintendo",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5119,
        "listing_id": "listing_balatro_nintendo",
        "recorded_date": "2024-06-27",
        "price": 7.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5120,
        "listing_id": "listing_balatro_nintendo",
        "recorded_date": "2026-09-20",
        "price": 13.49,
        "discount_percent": 10,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "cult-of-the-lamb",
    "history": [
      {
        "id": 5121,
        "listing_id": "listing_cult_of_the_lamb_steam",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5122,
        "listing_id": "listing_cult_of_the_lamb_steam",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5123,
        "listing_id": "listing_cult_of_the_lamb_steam",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5124,
        "listing_id": "listing_cult_of_the_lamb_gog",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5125,
        "listing_id": "listing_cult_of_the_lamb_gog",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5126,
        "listing_id": "listing_cult_of_the_lamb_gog",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5127,
        "listing_id": "listing_cult_of_the_lamb_playstation",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5128,
        "listing_id": "listing_cult_of_the_lamb_playstation",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5129,
        "listing_id": "listing_cult_of_the_lamb_playstation",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5130,
        "listing_id": "listing_cult_of_the_lamb_xbox",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5131,
        "listing_id": "listing_cult_of_the_lamb_xbox",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5132,
        "listing_id": "listing_cult_of_the_lamb_xbox",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5133,
        "listing_id": "listing_cult_of_the_lamb_nintendo",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5134,
        "listing_id": "listing_cult_of_the_lamb_nintendo",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5135,
        "listing_id": "listing_cult_of_the_lamb_nintendo",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "inscryption",
    "history": [
      {
        "id": 5136,
        "listing_id": "listing_inscryption_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5137,
        "listing_id": "listing_inscryption_steam",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5138,
        "listing_id": "listing_inscryption_steam",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5139,
        "listing_id": "listing_inscryption_gog",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5140,
        "listing_id": "listing_inscryption_gog",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5141,
        "listing_id": "listing_inscryption_gog",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5142,
        "listing_id": "listing_inscryption_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5143,
        "listing_id": "listing_inscryption_playstation",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5144,
        "listing_id": "listing_inscryption_playstation",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5145,
        "listing_id": "listing_inscryption_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5146,
        "listing_id": "listing_inscryption_xbox",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5147,
        "listing_id": "listing_inscryption_xbox",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5148,
        "listing_id": "listing_inscryption_nintendo",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5149,
        "listing_id": "listing_inscryption_nintendo",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5150,
        "listing_id": "listing_inscryption_nintendo",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "risk-of-rain-2",
    "history": [
      {
        "id": 5151,
        "listing_id": "listing_risk_of_rain_2_steam",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5152,
        "listing_id": "listing_risk_of_rain_2_steam",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5153,
        "listing_id": "listing_risk_of_rain_2_steam",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5154,
        "listing_id": "listing_risk_of_rain_2_playstation",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5155,
        "listing_id": "listing_risk_of_rain_2_playstation",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5156,
        "listing_id": "listing_risk_of_rain_2_playstation",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5157,
        "listing_id": "listing_risk_of_rain_2_xbox",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5158,
        "listing_id": "listing_risk_of_rain_2_xbox",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5159,
        "listing_id": "listing_risk_of_rain_2_xbox",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5160,
        "listing_id": "listing_risk_of_rain_2_nintendo",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5161,
        "listing_id": "listing_risk_of_rain_2_nintendo",
        "recorded_date": "2024-06-27",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5162,
        "listing_id": "listing_risk_of_rain_2_nintendo",
        "recorded_date": "2026-09-20",
        "price": 12.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "the-binding-of-isaac-rebirth",
    "history": [
      {
        "id": 5163,
        "listing_id": "listing_the_binding_of_isaac_rebirth_steam",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5164,
        "listing_id": "listing_the_binding_of_isaac_rebirth_steam",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5165,
        "listing_id": "listing_the_binding_of_isaac_rebirth_steam",
        "recorded_date": "2026-09-20",
        "price": 9.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5166,
        "listing_id": "listing_the_binding_of_isaac_rebirth_playstation",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5167,
        "listing_id": "listing_the_binding_of_isaac_rebirth_playstation",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5168,
        "listing_id": "listing_the_binding_of_isaac_rebirth_playstation",
        "recorded_date": "2026-09-20",
        "price": 9.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5169,
        "listing_id": "listing_the_binding_of_isaac_rebirth_xbox",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5170,
        "listing_id": "listing_the_binding_of_isaac_rebirth_xbox",
        "recorded_date": "2024-06-27",
        "price": 9.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5171,
        "listing_id": "listing_the_binding_of_isaac_rebirth_xbox",
        "recorded_date": "2026-09-20",
        "price": 9.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5172,
        "listing_id": "listing_the_binding_of_isaac_rebirth_nintendo",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5173,
        "listing_id": "listing_the_binding_of_isaac_rebirth_nintendo",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 38,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5174,
        "listing_id": "listing_the_binding_of_isaac_rebirth_nintendo",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 37,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "enter-the-gungeon",
    "history": [
      {
        "id": 5175,
        "listing_id": "listing_enter_the_gungeon_steam",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5176,
        "listing_id": "listing_enter_the_gungeon_steam",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5177,
        "listing_id": "listing_enter_the_gungeon_steam",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5178,
        "listing_id": "listing_enter_the_gungeon_gog",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5179,
        "listing_id": "listing_enter_the_gungeon_gog",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5180,
        "listing_id": "listing_enter_the_gungeon_gog",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5181,
        "listing_id": "listing_enter_the_gungeon_epic",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5182,
        "listing_id": "listing_enter_the_gungeon_epic",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5183,
        "listing_id": "listing_enter_the_gungeon_epic",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5184,
        "listing_id": "listing_enter_the_gungeon_playstation",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5185,
        "listing_id": "listing_enter_the_gungeon_playstation",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5186,
        "listing_id": "listing_enter_the_gungeon_playstation",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5187,
        "listing_id": "listing_enter_the_gungeon_xbox",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5188,
        "listing_id": "listing_enter_the_gungeon_xbox",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5189,
        "listing_id": "listing_enter_the_gungeon_xbox",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5190,
        "listing_id": "listing_enter_the_gungeon_nintendo",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5191,
        "listing_id": "listing_enter_the_gungeon_nintendo",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5192,
        "listing_id": "listing_enter_the_gungeon_nintendo",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "vampire-survivors",
    "history": [
      {
        "id": 5193,
        "listing_id": "listing_vampire_survivors_steam",
        "recorded_date": "2023-11-15",
        "price": 4.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5194,
        "listing_id": "listing_vampire_survivors_steam",
        "recorded_date": "2024-06-27",
        "price": 2.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5195,
        "listing_id": "listing_vampire_survivors_steam",
        "recorded_date": "2026-09-20",
        "price": 3.74,
        "discount_percent": 25,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5196,
        "listing_id": "listing_vampire_survivors_playstation",
        "recorded_date": "2023-11-15",
        "price": 4.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5197,
        "listing_id": "listing_vampire_survivors_playstation",
        "recorded_date": "2024-06-27",
        "price": 2.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5198,
        "listing_id": "listing_vampire_survivors_playstation",
        "recorded_date": "2026-09-20",
        "price": 3.74,
        "discount_percent": 25,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5199,
        "listing_id": "listing_vampire_survivors_xbox",
        "recorded_date": "2023-11-15",
        "price": 4.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5200,
        "listing_id": "listing_vampire_survivors_xbox",
        "recorded_date": "2024-06-27",
        "price": 2.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5201,
        "listing_id": "listing_vampire_survivors_xbox",
        "recorded_date": "2026-09-20",
        "price": 3.74,
        "discount_percent": 25,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5202,
        "listing_id": "listing_vampire_survivors_nintendo",
        "recorded_date": "2023-11-15",
        "price": 4.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5203,
        "listing_id": "listing_vampire_survivors_nintendo",
        "recorded_date": "2024-06-27",
        "price": 2.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5204,
        "listing_id": "listing_vampire_survivors_nintendo",
        "recorded_date": "2026-09-20",
        "price": 3.74,
        "discount_percent": 25,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "divinity-original-sin-2",
    "history": [
      {
        "id": 5205,
        "listing_id": "listing_divinity_original_sin_2_steam",
        "recorded_date": "2023-11-15",
        "price": 44.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5206,
        "listing_id": "listing_divinity_original_sin_2_steam",
        "recorded_date": "2024-06-27",
        "price": 13.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5207,
        "listing_id": "listing_divinity_original_sin_2_steam",
        "recorded_date": "2026-09-20",
        "price": 13.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5208,
        "listing_id": "listing_divinity_original_sin_2_gog",
        "recorded_date": "2023-11-15",
        "price": 44.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5209,
        "listing_id": "listing_divinity_original_sin_2_gog",
        "recorded_date": "2024-06-27",
        "price": 13.49,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5210,
        "listing_id": "listing_divinity_original_sin_2_gog",
        "recorded_date": "2026-09-20",
        "price": 13.49,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5211,
        "listing_id": "listing_divinity_original_sin_2_playstation",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5212,
        "listing_id": "listing_divinity_original_sin_2_playstation",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5213,
        "listing_id": "listing_divinity_original_sin_2_playstation",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5214,
        "listing_id": "listing_divinity_original_sin_2_xbox",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5215,
        "listing_id": "listing_divinity_original_sin_2_xbox",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5216,
        "listing_id": "listing_divinity_original_sin_2_xbox",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5217,
        "listing_id": "listing_divinity_original_sin_2_nintendo",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5218,
        "listing_id": "listing_divinity_original_sin_2_nintendo",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5219,
        "listing_id": "listing_divinity_original_sin_2_nintendo",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "the-outer-worlds",
    "history": [
      {
        "id": 5220,
        "listing_id": "listing_the_outer_worlds_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5221,
        "listing_id": "listing_the_outer_worlds_steam",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5222,
        "listing_id": "listing_the_outer_worlds_steam",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5223,
        "listing_id": "listing_the_outer_worlds_gog",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5224,
        "listing_id": "listing_the_outer_worlds_gog",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5225,
        "listing_id": "listing_the_outer_worlds_gog",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5226,
        "listing_id": "listing_the_outer_worlds_playstation",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5227,
        "listing_id": "listing_the_outer_worlds_playstation",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5228,
        "listing_id": "listing_the_outer_worlds_playstation",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5229,
        "listing_id": "listing_the_outer_worlds_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5230,
        "listing_id": "listing_the_outer_worlds_xbox",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5231,
        "listing_id": "listing_the_outer_worlds_xbox",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5232,
        "listing_id": "listing_the_outer_worlds_nintendo",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5233,
        "listing_id": "listing_the_outer_worlds_nintendo",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5234,
        "listing_id": "listing_the_outer_worlds_nintendo",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "dragon-quest-11-s",
    "history": [
      {
        "id": 5235,
        "listing_id": "listing_dragon_quest_11_s_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5236,
        "listing_id": "listing_dragon_quest_11_s_steam",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5237,
        "listing_id": "listing_dragon_quest_11_s_steam",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5238,
        "listing_id": "listing_dragon_quest_11_s_playstation",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5239,
        "listing_id": "listing_dragon_quest_11_s_playstation",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5240,
        "listing_id": "listing_dragon_quest_11_s_playstation",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5241,
        "listing_id": "listing_dragon_quest_11_s_xbox",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5242,
        "listing_id": "listing_dragon_quest_11_s_xbox",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5243,
        "listing_id": "listing_dragon_quest_11_s_xbox",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5244,
        "listing_id": "listing_dragon_quest_11_s_nintendo",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5245,
        "listing_id": "listing_dragon_quest_11_s_nintendo",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5246,
        "listing_id": "listing_dragon_quest_11_s_nintendo",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "nier-automata",
    "history": [
      {
        "id": 5247,
        "listing_id": "listing_nier_automata_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5248,
        "listing_id": "listing_nier_automata_steam",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5249,
        "listing_id": "listing_nier_automata_steam",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5250,
        "listing_id": "listing_nier_automata_playstation",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5251,
        "listing_id": "listing_nier_automata_playstation",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5252,
        "listing_id": "listing_nier_automata_playstation",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5253,
        "listing_id": "listing_nier_automata_xbox",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5254,
        "listing_id": "listing_nier_automata_xbox",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5255,
        "listing_id": "listing_nier_automata_xbox",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5256,
        "listing_id": "listing_nier_automata_nintendo",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5257,
        "listing_id": "listing_nier_automata_nintendo",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5258,
        "listing_id": "listing_nier_automata_nintendo",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "final-fantasy-16",
    "history": [
      {
        "id": 5259,
        "listing_id": "listing_final_fantasy_16_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5260,
        "listing_id": "listing_final_fantasy_16_playstation",
        "recorded_date": "2024-06-27",
        "price": 34.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5261,
        "listing_id": "listing_final_fantasy_16_playstation",
        "recorded_date": "2026-09-20",
        "price": 34.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5262,
        "listing_id": "listing_final_fantasy_16_steam",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5263,
        "listing_id": "listing_final_fantasy_16_steam",
        "recorded_date": "2024-06-27",
        "price": 25,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5264,
        "listing_id": "listing_final_fantasy_16_steam",
        "recorded_date": "2026-09-20",
        "price": 39.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "final-fantasy-7-rebirth",
    "history": [
      {
        "id": 5265,
        "listing_id": "listing_final_fantasy_7_rebirth_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5266,
        "listing_id": "listing_final_fantasy_7_rebirth_playstation",
        "recorded_date": "2024-06-27",
        "price": 34.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5267,
        "listing_id": "listing_final_fantasy_7_rebirth_playstation",
        "recorded_date": "2026-09-20",
        "price": 49.69,
        "discount_percent": 29,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "chrono-trigger",
    "history": [
      {
        "id": 5268,
        "listing_id": "listing_chrono_trigger_steam",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5269,
        "listing_id": "listing_chrono_trigger_steam",
        "recorded_date": "2024-06-27",
        "price": 7.49,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5270,
        "listing_id": "listing_chrono_trigger_steam",
        "recorded_date": "2026-09-20",
        "price": 7.49,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "persona-4-golden",
    "history": [
      {
        "id": 5271,
        "listing_id": "listing_persona_4_golden_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5272,
        "listing_id": "listing_persona_4_golden_steam",
        "recorded_date": "2024-06-27",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5273,
        "listing_id": "listing_persona_4_golden_steam",
        "recorded_date": "2026-09-20",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5274,
        "listing_id": "listing_persona_4_golden_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5275,
        "listing_id": "listing_persona_4_golden_playstation",
        "recorded_date": "2024-06-27",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5276,
        "listing_id": "listing_persona_4_golden_playstation",
        "recorded_date": "2026-09-20",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5277,
        "listing_id": "listing_persona_4_golden_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5278,
        "listing_id": "listing_persona_4_golden_xbox",
        "recorded_date": "2024-06-27",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5279,
        "listing_id": "listing_persona_4_golden_xbox",
        "recorded_date": "2026-09-20",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5280,
        "listing_id": "listing_persona_4_golden_nintendo",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5281,
        "listing_id": "listing_persona_4_golden_nintendo",
        "recorded_date": "2024-06-27",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5282,
        "listing_id": "listing_persona_4_golden_nintendo",
        "recorded_date": "2026-09-20",
        "price": 11.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "yakuza-0",
    "history": [
      {
        "id": 5283,
        "listing_id": "listing_yakuza_0_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5284,
        "listing_id": "listing_yakuza_0_steam",
        "recorded_date": "2024-06-27",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5285,
        "listing_id": "listing_yakuza_0_steam",
        "recorded_date": "2026-09-20",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5286,
        "listing_id": "listing_yakuza_0_gog",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5287,
        "listing_id": "listing_yakuza_0_gog",
        "recorded_date": "2024-06-27",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5288,
        "listing_id": "listing_yakuza_0_gog",
        "recorded_date": "2026-09-20",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5289,
        "listing_id": "listing_yakuza_0_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5290,
        "listing_id": "listing_yakuza_0_playstation",
        "recorded_date": "2024-06-27",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5291,
        "listing_id": "listing_yakuza_0_playstation",
        "recorded_date": "2026-09-20",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5292,
        "listing_id": "listing_yakuza_0_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5293,
        "listing_id": "listing_yakuza_0_xbox",
        "recorded_date": "2024-06-27",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5294,
        "listing_id": "listing_yakuza_0_xbox",
        "recorded_date": "2026-09-20",
        "price": 6.99,
        "discount_percent": 65,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "like-a-dragon-infinite-wealth",
    "history": [
      {
        "id": 5295,
        "listing_id": "listing_like_a_dragon_infinite_wealth_steam",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5296,
        "listing_id": "listing_like_a_dragon_infinite_wealth_steam",
        "recorded_date": "2024-06-27",
        "price": 41.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5297,
        "listing_id": "listing_like_a_dragon_infinite_wealth_steam",
        "recorded_date": "2026-09-20",
        "price": 41.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5298,
        "listing_id": "listing_like_a_dragon_infinite_wealth_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5299,
        "listing_id": "listing_like_a_dragon_infinite_wealth_playstation",
        "recorded_date": "2024-06-27",
        "price": 41.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5300,
        "listing_id": "listing_like_a_dragon_infinite_wealth_playstation",
        "recorded_date": "2026-09-20",
        "price": 41.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5301,
        "listing_id": "listing_like_a_dragon_infinite_wealth_xbox",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5302,
        "listing_id": "listing_like_a_dragon_infinite_wealth_xbox",
        "recorded_date": "2024-06-27",
        "price": 41.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5303,
        "listing_id": "listing_like_a_dragon_infinite_wealth_xbox",
        "recorded_date": "2026-09-20",
        "price": 41.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "resident-evil-village",
    "history": [
      {
        "id": 5304,
        "listing_id": "listing_resident_evil_village_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5305,
        "listing_id": "listing_resident_evil_village_steam",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5306,
        "listing_id": "listing_resident_evil_village_steam",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5307,
        "listing_id": "listing_resident_evil_village_playstation",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5308,
        "listing_id": "listing_resident_evil_village_playstation",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5309,
        "listing_id": "listing_resident_evil_village_playstation",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5310,
        "listing_id": "listing_resident_evil_village_xbox",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5311,
        "listing_id": "listing_resident_evil_village_xbox",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5312,
        "listing_id": "listing_resident_evil_village_xbox",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5313,
        "listing_id": "listing_resident_evil_village_nintendo",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5314,
        "listing_id": "listing_resident_evil_village_nintendo",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5315,
        "listing_id": "listing_resident_evil_village_nintendo",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "dead-space-remake",
    "history": [
      {
        "id": 5316,
        "listing_id": "listing_dead_space_remake_steam",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5317,
        "listing_id": "listing_dead_space_remake_steam",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5318,
        "listing_id": "listing_dead_space_remake_steam",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5319,
        "listing_id": "listing_dead_space_remake_epic",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5320,
        "listing_id": "listing_dead_space_remake_epic",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5321,
        "listing_id": "listing_dead_space_remake_epic",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5322,
        "listing_id": "listing_dead_space_remake_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5323,
        "listing_id": "listing_dead_space_remake_playstation",
        "recorded_date": "2024-06-27",
        "price": 20.99,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5324,
        "listing_id": "listing_dead_space_remake_playstation",
        "recorded_date": "2026-09-20",
        "price": 20.99,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5325,
        "listing_id": "listing_dead_space_remake_xbox",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5326,
        "listing_id": "listing_dead_space_remake_xbox",
        "recorded_date": "2024-06-27",
        "price": 20.99,
        "discount_percent": 70,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5327,
        "listing_id": "listing_dead_space_remake_xbox",
        "recorded_date": "2026-09-20",
        "price": 20.99,
        "discount_percent": 70,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "alien-isolation",
    "history": [
      {
        "id": 5328,
        "listing_id": "listing_alien_isolation_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5329,
        "listing_id": "listing_alien_isolation_steam",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5330,
        "listing_id": "listing_alien_isolation_steam",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5331,
        "listing_id": "listing_alien_isolation_gog",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5332,
        "listing_id": "listing_alien_isolation_gog",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5333,
        "listing_id": "listing_alien_isolation_gog",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5334,
        "listing_id": "listing_alien_isolation_epic",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5335,
        "listing_id": "listing_alien_isolation_epic",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5336,
        "listing_id": "listing_alien_isolation_epic",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5337,
        "listing_id": "listing_alien_isolation_playstation",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5338,
        "listing_id": "listing_alien_isolation_playstation",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5339,
        "listing_id": "listing_alien_isolation_playstation",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5340,
        "listing_id": "listing_alien_isolation_xbox",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5341,
        "listing_id": "listing_alien_isolation_xbox",
        "recorded_date": "2024-06-27",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5342,
        "listing_id": "listing_alien_isolation_xbox",
        "recorded_date": "2026-09-20",
        "price": 7.99,
        "discount_percent": 80,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5343,
        "listing_id": "listing_alien_isolation_nintendo",
        "recorded_date": "2023-11-15",
        "price": 34.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5344,
        "listing_id": "listing_alien_isolation_nintendo",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 57,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5345,
        "listing_id": "listing_alien_isolation_nintendo",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 57,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "signalis",
    "history": [
      {
        "id": 5346,
        "listing_id": "listing_signalis_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5347,
        "listing_id": "listing_signalis_steam",
        "recorded_date": "2024-06-27",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5348,
        "listing_id": "listing_signalis_steam",
        "recorded_date": "2026-09-20",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5349,
        "listing_id": "listing_signalis_gog",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5350,
        "listing_id": "listing_signalis_gog",
        "recorded_date": "2024-06-27",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5351,
        "listing_id": "listing_signalis_gog",
        "recorded_date": "2026-09-20",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5352,
        "listing_id": "listing_signalis_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5353,
        "listing_id": "listing_signalis_playstation",
        "recorded_date": "2024-06-27",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5354,
        "listing_id": "listing_signalis_playstation",
        "recorded_date": "2026-09-20",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5355,
        "listing_id": "listing_signalis_xbox",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5356,
        "listing_id": "listing_signalis_xbox",
        "recorded_date": "2024-06-27",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5357,
        "listing_id": "listing_signalis_xbox",
        "recorded_date": "2026-09-20",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5358,
        "listing_id": "listing_signalis_nintendo",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5359,
        "listing_id": "listing_signalis_nintendo",
        "recorded_date": "2024-06-27",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5360,
        "listing_id": "listing_signalis_nintendo",
        "recorded_date": "2026-09-20",
        "price": 13.99,
        "discount_percent": 30,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "sons-of-the-forest",
    "history": [
      {
        "id": 5361,
        "listing_id": "listing_sons_of_the_forest_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5362,
        "listing_id": "listing_sons_of_the_forest_steam",
        "recorded_date": "2024-06-27",
        "price": 16.49,
        "discount_percent": 45,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5363,
        "listing_id": "listing_sons_of_the_forest_steam",
        "recorded_date": "2026-09-20",
        "price": 16.49,
        "discount_percent": 45,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "project-zomboid",
    "history": [
      {
        "id": 5364,
        "listing_id": "listing_project_zomboid_steam",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5365,
        "listing_id": "listing_project_zomboid_steam",
        "recorded_date": "2024-06-27",
        "price": 13.39,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5366,
        "listing_id": "listing_project_zomboid_steam",
        "recorded_date": "2026-09-20",
        "price": 13.39,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5367,
        "listing_id": "listing_project_zomboid_gog",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5368,
        "listing_id": "listing_project_zomboid_gog",
        "recorded_date": "2024-06-27",
        "price": 13.39,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5369,
        "listing_id": "listing_project_zomboid_gog",
        "recorded_date": "2026-09-20",
        "price": 13.39,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "dont-starve-together",
    "history": [
      {
        "id": 5370,
        "listing_id": "listing_dont_starve_together_steam",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5371,
        "listing_id": "listing_dont_starve_together_steam",
        "recorded_date": "2024-06-27",
        "price": 4.99,
        "discount_percent": 67,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5372,
        "listing_id": "listing_dont_starve_together_steam",
        "recorded_date": "2026-09-20",
        "price": 4.99,
        "discount_percent": 66,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5373,
        "listing_id": "listing_dont_starve_together_playstation",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5374,
        "listing_id": "listing_dont_starve_together_playstation",
        "recorded_date": "2024-06-27",
        "price": 4.99,
        "discount_percent": 67,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5375,
        "listing_id": "listing_dont_starve_together_playstation",
        "recorded_date": "2026-09-20",
        "price": 4.99,
        "discount_percent": 66,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5376,
        "listing_id": "listing_dont_starve_together_xbox",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5377,
        "listing_id": "listing_dont_starve_together_xbox",
        "recorded_date": "2024-06-27",
        "price": 4.99,
        "discount_percent": 67,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5378,
        "listing_id": "listing_dont_starve_together_xbox",
        "recorded_date": "2026-09-20",
        "price": 4.99,
        "discount_percent": 66,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5379,
        "listing_id": "listing_dont_starve_together_nintendo",
        "recorded_date": "2023-11-15",
        "price": 14.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5380,
        "listing_id": "listing_dont_starve_together_nintendo",
        "recorded_date": "2024-06-27",
        "price": 4.99,
        "discount_percent": 67,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5381,
        "listing_id": "listing_dont_starve_together_nintendo",
        "recorded_date": "2026-09-20",
        "price": 4.99,
        "discount_percent": 66,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "titanfall-2",
    "history": [
      {
        "id": 5382,
        "listing_id": "listing_titanfall_2_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5383,
        "listing_id": "listing_titanfall_2_steam",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 85,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5384,
        "listing_id": "listing_titanfall_2_steam",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 85,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5385,
        "listing_id": "listing_titanfall_2_playstation",
        "recorded_date": "2023-11-15",
        "price": 19.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5386,
        "listing_id": "listing_titanfall_2_playstation",
        "recorded_date": "2024-06-27",
        "price": 4.99,
        "discount_percent": 75,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5387,
        "listing_id": "listing_titanfall_2_playstation",
        "recorded_date": "2026-09-20",
        "price": 4.99,
        "discount_percent": 75,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5388,
        "listing_id": "listing_titanfall_2_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5389,
        "listing_id": "listing_titanfall_2_xbox",
        "recorded_date": "2024-06-27",
        "price": 4.49,
        "discount_percent": 85,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5390,
        "listing_id": "listing_titanfall_2_xbox",
        "recorded_date": "2026-09-20",
        "price": 4.49,
        "discount_percent": 85,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "apex-legends",
    "history": [
      {
        "id": 5391,
        "listing_id": "listing_apex_legends_steam",
        "recorded_date": "2023-11-15",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5392,
        "listing_id": "listing_apex_legends_steam",
        "recorded_date": "2026-09-20",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5393,
        "listing_id": "listing_apex_legends_playstation",
        "recorded_date": "2023-11-15",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5394,
        "listing_id": "listing_apex_legends_playstation",
        "recorded_date": "2026-09-20",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5395,
        "listing_id": "listing_apex_legends_xbox",
        "recorded_date": "2023-11-15",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5396,
        "listing_id": "listing_apex_legends_xbox",
        "recorded_date": "2026-09-20",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5397,
        "listing_id": "listing_apex_legends_nintendo",
        "recorded_date": "2023-11-15",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      },
      {
        "id": 5398,
        "listing_id": "listing_apex_legends_nintendo",
        "recorded_date": "2026-09-20",
        "price": 0,
        "discount_percent": 0,
        "event_name": "Free to Play"
      }
    ]
  },
  {
    "game_id": "space-marine-2",
    "history": [
      {
        "id": 5399,
        "listing_id": "listing_space_marine_2_steam",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5400,
        "listing_id": "listing_space_marine_2_steam",
        "recorded_date": "2024-06-27",
        "price": 30,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5401,
        "listing_id": "listing_space_marine_2_steam",
        "recorded_date": "2026-09-20",
        "price": 47.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5402,
        "listing_id": "listing_space_marine_2_epic",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5403,
        "listing_id": "listing_space_marine_2_epic",
        "recorded_date": "2024-06-27",
        "price": 30,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5404,
        "listing_id": "listing_space_marine_2_epic",
        "recorded_date": "2026-09-20",
        "price": 47.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5405,
        "listing_id": "listing_space_marine_2_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5406,
        "listing_id": "listing_space_marine_2_playstation",
        "recorded_date": "2024-06-27",
        "price": 34.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5407,
        "listing_id": "listing_space_marine_2_playstation",
        "recorded_date": "2026-09-20",
        "price": 55.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5408,
        "listing_id": "listing_space_marine_2_xbox",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5409,
        "listing_id": "listing_space_marine_2_xbox",
        "recorded_date": "2024-06-27",
        "price": 34.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5410,
        "listing_id": "listing_space_marine_2_xbox",
        "recorded_date": "2026-09-20",
        "price": 55.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "sifu",
    "history": [
      {
        "id": 5411,
        "listing_id": "listing_sifu_steam",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5412,
        "listing_id": "listing_sifu_steam",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5413,
        "listing_id": "listing_sifu_steam",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5414,
        "listing_id": "listing_sifu_epic",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5415,
        "listing_id": "listing_sifu_epic",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5416,
        "listing_id": "listing_sifu_epic",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5417,
        "listing_id": "listing_sifu_playstation",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5418,
        "listing_id": "listing_sifu_playstation",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5419,
        "listing_id": "listing_sifu_playstation",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5420,
        "listing_id": "listing_sifu_xbox",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5421,
        "listing_id": "listing_sifu_xbox",
        "recorded_date": "2024-06-27",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5422,
        "listing_id": "listing_sifu_xbox",
        "recorded_date": "2026-09-20",
        "price": 15.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5423,
        "listing_id": "listing_sifu_nintendo",
        "recorded_date": "2023-11-15",
        "price": 39.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5424,
        "listing_id": "listing_sifu_nintendo",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5425,
        "listing_id": "listing_sifu_nintendo",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "hi-fi-rush",
    "history": [
      {
        "id": 5426,
        "listing_id": "listing_hi_fi_rush_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5427,
        "listing_id": "listing_hi_fi_rush_steam",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5428,
        "listing_id": "listing_hi_fi_rush_steam",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5429,
        "listing_id": "listing_hi_fi_rush_epic",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5430,
        "listing_id": "listing_hi_fi_rush_epic",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5431,
        "listing_id": "listing_hi_fi_rush_epic",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5432,
        "listing_id": "listing_hi_fi_rush_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5433,
        "listing_id": "listing_hi_fi_rush_xbox",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5434,
        "listing_id": "listing_hi_fi_rush_xbox",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5435,
        "listing_id": "listing_hi_fi_rush_playstation",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5436,
        "listing_id": "listing_hi_fi_rush_playstation",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5437,
        "listing_id": "listing_hi_fi_rush_playstation",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "returnal",
    "history": [
      {
        "id": 5438,
        "listing_id": "listing_returnal_playstation",
        "recorded_date": "2023-11-15",
        "price": 69.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5439,
        "listing_id": "listing_returnal_playstation",
        "recorded_date": "2024-06-27",
        "price": 29.39,
        "discount_percent": 58,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5440,
        "listing_id": "listing_returnal_playstation",
        "recorded_date": "2026-09-20",
        "price": 29.39,
        "discount_percent": 58,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5441,
        "listing_id": "listing_returnal_steam",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5442,
        "listing_id": "listing_returnal_steam",
        "recorded_date": "2024-06-27",
        "price": 35.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5443,
        "listing_id": "listing_returnal_steam",
        "recorded_date": "2026-09-20",
        "price": 35.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5444,
        "listing_id": "listing_returnal_epic",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5445,
        "listing_id": "listing_returnal_epic",
        "recorded_date": "2024-06-27",
        "price": 35.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5446,
        "listing_id": "listing_returnal_epic",
        "recorded_date": "2026-09-20",
        "price": 35.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "stray",
    "history": [
      {
        "id": 5447,
        "listing_id": "listing_stray_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5448,
        "listing_id": "listing_stray_steam",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5449,
        "listing_id": "listing_stray_steam",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5450,
        "listing_id": "listing_stray_playstation",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5451,
        "listing_id": "listing_stray_playstation",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5452,
        "listing_id": "listing_stray_playstation",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5453,
        "listing_id": "listing_stray_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5454,
        "listing_id": "listing_stray_xbox",
        "recorded_date": "2024-06-27",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5455,
        "listing_id": "listing_stray_xbox",
        "recorded_date": "2026-09-20",
        "price": 17.99,
        "discount_percent": 40,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5456,
        "listing_id": "listing_stray_nintendo",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5457,
        "listing_id": "listing_stray_nintendo",
        "recorded_date": "2024-06-27",
        "price": 15,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5458,
        "listing_id": "listing_stray_nintendo",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "tunic",
    "history": [
      {
        "id": 5459,
        "listing_id": "listing_tunic_steam",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5460,
        "listing_id": "listing_tunic_steam",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5461,
        "listing_id": "listing_tunic_steam",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5462,
        "listing_id": "listing_tunic_gog",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5463,
        "listing_id": "listing_tunic_gog",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5464,
        "listing_id": "listing_tunic_gog",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5465,
        "listing_id": "listing_tunic_playstation",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5466,
        "listing_id": "listing_tunic_playstation",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5467,
        "listing_id": "listing_tunic_playstation",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5468,
        "listing_id": "listing_tunic_xbox",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5469,
        "listing_id": "listing_tunic_xbox",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5470,
        "listing_id": "listing_tunic_xbox",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5471,
        "listing_id": "listing_tunic_nintendo",
        "recorded_date": "2023-11-15",
        "price": 29.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5472,
        "listing_id": "listing_tunic_nintendo",
        "recorded_date": "2024-06-27",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5473,
        "listing_id": "listing_tunic_nintendo",
        "recorded_date": "2026-09-20",
        "price": 14.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "animal-well",
    "history": [
      {
        "id": 5474,
        "listing_id": "listing_animal_well_steam",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5475,
        "listing_id": "listing_animal_well_steam",
        "recorded_date": "2024-06-27",
        "price": 12.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5476,
        "listing_id": "listing_animal_well_steam",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5477,
        "listing_id": "listing_animal_well_playstation",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5478,
        "listing_id": "listing_animal_well_playstation",
        "recorded_date": "2024-06-27",
        "price": 12.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5479,
        "listing_id": "listing_animal_well_playstation",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5480,
        "listing_id": "listing_animal_well_nintendo",
        "recorded_date": "2023-11-15",
        "price": 24.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5481,
        "listing_id": "listing_animal_well_nintendo",
        "recorded_date": "2024-06-27",
        "price": 12.5,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5482,
        "listing_id": "listing_animal_well_nintendo",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 20,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "a-plague-tale-requiem",
    "history": [
      {
        "id": 5483,
        "listing_id": "listing_a_plague_tale_requiem_steam",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5484,
        "listing_id": "listing_a_plague_tale_requiem_steam",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5485,
        "listing_id": "listing_a_plague_tale_requiem_steam",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5486,
        "listing_id": "listing_a_plague_tale_requiem_gog",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5487,
        "listing_id": "listing_a_plague_tale_requiem_gog",
        "recorded_date": "2024-06-27",
        "price": 19.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5488,
        "listing_id": "listing_a_plague_tale_requiem_gog",
        "recorded_date": "2026-09-20",
        "price": 19.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5489,
        "listing_id": "listing_a_plague_tale_requiem_playstation",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5490,
        "listing_id": "listing_a_plague_tale_requiem_playstation",
        "recorded_date": "2024-06-27",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5491,
        "listing_id": "listing_a_plague_tale_requiem_playstation",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5492,
        "listing_id": "listing_a_plague_tale_requiem_xbox",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5493,
        "listing_id": "listing_a_plague_tale_requiem_xbox",
        "recorded_date": "2024-06-27",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5494,
        "listing_id": "listing_a_plague_tale_requiem_xbox",
        "recorded_date": "2026-09-20",
        "price": 23.99,
        "discount_percent": 60,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "super-smash-bros-ultimate",
    "history": [
      {
        "id": 5495,
        "listing_id": "listing_super_smash_bros_ultimate_nintendo",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5496,
        "listing_id": "listing_super_smash_bros_ultimate_nintendo",
        "recorded_date": "2024-06-27",
        "price": 30,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5497,
        "listing_id": "listing_super_smash_bros_ultimate_nintendo",
        "recorded_date": "2026-09-20",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Regular Price"
      }
    ]
  },
  {
    "game_id": "metroid-dread",
    "history": [
      {
        "id": 5498,
        "listing_id": "listing_metroid_dread_nintendo",
        "recorded_date": "2023-11-15",
        "price": 59.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5499,
        "listing_id": "listing_metroid_dread_nintendo",
        "recorded_date": "2024-06-27",
        "price": 39.99,
        "discount_percent": 33,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5500,
        "listing_id": "listing_metroid_dread_nintendo",
        "recorded_date": "2026-09-20",
        "price": 39.99,
        "discount_percent": 33,
        "event_name": "Current Special Promotion"
      }
    ]
  },
  {
    "game_id": "crusader-kings-3",
    "history": [
      {
        "id": 5501,
        "listing_id": "listing_crusader_kings_3_steam",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5502,
        "listing_id": "listing_crusader_kings_3_steam",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5503,
        "listing_id": "listing_crusader_kings_3_steam",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5504,
        "listing_id": "listing_crusader_kings_3_playstation",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5505,
        "listing_id": "listing_crusader_kings_3_playstation",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5506,
        "listing_id": "listing_crusader_kings_3_playstation",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      },
      {
        "id": 5507,
        "listing_id": "listing_crusader_kings_3_xbox",
        "recorded_date": "2023-11-15",
        "price": 49.99,
        "discount_percent": 0,
        "event_name": "Standard Store Price"
      },
      {
        "id": 5508,
        "listing_id": "listing_crusader_kings_3_xbox",
        "recorded_date": "2024-06-27",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Summer Season Historic Low Promotion"
      },
      {
        "id": 5509,
        "listing_id": "listing_crusader_kings_3_xbox",
        "recorded_date": "2026-09-20",
        "price": 24.99,
        "discount_percent": 50,
        "event_name": "Current Special Promotion"
      }
    ]
  }
];

export const BATCH3_DEVELOPERS: Developer[] = [
  {
    "id": "mojang",
    "name": "Mojang Studios",
    "slug": "mojang-studios",
    "country": "Sweden",
    "founded_year": 2009,
    "website": "https://www.minecraft.net"
  },
  {
    "id": "irongate",
    "name": "Iron Gate Studio",
    "slug": "iron-gate-studio",
    "country": "Sweden",
    "founded_year": 2019,
    "website": "https://irongatestudio.se"
  },
  {
    "id": "bluepoint",
    "name": "Bluepoint Games",
    "slug": "bluepoint-games",
    "country": "United States",
    "founded_year": 2006,
    "website": "https://www.bluepointgames.com"
  },
  {
    "id": "hellogames",
    "name": "Hello Games",
    "slug": "hello-games",
    "country": "United Kingdom",
    "founded_year": 2008,
    "website": "https://hellogames.org"
  },
  {
    "id": "facepunch",
    "name": "Facepunch Studios",
    "slug": "facepunch-studios",
    "country": "United Kingdom",
    "founded_year": 2004,
    "website": "https://facepunch.com"
  },
  {
    "id": "wubesoftware",
    "name": "Wube Software",
    "slug": "wube-software",
    "country": "Czech Republic",
    "founded_year": 2014,
    "website": "https://factorio.com"
  },
  {
    "id": "ludeon",
    "name": "Ludeon Studios",
    "slug": "ludeon-studios",
    "country": "Canada",
    "founded_year": 2013,
    "website": "https://ludeon.com"
  },
  {
    "id": "coffeestainstudios",
    "name": "Coffee Stain Studios",
    "slug": "coffee-stain-studios",
    "country": "Sweden",
    "founded_year": 2010,
    "website": "https://www.coffeestain.com"
  },
  {
    "id": "zeekerss",
    "name": "Zeekerss",
    "slug": "zeekerss",
    "country": "United States",
    "founded_year": 2016,
    "website": "https://zeekerss.com"
  },
  {
    "id": "kineticgames",
    "name": "Kinetic Games",
    "slug": "kinetic-games",
    "country": "United Kingdom",
    "founded_year": 2020,
    "website": "https://kineticgames.co.uk"
  },
  {
    "id": "behaviour",
    "name": "Behaviour Interactive",
    "slug": "behaviour-interactive",
    "country": "Canada",
    "founded_year": 1992,
    "website": "https://www.bhvr.com"
  },
  {
    "id": "crytek",
    "name": "Crytek",
    "slug": "crytek",
    "country": "Germany",
    "founded_year": 1999,
    "website": "https://www.crytek.com"
  },
  {
    "id": "localthunk",
    "name": "LocalThunk",
    "slug": "localthunk",
    "country": "Canada",
    "founded_year": 2021,
    "website": "https://www.playbalatro.com"
  },
  {
    "id": "massivemonster",
    "name": "Massive Monster",
    "slug": "massive-monster",
    "country": "Australia / United Kingdom",
    "founded_year": 2016,
    "website": "https://massivemonster.co"
  },
  {
    "id": "danielmullins",
    "name": "Daniel Mullins Games",
    "slug": "daniel-mullins-games",
    "country": "Canada",
    "founded_year": 2016,
    "website": "https://www.danielmullinsgames.com"
  },
  {
    "id": "hopoogames",
    "name": "Hopoo Games",
    "slug": "hopoo-games",
    "country": "United States",
    "founded_year": 2012,
    "website": "https://hopoogames.com"
  },
  {
    "id": "nicalis",
    "name": "Nicalis, Inc.",
    "slug": "nicalis-inc",
    "country": "United States",
    "founded_year": 2007,
    "website": "https://nicalis.com"
  },
  {
    "id": "dodgeroll",
    "name": "Dodge Roll",
    "slug": "dodge-roll",
    "country": "United States",
    "founded_year": 2014,
    "website": "https://dodgeroll.com"
  },
  {
    "id": "poncle",
    "name": "poncle",
    "slug": "poncle",
    "country": "United Kingdom",
    "founded_year": 2021,
    "website": "https://poncle.net"
  },
  {
    "id": "obsidian",
    "name": "Obsidian Entertainment",
    "slug": "obsidian-entertainment",
    "country": "United States",
    "founded_year": 2003,
    "website": "https://www.obsidian.net"
  },
  {
    "id": "squareenix_dev",
    "name": "Square Enix Creative Business Unit",
    "slug": "square-enix-dev",
    "country": "Japan",
    "founded_year": 1986,
    "website": "https://www.square-enix.com"
  },
  {
    "id": "platinumgames",
    "name": "PlatinumGames",
    "slug": "platinumgames",
    "country": "Japan",
    "founded_year": 2006,
    "website": "https://www.platinumgames.com"
  },
  {
    "id": "rggstudio",
    "name": "Ryu Ga Gotoku Studio",
    "slug": "ryu-ga-gotoku-studio",
    "country": "Japan",
    "founded_year": 2011,
    "website": "https://ryu-ga-gotoku.com"
  },
  {
    "id": "motive",
    "name": "Motive Studio",
    "slug": "motive-studio",
    "country": "Canada",
    "founded_year": 2015,
    "website": "https://www.ea.com/ea-studios/motive"
  },
  {
    "id": "creativeassembly",
    "name": "Creative Assembly",
    "slug": "creative-assembly",
    "country": "United Kingdom",
    "founded_year": 1987,
    "website": "https://www.creative-assembly.com"
  },
  {
    "id": "roseengine",
    "name": "rose-engine",
    "slug": "rose-engine",
    "country": "Germany",
    "founded_year": 2014,
    "website": "https://rose-engine.org"
  },
  {
    "id": "endnightgames",
    "name": "Endnight Games Ltd",
    "slug": "endnight-games",
    "country": "Canada",
    "founded_year": 2013,
    "website": "https://endnightgames.com"
  },
  {
    "id": "theindiestone",
    "name": "The Indie Stone",
    "slug": "the-indie-stone",
    "country": "United Kingdom",
    "founded_year": 2011,
    "website": "https://projectzomboid.com"
  },
  {
    "id": "klei",
    "name": "Klei Entertainment",
    "slug": "klei-entertainment",
    "country": "Canada",
    "founded_year": 2005,
    "website": "https://www.klei.com"
  },
  {
    "id": "saberinteractive",
    "name": "Saber Interactive",
    "slug": "saber-interactive",
    "country": "United States",
    "founded_year": 2001,
    "website": "https://saber.games"
  },
  {
    "id": "sloclap",
    "name": "Sloclap",
    "slug": "sloclap",
    "country": "France",
    "founded_year": 2015,
    "website": "https://www.sloclap.com"
  },
  {
    "id": "tangogameworks",
    "name": "Tango Gameworks",
    "slug": "tango-gameworks",
    "country": "Japan",
    "founded_year": 2010,
    "website": "https://www.tangogameworks.com"
  },
  {
    "id": "housemarque",
    "name": "Housemarque",
    "slug": "housemarque",
    "country": "Finland",
    "founded_year": 1995,
    "website": "https://housemarque.com"
  },
  {
    "id": "bluetwelve",
    "name": "BlueTwelve Studio",
    "slug": "bluetwelve-studio",
    "country": "France",
    "founded_year": 2016,
    "website": "https://stray.game"
  },
  {
    "id": "tunicteam",
    "name": "TUNIC Team",
    "slug": "tunic-team",
    "country": "Canada",
    "founded_year": 2015,
    "website": "https://tunicgame.com"
  },
  {
    "id": "sharedmemory",
    "name": "Shared Memory",
    "slug": "shared-memory",
    "country": "United States",
    "founded_year": 2017,
    "website": "https://animalwell.net"
  },
  {
    "id": "asobostudio",
    "name": "Asobo Studio",
    "slug": "asobo-studio",
    "country": "France",
    "founded_year": 2002,
    "website": "https://www.asobostudio.com"
  },
  {
    "id": "mercurysteam",
    "name": "MercurySteam",
    "slug": "mercurysteam",
    "country": "Spain",
    "founded_year": 2002,
    "website": "https://www.mercurysteam.com"
  },
  {
    "id": "paradoxdev",
    "name": "Paradox Development Studio",
    "slug": "paradox-development-studio",
    "country": "Sweden",
    "founded_year": 1995,
    "website": "https://www.paradoxinteractive.com"
  }
];

export const BATCH3_PUBLISHERS: Publisher[] = [
  {
    "id": "coffeestain",
    "name": "Coffee Stain Publishing",
    "slug": "coffee-stain-publishing",
    "headquarters": "Skovde, Sweden",
    "website": "https://www.coffeestainpublishing.com"
  },
  {
    "id": "hellogames_pub",
    "name": "Hello Games",
    "slug": "hello-games-pub",
    "headquarters": "Guildford, United Kingdom",
    "website": "https://hellogames.org"
  },
  {
    "id": "facepunch_pub",
    "name": "Facepunch Studios",
    "slug": "facepunch-studios-pub",
    "headquarters": "Walsall, United Kingdom",
    "website": "https://facepunch.com"
  },
  {
    "id": "wubesoftware_pub",
    "name": "Wube Software",
    "slug": "wube-software-pub",
    "headquarters": "Prague, Czech Republic",
    "website": "https://factorio.com"
  },
  {
    "id": "ludeon_pub",
    "name": "Ludeon Studios",
    "slug": "ludeon-studios-pub",
    "headquarters": "Montreal, Canada",
    "website": "https://ludeon.com"
  },
  {
    "id": "zeekerss_pub",
    "name": "Zeekerss",
    "slug": "zeekerss-pub",
    "headquarters": "United States",
    "website": "https://zeekerss.com"
  },
  {
    "id": "kineticgames_pub",
    "name": "Kinetic Games",
    "slug": "kinetic-games-pub",
    "headquarters": "London, United Kingdom",
    "website": "https://kineticgames.co.uk"
  },
  {
    "id": "behaviour_pub",
    "name": "Behaviour Interactive",
    "slug": "behaviour-interactive-pub",
    "headquarters": "Montreal, Canada",
    "website": "https://www.bhvr.com"
  },
  {
    "id": "crytek_pub",
    "name": "Crytek",
    "slug": "crytek-pub",
    "headquarters": "Frankfurt, Germany",
    "website": "https://www.crytek.com"
  },
  {
    "id": "playstack",
    "name": "Playstack",
    "slug": "playstack",
    "headquarters": "London, United Kingdom",
    "website": "https://playstack.com"
  },
  {
    "id": "gearboxpub",
    "name": "Gearbox Publishing",
    "slug": "gearbox-publishing",
    "headquarters": "Frisco, Texas",
    "website": "https://www.gearboxpublishing.com"
  },
  {
    "id": "nicalis_pub",
    "name": "Nicalis",
    "slug": "nicalis-pub",
    "headquarters": "Santa Ana, California",
    "website": "https://nicalis.com"
  },
  {
    "id": "poncle_pub",
    "name": "poncle",
    "slug": "poncle-pub",
    "headquarters": "London, United Kingdom",
    "website": "https://poncle.net"
  },
  {
    "id": "privatedivision",
    "name": "Private Division",
    "slug": "private-division",
    "headquarters": "New York, United States",
    "website": "https://www.privatedivision.com"
  },
  {
    "id": "capcompub",
    "name": "Capcom",
    "slug": "capcom-pub",
    "headquarters": "Osaka, Japan",
    "website": "https://www.capcom.com"
  },
  {
    "id": "humblegames",
    "name": "Humble Games",
    "slug": "humble-games",
    "headquarters": "San Francisco, California",
    "website": "https://www.humblegames.com"
  },
  {
    "id": "newnight",
    "name": "Newnight",
    "slug": "newnight",
    "headquarters": "Vancouver, Canada",
    "website": "https://endnightgames.com"
  },
  {
    "id": "theindiestone_pub",
    "name": "The Indie Stone",
    "slug": "the-indie-stone-pub",
    "headquarters": "London, United Kingdom",
    "website": "https://projectzomboid.com"
  },
  {
    "id": "klei_pub",
    "name": "Klei Entertainment",
    "slug": "klei-entertainment-pub",
    "headquarters": "Vancouver, Canada",
    "website": "https://www.klei.com"
  },
  {
    "id": "keplerinteractive",
    "name": "Kepler Interactive",
    "slug": "kepler-interactive",
    "headquarters": "London, United Kingdom",
    "website": "https://kepler-interactive.com"
  },
  {
    "id": "finji",
    "name": "Finji",
    "slug": "finji",
    "headquarters": "Grand Rapids, Michigan",
    "website": "https://finji.co"
  },
  {
    "id": "bigmode",
    "name": "Bigmode",
    "slug": "bigmode",
    "headquarters": "Milwaukee, Wisconsin",
    "website": "https://bigmode.com"
  }
];
