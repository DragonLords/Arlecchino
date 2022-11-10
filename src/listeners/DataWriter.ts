import { Channel, Guild, Client } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';

export default function DataWriter(guild:Guild,client:Client){
    const guildID:string=guild.id;
    let channels:Array<Channel>=[];
    guild.channels.cache.map((e)=>{
        channels.push(e);
    });
    const devChannel:string="1036453308807778465";
    channels.find((e)=>{

        e.id===devChannel;
    })
    
    
    const data:BotData={
        BotName: client.user?.username,
        Channels: channels,
        MainGuild: guild,
        DevChannel: channels.find((e)=>(e.id===devChannel))
    };
    const s:string=JSON.stringify(data,null,"\t");
    //console.log(s);
    // console.log(data);
    const filePath:string=path.resolve(__dirname,"../Assets/Data.json");

    fs.writeFileSync(path.resolve(__dirname,'../Assets/Data.json'),s);

}

interface BotData {
    BotName:string|undefined;
    Channels:Array<Channel>;
    MainGuild:Guild;
    DevChannel:Channel|undefined;
}

type Jsonized<T> = T extends object ? {
    [K in keyof T]: 
        T[K] extends Function ? never : 
        T[K] extends Date ? string :
        T[K] extends number ? number :
        T[K] extends string ? string :
        Jsonized<T[K]>
} : T;