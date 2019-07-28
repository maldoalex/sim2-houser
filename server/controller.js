module.exports = {
  getAllHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all()
      .then(houses => res.status(200).send(houses))
      .catch(error => {
        res.status(500).send({ msg: "error!" });
        console.log(error);
      });
  },
  getHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .get_one_house(id)
      .then(house => res.status(200).send(house))
      .catch(error => {
        res.status(500).send({ msg: "error!" });
        console.log(error);
      });
  },
  addHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { property_name, address, city, state, zip } = req.body;

    dbInstance
      .add_house([property_name, address, city, state, zip])
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).send({ msg: "error!" });
        console.log(error);
      });
  },
  deleteHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_house([id])
      .then(houses => res.status(200).json(houses))
      .catch(error => {
        res.status(500).send({ msg: "error!" });
        console.log(error);
      });
  }
};
