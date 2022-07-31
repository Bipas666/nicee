const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:toor@finalproject.qln6m8o.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
