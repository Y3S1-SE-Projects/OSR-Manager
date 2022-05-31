const Student = require("../models/Student.model");
const logger = require("../../utils/logger");

//create student
const createStudent = (req,res)=>{

    logger.info(`<-- ${req.method} Request`);
    const student = new Student(req.body);

    Student.create(student).then(() => {
        res.json("Student added")
        logger.info(`--> ${req.method} Response`);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

//get all the students
const readAllStudents = (req,res)=>{
        logger.info(`<-- ${req.method} Request`);

        Student.find().then((students)=>{
            logger.info(`--> ${req.method} Response`);
            res.json(students);
        }).catch((error)=>{
            logger.error(`${error.message}`)
        })
}

<<<<<<< HEAD
//get all the students
=======
//get the students' count
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
const getCount = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);

    Student.countDocuments().then((stdcount)=>{
        logger.info(`--> ${req.method} Response`);
        res.json({
            count:stdcount
        });
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

const getUsernames = (req,res)=> {
    logger.info(`<-- ${req.method} Request`);
    const names = req.params.name;

    Student.findOne({name:names}).then((student)=>{
        logger.info(`--> ${req.method} Response`);
        res.json(student);
    }).catch((error)=>{
        logger.error(`${error.message}`)
    })
}

module.exports = {createStudent,readAllStudents,getCount,getUsernames}