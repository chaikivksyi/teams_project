const router = require('express').Router();
const userRoutes = require('./users');

router.use("/users", userRoutes);

router.get('/api', (req, res) => {
    res.send([
        {
            id: 1,
            title: 'test'
        },
        {
            id: 2,
            title: 'test 2'
        }
    ])
})

router.get('/', (req, res) => {
    res.send('Server working!')
})

module.exports = router;