const users = [
  {
    Email: "",
    choices: [],
    itinerarycity: [],
    itinerarylandmark: [],
    id: 0,
  },
];

export default function handler(req, res) {
  res.status(200).json(users);
}
