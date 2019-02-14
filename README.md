# FREELY
Freely is a web based geolocation application that lets the user find free events near their current location. It uses EventBrite and MapBox API's. The application has a front-end of HTML, CSS, JavaScript, React. The backend consists of ruby on rails.

# Getting Started
Simply clone the respository file to get started. In the terminal type 
`bundle install`
`yarn install`
`rails db:drop db:create db:migrate db:seed`
 open a PostgreSQL server and 
 run `rails s` in the terminal


# Prerequisites

This is a boilerplate Rails project that uses:

* `ruby ~> 2.5`
* `postgresql` as the database
* `webpacker` with `react`
* the `react_on_rails` gem

# Authors
Stephanie Olaya , Robert Beavin ,Ana Gonzalez

# Acknowledgments
Wyncode Team! 
#neverstoplearning


## Deployment

* `heroku create your-app-name`
* `heroku buildpacks:set heroku/ruby`
* `heroku buildpacks:add --index 1 heroku/nodejs`
* `git push heroku master`
* `heroku run rails db:migrate`
