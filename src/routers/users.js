const express = require('express');
const controller = require('../controllers/usersController')

const router = express.Router();

router.get('/list-users', async (req, res, next) => {
    try {
      const response = await controller.list(req)
      return res.json(response);
    } catch (error) {
      next(error)
    }
})

router.get('/get-user', async (req, res, next) => {
  try {
    const response = await controller.getUser(req)
    return res.json(response);
  } catch (error) {
    next(error)
  }
});

module.exports = router;