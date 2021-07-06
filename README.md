# workout-tracker
Fitness tracking app

# Description
This fitness tracker application was developled based on mongdb concept, for the fitness enthusiasts. The solution allow users to record their workout sessions, update previous records, and track workout progress over a period of time. 

When the application is lunched, the homepage display navigation buttons for the user to select, main options includes Fitness and Dashboard . There is also a display of previous workout records , where user can either select option to continue workout or add new workout record. If Add new workout option is selected, the user will be taken to exercise page where a form will be presented for user to add information such as Exercise type, Exercise name, Weight, Sets, Reps, and Duration. And at the buttom of the form user can either click on the button 'complete' or 'Add Exercise'; if complete button is selected the record is added and user will be taken back to the home page. Otherwise the record is saved and the user is presented the form to add another record. 

In addition, user can select dashboard navigation button and be presented with workout dashboard page. Which display two graphical representation of the workout records; workout duration in minutes and daily workout in pounds. 

# Technical
This fitness tracker application is a full-stacked application comprises of both backend and front-end development.  The backend utilized mongoDB technology, whereas front end utilise html, javascript and CSS technology.  

The file structure for this application includes: 

 ## models: This folder contain the schema for the collection

 ## public: frontend display technologies codes were contained here

 ## routes: This folder provided the link between the backend and front-end, it contains codes for performing CRUD operation, to get, post update and delete records as appropriate.  

 ## seeders: contain seed files, which allow some preliminary record to be seeded into the application upon launch for performance test 

The application was deployed on heroku, for optimal performance

# Application
The following are the links for the deployment and github repository.  Some of the pictures can be found in the image folder. 