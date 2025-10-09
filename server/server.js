import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import productsRoutes from './routes/producrRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import cartRoutes from './routes/cartRoutes.js'

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json())

connectDB()

app.use('/api',cartRoutes)
app.use('/api',userRoutes)
app.use("/api",productsRoutes)
app.use('/api',loginRoutes)



app.get("/",(req,res)=>{
    console.log("router is getting")
    res.send("route is working")
})
// 🧩 Debug: print all registered routes after they're loaded
if (app._router && app._router.stack) {
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      console.log(middleware.route.path);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          console.log(handler.route.path);
        }
      });
    }
  });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});