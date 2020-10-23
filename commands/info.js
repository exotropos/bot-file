module.exports = {
    name: 'info',
    description: "info",
    execute(message, args){
      
      if (message.member.roles.cache.has('760370013248159754')){
          message.channel.send('I am running version 1.0.0!');

        } else{
            message.channel.send('You do not have enough permission to do this..');
        }     
      }
    }