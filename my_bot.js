const Discord = require("discord.js");
const client = new Discord.Client();
const logo = "https://umuzi.gnomio.com/pluginfile.php/1/core_admin/logo/0x150/1573344297/Logo-02.png";

client.on("ready", () => {
  console.log("connected as " + client.user.tag);

  client.user.setActivity("Online");

  client.guilds.forEach(guild => {
    console.log(guild.name);
    guild.channels.forEach(channel => {
      //console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
    });
    //============================================================
    //general channel id 664022584479973378
    let generalChannel = client.channels.get("664022584479973378");

    const attachment = new Discord.Attachment('im (1).png');
    generalChannel.send(attachment);
    generalChannel.send("Hello from Umuzi! \nNice to hear from you. \n \nPlease type a keyword you want me to help you with.");
  });
});
  client.on("message", recievedMessage => {
    if (recievedMessage.author == client.user) {
      return;
    }
    //recievedMessage.channel.send("Recieved your message, " + recievedMessage.author.toString() + ": " + recievedMessage.content);
    processMenu(recievedMessage);

  });

  function processMenu(recievedMessage){
      
    //var place1 = recievedMessage.content.includes("locat");
    if(recievedMessage.content == "Career Tracks" || recievedMessage.content == "career tracks") {
      careerTracks(recievedMessage);
    }
    if(recievedMessage.content == "Learnership" || recievedMessage.content == "learnership") {
      learnerships(recievedMessage);
    }
    if(recievedMessage.content == "Location" || recievedMessage.content == "location") {
      locationCommand(recievedMessage);
    }
    if(recievedMessage.content == "Application" || recievedMessage.content == "application") {
      applicationCommand();
    }
    //fix!!!!!!!!
    if(recievedMessage.content == "" || recievedMessage.content == isNaN) {
      recievedMessage.channel.send("Please key in the keywords written above according to what you need help with. e.g `Location`")
    }


  }

  function locationCommand (recievedMessage){

  recievedMessage.channel.send("I'm guessing you want to know where we are based.");

  setTimeout(function(){
    recievedMessage.channel.send("Umuzi is at 28 Madison St, Jeppestown, Johannesburg \n \n" + "https://www.google.com/maps/place/Umuzi/@-26.2069544,28.0637644,15z/data=!4m5!3m4!1s0x0:0xf5a78a7d74f3f331!8m2!3d-26.2069544!4d28.0637644");
  }, 2500);

  }
    
  function learnerships(recievedMessage){
    recievedMessage.channel.send("Umuzi works with leading employers to find and develop scarce digital skills and talent. \nWe need your help to create more jobs for talented young people. Over 80% of our graduates get jobs at top employers. And there are thousands more talented young people in our pipeline, screened and ready for an opportunity. Partner with Umuzi to create high-value jobs. \n \n We also support leading employers to train their staff through employed learnerships and short-courses.");
    recievedMessage.channel.send("https://www.umuzi.org/createjobs/#Create-Jobs-Contact");
    recievedMessage.channel.send("________________________________________________________")
    recievedMessage.channel.send("Umuzi works with leading employers to find and develop scarce digital skills and talent. We need your help to create more jobs for talented young people. Over 80% of our graduates get jobs at top employers. And there are thousands more talented young people in our pipeline, screened and ready for an opportunity. Partner with Umuzi to create high-value jobs. We also support leading employers to train their staff through employed learnerships and short-courses.Invest your Skills Development budget in scarce digital skills. We help our employer partners to develop exceptional young people, train their staff, and realise the full B-BBEE and SARS tax benefits of creating jobs. Umuzi is accredited by MICT SETA. Our Skills Development team are ready to structure and administer programme specifically for your needs.")
  }


  function careerTracks (recievedMessage){
    //if(recievedMessage.content == )
    const careers = new Discord.Attachment('career.png');
    recievedMessage.channel.send("We offers these high-value careers.");
    recievedMessage.channel.send(careers);
    setTimeout(function(){
      recievedMessage.channel.send("Which one are you interested in?");
      department(recievedMessage);
    }, 2000);
    
    

  }

  function department(){
  
    client.on("message", choose => {
      //var myData = choose.content.includes("data");

    if(choose.content == "Copywriting" || choose.content == "copywriting"){
      choose.channel.send("For more information on this, here is the link. Enjoy😋");
      //choose.channel.send("https://www.umuzi.org/copywriting"); 
      choose.channel.send(
        get('CopywritingUmuzi.html')
        .then(function(response){
          return response.text()
        })
        .then(function(html){
          var parser = DOMParser();

          var doc = parser.parseFromString(html, "text/html")
          console.log(doc);
        })
      )
    }
    if(choose.content == "data science" || choose.content == "data engineering"){
      choose.channel.send("For more information on this, here is the link. Enjoy😋");
      choose.channel.send("https://www.umuzi.org/data");
      //myData = false;
    }
    if(choose.content == "multimedia" || choose.content == "Multimedia"){
      choose.channel.send("For more information on this, here is the link. Enjoy😋");
      choose.channel.send("https://www.umuzi.org/multimedia");
    }
    if(choose.content == "UI Design" || choose.content == "ui design"){
      choose.channel.send("For more information on this, here is the link. Enjoy😋");
      choose.channel.send("https://www.umuzi.org/ui-design");
    }
    if(choose.content == "UX Strategy" || choose.content == "ux strategy"){
      choose.channel.send("For more information on this, here is the link. Enjoy😋");
      choose.channel.send("https://www.umuzi.org/ux-strategy");
    }
    if(choose.content == "Web Development" || choose.content == "web development" || choose.content == "web dev"){
      choose.channel.send("For more information on this, here is the link. Enjoy😋");
      choose.channel.send("https://www.umuzi.org/web-development");
    }

    
})
  }


client.login("NjY0MDI4MTc0OTc1MzY5MjE2.XhWdsw.qIbyqKPGJ_kn7diSuleJFzvyji8");
