
const Item = require('./item.model')
const _ =  require('lodash')

const createOne = async (req, res) => {
    console.log(req.body)
    
    const body = _.pick(req.body, 
        ['name', 'photo', 'price']);
    try{
        const item = await Item.create(body)
        console.log(item)
        res.status(200).json({
            success: true, 
            data: item
        })

    }catch(err ){
        console.log(err)
        res.status(404).json({error: 'Error occurred'})
    }
}

const getAll = async (req, res) => {
    let { page = 1, limit = 5, asc = 1 } = req.query;

    try{

        const items = await Item.find({})
        .sort({ price: asc })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

        // get total documents in the Posts collection 
        const count = await Item.countDocuments();

        res.json(
            {success: true,
            data: {
                items,
                totalCount: count,
                currentPage: page
            }
        })
    }catch(err){
        res.status(404).json({Error: 'Could not get the data'})
    }
}

const getOne = async (req, res) => {
    let {id} = req.params

    console.log(id)
    try{
        const item = await Item.findById(id)
        res.status(200).json({
            success: true,
            data: item
        })
    }catch(err){
        console.log(err)
        res.status(404).send({error: 'document not found'})
    }
}

const deleteOne = async (req, res) => {
    let {id} = req.params

    console.log(id)
    try{
        const item = await Item.findByIdAndRemove(id)
        res.status(200).json({
            success: true
        })
    }catch(err){
        console.log(err)
        res.status(500).send({error: 'Internal error'})
    }
}



module.exports = {
    createOne,
    getAll,
    getOne,
    deleteOne
}