module.exports = {
    name: 'vote',
    description: "vote",
    execute(message, args){
      
      if (message.member.roles.cache.has('760370013248159754')){
        message.channel.send('Be sure to upvote the server here for exclusive rewards! ===> https://top.gg/servers/746010770474795039')


    } else{
        message.channel.send('You do not have enough permission to do this..');
    }     
  }
}