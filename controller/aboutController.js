const About = require("../Models/About");

const aboutShow = (req, res) => {
  About.find("", (err, data) => {
    console.error(err, "About routes get error message");
    res.json(data);
  });
};
const aboutCreate = (req, res) => {
  const about = new About(req.body);

  about.save((err, data) => {
    res.json(data);
  });
};
const aboutUpdate = (req, res) => {};
const aboutDelete = (req, res) => {};

module.exports = {
  aboutShow,
  aboutCreate,
  aboutUpdate,
  aboutDelete,
};
