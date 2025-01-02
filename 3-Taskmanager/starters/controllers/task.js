const getitems = (req, res) => {
    res.send('All items');
};
const createitems = (req, res) => {
    res.json(req.body);
};

const getsingleitems = (req, res) => {
    res.json({ id: req.params.id });
};

const updateitems = (req, res) => {
    res.send({ id: req.params.id });
};

const deleteitems = (req, res) => {
    res.send({ id: req.params.id });
};

module.exports = { getitems, createitems, getsingleitems, updateitems, deleteitems };
