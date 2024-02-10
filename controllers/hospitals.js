//route GET /api/v1/hospitals
exports.getHospitals=(req,res,next)=>{
    res.status(200).json({success:true,msg:'show all hospitalsTEST'});
};
//route GET /api/v1/hospitals/:id
exports.getHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`show hospitals ${req.params.id}`});
};
//route POST /api/v1/hospitals
exports.createHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Create new hospitals`});
};
//route PUT /api/v1/hospitals/:id
exports.updateHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update hospitals ${req.params.id}`});
};
//route DELETE /api/v1/hospitals/:id
exports.deleteHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Deleteddddddd hospitals ${req.params.id}`});
};
