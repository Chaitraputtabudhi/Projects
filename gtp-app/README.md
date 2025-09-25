Description
This is a web-based AI chatbot application that allows users to interact with OpenAI's GPT-3.5-turbo model through a clean, responsive chat interface. The app features conversation history storage, real-time messaging display, and a Bootstrap-styled UI that works across different devices.
Tech Stack
Backend

Node.js - Runtime environment
Express.js v5.1.0 - Web application framework
MongoDB - Database for storing chat history
Mongoose v8.17.2 - MongoDB object modeling
OpenAI API v5.13.1 - AI model integration
Nunjucks v3.2.4 - Server-side templating engine

Frontend

HTML5 - Markup structure
Bootstrap 4.4.1 - CSS framework for responsive design
Custom CSS - Chat interface styling
jQuery - JavaScript functionality

Development & Utilities

dotenv - Environment variable management
Morgan - HTTP request logging middleware
Nodemon - Development auto-restart tool
mongoose-plugin-autoinc - Auto-incrementing fields

Architecture

MVC Pattern - Model-View-Controller structure
REST API endpoints - GET and POST routes
Database Integration - MongoDB with Mongoose ODM
Environment Configuration - Secure API key management

Key Features

Real-time Chat Interface - Clean, WhatsApp-style messaging UI
Conversation History - Persistent storage of all chat interactions
Responsive Design - Mobile and desktop compatible
Error Handling - Graceful handling of API limits and errors
Message Typing - Differentiated display for user vs AI messages
Search History - View all previous conversations
Auto-incrementing IDs - Database optimization with plugin

The application follows modern web development practices with proper separation of concerns, environment-based configuration, and robust error handling for production use.RetryClaude can make mistakes. Please double-check responses.

********************************************************************************************************************************************************************


bin/www: This is the entry point of the application.

app.js: This is the main Express server configuration file.

routes.js: This file manages all the website routes.

models.js: This file contains all the application models.

templates: This directory contains all the HTML files of the project.


gpt cdetails :

steps to get api-key : https://how.dev/answers/how-to-get-api-key-of-gpt-3
key : test-gpt-key : 
api name : gpt-app

