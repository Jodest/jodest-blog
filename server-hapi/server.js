const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
// const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi');
// const schema = require('./graphql/schema');
// const Painting = require('./models/Painting');

/* swagger section */
// const Inert = require('inert');
// const Vision = require('vision');
// const HapiSwagger = require('hapi-swagger');
// const Pack = require('./package');


const server = hapi.server({
	port: 4000,
	host: 'localhost'
});

mongoose.connect('mongodb://127.0.0.1:27017/blog');

mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const createServer = async () => {

	// await server.register([
	// 	Inert,
	// 	Vision,
	// 	{
	// 		plugin: HapiSwagger,
	// 		options: {
	// 			info: {
	// 				title: 'Paintings API Documentation',
	// 				version: Pack.version
	// 			}
	// 		}
	// 	}
	// ]);

	// await server.register({
	// 	plugin: graphiqlHapi,
	// 	options: {
	// 		path: '/graphiql',
	// 		graphiqlOptions: {
	// 			endpointURL: '/graphql'
	// 		},
	// 		route: {
	// 			cors: true
	// 		}
	// 	}
	// });

	// await server.register({
	// 	plugin: graphqlHapi,
	// 	options: {
	// 		path: '/graphql',
	// 		graphqlOptions: {
	// 			schema
	// 		},
	// 		route: {
	// 			cors: true
	// 		}
	// 	}
	// });


	server.route([
		{
			method: 'GET',
			path: '/',
			// config: {
			// 	description: 'Get all the paintings',
			// 	tags: ['api', 'v1', 'painting']
			// },
			handler: (req, reply) => {
				return `<h1>Hello</h1>`;
			}
		},
		// {
		// 	method: 'POST',
		// 	path: '/api/v1/paintings',
		// 	config: {
		// 		description: 'Get a specific painting by ID.',
		// 		tags: ['api', 'v1', 'painting']
		// 	},
		// 	handler: (req, reply) => {
		// 		const { name, url, technique } = req.payload;
		// 		const painting = new Painting({
		// 			name,
		// 			url,
		// 			technique
		// 		});

		// 		return painting.save();
		// 	}
		// }
	]);

  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch(err) { // если не смогли стартовать, выводим ошибку
    console.log(JSON.stringify(err));
  }
};

process.on('unHandledRejection', (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
});

createServer();