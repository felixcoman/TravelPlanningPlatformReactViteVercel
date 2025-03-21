export default function handler(req, res) {
  const usersData = [
    {
      Email: "",
      choices: [],
      itinerarycity: [],
      itinerarylandmark: [],
      id: 0,
    },
  ];

  return res.status(200).json(usersData);
}
