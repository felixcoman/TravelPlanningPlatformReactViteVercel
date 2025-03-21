export default function handler(req, res) {
  const picturesData = [
    {
      id: 0,
      image:
        "https://fastly.picsum.photos/id/397/4475/2984.jpg?hmac=_PEWxhdxVnCU15wD6E-blJDbpMVH17QQVV0JYMZnkjc",
    },
    {
      id: 1,
      image:
        "https://fastly.picsum.photos/id/377/4884/3256.jpg?hmac=OLVw864UkoqYrrRmC1Xh5-5DtczeP7iEZKMlv1YLwac",
    },
    {
      id: 2,
      image:
        "https://fastly.picsum.photos/id/257/5000/3333.jpg?hmac=B0TMVZJOXC_cBK0gZj5EzCBnCwoBMEyvt9t8AbJDkdA",
    },
    {
      id: 3,
      image:
        "https://fastly.picsum.photos/id/211/1920/1280.jpg?hmac=5feWJpfa59_r1yi4NCuTxY9IWrNWZqEUDIAwrtKId9s",
    },
    {
      id: 4,
      image:
        "https://fastly.picsum.photos/id/164/1200/800.jpg?hmac=wkqGUkaeW3kiAsHq_VwxSWWossIMAwFV4eUfFzuDkew",
    },
    {
      id: 5,
      image:
        "https://fastly.picsum.photos/id/871/5000/3338.jpg?hmac=0cbFAJ55kp9mwznL2aX6NTWQp1VXOICQq-kaivG-Q_A",
    },
    {
      id: 6,
      image:
        "https://fastly.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I",
    },
    {
      id: 7,
      image:
        "https://fastly.picsum.photos/id/1040/4496/3000.jpg?hmac=kvZONlBpTcZ16PuE_g2RWxlicQ5JKVq2lqqZndfafBY",
    },
    {
      id: 8,
      image:
        "https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY",
    },
  ];

  return res.status(200).json(picturesData);
}
