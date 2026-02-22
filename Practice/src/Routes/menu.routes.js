const express = require('express');
const router = express.Router();

const menucontroller = require('../Controllers/menu.controller');

router.post("/", menucontroller.createMenuItem);
router.get('/', menucontroller.getMenuItem);
router.get('/:category',menucontroller.getMenuItemByCategory);
module.exports = router;