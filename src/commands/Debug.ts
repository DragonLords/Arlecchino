import { CommandInteraction, Client, ApplicationCommandType, Message } from 'discord.js';
import { Command } from '../Command';

export const Debug: Command = {
    name: "debug",
    description: "Show some debug useful for developpement",
    type: ApplicationCommandType.ChatInput,
    run:async(client:Client,interaction:CommandInteraction)=>{
        const content=interaction.member?.user.username;
        const validation:boolean=interaction.user.id===process.env.Auth;

        const msg:Array<Message>=[];
        if(validation){
            await interaction.followUp("agreed");
            interaction.channel?.lastMessage?.delete();
            interaction.followUp({ephemeral:true,content});
        }else{
            await interaction.followUp(" ");
            interaction.channel?.lastMessage?.delete();
            interaction.followUp({ephemeral:true,content:"you dont have the right for this command"});
        }
    }
};