import { CommandInteraction,Client, ApplicationCommandType } from "discord.js";
import { Command } from "src/Command";

export const Debug: Command = {
    name: "Debug",
    description: "Show some debug useful for developpement",
    type: ApplicationCommandType.ChatInput,
    run:async(client:Client,interaction:CommandInteraction)=>{
        const content=interaction.member?.user.username

        await interaction.followUp({
            ephemeral:true,
            content
        });
    }
};