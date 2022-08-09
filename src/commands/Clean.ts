import { CommandInteraction,Client, ApplicationCommandType, Message } from "discord.js";
import { Command } from '../Command';

export const Clean:Command = {
    name: "clean",
    description: "Cleaning",
    type: ApplicationCommandType.ChatInput,
    
    run:async(client:Client,interaction:CommandInteraction)=>{
        if(interaction.user.id===process.env.Auth){
            const all=await interaction.channel?.messages.fetch();
            all?.map((e)=>{
                if(e.author.id===client.user?.id){
                    e.delete();
                }
            });
        }else{
            await interaction.followUp(" ");
            interaction.channel?.lastMessage?.delete();
            interaction.followUp({ephemeral:true,content:"You don't have the right for using this commands"});
        }
    }
}