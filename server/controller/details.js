const Detail = require("../models/detail");

const getAllDetails = async (req, res) => {
    try {
        const details = await Detail.find({})
        res.status(200).json({details});
    } catch (err) {
     res.status(500).json({msg:err});
    }
 }
 const createDetail= async (req, res) => {
 
     try{
         const detail = await Detail.create(req.body)
         res.status(201).json({detail});
     }
     catch(err){
         res.status(500).json({msg:err});
     }
    
 }
 const getDetail= async (req, res) => {
     try {
         const {id:DetailId} = req.params;
         const detail = await Detail.findOne({_id:DetailId});
         if(!detail){
             return res.status(404).json({msg:`Detail not found : ${detailId}`});
         }
         res.status(200).json({detail});
     } catch (err) {
         res.status(500).json({msg:err});
     }
 }
 const updateDetail = async (req, res) => {
    try {
        const {id:detailId} = req.params;
        const detail = await Detail.findOneAndUpdate({_id:detailId}, req.body, {new:true,runValidators:true});
        if(!detail){
            return res.status(404).json({msg:`Detail not found : ${detailId}`});
        }
        res.status(200).json({detail});
    } catch (err) {
        res.status(500).json({msg:err});
    }
 }
 const deleteDetail = async (req, res) => {
     try {
         const {id:detailId} = req.params;
         const detail = await Detail.findOneAndDelete({_id:detailId});
         if(!Detail){
             return res.status(404).json({msg:`Detail not found : ${detailId}`});
         }
         res.status(200).json({msg:`Detail deleted : ${detail}`});
        
     } catch (err) {
         res.status(500).json({msg:err});
     }
         
     
 }
 
 module.exports = {
     getAllDetails,createDetail,getDetail,updateDetail,deleteDetail
 }