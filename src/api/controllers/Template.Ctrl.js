const Template = require("../models/Template.model");
const logger = require("../../utils/logger");

//create template
const createTemplate = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const template = new Template(req.body);

    Template.create(template).then(() => {
        res.json("Template added")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//update template
const updateTemplate = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    let tid = req.params.id;
    const {file_name,file_link} = new Template(req.body);
    const template = {
        file_name,
        file_link
    }

    Template.findByIdAndUpdate(tid,template).then(() => {
        res.json("Template updated")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//delete template
const deleteTemplate = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const id = req.params.id;

    Template.findByIdAndDelete(id).then(() => {
        res.json("Template deleted")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//get all the templates
const readAllTemplates = (req,res)=>{
        logger.info(`<-- ${req.method} Request`);

        Template.find().then((templates)=>{
            logger.info(`--> ${req.method} Response`);
            res.json(templates);
        }).catch((error)=>{
            logger.error(`${error.message}`)
        })
}

//get all the templates
const getCount = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);

    Template.countDocuments().then((tempcount)=>{
        logger.info(`--> ${req.method} Response`);
        res.json({
            count:tempcount
        });
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

const getOneTemplate = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);
    const names = req.params.name;

    Template.findOne({name:names}).then((template)=>{
        logger.info(`--> ${req.method} Response`);
        res.json(template);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

module.exports = {createTemplate,updateTemplate,deleteTemplate,readAllTemplates,getCount,getOneTemplate}