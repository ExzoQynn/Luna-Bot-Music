const discord = require('discord.js');
const { queues } = require('..');

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
            
        if(!queues[message.guild.id]) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("🎶 Nothing is playing!")
                    .setColor("FF3737")
            );
        }

        queues[message.guild.id]._playNext();
    },

    command: 'skip'
}