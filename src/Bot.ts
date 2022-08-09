import { log } from "console";
import { Client } from "discord.js";
import path from "path";
import dotenv from "dotenv";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import inviteGenerator from "./listeners/inviteGenerator";
dotenv.config({path:path.resolve(__dirname,"../.env")});

const token=process.env.BOT_TOKEN;

log("Bot is starting...");

const client=new Client({
    intents:[]
});

ready(client);
interactionCreate(client);
// log(process.env.CLIENT_ID);
// log(process.env.PERMISSIONS);
// log(process.env.SCOPES);

client.login(token);