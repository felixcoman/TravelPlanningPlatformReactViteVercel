const feedback = [
  {
    Name: "",
    SurName: "",
    Mobile: "",
    Email: "",
    Textarea: "",
    id: 0,
  },
];

export default function handler(req, res) {
  res.status(200).json(feedback);
}
