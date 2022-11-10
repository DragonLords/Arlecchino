import { Client, GuildChannel, Channel, TextChannel } from 'discord.js';


export default function NewUpdate(client:Client){
    const guildID="936822189263560715";
    const channelID="1038469243332726794";

    client.channels.cache.get(channelID)?.isTextBased();
    
}

/*
    Carrot::|| Buy:105 => Sell:115
*/