namespace NodeJS{
    interface ProcessEnv {
        BOT_TOKEN:string;
        CLIENT_ID:number;
        PERMISSIONS:number;
        SCOPES:string;
        Auth:string;
    }
}
global.curDir=process.cwd();