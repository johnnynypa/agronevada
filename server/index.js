import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from 'dos-config';


// import graphql from './routes/graphql';
import login from './routes/login';

var app = express();
// const endPoint = '/graphql';


app.use(cors());
app.use(bodyParser.json());

// app.use('/login', login);

// app.post(endPoint, (req, res, next) => {
//     //Validacion

//     next();
// });

// app.use(endPoint, graphql);

// app.use('/graphiql', graphql);

// app.set('port', (process.env.PORT || 8081));
app.set('port', (8081));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
    console.log(`EL servidor escucha en: http://localhost:${app.get('port')}/`);
    console.log(`GraphiQL listen in http://localhost:${app.get('port')}/graphiql`);
});

// import User from './model/definitions/usuario';
// User.newUser('Angel Laguna', 'angel', '1234', 1);




