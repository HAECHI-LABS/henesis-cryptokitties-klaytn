import { version } from '../../package.json';
import { Router } from 'express';
import resource from 'resource-router-middleware';

const events = ({ config, model }) => resource({

	id : 'event',

	index({ params }, res) {
		res.json(model.getEvents());
	}
});

export default ({ config, model }) => {
	let api = Router();

	// mount the event resource
	api.use('/events', events({ config, model }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
