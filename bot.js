client.on("guildMemberAdd", member => {
        if(member.guild.id === "527900132495065088") {  
  const channel = member.guild.channels.find('id', '527902237431693352'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> **welcome in server ToKyO CiTy**:rose:`)
}}); // by: faisal
