const { MongoClient } = require("mongodb");

// Replace the url string with your connection string.
const uri =
  "mongodb+srv://ShecktorS:****@cluster0.0ymyk8h.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("school");
    const courses = database.collection("courses");
    const students = database.collection("students");

    // Query for a movie that has the title 'Back to the Future'
    const addCourse = {
      "nome del corso": "Matematica per le arti",
      materia: "Matematica artistica",
      docente: "Filippau Ciauciau",
    };
    // const course = await courses.insertOne(addCourse);
    const addCourses = await courses.insertMany([
      {
        "nome del corso": "Tecnica organica di selezione",
        materia: "Chimica organica",
        docente: "Ronald Sceriff",
      },
      {
        "nome del corso": "Astrologia per i corsi di teorie scentifiche",
        materia: "Astrologia dinamica adattata",
        docente: "Stella Biondi",
      },
      {
        "nome del corso": "Design e cultura del territorio",
        materia: "Architettura industriale",
        docente: "Mario Costruito",
      },
      {
        "nome del corso": "Migrazioni, diritti, integrazione",
        materia: "Giurisprudenza",
        docente: "Legolas Legiferio",
      },
    ]);
    // const morecourses = await courses.insertMany(addCourses);

    // await students.deleteOne({ nome: "Marta" });

    // const searchStudent = students.find({ nome: "Shugar" });

    // const updateFabrizio = await students.updateOne(
    //   { nome: "Fabrizio" },
    //   { $set: { cognome: "Sciolto" } }
    // );

    // const newStudent = await students.insertOne({
    //   nome: "Filippo",
    //   cognome: "Martinez",
    //   matricola: "0665647",
    //   corsi: ["Letteratura italiana", "Inglesistica"],
    //   esami: ["Italiano scritto", "arte moderna"],
    // });

    const cambiaDatiDocumento = await students.updateMany(
      { nome: "Filippo" },
      { $set: { cognome: "cicciuzzo", matricola: "0033434" } }
    );
    console.log(cambiaDatiDocumento);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
