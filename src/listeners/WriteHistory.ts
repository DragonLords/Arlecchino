import { Embed, EmbedBuilder } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';

export default function WriteHistory(newEmbed:Embed){
    const historyPath:string=path.resolve(__dirname,'../Assets/UpdateHistory.json');
    let GameHistory:history={
        hist:[]
    }
    const data=fs.readFileSync(historyPath,'utf-8');
    GameHistory=JSON.parse(data);
    const newEmbedData:EmbedData={
        color: newEmbed.color as number,
        title: newEmbed.title as string,
        author: newEmbed.author as Author,
        description: newEmbed.description as string,
        thumbnail: newEmbed.thumbnail as Thumbnail,
        fields: newEmbed.fields as Array<Field>,
        image: newEmbed.image as Image,
        timestamp: newEmbed.timestamp as string
    }
    GameHistory.hist.push(newEmbedData);
    console.log(GameHistory);
    fs.writeFileSync(historyPath,JSON.stringify(GameHistory,null,'\t'));
}



interface EmbedData {
    color: number;
    title: string;
    author: Author;
    description: string;
    thumbnail: Thumbnail;
    fields: Field[];
    image: Image;
    timestamp: string;
}

//#region 
interface Author {
    name: string;
    icon_url: string;
}

interface Thumbnail {
    url: string;
}

interface Field {
    name: string;
    value: string;
}

interface Image {
    url: string;
}
//#endregion

interface history {
    hist:Array<EmbedData>;
}