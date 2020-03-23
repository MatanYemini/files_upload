const path = require('path');
const IncomingForm = require('formidable').IncomingForm;

exports.uploadForm = (req, res) => {
  var form = new IncomingForm();
  try {
    form.parse(req);

    form.on('fileBegin', function(name, file) {
      file.path = path.join(__dirname, req.params.page, file.name); // change to every path you want
    });

    form.on('file', function(name, file) {
      console.log('Uploaded ' + file.name);
    });
    res.send('ok');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
};

// If you will want to use multer

// var multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, './upload');
//    },
//   filename: function (req, file, cb) {
//       cb(null , file.originalname);
//   }
// });

// var upload = multer({ storage: storage })

// exports.uploadForm = async (req, res) => {
//   try {
//     upload.array()
//     console.log('here');
//     console.log(req.params.page);
//     res.send('ok');
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('server error');
//   }
// };

// exports.responseClient = async () => {
// }
