const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("connected as " + client.user.tag);

  client.user.setActivity("YouTube", { type: "WATCHING" });

  client.guilds.forEach(guild => {
    console.log(guild.name);
    guild.channels.forEach(channel => {
      //console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
    });
    //============================================================
    //general channel id 664022584479973378
    let generalChannel = client.channels.get("664022584479973378");

    const attachment = new Discord.Attachment(
      "https://umuzi.gnomio.com/pluginfile.php/1/core_admin/logo/0x150/1573344297/Logo-02.png"
    );
    generalChannel.send(attachment);
    generalChannel.send("Hello from Umuzi!");
  });

  client.on("message", recievedMessage => {
    if (recievedMessage.author == client.user) {
      return;
    }
    //recievedMessage.channel.send("Recieved your message, " + recievedMessage.author.toString() + ": " + recievedMessage.content);

     if(recievedMessage.content.startsWith("!") || recievedMessage.content.startsWith("*") || recievedMessage.content.startsWith("|")){
        processCommand(recievedMessage);
     }
  });

  function processCommand(recievedMessage){
      let fullCommand = recievedMessage.content.substr(1); //remove characters !*|
      let splitCommand = fullCommand.split(" ");
      let primaryCommand = splitCommand[0];
      let arguments = splitCommand.slice(1) //exclude the first arg and keep the rest
      
      if(primaryCommand == "location" || primaryCommand == "where" || primaryCommand == "place" || primaryCommand == "direction"){
          locationCommand(arguments, recievedMessage);
            console.log("split command " + splitCommand);
            console.log("primary command " + primaryCommand);
            console.log("arguments " +  arguments);

      }

    
      
  }

  function locationCommand (arguments, recievedMessage){
      if(arguments.length == 0){
          recievedMessage.channel.send("Please try to be clear. Try `!location [topic]`");
      } else{
          recievedMessage.channel.send("Umuzi is at 28 Madison St, Jeppestown, Johannesburg \n" + "https://www.google.com/maps/place/Umuzi/@-26.2069544,28.0637644,15z/data=!4m5!3m4!1s0x0:0xf5a78a7d74f3f331!8m2!3d-26.2069544!4d28.0637644");
      }
  }


});

client.login("NjY0MDI4MTc0OTc1MzY5MjE2.XhRI5A.tnSyAxuNJCbeb6TiZZsIq8CEB4M");
