exports.dateCheck=(req,res)=>{
    const {year, month}=req.body;

    if(!year || !month){
            return res.send(404).json({ success:0, message:"Please select the month and year"})
    }
    setTimeout(()=>{
        res.json({
            success:1,
            message:"Success"
        });
    },15*60*1000);
}
