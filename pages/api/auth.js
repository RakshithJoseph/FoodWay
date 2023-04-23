import dbConnect from "../../util/mongo";
const axios = require('axios');
const { validationResult } = require('express-validator');

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { latlong } = req.body;
      if (!latlong || !latlong.lat || !latlong.long) {
        return res.status(400).send("Invalid request body");
      }

      const { lat, long } = latlong;
      console.log(lat, long);

      const location = await axios
        .get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=74c89b3be64946ac96d777d08b878d43`)
        .then(async (res) => {
          const response = res.data.results[0].components;
          console.log(response);
          const { village, county, state_district, state, postcode } = response;
          return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode);
        })
        .catch((error) => {
          console.error(error);
        });

      res.send({ location });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};

export default handler;
