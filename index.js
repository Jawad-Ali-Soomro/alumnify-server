const express = require('express');
const app = express();
const cors = require('cors');
const { userRouter, postRouter, eventRoute, jobRoutes } = require('./routes');
const connectDatabase = require('./config/connectDatabase');
require('dotenv').config({
    path:'.env'
});
const port = process.env.PORT || 8080;
connectDatabase()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api/event', eventRoute)
app.use('/api/job', jobRoutes)

app.listen(port, () => {
    console.log(`server is running`);
})