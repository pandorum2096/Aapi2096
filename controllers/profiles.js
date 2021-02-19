const Profile = require('../model/profile');

exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
  const { name } = req.body;
  //const imagePath = 'http://localhost:8010/images/' + req.file.filename; // Note: set path dynamically
  const imagePath = 'https://api2096.herokuapp.com/images/' + req.file.filename; // Note: set path dynamically
  const profile = new Profile({
    name,
    imagePath,
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};
