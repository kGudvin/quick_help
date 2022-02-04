const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);


const userRouter = require('./routes/userRouter');
const rolesRouter = require('./routes/rolesRouter');
const usersTasksRouter = require('./routes/usersTasksRouter');

const PORT = 3001;
const app = express();


app.use(express.json());
app.use(morgan('dev'));

//необходим для авторизации
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use(
    session({
      name:'sid',
      store: new FileStore({}),
      saveUninitialized: false,
      secret: 'dsmkalmdkl',
      resave: false,
    })
);


app.use('/user', userRouter);
app.use('/roles', rolesRouter)
app.use('/userstasks', usersTasksRouter)

app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})
