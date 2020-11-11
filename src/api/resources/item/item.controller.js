
const Item = require('./item.model')
const _ =  require('lodash')

const createOne = async (req, res, next) => {
    console.log(req.body)
    
    const body = _.pick(req.body, 
        ['name', 'photo', 'price']);
    try{
        const item = await Item.create(body)
        console.log(item)
        res.status(200).send({
            success: true, 
            data: item
        })

    }catch(err ){
        console.log(err)
        res.status(404).send({error: 'Error occurred'})
    }
}


module.exports = {
    createOne
}