import { CommandInteraction,Client, ApplicationCommandType, Message } from "discord.js";
import { Command } from '../Command';

export const GameInfo:Command = {
    name: "game",
    description: "addTheDescriptionHere",
    type: ApplicationCommandType.ChatInput,
    
    run:async(client:Client,interaction:CommandInteraction)=>{
        await interaction.followUp(" ");
        interaction.channel?.lastMessage?.delete();
        const exist:boolean=true;
        const id:string|undefined=interaction.member?.user.id;
        const content="";
        interaction.followUp({ephemeral:true,content});
    }
}