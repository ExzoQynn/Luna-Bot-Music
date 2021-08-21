const discord = require('discord.js');
const { queues , player  } = require('..');
const Queue = require('../structures/Queue');
const { msToHMS } = require('../utils');


module.exports = {
    /**
     * 
     * @param {string[]} args 
     * @param {discord.Message} message 
     */
    run: async (args, message) => {
       
        if(!message.member.voice.channel.id){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("❌ You must be in a voice channel!")
                    .setColor("FF3737")
            );
        } 

        queues[message.guild.id]._leave();
    },

    command: 'l',
}