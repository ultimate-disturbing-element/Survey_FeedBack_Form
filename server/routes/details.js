const express = require("express");

const router = express.Router();

const {getAllDetails,createDetail,updateDetail,getDetail,deleteDetail} = require('../controller/details');
router.route('/').get(getAllDetails).post(createDetail);
router.route('/:id').get(getDetail).patch(updateDetail).delete(deleteDetail);

module.exports = router;