module.exports = {
    name: 'info',
    description: "info",
    execute(message, args){
      
        if (message.member.roles.cache.has('760398221410304050')){
          message.channel.send('Welcome to the main help page! How can I help you?')
          message.channel.send('-----------------------------------------------------------------------------------------------------')
          message.channel.send(':ballot_box:  Be sure to upvote the server here for exclusive rewards! ===> https://top.gg/servers/746010770474795039')
          message.channel.send(':arrow_double_up:  Be sure to bump the server for rewards and unlockables! ===> https://disboard.org/server/746010770474795039')
          message.channel.send(':page_with_curl:  Send your staff applications in at #applications in the form given.')
          message.channel.send('-----------------------------------------------------------------------------------------------------')
          message.channel.send(' I am on version 1.0.0!')

        } else{
            message.channel.send('You do not have enough permission to do this..');
        }     
      }
    }