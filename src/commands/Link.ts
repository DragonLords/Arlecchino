import { CommandInteraction,Client, ApplicationCommandType, Message } from "discord.js";
import { Command } from '../Command';

export const link:Command = {
    name: "link",
    description: "send the link",
    type: ApplicationCommandType.ChatInput,
    
    run:async(client:Client,interaction:CommandInteraction)=>{
        await interaction.followUp({content:"e"});
        interaction.channel?.lastMessage?.delete();    
        interaction.followUp({ephemeral:true,content:"[There you go](https://www.youtube.com/watch?v=dQw4w9WgXcQ)"})
    }
}