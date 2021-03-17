const mongoose = require("mongoose");

const MquestaoSchema = mongoose.Schema({

    Enuciado:{
        type: String,
        required: false
    },
    letraA:{
        type: String,
        required: false
    },
    letraB:{
        type: String,
        required: false
    },
    letraC:{
        type: String,
        required: false
    },
    letraD:{
        type: String,
        required: false
    },
    letraE:{
        type: String,
        required: false
    }
  
});

module.exports = mongoose.model('Mquestao', MquestaoSchema);