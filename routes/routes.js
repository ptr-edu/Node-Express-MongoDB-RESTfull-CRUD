const express = require('express');
const router = express.Router();
module.exports = router;

// Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

// Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get ALL API')
})

// Get by ID Method
router.get('/getOne/:id', (red, res) => {
    res.send('Get by ID API')
})

// Update by ID Method
router.patch('/update/:id', (red, res) => {
    res.send('Update by ID API')
})

// Delete by ID Method
router.delete('/delete/:id', (red, res) => {
    res.send('Delete by ID API')
})