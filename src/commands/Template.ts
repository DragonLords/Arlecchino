import { CommandInteraction,Client, ApplicationCommandType, Message } from "discord.js";
import { Command } from '../Command';

export const TemplateCommand:Command = {
    name: "nameOfTheCommandHere",
    description: "addTheDescriptionHere",
    type: ApplicationCommandType.ChatInput,
    
    run:async(client:Client,interaction:CommandInteraction)=>{
        // add what the command do here
        // and after you're done doing your command 
        // don't forget to add it to the command list in "Commands.ts"
    }
}