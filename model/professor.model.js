const mongoose = require("mongoose");

const ProfessorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter teacher name"],
        },

        Disciplina: {
            type: String,
            required: true
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


const Professor = mongoose.model("Professor", ProfessorSchema);

module.exports = Professor;