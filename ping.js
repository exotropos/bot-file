module.exports = {
    name: 'ping',
    description: "says ping",
    execute(message, args){

        if (message.member.roles.cache.has('760370013248159754')){
            message.channel.send('Pong!')

        } else {
            message.channel.send('You do not have enough permission to do this..');
        }
     }
 }