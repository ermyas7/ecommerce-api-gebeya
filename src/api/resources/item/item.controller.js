
const Item = require('./item.model')
const _ =  require('lodash')

const createOne = async (req, res) => {
    console.log(req.body)
    
    const body = _.pick(req.body, 
        ['name', 'photo', 'price', 'description']);
    try{
        const item = await Item.create({vendor: req.user._id,...body})
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
    console.log('from item ', req.user)
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
        const item = await Item.findById(id).populate('vendor').exec()
        const itemData = {
            _id: item._id,
            name: item.name,
            price: item.price,
            photo: item.photo,
            vendor: {
                _id: item.vendor._id,
                //username: item.vendor.username,
                name: item.vendor.name
            }
        }
        res.status(200).json({
            success: true,
            data: itemData
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
        const item = await Item.findById(id)
        console.log(item)
        if(item  && (item.vendor != req.user._id)){
            res.status(400).send({error: 'You are are not authorized'})
        }
        await Item.findByIdAndDelete(id)
        res.status(200).json({
            success: true
        })
    }catch(err){
        console.log(err)
        res.status(500).send({error: 'Internal error'})
    }
}

const updateOne = async (req, res) => {
    let {id} = req.params
    const {name, photo, price} = _.pick(req.body, 
        ['name', 'photo', 'price']);

    try{
        const item = await Item.findById(id)
        console.log(item)
        if(!item){
          return res.status(404).json({error: 'Item not found'})  
        }
        if(item  && (item.vendor != req.user._id)){
            return res.status(400).json({error: 'You are are not authorized'})
        }
        if(name) item.name = name
        if(photo) item.photo = photo
        if(price) item.price = price

        await item.save()
        res.status(200).json({
            success: true,
            data: item
        })
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal error'})
    }
}


module.exports = {
    createOne,
    getAll,
    getOne,
    deleteOne,
    updateOne
}