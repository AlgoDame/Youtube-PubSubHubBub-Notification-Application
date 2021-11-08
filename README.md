# Youtube PubSubHubBub Notification Application

A server side Nodejs application that subscribes to and receives push notifications from YouTube's Data API. Push notifications are received for a specific YouTube channel for the following events: 

* New video is uploaded
* A video’s title is updated
* A video’s description is updated

# Why I created this project
I work as a backend enigineer and I work a lot with third party applications that implement webhooks. It took me a while to figure out how to programmatically receive push notifications from YouTube's API. I had to tinker with someone else's python code (I am not a python dev) to get an idea and then write my own program in Nodejs and typescript. So, I hope this helps someone. Cheers!

# Start up server
``npm start``

# Compile typescript
``npm run dev``
# Technologies used ![](https://img.shields.io/badge/Technologies-used-red.svg) 
* ![](https://img.shields.io/badge/Typescript-.ts-blue.svg) 
* ![](https://img.shields.io/badge/Nodejs-.js-green.svg) 


