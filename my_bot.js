const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
var fs = require('fs');
const logo =
  'https://umuzi.gnomio.com/pluginfile.php/1/core_admin/logo/0x150/1573344297/Logo-02.png';
const bodyParser = require('body-parser');
//import htmlToImage from 'html-to-image';

client.on('ready', () => {
  console.log('connected as ' + client.user.tag);

  client.user.setActivity('Online');

  client.guilds.forEach(guild => {
    console.log(guild.name);
    guild.channels.forEach(channel => {
      //console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
    });
    //============================================================
    //general channel id 664022584479973378
    let generalChannel = client.channels.get('664022584479973378');
    //const helloResponses = ["Hello", "Hi", "Hi there"];
    // The onMessage event handler

    //Responses for Hello
    // function respond (msg) {
    //   client.on('message', function (message) {
    //     if (message.author.bot) return;
    //     if (!message.content.startsWith("")) return;
    //     var args = message.content.substring("".length).split(" ");
    //     switch (args[0].toLowerCase()) {
    //         case "hello":
    //             var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];
    //             message.channel.send(response).then().catch(console.error);
    //             break;
    //         default:
    //             break;
    //     }
    // });
    // }

    const attachment = new Discord.Attachment('im (1).png');
    generalChannel.send(attachment);
    generalChannel.send(
      'Hello from Umuzi! \n𝓷𝓲𝓬𝓮 𝓽𝓸 𝓼𝓮𝓮 𝔂𝓸𝓾 \n \nPlease type a keyword you want me to help you with.'
    );
  });
});
client.on('message', recievedMessage => {
  if (recievedMessage.author == client.user) {
    return;
  }
  //recievedMessage.channel.send("Recieved your message, " + recievedMessage.author.toString() + ": " + recievedMessage.content);
  processMenu(recievedMessage);
  //respond(recievedMessage);
});

function processMenu(recievedMessage) {
  var keywords = [
    'internet',
    'electricity',
    'officeHours',
    'emails',
    'cohort',
    'learnership',
    'crashCourse',
    'productTeams',
    'careerTracks',
    'location',
    'meetups',
  ];
  if (
    recievedMessage.content == 'Career Tracks' ||
    recievedMessage.content == 'career tracks'
  ) {
    careerTracks(recievedMessage);
  }
  if (
    recievedMessage.content == 'Learnership' ||
    recievedMessage.content == 'learnership'
  ) {
    learnerships(recievedMessage);
  }
  if (
    recievedMessage.content == 'Location' ||
    recievedMessage.content == 'location'
  ) {
    locationCommand(recievedMessage);
  }
  if (
    recievedMessage.content == 'Application' ||
    recievedMessage.content == 'application'
  ) {
    applicationCommand();
  }
  //fix!!!!!!!!
  if (recievedMessage.content == '' || recievedMessage.content == isNaN) {
    recievedMessage.channel.send(
      'Please key in the keywords written above according to what you need help with. e.g `Location`'
    );
  }
}

function locationCommand(recievedMessage) {
  recievedMessage.channel.send(
    "I'm guessing you want to know where we are based, yeah? 😂 "
  );

  setTimeout(function() {
    recievedMessage.channel.send(
      'Umuzi is at 28 Madison St, Jeppestown, Johannesburg \n' +
        'https://www.google.com/maps/place/Umuzi/@-26.2069544,28.0637644,15z/data=!4m5!3m4!1s0x0:0xf5a78a7d74f3f331!8m2!3d-26.2069544!4d28.0637644'
    );
  }, 2000);
}

function learnerships(recievedMessage) {
  recievedMessage.channel.send(
    'Umuzi works with leading employers to find and develop scarce digital skills and talent. \nWe need your help to create more jobs for talented young people. Over 80% of our graduates get jobs at top employers. And there are thousands more talented young people in our pipeline, screened and ready for an opportunity. Partner with Umuzi to create high-value jobs. \n \n We also support leading employers to train their staff through employed learnerships and short-courses.'
  );
  recievedMessage.channel.send(
    'https://www.umuzi.org/createjobs/#Create-Jobs-Contact'
  );

  recievedMessage.channel.send(
    'Umuzi works with leading employers to find and develop scarce digital skills and talent. We need your help to create more jobs for talented young people. Over 80% of our graduates get jobs at top employers. And there are thousands more talented young people in our pipeline, screened and ready for an opportunity. Partner with Umuzi to create high-value jobs. We also support leading employers to train their staff through employed learnerships and short-courses.Invest your Skills Development budget in scarce digital skills. We help our employer partners to develop exceptional young people, train their staff, and realise the full B-BBEE and SARS tax benefits of creating jobs. Umuzi is accredited by MICT SETA. Our Skills Development team are ready to structure and administer programme specifically for your needs.'
  );
}

function careerTracks(recievedMessage) {
  //if(recievedMessage.content == )
  const careers = new Discord.Attachment('career.png');
  recievedMessage.channel.send('We offer these high-value careers.');
  recievedMessage.channel.send(careers);
  setTimeout(function() {
    recievedMessage.channel.send('Which one are you interested in?');
    department(recievedMessage);
  }, 2000);
}

function department() {
  const data = [
    'data science',
    'Data Science',
    'data Science',
    'Data science',
    'Data science',
    'Data science',
    'data',
    'DATA',
    'Data',
    'data engineering',
    'Data Engineering',
    'data Engineering',
    'DATA ENGINEERING',
    'dataengineering',
    'DATAENGINEERING',
  ];
  const copywriting = [
    'Copywriting',
    'copywriting',
    'COPYWRITING',
    'copy writing',
    'COPY WRITING',
    'COPY WRITING',
    'COPY writing',
  ];
  const multimedia = [
    'Multi-media',
    'MULTIMEDIA',
    'multimedia',
    'mutli media',
    'Multi Media',
  ];
  const design = [
    'ui design',
    'UI Design',
    'Ui Design',
    'ui-design',
    'design',
    'UI DESIGN',
  ];
  const strategy = [
    'ux strategy',
    'UX Strategy',
    'strategy',
    'ux-strategy',
    'ux strategy',
  ];
  const dev = [
    'web development',
    'web dev',
    'dev',
    'Web Development',
    'WEB DEVELOPMENT',
  ];

  client.on('message', choose => {
    for (let i = 0; i < data.length; i++) {
      if (choose.content === data[i]) {
        choose.channel.send(
          '𝚃𝚑𝚎 𝚠𝚘𝚛𝚕𝚍 𝚒𝚜 𝚘𝚗𝚎 𝚋𝚒𝚐 𝚍𝚊𝚝𝚊 𝚙𝚛𝚘𝚋𝚕𝚎𝚖. \n — 𝙰𝚗𝚍𝚛𝚎𝚠 𝙼𝚌𝙰𝚏𝚎𝚎 — \n\nFor more information on this, here is the link. Enjoy😋'
        );
        choose.channel.send('https://www.umuzi.org/data');
      }
    }

    for (let i = 0; i < copywriting.length; i++) {
      if (choose.content === copywriting[i]) {
        choose.channel.send(
          '𝔗𝔥𝔢 𝔟𝔢𝔰𝔱 𝔴𝔬𝔯𝔡𝔰 𝔦𝔫 𝔱𝔥𝔢 𝔟𝔢𝔰𝔱 𝔬𝔯𝔡𝔢𝔯 \n— 𝔖𝔞𝔪𝔲𝔢𝔩 𝔗𝔞𝔶𝔩𝔬𝔯 ℭ𝔬𝔩𝔢𝔯𝔦𝔡𝔤𝔢 — \n\nFor more information on this, here is the link. Enjoy😋'
        );
        choose.channel.send('https://www.umuzi.org/copywriting');
      }
    }

    for (let i = 0; i < copywriting.length; i++) {
      if (choose.content === multimedia[i]) {
        choose.channel.send(
          'For more information on this, here is the link. Enjoy😋'
        );
        choose.channel.send('https://www.umuzi.org/multimedia');
      }
    }

    for (let i = 0; i < design.length; i++) {
      if (choose.content === design[i]) {
        choose.channel.send(
          'For more information on this, here is the link. Enjoy😋'
        );
        choose.channel.send('https://www.umuzi.org/ui-design');
      }
    }

    for (let i = 0; i < strategy.length; i++) {
      if (choose.content === strategy[i]) {
        choose.channel.send(
          'For more information on this, here is the link. Enjoy😋'
        );
        choose.channel.send('https://www.umuzi.org/ux-strategy');
      }
    }

    for (let i = 0; i < dev.length; i++) {
      if (choose.content === dev[i]) {
        choose.channel.send(
          'For more information on this, here is the link. Enjoy😋'
        );
        choose.channel.send('https://www.umuzi.org/web-development');
      }
    }
    const allDep = data.concat(copywriting, multimedia, design, strategy, dev);

    // for(let i=0; i<allDep.length; i++){
    //   if(choose.content !== allDep[i]){
    //     choose.channel.send("Please type in any of the above departments");
    //   }
    // }
  });
}

client.login(TOKEN);
