app.get("/student", function (req, res) {
  const studentData = {
    name: "Kishan",
    surname: "Thakor",
    institute: "DAIICT",
    isStudy: true,
  };
  res.send(studentData);
});

app.post("/student", function (req, res) {
  // express.json() middleware will parse the incoming request body and make it available inside req.body
  const studentData = {
    name: req.body.name,
    surname: req.body.surname,
    institute: req.body.institute,
    isStudy: req.body.isStudy,
  };
  console.log("post request");
  res.send(studentData);
});