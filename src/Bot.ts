import { log } from "console";
import { Client, IntentsBitField } from "discord.js";
import path from "path";
import dotenv from "dotenv";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import inviteGenerator from "./listeners/inviteGenerator";
dotenv.config({path:path.resolve(__dirname,"../.env")});
const token=process.env.BOT_TOKEN;


log("Bot is starting...");
const allIntents=new IntentsBitField(32767);
const client=new Client({
    intents:allIntents
});


ready(client);
interactionCreate(client);

client.login(token);