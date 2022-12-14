import { CommandInteraction,Client, ApplicationCommandType } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Return a greetings",
    type: ApplicationCommandType.ChatInput,
    run:async(client:Client,interaction:CommandInteraction)=>{
        const content="Hello There!";

        await interaction.followUp({
            content,
            ephemeral:true
        });
    }
};