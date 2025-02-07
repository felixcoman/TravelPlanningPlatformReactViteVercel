export default function handler(req, res) {
  const franceData = [
    {
      id: 1,
      name: "France",
      description:
        "France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports.",
      image: "/src/assets/rodrigo-kugnharski-pdWc5wm1STw-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/aerial-view-photography-of-city-pdWc5wm1STw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@kugnharski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Rodrigo Kugnharski",
        },
      ],
    },
    {
      city: "Paris",
      country: "France",
      image:
        "/src/assets/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_41481470.htm#fromView=search&page=1&position=1&uuid=c76dc8c1-d756-4a79-8811-d2e836895807",
          linkAuthor: "",
          text: "Image by vecstock on Freepik",
        },
      ],
      description:
        "Paris, the City of Light, enchants visitors with iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum. Its charming streets, romantic Seine River, world-class cuisine, and vibrant arts scene create an unforgettable atmosphere, making it a dream destination for travelers.",
      category: "",
      period: {
        threedays: {
          dayone:
            "Visit: Champs De Mars, Trocadéro Carousel, Pont Alexandre III Bridge",
          daytwo: "Visit:  The Louvre Museum",
          daythree: "Visit: Avenue Champs-Elysées, Arc De Triomphe",
        },
        fivedays: {
          dayone:
            "Visit: Champs De Mars, Trocadéro Carousel, Pont Alexandre III Bridge",
          daytwo: "Visit:  The Louvre Museum",
          daythree: "Visit: Avenue Champs-Elysées, Arc De Triomphe",
          dayfour: "Visit: Notre-Dame Cathedral, Paris Opera",
          dayfive: "Visit: The Moulin Rouge, Sacre Coeur",
        },
        sevendays: {
          dayone:
            "Visit: Champs De Mars, Trocadéro Carousel, Pont Alexandre III Bridge",
          daytwo: "Visit:  The Louvre Museum",
          daythree: "Visit: Avenue Champs-Elysées, Arc De Triomphe",
          dayfour: "Visit: Notre-Dame Cathedral, Paris Opera",
          dayfive: "Visit: The Moulin Rouge, Sacre Coeur",
          daysix: "Visit: The Versailles Palace",
          dayseven: "Visit: The Fontainebleau Palace",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Scarlett: web: https://www.hotelscarlett.com/",
          hoteltwo:
            "Hotel du College de France: web: https://www.hotel-collegedefrance.com/",
          hotelthree: "Hotel Eldorado: web: https://hoteleldoradoparis.com/en/",
        },
        mediumBudget: {
          hotelone:
            "Hotel Le Relais Saint Charles: web: https://www.relaisstcharles.fr/",
          hoteltwo:
            "Hotel La Parizienne by Elegancia: web: https://hotel-laparizienne.com/",
          hotelthree:
            "Hotel Magenta 38 by HappyCulture: web: https://hotelmagenta38.com/",
        },
        highBudget: {
          hotelone:
            "Hotel Plaza Athénée Paris: web: https://www.dorchestercollection.com/paris/hotel-plaza-athenee",
          hoteltwo:
            "Le Meurice: web: https://www.dorchestercollection.com/paris/le-meurice",
          hotelthree:
            "Four Seasons Hotel George V Paris: web: https://www.fourseasons.com/paris/",
        },
      },
      id: 2,
    },
    {
      city: "Nice",
      country: "France",
      image: "/src/assets/arno-smit-lndaG6uN1yw-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/aerial-photography-of-building-near-seashore-at-daytime-lndaG6uN1yw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@_entreprenerd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Arno Smit",
        },
      ],
      description:
        "Nice, located on the French Riviera, is famed for its stunning Mediterranean coastline, vibrant Promenade des Anglais, and charming Old Town with colorful markets. The city offers a blend of cultural attractions, beautiful beaches, and exquisite cuisine, making it a delightful destination for relaxation and exploration.",
      category: "",
      period: {
        threedays: {
          dayone: "Visit:Nice",
          daytwo: "Visit: Monaco ",
          daythree: "Visit: Antibes",
        },
        fivedays: {
          dayone: "Visit:Nice",
          daytwo: "Visit: Monaco ",
          daythree: "Visit: Antibes",
          dayfour: "Visit: Fréjus and Saint-Tropez ",
          dayfive: "Visit:  Hyères and its islands",
        },
        sevendays: {
          dayone: "Visit:Nice",
          daytwo: "Visit: Monaco ",
          daythree: "Visit: Antibes",
          dayfour: "Visit: Fréjus and Saint-Tropez ",
          dayfive: "Visit:  Hyères and its islands",
          daysix: "Visit: Cannes",
          dayseven: "Visit: Grasse and Saint-Paul-de-Vence",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Azurea: web: https://azurea-hotel-nice.hotelmix.ro/",
          hoteltwo: "Hotel Trocadero: web: https://www.hoteltrocadero.net/en/",
          hotelthree:
            "Aparthotel AMMI Vieux Nice: web: https://www.ammihotels.com/en/ammi-vieux-nice",
        },
        mediumBudget: {
          hotelone: "Hotel Aston La Scala: web: https://hotel-aston.com/en/",
          hoteltwo:
            "Hotel Le Grimaldi by HappyCulture: web: https://www.le-grimaldi.com/",
          hotelthree:
            "Hotel Villa Rivoli: web: https://villa-rivoli.com/en/index.php",
        },
        highBudget: {
          hotelone:
            "Hyatt Regency Nice Palais de la Méditerranée: web: https://www.hyatt.com/hyatt-regency/en-US/ncehr-hyatt-regency-nice-palais-de-la-mediterranee",
          hoteltwo:
            "Le Meridien Nice: web: https://www.marriott.com/en-us/hotels/ncemd-le-meridien-nice/overview/",
          hotelthree:
            "Hotel Negresco: web: https://www.hotel-negresco-nice.com/en/hotel",
        },
      },
      id: 3,
    },
    {
      city: "Strasbourg",
      country: "France",
      image:
        "/src/assets/canal-surrounded-by-buildings-greenery-cloudy-sky-strasbourg-france.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/canal-surrounded-by-buildings-greenery-cloudy-sky-strasbourg-france_10303436.htm#fromView=search&page=1&position=0&uuid=ab738854-1b5b-4dab-8529-e592c90dcfc9",
          linkAuthor: "",
          text: "Image by wirestock on Freepik",
        },
      ],
      description:
        "Strasbourg, located in the Alsace region, is renowned for its picturesque half-timbered houses, the stunning Strasbourg Cathedral, and the charming La Petite France district. The city's rich history, vibrant cultural scene, and beautiful canals make it a captivating destination for visitors seeking both charm and architectural beauty.",
      category: "",
      period: {
        threedays: {
          dayone: "Visit: Notre Dame, Museums, and Raclette",
          daytwo: "Visit: Flea Market, High Tea, and Snails ",
          daythree: "Visit: Boat Cruise and a Classic Café Gourmand ",
        },
        fivedays: {
          dayone: "Visit: Notre Dame, Museums, and Raclette",
          daytwo: "Visit: Flea Market, High Tea, and Snails ",
          daythree: "Visit: Boat Cruise and a Classic Café Gourmand ",
          dayfour: "Visit: The Castle of Haut-Koenigsbourg ",
          dayfive: "Visit: Obernai",
        },
        sevendays: {
          dayone: "Visit: Notre Dame, Museums, and Raclette",
          daytwo: "Visit: Flea Market, High Tea, and Snails ",
          daythree: "Visit: Boat Cruise and a Classic Café Gourmand ",
          dayfour: "Visit: The Castle of Haut-Koenigsbourg ",
          dayfive: "Visit: Obernai",
          daysix: "Visit: Alsace Wine Route",
          dayseven: "Visit: Colmar",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Ciarus: web: https://www.ciarus.com/",
          hoteltwo: "Hotel des Arts: web: https://www.hotel-arts.com/en/",
          hotelthree:
            "Ibis Budget Strasbourg Centre Gare: web: https://all.accor.com/hotel/3183/index.en.shtml",
        },
        mediumBudget: {
          hotelone: "Hotel Hannong: web: https://www.hotel-hannong.com/en/",
          hoteltwo: "Hotel Rohan: web: https://www.hotel-rohan.com/en/",
          hotelthree:
            "Hotel Gutenberg: web: https://www.hotel-gutenberg.com/en/",
        },
        highBudget: {
          hotelone:
            "Regent Petite France & Spa: web: https://regent-petite-france.com/",
          hoteltwo:
            "Pavillon Régent Petite France: web: https://pavillon-regent-petite-france.com/",
          hotelthree:
            "Sofitel Strasbourg Grande Ile: web: https://all.accor.com/hotel/0568/index.en.shtml",
        },
      },
      id: 4,
    },
    {
      region: "Provence",
      country: "France",
      image: "/src/assets/c-valdez-A2gKlf8JgGA-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/bed-of-lavender-flowers-A2gKlf8JgGA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@valdez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "C.Valdez",
        },
      ],
      description:
        "Provence  is a geographical region and historical province of southeastern France, which extends from the left bank of the lower Rhône to the west to the Italian border to the east; it is bordered by the Mediterranean Sea to the south.",
      category: "",
      period: {
        threedays: {
          dayone: "Visit: Nice",
          daytwo: "Visit: Trip to Monaco and Eze",
          daythree: "Visit: Avignon",
        },
        fivedays: {
          dayone: "Visit: Nice",
          daytwo: "Visit: Trip to Monaco and Eze",
          daythree: "Visit: Avignon",
          dayfour: "Visit: Arles",
          dayfive: "Visit:  Saint-Remy-de-Provence",
        },
        sevendays: {
          dayone: "Visit: Nice",
          daytwo: "Visit: Trip to Monaco and Eze",
          daythree: "Visit: Avignon",
          dayfour: "Visit: Arles",
          dayfive: "Visit: Saint-Remy-de-Provence",
          daysix: "Visit: Marseille",
          dayseven: "Visit: Grasse and Saint-Paul-de-Vence ",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Zora: web: https://hotel-zora.parishotelsfr.com/en/",
          hoteltwo:
            "Hotel Studia: web: https://hotel-studia.parishotelsfr.com/en/",
          hotelthree: "Hotel Marignan: web: https://www.hotel-marignan.com/ ",
        },
        mediumBudget: {
          hotelone:
            "Boutik Boheme: web: https://boutik-boheme-le-jardin-montmartre.iledefrance-hotel.com/en/",
          hoteltwo:
            "Hotel Cluny Square: web: https://www.cluny-paris-hotel.com/",
          hotelthree:
            "Pavillon Nation: web: https://pavillonnation.parishotels.it/ ",
        },
        highBudget: {
          hotelone: "La Fantaisie: web: https://www.lafantaisie.com/",
          hoteltwo: "Le Grand Mazarin: web: https://www.legrandmazarin.com/",
          hotelthree: "Hôtel Raphael: web: https://www.raphael-hotel.com/en/",
        },
      },
      id: 5,
    },
    {
      region: "Loir Valley",
      country: "France",
      image: "/src/assets/colin-watts-_R494eEbvB4-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/a-large-castle-sitting-on-top-of-a-lake-next-to-a-bridge-_R494eEbvB4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@colinwatts?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Colin Watts",
        },
      ],
      description:
        "The Loire Valley has been called the Garden of France and is studded with over a thousand chateaux, each with distinct architectural embellishments covering a wide range of variations, from the early medieval to the late Renaissance periods.",
      period: {
        threedays: {
          dayone: "Visit: Chartres or Orléans en route to Blois ",
          daytwo: "Visit: Visit Chateau de Chambord  and Chateau de Cheverny  ",
          daythree:
            "Visit: Visit Chateau Blois and do a wine tasting or bike ride along the Loire River",
        },
        fivedays: {
          dayone: "Visit: Chartres or Orléans en route to Blois ",
          daytwo: "Visit: Visit Chateau de Chambord  and Chateau de Cheverny  ",
          daythree:
            "Visit: Visit Chateau Blois and do a wine tasting or bike ride along the Loire River",
          dayfour: "Visit: Chateau d’Amboise  and Chateau du Clos Lucé",
          dayfive: "Visit: Chateau Azay-le-Rideau and Chateau de Villandry. ",
        },
        sevendays: {
          dayone: "Visit: Chartres or Orléans en route to Blois ",
          daytwo: "Visit: Visit Chateau de Chambord  and Chateau de Cheverny  ",
          daythree:
            "Visit: Visit Chateau Blois and do a wine tasting or bike ride along the Loire River",
          dayfour: "Visit: Chateau d’Amboise  and Chateau du Clos Lucé",
          dayfive: "Visit: Chateau Azay-le-Rideau and Chateau de Villandry. ",
          daysix: "Visit: Chateau Chaumont-Sur-Loire and Chateau de Chenonceau",
          dayseven: "Visit: Royal Abbey Fontevraud and Chateau d’Angers",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Zora: web: https://hotel-zora.parishotelsfr.com/en/",
          hoteltwo:
            "Hotel Studia: web: https://hotel-studia.parishotelsfr.com/en/",
          hotelthree: "Hotel Marignan: web: https://www.hotel-marignan.com/ ",
        },
        mediumBudget: {
          hotelone:
            "Boutik Boheme: web: https://boutik-boheme-le-jardin-montmartre.iledefrance-hotel.com/en/",
          hoteltwo:
            "Hotel Cluny Square: web: https://www.cluny-paris-hotel.com/",
          hotelthree:
            "Pavillon Nation: web: https://pavillonnation.parishotels.it/ ",
        },
        highBudget: {
          hotelone: "La Fantaisie: web: https://www.lafantaisie.com/",
          hoteltwo: "Le Grand Mazarin: web: https://www.legrandmazarin.com/",
          hotelthree: "Hôtel Raphael: web: https://www.raphael-hotel.com/en/",
        },
      },
      id: 6,
    },
    {
      region: "Normandy",
      country: "France",
      image: "/src/assets/rodolphe-abad-pg7BtkKDuo8-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/a-castle-on-a-small-island-with-mont-saint-michel-in-the-background-pg7BtkKDuo8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@rodolphe_abad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Rodolphe Abad",
        },
      ],
      description:
        "Normandy, historic and cultural region of northern France encompassing the départements of Manche, Calvados, Orne, Eure, and Seine-Maritime and coextensive with the former province of Normandy. It was recreated as an administrative entity in 2016 with the union of the régions of Basse-Normandie and Haute-Normandie.",
      period: {
        threedays: {
          dayone: "Visit: Rouen, Joan of Arc and the Gros Horloge. ",
          daytwo: "Visit: Abbeys of Jumièges and Boscherville. ",
          daythree: "Visit: Étretat and its cliffs.",
        },
        fivedays: {
          dayone: "Visit: Rouen, Joan of Arc and the Gros Horloge. ",
          daytwo: "Visit: Abbeys of Jumièges and Boscherville. ",
          daythree: "Visit: Étretat and its cliffs.",
          dayfour: "Visit: Honfleur and Deauville.",
          dayfive: "Visit: Beuvron-en-Auge and Caen Memorial Museum.",
        },
        sevendays: {
          dayone: "Visit: Rouen, Joan of Arc and the Gros Horloge. ",
          daytwo: "Visit: Abbeys of Jumièges and Boscherville. ",
          daythree: "Visit: Étretat and its cliffs.",
          dayfour: "Visit: Honfleur and Deauville.",
          dayfive: "Visit: Beuvron-en-Auge and Caen Memorial Museum.",
          daysix: "Visit: Omaha Beach.",
          dayseven: "Visit: Mont-Saint-Michel.",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Zora: web: https://hotel-zora.parishotelsfr.com/en/",
          hoteltwo:
            "Hotel Studia: web: https://hotel-studia.parishotelsfr.com/en/",
          hotelthree: "Hotel Marignan: web: https://www.hotel-marignan.com/ ",
        },
        mediumBudget: {
          hotelone:
            "Boutik Boheme: web: https://boutik-boheme-le-jardin-montmartre.iledefrance-hotel.com/en/",
          hoteltwo:
            "Hotel Cluny Square: web: https://www.cluny-paris-hotel.com/",
          hotelthree:
            "Pavillon Nation: web: https://pavillonnation.parishotels.it/ ",
        },
        highBudget: {
          hotelone: "La Fantaisie: web: https://www.lafantaisie.com/",
          hoteltwo: "Le Grand Mazarin: web: https://www.legrandmazarin.com/",
          hotelthree: "Hôtel Raphael: web: https://www.raphael-hotel.com/en/",
        },
      },
      id: 7,
    },
  ];

  const { city, region } = req.query;

  if (city) {
    const filteredDataCity = franceData.filter((item) => item.city === city);
    return res.status(200).json(filteredDataCity);
  }

  if (region) {
    const filteredDataRegion = franceData.filter(
      (item) => item.region === region
    );
    return res.status(200).json(filteredDataRegion);
  }

  return res.status(200).json(franceData);
}
