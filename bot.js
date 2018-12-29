client.on("guildMemberAdd", member => {
        if(member.guild.id === "آيدي السيرفر") {
  const channel = member.guild.channels.find('id', 'آيدي الروم'); 
if (!channel) return;
channel.send(**<@${member.user.id}> الكلمه الي تبيها)
}}); // by: faisal
