const express = require('express');
const router = express.Router();
const {getitems, createitems,getsingleitems,updateitems,deleteitems } = require('../controllers/tasks');

router.get('/', getitems); // GET / -> Fetch all items
router.post('/', createitems); // POST / -> Create an item
router.get('/:id', getsingleitems); // GET /:id -> Fetch a single item by ID
router.patch('/:id', updateitems); // PUT /:id -> Update an item by ID
router.delete('/:id', deleteitems); // DELETE /:id -> Delete an item by ID

module.exports = router;
