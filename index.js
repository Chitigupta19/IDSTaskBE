import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURl = process.env.MONGO_URI;

/*mongoose.connect(MONGOURl).then(()=>{
    console.log("Database connected successul.")
    app.listen(PORT,()=>{
        console.log('server is running on port 5000')
    })
})
.catch((error) => console.log(error));
*/
(async ()=>{
    try{
        await mmongoose.connect("mongodb+srv://Ajay_Parmar:<password>@cluster0.3qvdgey.mongodb.net/")
        console.log("DB is connecyed");
        const onListening =()=>{
            console.log("Listening port on 5000");
        }
        app.listen(5000,onListening)
    }catch (error){
        console.error("error:",error);
        throw error;
    }
})
app.use("/api/user", route)