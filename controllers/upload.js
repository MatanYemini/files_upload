exports.uploadForm = async (req, res) => {
  try {
    console.log('here');
    console.log(req.params.page);
    res.send('ok');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
};
