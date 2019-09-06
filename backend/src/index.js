import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import api from './api';
import config from './config.json';
import Events from './model';
import listener from './event';

let app = express();
const model = new Events({config});
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use('/api', api({ config, model }));
app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

// cryptokitties listener 
listener({config,model})

export default app;
