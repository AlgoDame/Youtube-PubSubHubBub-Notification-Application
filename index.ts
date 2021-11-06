import express from 'express';
import dotenv from "dotenv";
dotenv.config();

const YouTubeNotifier = require('youtube-notification');
const app = express();
const port = 6050;
const baseUrl = "https://strong-yak-75.loca.lt"
let channelId = process.env.CHANNEL_ID;

export const notifier = new YouTubeNotifier({
    hubCallback: `${baseUrl}/youtube/notifications`,
});

app.use("/youtube/notifications", notifier.listener());

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)

})

notifier.subscribe(channelId);

notifier.on('subscribe', data => {
    console.log('Subscribed');
    console.log(data);
});

notifier.on('notified', data => {
    console.log('New Video');
    console.log(data);
});


