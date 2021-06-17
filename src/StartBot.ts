import type {Client} from "discord.js";

export default function StartBot(client: Client) {
    client.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
        }
    });
}
