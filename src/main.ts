import express,{NextFunction, Request, Response} from 'express';
// import { Request, Response } from 'express';
import router from '../src/routes/movieRoutes';

const app=express();
const port=7000;
app.use(express.json());
app.use('/movies', router);
app.use((error:any, req:Request, res:Response, next:NextFunction)=>{
    console.log("error received", error);
    if(error.status===404 || error.status===403 || error.status===400){
        res.status(error.status).json(error)
    }
  else { res.status(500).json({
    message:"internal server error"
  })}
}
)



app.listen(port, ()=>{
  console.log(`server is listening to port ${port}`);
})