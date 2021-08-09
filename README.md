# Algolia PokeSearch

The purpose of this document is to explain how an Algolia Search can be easily implemented with any digital property to easily start enjoying all the flexibility and benefits **Algolia** offers regarding enhanded search capabilities.

**Note:** *It is not intended to demonstrate how to create a website. The sole intent of the project is to demonstrate the integration with Algolia using the JS SDK.*

## Dev Stack
*	npm
*	FrontEnd
	*	Svelte Kit (SPA Framework)
	*	Rollup (Module Bundler)
*	BackEnd
	*	NodeJS
	*	Svelte (To Serve the server)

## Algolia functionality
Decided to use [Algolia's JS SDK](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript) functionality. While there are other options that will be easier to implement they have limitations regarding functionality and style. I already had a runnning website with Svelte so I decided to just integrate the JS SDK, in some other scenarios it might be a better option to use the [Instant Search Widget](https://community.algolia.com/#instantsearch) "Right tool for each job"
![Right tool](https://media.giphy.com/media/l1Kum52Ai1QUFmMN2/giphy.gif)

## Prerequisite to understand and run the project

*	Have understanding of JS, HTML REST APIs
*	Having an account with [Algolia](https://www.algolia.com)
*	Determinating what dataset to use. You can use the demo ones provided by Algolia [Demo Datasets](https://github.com/algolia/datasets), or use your own one. In my case I used an exported payload from [pokeapi.co](www.pokeapi.co)
*	Understanding the concept of indexing [Indexing with Algolia](https://www.algolia.com/doc/guides/indexing/indexing-overview/#overview)
*	Defining searchable attributes and sort order [Data relevance](https://www.algolia.com/doc/guides/getting-started/the-implementation-process/#configuring-relevance)
*	Collect the **Application ID** and **Search Only ApiKey** from the *API Keys* section of the Algolia's Dashboard
![Algolia's Developers page](https://www.arguinzon.es/public/images/algolia/algoliaKeys.png)

## Getting the project ready to run

1. Execute	`npm install`
2. Insert your **Algolia's Keys** in 
3. Replace Algolia's keys
	3.1. Navigate to `/src/config/`
	3.2. Rename the file `/src/config/config_sample.js/` to `/src/config/config.js/`
	3.3. Replace the value of *client_id* located in the file `/src/config/config.js/` for the one provided by your Algolia's account
	3.4. Replace the value of *apiKey* located in the file `/src/config/config.js/` for the one provided by your Algolia's account
4. Run the app
	4.1. I am using Svelte to compile and run the app.
	Using a command-line terminal navigate to the folder hosting the app and execute `npm run dev`. You will need to leave that terminal window open in order to keep the server running. By default this will be running at `https://localhost:3000`
	
The project is already setup to be running on the mentioned port. This can be changed in the config files

## How does it work?

The user will land in the home page which will present all the available (OG pokemons only). This page also offers a search field (search as you type). This is a dynamic field; each time the user types a letter it will hit **Algolia's Search API** via the JS SDK and perform a search on the `pokemon` index that was created initially 

That is it, quite simple implementation. 

If you click on a specific pokemon you will be presented with details of that pokemon. This is fetching data directly from `pokeapi.co`. All the stats and details of the OG 150 Pokemon are also indexed in Algolia but we are not performing search against that data in this POC

A detailed sequence diagram of the operation can be found next

![Sequence Diagram](https://www.arguinzon.es/public/images/algolia/sequenceDiagram.png)
