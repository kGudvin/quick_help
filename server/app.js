const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
const fileUpload = require('express-fileupload');
const busboy = require('connect-busboy')

const userRouter = require('./routes/userRouter');
const rolesRouter = require('./routes/rolesRouter');
const usersTasksRouter = require('./routes/usersTasksRouter');
const categoriesRouter = require('./routes/categoriesRouter')
const path = require('path')

const PORT = 3001;
const app = express(); 

app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload());
app.use(express.json());
app.use(morgan('dev'));
app.use(busboy());
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
app.use('/categories', categoriesRouter)


app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})
