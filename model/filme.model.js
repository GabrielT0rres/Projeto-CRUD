const mongoose = require("mongoose");

const FilmeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter movie name"],
        },

        category: {
            type: String,
            required: false
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);


const Filme = mongoose.model("Filme", FilmeSchema);

module.exports = Filme;