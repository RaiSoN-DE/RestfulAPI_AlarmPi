import express from "express";
import db from "../db/database";
import Data from "../domain/sql";

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(Data.getAllDataSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Sensordata listed.",
                data:data
            });
        }
    });
});

router.get("/latest", (req, res, next) => {

    db.query(Data.getLatestDataSQL(), (err, data) => {
       if(!err) {
           res.status(200).json({
               message:"Latest Sensordata listed",
               data:data
           });
       }
    });
});

router.post("/add", (req, res, next) => {

    //read product information from request
    let data = new Data(req.body.temp, req.body.power, req.body.smoke);
    db.query(data.getAddDataSQL(), (err, data)=> {
            if(!err) {
                res.status(200).json({
                    message:"Data added.",
                    id: data.insertId
                });
            } else {
                res.status(200).json({
                    message:"Data cannot be added.",
                });
            }

        });
});

router.get("/:id", (req, res, next) => {
    let pid = req.params.id;

    db.query(Data.getDataByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"Data found.",
                    data: data
                });
            } else {
                res.status(200).json({
                    message:"Data Not found."
                });
            }
        }
    });
});

router.get("/delete/:id", (req, res, next) => {

    let pid = req.params.id;

    db.query(Data.deleteProductByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.affectedRows > 0) {
                res.status(200).json({
                    message:`Data deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message:"Data Not found."
                });
            }
        }
    });
});

module.exports = router;