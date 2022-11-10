import { CommandInteraction,Client, ApplicationCommandType, Message, EmbedBuilder, AttachmentBuilder, Embed } from "discord.js";
import { Command } from '../Command';
import * as path from 'path';
import * as fs from 'fs';
import WriteHistory from "../listeners/WriteHistory";

export const UpdateNote:Command = {
    name: "game-update",
    description: "Give the game update",
    type: ApplicationCommandType.ChatInput,
    
    run:async(client:Client,interaction:CommandInteraction)=>{
        // add what the command do here
        // and after you're done doing your command 
        // don't forget to add it to the command list in "Commands.ts"
        const Title:string="アルレッキーノ v0.1";
        const description:string="This is a brief description of the game";

        const files=new AttachmentBuilder(path.resolve(__dirname,"../Assets/game-icon.png"));

        const embed=new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(Title)
            .setAuthor({ name: 'アルレッキーノ', iconURL: "attachment://game-icon.png"})
            .setDescription(description)
            .setThumbnail("attachment://game-icon.png") 
            // .addFields(
            //     { name: 'Regular field title', value: 'Some value here' },
            //     { name: '\u200B', value: '\u200B' },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            // )
            .addFields({ name: 'Regular field title', value: 'Some value here'})
            .setImage("attachment://game-icon.png")
            .setTimestamp();
        
            
        const last=interaction.followUp({ephemeral:true,embeds:[embed],files:[files]});
        WriteHistory((await last).embeds.at(0) as Embed);
        
    }
}