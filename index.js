    const Discord = require('discord.js');
    const bot = new Discord.Client();
    const servers = require('./music.json');

    const fs = require('fs');
    bot.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);

        bot.commands.set(command.name, command);

    }

const ytdl = require("ytdl-core");


    const token = ''

    const PREFIX = '~';

    bot.on('ready', () =>{
        console.log('Online, Welcome Back!');
    })

    bot.on('message', message=>{

        let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){
            case 'apply':
                bot.commands.get('apply').execute(message, args);
        break;
            case 'ping':
                bot.commands.get('ping').execute(message, args);
        break;
            case 'vote':
                bot.commands.get('vote').execute(message, args);
        break;
            case 'info':
                bot.commands.get('info').execute(message, args);
        break;
            case 'clear':
                bot.commands.get('clear').execute(message, args);
        break;
            case 'help':
                bot.commands.get('help').execute(message, args);
        break;
            case 'play':

                function play(connection, message){
                    var server = servers[message.guild.id];

                    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

                    server.queue.shift();

                    server.dispatcher.on("end", function(){
                        if(server.queue[0]){
                            play(connection, message);
                        }else {
                            connection.disconnect();
                        }
                    });


                }


                if(!args[1]){
                    message.channel.send("You must provide a link!");
                    return;    
                }
    
              if (!servers[message.guild.id]) {
                    servers[message.guild.id] = {
                    queue: []
                    }
                }
    
                var server = servers[message.guild.id];
    
                server.queue.push(args[1])
    
                if(!message.member.voice.connection) {
                    message.member.voiceChannel.join().then(function(connection){
                    play(connection, message);
                    })
                }


            break;
        }



    });
    bot.login(token);