const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/challenge`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false } )
    .then(() => console.log('connected to database successfully'))
    .catch(err => console.log(err))