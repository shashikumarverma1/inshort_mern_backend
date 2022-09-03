const mongoose=require("mongoose")

export const dbConnection=async()=>{
    const url=`mongodb://localhost:27017/web`
    // const url=`mongodb://user:user1234@ac-ifmup2l-shard-00-00.3tq20wg.mongodb.net:27017,ac-ifmup2l-shard-00-01.3tq20wg.mongodb.net:27017,ac-ifmup2l-shard-00-02.3tq20wg.mongodb.net:27017/?ssl=true&replicaSet=atlas-lhk565-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(url,{useNewUrlParser:true})
       console.log('db connected')
    }catch(err){
        console.log(err.message)
    }
}
// export default dbConnection ;