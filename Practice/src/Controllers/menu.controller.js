const Menu = require('../Models/Menu');

exports.createMenuItem = async function (req, res) {
  try {
    // const data = req.body;
    // const menuData = new Menu(data);
    // await menuData.save();
    let result;

    // If multiple items
    if (Array.isArray(req.body)) {
      result = await Menu.insertMany(req.body);
    }
    // If single item
    else {
      result = await Menu.create(req.body);
    }

    res.status(201).json({
      success: true,
      data: result,
    });
    // res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMenuItem = async function (req, res) {
  try {
    const data = await Menu.find();
    res.status(200).json(data);
    console.log("data fetched successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
}
}


exports.getMenuItemByCategory = async function(req, res) {
    try {
        const itemCategory = req.params.category;
        const data = await Menu.find({category : itemCategory});
        if(!data.length)
        {
            res.status(404).json({message : 'Invalid Item Category'});
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
