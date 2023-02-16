const express=require('express')
const router = express.Router();

const { getAllProductsStataic, getAllProducts} =require('../controllers/products')


router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStataic)

module.exports = router ;