# README

## Yaaasss

## Description
Yaaasss is a social platform where users can plan and invite each other to meetups. Users have the ability to search for a category of business and desired location for potential meetups. Users can browse options and even click on businesses they want to learn more about. Once a user selects a business, they can create an event and invite friends by email. With yaaasss, the possibilities are endless and friends and family can easily find places to meet and connect. Yaaasss please!

## Installation
Fork and clone this repository as well as the [Rails API Backend](https://github.com/pete3249/yaaasss-api). 

In the backend, install [PostgreSQL](https://www.postgresql.org/docs/) and run `rails db:create` and `rails db:migrate.` This will create the database needed for your application. 

Obtain your API Key from [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3/get_started) and create a new `.env` file to store it. You can store your key in a global variable (API_KEY='YOUR_KEY') and add your `.env` file to `Gitignore`. 

Finally, run `rails s` to start the Rails server and navigate to the homepage [localhost:3001](localhost:3001/) to confirm it is working correctly. 

In the frontend, run `npx install` to install dependencies and either `npm start` or `yarn start` to boot up the development server. 

## Support

Ask questions or send feedback to `katelynrpeterson16@gmail.com`.

## Contributor's Guide

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://opensource.org/licenses/MIT)