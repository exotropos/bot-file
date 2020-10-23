module.exports = {
    name: 'clear',
    description: "clears",
    execute(message, args){
      
      if (message.member.roles.cache.has('760370013248159754')){
            message.channel.bulkDelete(args[1]);


      } else{
          message.channel.send('You do not have enough permission to do this..');
      }     
    }
  }