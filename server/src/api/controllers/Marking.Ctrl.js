const Marking = require("../models/Marking.model");
const logger = require("../../utils/logger");

//create marking
const createMarking = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const marking = new Marking(req.body);

    Marking.create(marking).then(() => {
        res.json("Marking Scheme added")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//update marking
const updateMarking = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    let tid = req.params.id;
    const {file_name,file_link} = new Marking(req.body);
    const marking = {
        file_name,
        file_link
    }

    Marking.findByIdAndUpdate(tid,marking).then(() => {
        res.json("Marking updated")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//delete marking
const deleteMarking = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const id = req.params.id;

    Marking.findByIdAndDelete({id}).then(() => {
        res.json("Marking deleted")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//get all the markings
const readAllMarkings = (req,res)=>{
        logger.info(`<-- ${req.method} Request`);

        Marking.find().then((markings)=>{
            logger.info(`--> ${req.method} Response`);
            res.json(markings);
        }).catch((error)=>{
            logger.error(`${error.message}`)
        })
}

//get all the markings
const getCount = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);

    Marking.countDocuments().then((tempcount)=>{
        logger.info(`--> ${req.method} Response`);
        res.json({
            count:tempcount
        });
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

const getOneMarking = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);
    const names = req.params.name;

    Marking.findOne({name:names}).then((marking)=>{
        logger.info(`--> ${req.method} Response`);
        res.json(marking);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

module.exports = {createMarking,updateMarking,deleteMarking,readAllMarkings,getCount,getOneMarking}