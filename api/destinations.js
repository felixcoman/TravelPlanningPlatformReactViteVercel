export default function handler(req, res) {
  const destinationData = [
    {
      name: "Catherine's Gate (Poarta Ecaterinei)",
      city: "Brasov",
      country: "Romania",
      image: "/images/Poarta_Ecaterinei_Landmark.jpg",
      description:
        "Catherine's Gate is the only original city gate that has survived from medieval times. Built in 1559, it features a unique design with a fairy-tale look, including four small corner turrets symbolizing the city’s right to capital punishment. The gate is a beautiful piece of Brasov's history and a must-see for visitors.",
      popularity: 4,
      id: 0,
    },
    {
      name: "Black Church (Biserica Neagra)",
      city: "Brasov",
      country: "Romania",
      image: "/images/Biserica_Neagra_Landmark.jpg",
      description:
        "The Black Church is a Gothic-style cathedral and one of the most iconic landmarks in Brasov. It is known for its impressive architecture, stunning interior, and a large collection of Anatolian carpets. The church's name comes from the darkened walls caused by a fire in the 17th century.",
      popularity: 5,
      id: 1,
    },
    {
      name: "Council Square (Piata Sfatului)",
      city: "Brasov",
      country: "Romania",
      image: "/images/Piata_Sfatului_Landmark.jpg",
      description:
        "This picturesque square is the heart of Brasov's old town. Surrounded by colorful baroque buildings, it features the historic Council House (Casa Sfatului) and is a vibrant hub for cafes, shops, and events. It's a perfect place for a leisurely stroll and soaking in the local atmosphere.",
      popularity: 5,
      id: 2,
    },
    {
      name: "Mount Tampa",
      city: "Brasov",
      country: "Romania",
      image: "/images/Tampa_Landmark.jpg",
      description:
        "Offering stunning panoramic views of Brasov and the surrounding area, Mount Tampa is accessible via hiking trails or a cable car. At the summit, visitors can enjoy the scenic overlook and spot the Hollywood-style `Brasov` sign. It’s a great spot for nature lovers and photographers.",
      popularity: 4.5,
      id: 3,
    },
    {
      name: "Sighisoara Citadel",
      city: "Sighisoara",
      country: "Romania",
      image: "/images/20353.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/aerial-drone-view-historic-centre-sighisoara-romania_28092094.htm#fromView=search&page=1&position=13&uuid=5318d548-184c-4fc1-b8ad-db0d19554575",
          linkAuthor: "",
          text: "Image by frimufilms on Freepik",
        },
      ],
      description:
        "A UNESCO World Heritage Site, the Sighisoara Citadel is a fortified medieval complex built in the 12th century. It features cobblestone streets, colorful houses, and defensive towers. The citadel's Clock Tower offers stunning views of the town and is home to a historical museum.",
      popularity: 5,
      id: 4,
    },
    {
      name: "The Clock Tower",
      city: "Sighisoara",
      country: "Romania",
      image: "/images/theo-onic-GegG_U07rvk-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/a-group-of-buildings-with-a-tower-GegG_U07rvk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@thorai9akira?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "Theo Onic",
        },
      ],
      description:
        "Standing 64 meters tall, the Clock Tower is the most iconic landmark of Sighisoara. Built in the 14th century, it once served as the main gate to the citadel. Visitors can explore its museum, and admire the wooden figurines that emerge from its clock mechanism hourly.",
      popularity: 5,
      id: 5,
    },
    {
      name: "Vlad Dracul House",
      city: "Sighisoara",
      country: "Romania",
      image: "/images/medeea-codalbu-JyB_e_wqGIo-unsplash.jpg",
      attributions: [
        {
          source: "Unsplash",
          linkImage:
            "https://unsplash.com/photos/low-angle-photography-of-flock-of-birds-flying-over-the-buildings-during-daytime-JyB_e_wqGIo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          linkAuthor:
            "https://unsplash.com/@_earthprix_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          text: "medeea codalbu",
        },
      ],
      description:
        "This yellow, 15th-century house is believed to be the birthplace of Vlad the Impaler, the historical figure who inspired the Dracula legend. It now houses a restaurant, but plaques and exhibits remind visitors of its historical significance.",
      popularity: 4,
      id: 6,
    },
    {
      name: "The Church on the Hill",
      city: "Sighisoara",
      country: "Romania",
      image: "/images/19383.jpg",
      attributions: [
        {
          source: "Freepik",
          linkImage:
            "https://www.freepik.com/free-photo/aerial-drone-view-historic-centre-sighisoara-romania-church-hill-surrounded_22402051.htm#fromView=search&page=1&position=13&uuid=e6f32122-7551-4d05-ba57-d3052abde13a",
          linkAuthor: "",
          text: "Image by frimufilms on Freepik",
        },
      ],
      description:
        "Located atop the citadel hill, this Gothic church from the 14th century is renowned for its intricate frescoes and wooden altar. Visitors can also enjoy a serene walk up the covered wooden staircase leading to the church, offering panoramic views of the town below.",
      popularity: 4.5,
      id: 7,
    },
  ];

  const { city, name } = req.query;

  if (city) {
    const filteredDataCity = destinationData.filter(
      (item) => item.city === city
    );
    return res.status(200).json(filteredDataCity);
  }

  if (name) {
    const filteredDataLandmark = destinationData.filter(
      (item) => item.name === name
    );
    return res.status(200).json(filteredDataLandmark);
  }

  return res.status(200).json(destinationData);
}
