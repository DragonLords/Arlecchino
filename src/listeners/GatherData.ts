import { Client, Collection, Guild } from 'discord.js';
import { stringify } from 'querystring';
import DataWriter from './DataWriter';

export default function GatherData(client:Client):void{
    var a=client.guilds.cache.toJSON();
    let coll:Collection<string,Guild>=client.guilds.cache;
    // DataWriter(client.guilds.cache.at(0) as Guild,client);
} 