const express = require('express');
const router = express.Router();

const personController = require('../Controllers/person.controller');

router.post('/',personController.createPerson);
router.get('/',personController.getAllpersons);
router.get('/role/:work',personController.getPersonByWork);
router.get('/:id',personController.getPersonById);
router.put('/:id',personController.updatePerson);
router.delete('/:id',personController.deletePerson);


module.exports = router;