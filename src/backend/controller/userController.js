const db = require("../config/db");

const getUser = async (req, res) => {
    try{
        const data = await db.query('SELECT * FROM employees');
        if(!data){
           return res.status(404).send({
                success: false,
                message:"No record Found"
            })
        }
        console.log(data);
        res.status(200).send({
            success: true,
            message:"All user records",
            data,
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error while get the user",
            error
        })
    }
};

module.exports ={ getUser };