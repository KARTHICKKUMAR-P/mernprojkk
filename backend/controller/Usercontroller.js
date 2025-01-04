import user from '../model/Usermodel.js';

export const create = async (req, res) => {
    try {
        let userdata = new user(req.body);
        const {email} = userdata;
        const userExit = await user.findOne({email});
        if(userExit){
            return res.status(400).json({message:"User already exist"});
        }
        const saveduser = await userdata.save();
        
        res.status(200).json({saveduser});
    } catch (error) {
        console.error("Error in create:", error);
        res.status(500).json({ error:"internal server error"});
    }
}

export const fetch = async (req, res) => {
    try {
        const userdata = await user.find();
        if(userdata.length === 0){
            return res.status(400).json({message:"No user found"});
        }
        res.status(200).json({userdata});
    } catch (error) {
        console.error("Error in fetch:", error);
        res.status(500).json({ error:"internal server error"});
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExit = await user.findOne({_id:id});
        if(!userExit){
            return res.status(400).json({message:"User not found"});
        }
        const updateUser = await user.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateUser) {
            return res.status(400).json({message:"Failed to update user"});
        }
        res.status(200).json({updateUser});
    } catch (error) {
        console.error("Error in update:", error);
        res.status(500).json({ error:"internal server error"});
    }
}
export const check=async (req,res)=>{
    try{
        const id=req.params.id
    const users=await user.findOne({_id:id})
    if(users){
        res.status(200).json({message:users})
    }
    else{
        res.status(400).json({message:"User not Found"})
    }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}