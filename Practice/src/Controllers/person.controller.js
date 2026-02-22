const Person = require("../Models/Person");

//create
exports.createPerson = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      await Person.insertMany(req.body);
    } else {
      await Person.create(req.body);
    }
    res.status(201).json({ message: "data created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get All
exports.getAllpersons = async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get Single
exports.getPerson = async (req, res) => {
  try {
    const workType = req.params.work;
    if (["Chef", "Waiter", "Manager", "Owner"].includes(workType)) {
      const data = await Person.find({ work: workType });
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Invalid work type" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Servar Error" });
  }
};

// GET BY WORK
exports.getPersonByWork = async (req, res) => {
  try {
    const workType = req.params.work;

    if (!["Owner", "Chef", "Waiter", "Manager"].includes(workType)) {
      return res.status(400).json({ message: "Invalid work type" });
    }

    const data = await Person.find({ work: workType });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//GET BY ID
exports.getPersonById = async function(req, res) {
  try {
    const personId = req.params.id;
    const personData = await Person.find({ _id: personId });
    if(!personData.length)
    {
      return res.status(404).json({message : 'Invalid ID'});
    } else {
      res.status(200).json(personData);
      console.log('data fetched successfully as id');
    }
    
  } catch (error) {
    res.status(500).json({message : error.message});
  }
}
//Update Person
exports.updatePerson = async function(req, res) {
  try {
      const personId = req.params.id;
      const newPersonData = req.body;

      const data = await Person.findByIdAndUpdate(personId,newPersonData,{
        new : true, // return the updated document
        runValidators : true // run mongoose validation
      });

      if(!data) {
          return res.status(404).json({message : 'Person Not Found'});
      } 
      
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//delete person
exports.deletePerson = async function (req, res) {
  try {
    const id = req.params.id;
    const data = await Person.findByIdAndDelete(id);
    if(!data)
    {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json({ message: "Person deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}