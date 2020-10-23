module.exports = {
    name: 'apply',
    description: "applies",
    execute(message, args){

        if (message.member.roles.cache.has('760370013248159754')){
           message.channel.send('@here Please send all your applications here with the form given below.')
           message.channel.send('-----------------------------------------------------------------------------------------------------')
           message.channel.send('1: What is your name? (Real Life)')
           message.channel.send('2:  How old are you?')
           message.channel.send('3:  Why do you want to become a staff member?')
           message.channel.send('4:  How active will you be on the server?')
           message.channel.send('5:  What steps would you take to settle a dispute in the server between two members.Between two staff members?')
           message.channel.send('6:  Will you ever disobey the orders of a superior?')
           message.channel.send('7:  What actions would you take if a higher rank were abusing their admin powers? (Muting without cause, kicking/banning)')
           message.channel.send('8:  Do you promise to be mature while being a staff on this server?')
           message.channel.send('9:  Do you promise to use proper grammar/spelling as well as act professional as a staff member?')
           message.channel.send('10: Do you understand that we reserve the right to observe you/take action (demote) if we feel your ability as a staff member is subpar?')

        } else{
            message.channel.send('You do not have enough permission to do this..');
        }     
      }
    }