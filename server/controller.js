module.exports = {
  getHouses: (req, res, then) => {
    const db = req.app.get('db');
    db.get_houses().then(houses => {
      return res.status(200).json(houses);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  },
  addHouse: (req, res, then) => {
    const db = req.app.get('db');
    const { name, address, city, st, zip, image_url, mortgage_amt, monthly_rent } = req.body;
    db.create_house([name, address, city, st, zip, image_url, mortgage_amt, monthly_rent]).then(house => {
      return res.status(200).json(house);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  },
  deleteHouse: (req, res, then) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.delete_house([id]).then(house => {
      return res.status(200).json(house);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  }
}