const getAllProductsStataic=async (req, res)=>{
    throw new Error('testing async errors')
    res.status(200).json({msg:'products testing rout'})

}
const getAllProducts=async (req, res)=>{
    res.status(200).json({msg:'products  rout'})

}

module.exports ={
    getAllProductsStataic,
    getAllProducts
}