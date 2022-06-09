const Group = require("../models/Group.model");
const logger = require("../../utils/logger");

//create group
const createGroup = async (req, res) => {

    logger.info(`<-- ${req.method} Request`);
    const group = new Group(req.body);
    const {name, leader, member2, member3, member4} = new Group(req.body);

    if (await Group.findOne({name}))
        return res.status(400).json("This group name already exists");
    if (await Group.findOne({leader}))
        return res.status(400).json("This group leader name already exists");
    if (await Group.findOne({member2}))
        return res.status(400).json("This 2nd member name already exists");
    else if (await Group.findOne({member3}))
        return res.status(400).json("This 3rd member name already exists");
    else if (await Group.findOne({member4}))
        return res.status(400).json("This 4th member name already exists");

    Group.create(group).then(() => {
        res.json("Group added")
        logger.info(`--> ${req.method} Response`);
    }).catch((error) => {
        logger.error(`${error.message}`)
    })
}

//update group
const updateGroup = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const id = req.params.id;
    const group = new Group(req.body);

    Group.findByIdAndUpdate(id,group).then(() => {
        res.json("Group added")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//delete group
const deleteGroup = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const id = req.params.id;

    Group.findByIdAndDelete(id).then(() => {
        res.json("Group deleted")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//get all the groups
const readAllGroups = (req,res)=>{
        logger.info(`<-- ${req.method} Request`);

        Group.find().then((groups)=>{
            logger.info(`--> ${req.method} Response`);
            res.json(groups);
        }).catch((error)=>{
            logger.error(`${error.message}`)
        })
}

//get the groups' count
const getCount = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);

    Group.countDocuments().then((grpcount)=>{
        logger.info(`--> ${req.method} Response`);
        res.json({
            count:grpcount
        });
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//get a group
const getGroup = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);
    const names = req.params.name;

    Group.findOne({name:names}).then((group)=>{
        logger.info(`--> ${req.method} Response`);
        res.json(group);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

module.exports = {createGroup,updateGroup,deleteGroup,readAllGroups,getCount,getGroup}