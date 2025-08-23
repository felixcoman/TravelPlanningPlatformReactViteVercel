export default function handler(req, res) {
  const romaniaData = [
    {
      id: 1,
      name: "Romania",
      description:
        "Romania is the biggest country in southeast Europe by population. It has an area of 238,391 square kilometres (92,043 sq mi). It is the twelfth-largest country in Europe. Most of Romania's border with Serbia and Bulgaria is made by the Danube.",
      image: "/images/alisa-anton-VJSUSrgN56w-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/beige-and-brown-gothic-building-on-hill-VJSUSrgN56w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@alisaanton?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Alisa Anton",
        },
      ],
    },
    {
      city: "Sighisoara",
      reg: "Transylvania",
      country: "Romania",
      image:
        "/images/aerial-drone-view-historic-centre-sighisoara-romania-old-buildings-holy-trinity-church.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/aerial-drone-view-historic-centre-sighisoara-romania-old-buildings-holy-trinity-church_22402045.htm#fromView=search&page=1&position=0&uuid=fb3246fb-72b1-463c-8015-bd14b6311aaf",
          linkAuthor: "",
          text: "Image by frimufilms on Freepik",
        },
      ],
      description:
        "One of the best-preserved medieval towns in Europe, Sighisoara is a UNESCO World Heritage site. The city's charming old town features colorful buildings, narrow streets, and the iconic Clock Tower. Sighisoara is also famous as the birthplace of Vlad the Impaler, the historical figure who inspired the Dracula legend. Its medieval festival and historical ambiance attract many tourists.",
      category: ["aerliber", "citybreak", "relaxare"],
      period: {
        threedays: {
          dayone:
            "Visit: Climb up Turnul cu Ceas and see an aerial view of Sighişoara ",
          daytwo: "Visit: See all nine watch towers",
          daythree:
            "Visit: Visit the birthplace of Vlad the Impaler, aka Dracula",
        },
        fivedays: {
          dayone:
            "Visit: Climb up Turnul cu Ceas and see an aerial view of Sighişoara ",
          daytwo: "Visit: See all nine watch towers",
          daythree:
            "Visit: Visit the birthplace of Vlad the Impaler, aka Dracula",
          dayfour: "Visit: Sibiu",
          dayfive: "Visit: Brasov",
        },
        sevendays: {
          dayone:
            "Visit: Climb up Turnul cu Ceas and see an aerial view of Sighişoara ",
          daytwo: "Visit: See all nine watch towers",
          daythree:
            "Visit: Visit the birthplace of Vlad the Impaler, aka Dracula",
          dayfour: "Visit: Sibiu",
          dayfive: "Visit: Brasov",
          daysix: "Visit: Castle of Rasnov",
          dayseven: "Visit: Castle of Bran",
        },
      },
      budget: {
        lowBudget: {
          hotelone:
            "Casa Lia: web: https://www.booking.com/hotel/ro/casa-lia.ro.html",
          hoteltwo:
            "Pensiunea Joker: web: https://www.booking.com/hotel/ro/pensiunea-joker.ro.html",
          hotelthree:
            "Pensiunea Sighisoara: web: https://www.booking.com/hotel/ro/pensiunea-sighisoara.ro.html",
        },
        mediumBudget: {
          hotelone:
            "Hotel Casa Wagner: web: https://sighisoara.casa-wagner.com/en/",
          hoteltwo:
            "Hotel Sighisoara: web: https://sighisoarahotels.ro/?page_id=16",
          hotelthree:
            "Hotel Central Park: web: https://www.hotelcentralpark.ro/",
        },
        highBudget: {
          hotelone: "Fronius Residence: web: https://fronius-residence.ro/",
          hoteltwo:
            "Hotel BinderBubi: web: https://all.accor.com/hotel/B1A9/index.en.shtml",
          hotelthree:
            "DoubleTree by Hilton Hotel Sighisoara - Cavaler: web: https://www.hilton.com/ro/hotels/tgmscdi-doubletree-sighisoara-cavaler/",
        },
      },
      id: 2,
    },
    {
      city: "Constanta",
      reg: "Dobrogea",
      country: "Romania",
      image: "/images/matei-pruteanu-TaJgC0AE1lw-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/people-walking-on-sidewalk-near-white-concrete-building-during-daytime-TaJgC0AE1lw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@mateipruteanu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Matei Pruteanu",
        },
      ],
      description:
        "Constanta, Romania's oldest continuously inhabited city, is a vibrant Black Sea port offering beautiful beaches, historic landmarks like the stunning Art Nouveau Constanta Casino, and rich cultural heritage. Key attractions include the Roman Mosaic Edifice, the Genoese Lighthouse, and the National History and Archaeology Museum. It’s an ideal destination for both seaside relaxation and historical exploration.",
      category: ["plaja", "relaxare", "citybreak"],
      period: {
        threedays: {
          dayone:
            "Visit: Roman mosaic, Casa cu Lei, National History and Archeology Museum ",
          daytwo: "Visit: Mamaia Beach ",
          daythree: "Visit: Euforie, Navodari",
        },
        fivedays: {
          dayone:
            "Visit: Roman mosaic, Casa cu Lei, National History and Archeology Museum ",
          daytwo: "Visit: Mamaia beach ",
          daythree: "Visit: Euforie, Navodari",
          dayfour: "Visit: Constanta Casino, Ovidiu Square",
          dayfive: "Visit: Corbu beach and Vadu beach",
        },
        sevendays: {
          dayone:
            "Visit: Roman mosaic, Casa cu Lei, National History and Archeology Museum ",
          daytwo: "Visit: Mamaia beach ",
          daythree: "Visit: Euforie, Navodari",
          dayfour: "Visit: Constanta Casino, Ovidiu Square",
          dayfive: "Visit: Corbu beach and Vadu beach",
          daysix: "Visit: Danube Delta",
          dayseven: "Visit: Techirghiol,Murfatlar",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Maria: web: http://www.hotelmaria-ct.ro/",
          hoteltwo: "Hotel Arion: web: https://www.hotelarion.ro/",
          hotelthree:
            "Hotel Ibis Constanta: web: https://www.hotel-constanta.com/hotel/hotel_ibis_constanta.php",
        },
        mediumBudget: {
          hotelone: "Hotel Cherica: web: https://www.cherica.ro/",
          hoteltwo: "Hotel Class: web: https://hotelclass.ro/",
          hotelthree: "Hotel Guci: web: https://www.guci-hotel.ro/",
        },
        highBudget: {
          hotelone: "Vega Hotel: web: https://hotelvega.ro/",
          hoteltwo:
            "Hotel Belle Epoque: web: https://www.belle-epoque-villa.ro/",
          hotelthree:
            "Phoenicia Royal: web: https://www.booking.com/hotel/ro/phoenicia-royal.ro.html",
        },
      },
      id: 3,
    },
    {
      city: "Cluj-Napoca",
      reg: "Transylvania",
      country: "Romania",
      image:
        "/images/aerial-drone-view-saint-michael-church-cluj-evening-romania.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/aerial-drone-view-saint-michael-church-cluj-evening-romania_27412366.htm#fromView=search&page=1&position=0&uuid=601168de-16ba-4f39-bd29-38672abfcfcf",
          linkAuthor: "",
          text: "Image by frimufilms on Freepik",
        },
      ],
      description:
        "Cluj-Napoca, a vibrant city in Transylvania, is known for its lively arts scene, historic architecture, and youthful energy. Key attractions include St. Michael's Church, Central Park, and the National Museum of Transylvanian History. Its blend of cultural events, cafes, and green spaces make it a captivating destination.",
      category: ["aerliber", "citybreak", "relaxare"],
      period: {
        threedays: {
          dayone:
            "Visit: Alexandru Borza Botanical Garden, Podul Elisabeta, Cetatuia Hill",
          daytwo:
            "Visit: St. Michael's Church, Unirii Square, SteamPunk World ",
          daythree: "Visit: Central Park and the Cazino, National Opera",
        },
        fivedays: {
          dayone:
            "Visit: Alexandru Borza Botanical Garden, Podul Elisabeta, Cetatuia Hill",
          daytwo:
            "Visit: St. Michael's Church, Unirii Square, SteamPunk World ",
          daythree: "Visit: Central Park and the Cazino, National Opera",
          dayfour: "Visit: Lake Tarnita, Lake Fantanele",
          dayfive: "Visit:  Hike in Hoia forrest",
        },
        sevendays: {
          dayone:
            "Visit: Alexandru Borza Botanical Garden, Podul Elisabeta, Cetatuia Hill",
          daytwo:
            "Visit: St. Michael's Church, Unirii Square, SteamPunk World ",
          daythree: "Visit: Central Park and the Cazino, National Opera",
          dayfour: "Visit: Lake Tarnita, Lake Fantanele",
          dayfive: "Visit: Hike in Hoia forrest",
          daysix: "Visit: Apuseni National Park",
          dayseven: "Visit: Turda Salt Mine",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Ary: web: https://www.hotelary.ro/",
          hoteltwo: "Retro Hostel: web: https://www.retro.ro/",
          hotelthree: "Hotel Beta: web: https://hotelbeta-cluj.ro/",
        },
        mediumBudget: {
          hotelone:
            "Hotel Capitolina City Chic: web: http://www.hotel-capitolina.ro/",
          hoteltwo:
            "Hampton by Hilton Cluj-Napoca: web: https://www.hilton.com/ro/hotels/cljhxhx-hampton-cluj-napoca/",
          hotelthree:
            "Hotel Belvedere: web: https://www.unita-turism.ro/m/hotel/cluj-napoca/belvedere.html",
        },
        highBudget: {
          hotelone: "Hotel Platinia: web: https://hotelplatinia.ro/",
          hoteltwo:
            "DoubleTree by Hilton Hotel Cluj - City Plaza: web: https://www.hilton.com/ro/hotels/cljcpdi-doubletree-cluj-city-plaza/",
          hotelthree:
            "Grand Hotel Italia: web: https://grandhotelitaliacluj.ro/",
        },
      },
      id: 4,
    },
    {
      city: "Brasov",
      reg: "Transylvania",
      country: "Romania",
      image: "/images/Brasov_City.jpg",
      attributions: [
        {
          source: "personal collection",
          linkImage: "",
          linkAuthor: "",
          text: "Elena Coman-Neagu",
        },
      ],
      description:
        "Brasov, located in the heart of Transylvania, is renowned for its medieval charm, featuring the Gothic Black Church, picturesque Council Square, and scenic Mount Tampa. Its well-preserved old town, vibrant cultural scene, and stunning mountain backdrop make it a captivating destination for history enthusiasts and nature lovers alike.",
      category: ["aerliber", "citybreak", "relaxare"],
      period: {
        threedays: {
          dayone: "Visit: Brasov",
          daytwo: "Visit: White citadel in Romania and Corvin castle",
          daythree: "Visit: Biertan fortified church & Sighisoara citadel",
        },
        fivedays: {
          dayone: "Visit: Brasov",
          daytwo: "Visit: White citadel in Romania and Corvin castle",
          daythree: "Visit: Biertan fortified church & Sighisoara citadel",
          dayfour: "Visit: Fagaras citadel and Brasov",
          dayfive: "Visit: Bran Castle and Rasnov citadel",
        },
        sevendays: {
          dayone: "Visit: Brasov",
          daytwo: "Visit: White citadel in Romania and Corvin castle",
          daythree: "Visit: Biertan fortified church & Sighisoara citadel",
          dayfour: "Visit: Fagaras citadel and Brasov",
          dayfive: "Visit: Bran Castle and Rasnov citadel",
          daysix: "Visit: Cluj-Napoca",
          dayseven: "Visit: Peles Castle",
        },
      },
      budget: {
        lowBudget: {
          hotelone:
            "Kismet Dao Hostel: web: https://travelminit.ro/kismet-dao-hostel-brasov",
          hoteltwo: "Centrum House Hostel: web: https://www.hostelbrasov.eu/",
          hotelthree:
            "Gabriel Hostel: web: https://www.hostelworld.com/st/hostels/p/37770/gabriel-hostel/",
        },
        mediumBudget: {
          hotelone: "Hotel Bella Muzica: web: https://bellamuzica.ro/",
          hoteltwo: "Hotel Kolping: web: https://hotel.kolping.ro/",
          hotelthree:
            "Casa Wagner Brasov: web: https://brasov.casa-wagner.com/en/",
        },
        highBudget: {
          hotelone: "Hotel Aro Palace: web: https://aro-palace.ro/",
          hoteltwo: "Qosmo Brasov Hotel: web: https://qosmohotels.com/ro/",
          hotelthree:
            "Teleferic Grand Hotel: web: https://telefericgrandhotel.ro/",
        },
      },
      id: 5,
    },
    {
      city: "Sibiu",
      reg: "Transilvania",
      country: "Romania",
      image:
        "/images/aerial-drone-view-historic-centre-sibiu-evening-romania.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/aerial-drone-view-historic-centre-sibiu-evening-romania_31601887.htm#fromView=search&page=1&position=1&uuid=231acd87-61bd-45ba-a675-9c6d2c5066cf",
          linkAuthor: "",
          text: "Image by frimufilms on Freepik",
        },
      ],
      description:
        "Known for its well-preserved medieval architecture, Sibiu was designated a European Capital of Culture in 2007. The city features beautiful squares such as the Grand Square (Piata Mare) and the Small Square (Piata Mica), as well as the iconic Council Tower and the Brukenthal National Museum. Sibiu's charming ambiance and cultural significance draw many visitors.",
      category: ["aerliber", "citybreak", "relaxare"],
      period: {
        threedays: {
          dayone: "Visit: Sibiu",
          daytwo: "Visit: White citadel in Romania and Corvin castle",
          daythree: "Visit: Biertan fortified church & Sighisoara citadel",
        },
        fivedays: {
          dayone: "Visit: Sibiu",
          daytwo: "Visit: White citadel in Romania and Corvin castle",
          daythree: "Visit: Biertan fortified church & Sighisoara citadel",
          dayfour: "Visit: Fagaras citadel and Brasov",
          dayfive: "Visit: Bran Castle and Rasnov citadel",
        },
        sevendays: {
          dayone: "Visit: Sibiu",
          daytwo: "Visit: White citadel in Romania and Corvin castle",
          daythree: "Visit: Biertan fortified church & Sighisoara citadel",
          dayfour: "Visit: Fagaras citadel and Brasov",
          dayfive: "Visit: Bran Castle and Rasnov citadel",
          daysix: "Visit: Cluj-Napoca",
          dayseven: "Visit: Peles Castle",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Pensiunea Maria: web: https://pensiunea-romaria.ro/",
          hoteltwo: "Hostel PanGeea: web: https://www.sibiuhostel.ro/",
          hotelthree: "6rooms Sibiu: web: https://6rooms.ro/",
        },
        mediumBudget: {
          hotelone:
            "Hotel Ibis Sibiu: web: https://www.booking.com/hotel/ro/ibis-styles-sibiu-arsenal.ro.html",
          hoteltwo:
            "Hotel Continental Forum Sibiu: web: https://continental-forum-sibiu.continentalhotels.ro/",
          hotelthree:
            "Vi’studio Sibiu: web: https://www.booking.com/hotel/ro/vi-studio.ro.html",
        },
        highBudget: {
          hotelone:
            "Hilton Sibiu: web: https://www.hilton.com/ro/hotels/sbzhihi-hilton-sibiu/",
          hoteltwo: "ART Hotel Sibiu: web: https://www.arthotel.ro/",
          hotelthree:
            "Hotel Golden Tulip Ana Tower Sibiu: web: https://ana-tower-sibiu.goldentulip.com/ro/",
        },
      },
      id: 6,
    },
    {
      city: "Mamaia",
      reg: "Dobrogea",
      country: "Romania",
      image: "/images/gabriel-vasiliu-thAtOx4W6WU-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/a-large-group-of-people-at-a-beach-thAtOx4W6WU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@gabimedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Gabriel Vasiliu",
        },
      ],
      description:
        "Mamaia, located on Romania's Black Sea coast near Constanta, is a premier summer resort known for its long, sandy beaches and vibrant nightlife. It features luxury hotels, beach clubs, and water parks, making it ideal for both relaxation and entertainment. The resort's scenic promenade and panoramic gondola rides enhance its appeal as a top tourist destination.",
      category: ["plaja", "relaxare"],
      period: {
        threedays: {
          dayone:
            "Visit: Roman mosaic, Casa cu Lei, National History and Archeology Museum ",
          daytwo: "Visit: Mamaia Beach ",
          daythree: "Visit: Euforie, Navodari",
        },
        fivedays: {
          dayone:
            "Visit: Roman mosaic, Casa cu Lei, National History and Archeology Museum ",
          daytwo: "Visit: Mamaia beach ",
          daythree: "Visit: Euforie, Navodari",
          dayfour: "Visit: Constanta Casino, Ovidiu Square",
          dayfive: "Visit: Corbu beach and Vadu beach",
        },
        sevendays: {
          dayone:
            "Visit: Roman mosaic, Casa cu Lei, National History and Archeology Museum ",
          daytwo: "Visit: Mamaia beach ",
          daythree: "Visit: Euforie, Navodari",
          dayfour: "Visit: Constanta Casino, Ovidiu Square",
          dayfive: "Visit: Corbu beach and Vadu beach",
          daysix: "Visit: Danube Delta",
          dayseven: "Visit: Techirghiol,Murfatlar",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Hotel Alcor: web: https://hotelalcor.ro/",
          hoteltwo: "Hotel Aurora: web: https://www.hotelaurora.ro/",
          hotelthree: "Hotel Ovidiu: web: https://www.hotelovidiumamaia.ro/",
        },
        mediumBudget: {
          hotelone:
            "Hotel Dacia Sud: web: https://www.booking.com/hotel/ro/dacia-sud-mamaia.ro.html",
          hoteltwo: "Hotel Riviera: web: https://hotelriviera.ro/",
          hotelthree: "Hotel Malibu: web: https://hotelmalibu.ro/",
        },
        highBudget: {
          hotelone: "Vega Hotel: web: https://hotelvega.ro/",
          hoteltwo: "Hotel Phoenicia Luxury: web: https://phoeniciahotels.ro/",
          hotelthree:
            "Hotel Opera Mamaia: web: https://www.operahotel.ro/#operaresidencemamaia",
        },
      },
      id: 7,
    },
    {
      city: "Bucharest",
      reg: "Muntenia",
      country: "Romania",
      image:
        "/images/aerial-drone-view-bucharest-romania-city-downtown-with-palace-parliament.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/aerial-drone-view-bucharest-romania-city-downtown-with-palace-parliament_59152234.htm#fromView=search&page=1&position=0&uuid=6d09f8b0-4c86-488d-a306-7ede4f33fdc5",
          linkAuthor: "",
          text: "Image by frimufilms on Freepik",
        },
      ],
      description:
        "The capital and largest city of Romania, Bucharest is known for its wide boulevards, historic architecture, and vibrant cultural scene. Key attractions include the massive Palace of the Parliament, the historic Old Town (Lipscani), and numerous museums and parks. The city combines a mix of traditional Romanian charm with modern urban energy.",
      category: ["aerliber", "citybreak", "relaxare"],
      budget: {
        lowBudget: {
          hotelone:
            "Hello Hotels: web: https://hello-hotels-bucuresti.continentalhotels.ro/",
          hoteltwo:
            "Hotel Ibis Bucharest Gare de Nord: web: https://www.hotel-bucuresti.com/hoteluri/hotel_ibis_gara_de_nord-71.html",
          hotelthree:
            "Tomis Garden Aparthotel Bucuresti: web: https://www.tomisgarden.ro/",
        },
        mediumBudget: {
          hotelone: "Hotel Cismigiu: web: https://www.hotelcismigiu.ro/",
          hoteltwo:
            "Mercure Bucharest City Center: web: https://mercurebucharestcenter.com/ro/",
          hotelthree: "Hotel Christina: web: https://www.hotelchristina.ro/",
        },
        highBudget: {
          hotelone:
            "JW Marriott Bucharest Grand Hotel: web: https://www.marriott.com/en-us/hotels/buhro-jw-marriott-bucharest-grand-hotel/overview/",
          hoteltwo:
            "Athenee Palace Hilton Bucharest: web: https://www.atheneepalace-hotel.ro/",
          hotelthree:
            "Radisson Blu Hotel Bucharest: web: https://www.radissonhotels.com/ro-ro/hoteluri/radisson-blu-bucharest",
        },
      },
      id: 8,
    },
    {
      region: "Danube Delta",
      country: "Romania",
      image: "/images/zdenek-machacek-RJhIaos1kuU-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/white-and-black-pelican-bird-dipped-on-mud-RJhIaos1kuU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@zmachacek?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Zdeněk Macháček",
        },
      ],
      description:
        "The waters of the Danube, which flow into the Black Sea, form the largest and best preserved of Europe's deltas. The Danube delta hosts over 300 species of birds as well as 45 freshwater fish species in its numerous lakes and marshes.",
      period: {
        threedays: {
          dayone: "Visit: Hike in Macin Mountains",
          daytwo:
            "Visit: Dobrogea Gorge, Traditional fisherman villages in Dobrogea",
          daythree: "Visit: Danube Delta boat tour",
        },
        fivedays: {
          dayone: "Visit: Hike in Macin Mountains",
          daytwo:
            "Visit: Dobrogea Gorge, Traditional fisherman villages in Dobrogea",
          daythree: "Visit: Danube Delta boat tour",
          dayfour: "Visit: Constanta city tour, Mamaia Black sea resort",
          dayfive: "Visit: Corbu and Vadu Beach",
        },
        sevendays: {
          dayone: "Visit: Hike in Macin Mountains",
          daytwo:
            "Visit: Dobrogea Gorge, Traditional fisherman villages in Dobrogea",
          daythree: "Visit: Danube Delta boat tour",
          dayfour: "Visit: Constanta city tour, Mamaia Black sea resort",
          dayfive: "Visit: Corbu and Vadu Beach",
          daysix: "Visit: Archaeological site of the Orgame (Argamum) ",
          dayseven: "Visit: Gura Portitei and Jurilovsca",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Vila Coca: web: https://vila-coca-predeal.hotelmix.ro/",
          hoteltwo:
            "Pensiunea Montan Busteni: web: https://pensiunea-montan-busteni-guest-house.hotelmix.ro/",
          hotelthree:
            "HOSTEL CPPI Nord: web: https://cppibusteni.weebly.com/cazare.html",
        },
        mediumBudget: {
          hotelone:
            "Palatul Brukenthal Avrig: web: https://palatulbrukenthalavrig.ro/en/home-english/",
          hoteltwo: "Resort EuroPark Fundata: web: https://europark.ro/",
          hotelthree:
            "Casa Domeniile Vinului: web: https://www.vindeciumbrud.ro/turism/",
        },
        highBudget: {
          hotelone: "Hotel Aro Palace: web: https://aro-palace.ro/",
          hoteltwo:
            "Sungarden Golf & Spa Resort: web: https://sungardenresort.ro/",
          hotelthree:
            "Wild Hunts Lodge Retezat: web: https://www.chambres-hotes.fr/chambres-hotes_wild-hunts-lodge-retezat_rausor_h7134686_it.htm",
        },
      },
      id: 9,
    },
    {
      region: "Bucovina",
      country: "Romania",
      image: "/images/daniel-voicu-2D6pyiNPC54-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/a-building-that-has-a-tower-in-the-middle-of-it-2D6pyiNPC54?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@danielvoicu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Daniel Voicu",
        },
      ],
      description:
        "Bucovina is a region in north-eastern Romania and corresponds, nowadays, to the Suceava county and only to the south of the historic Bucovina, the northern part being Ukrainian. The name is originally Germanic, where “Buchenland” means “The Country of Beeches”.",
      period: {
        threedays: {
          dayone: "Visit: Admire the Painted Monasteries of Bucovina",
          daytwo: "Visit: Putna Monastery. ",
          daythree: "Visit: Travel back in time at Suceava Fortress. ",
        },
        fivedays: {
          dayone: "Visit: Admire the Painted Monasteries of Bucovina",
          daytwo: "Visit: Putna Monastery. ",
          daythree: "Visit: Travel back in time at Suceava Fortress. ",
          dayfour: "Visit: Explore Bucovina Village Museum",
          dayfive: "Visit: Breathe healthy air inside Cacica Salt Mine.",
        },
        sevendays: {
          dayone: "Visit: Admire the Painted Monasteries of Bucovina",
          daytwo: "Visit: Putna Monastery. ",
          daythree: "Visit: Travel back in time at Suceava Fortress. ",
          dayfour: "Visit: Explore Bucovina Village Museum",
          dayfive: "Visit: Breathe healthy air inside Cacica Salt Mine.",
          daysix: "Visit: Vatra Dornei, Moldovita Monastery",
          dayseven: "Visit: Sucevita Monastery, Voronet Monastery",
        },
      },
      budget: {
        lowBudget: {
          hotelone: "Vila Coca: web: https://vila-coca-predeal.hotelmix.ro/",
          hoteltwo:
            "Pensiunea Montan Busteni: web: https://pensiunea-montan-busteni-guest-house.hotelmix.ro/",
          hotelthree:
            "HOSTEL CPPI Nord: web: https://cppibusteni.weebly.com/cazare.html",
        },
        mediumBudget: {
          hotelone:
            "Palatul Brukenthal Avrig: web: https://palatulbrukenthalavrig.ro/en/home-english/",
          hoteltwo: "Resort EuroPark Fundata: web: https://europark.ro/",
          hotelthree:
            "Casa Domeniile Vinului: web: https://www.vindeciumbrud.ro/turism/",
        },
        highBudget: {
          hotelone: "Hotel Aro Palace: web: https://aro-palace.ro/",
          hoteltwo:
            "Sungarden Golf & Spa Resort: web: https://sungardenresort.ro/",
          hotelthree:
            "Wild Hunts Lodge Retezat: web: https://www.chambres-hotes.fr/chambres-hotes_wild-hunts-lodge-retezat_rausor_h7134686_it.htm",
        },
      },
      id: 10,
    },
  ];

  const { city, region } = req.query;

  if (city) {
    const filteredDataCity = romaniaData.filter((item) => item.city === city);
    return res.status(200).json(filteredDataCity);
  }

  if (region) {
    const filteredDataRegion = romaniaData.filter(
      (item) => item.region === region
    );
    return res.status(200).json(filteredDataRegion);
  }

  return res.status(200).json(romaniaData);
}
