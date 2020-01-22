const Discord = require('discord.js');
const client = new Discord.Client();


//--------------------connect to the server---------------------------------------
client.on('ready', () => {
  console.log('connected as ' + client.user.tag);
  //status
  client.user.setActivity('Online');

  client.guilds.forEach(guild => {
    console.log(guild.name);
    //general channel id 664022584479973378
    let generalChannel = client.channels.get('664022584479973378');

    const attachment = new Discord.Attachment('im (1).png');
    generalChannel.send(attachment);
    generalChannel.send(
      'Hello from Umuzi! \nNice to see you \n \nPlease type one of the keywords below you want me to help you with.'
    );
  });
});

//--------------------------expect a message--------------------------------------
client.on('message', recievedMessage => {
  if (recievedMessage.author == client.user) {
    return;
  }
  processMenu(recievedMessage);
});

//------------------------------functions-----------------------------------------
//process the menu
function processMenu(recievedMessage) {
  var career = [
    'career tracks',
    'Career Tracks',
    'CAREER TRACKS',
    'career-tracks',
    'careers',
    'home',
    'HOME',
    'umuzi'
  ];
  var learner = ['Learnership', 'learnership', 'Learnerships', 'learnerships'];
  var place = ['Location', 'location', 'LOCATION', 'place', 'Place'];
  var apply = ['APPLICATION', 'application', 'apply', 'Apply'];

  for (let i = 0; i < career.length; i++) {
    if (recievedMessage.content === career[i]) {
      careerTracks(recievedMessage);
    }
  }

  for (let i = 0; i < learner.length; i++) {
    if (recievedMessage.content === learner[i]) {
      learnerships(recievedMessage);
    }
  }

  for (let i = 0; i < place.length; i++) {
    if (recievedMessage.content === place[i]) {
      locationCommand(recievedMessage);
    }
  }

  for (let i = 0; i < apply.length; i++) {
    if (recievedMessage.content === apply[i]) {
      applicationCommand(recievedMessage);
    }
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

function applicationCommand(recievedMessage){
  recievedMessage.channel.send(appl);
  recievedMessage.channel.send("https://www.umuzi.org/application-online-learning-welcome");
}
//this is a function for different functions at umuzi
function department() {
  //arrays store entities relevant to career tracks
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
        choose.channel.send(dataTxt);
        choose.channel.send('https://www.umuzi.org/data');
      }
    }

    for (let i = 0; i < copywriting.length; i++) {
      if (choose.content === copywriting[i]) {
        choose.channel.send(copyTxt);
        choose.channel.send('https://www.umuzi.org/copywriting');
      }
    }

    for (let i = 0; i < copywriting.length; i++) {
      if (choose.content === multimedia[i]) {
        choose.channel.send(  multyTxt);
        choose.channel.send('https://www.umuzi.org/multimedia');
      }
    }

    for (let i = 0; i < design.length; i++) {
      if (choose.content === design[i]) {
        choose.channel.send(desTxt);
        choose.channel.send('https://www.umuzi.org/ui-design');
      }
    }

    for (let i = 0; i < strategy.length; i++) {
      if (choose.content === strategy[i]) {
        choose.channel.send( stratTxt);
        choose.channel.send('https://www.umuzi.org/ux-strategy');
      }
    }

    for (let i = 0; i < dev.length; i++) {
      if (choose.content === dev[i]) {
        choose.channel.send( devTxt);
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

const dataTxt = "DATA Data Science and Engineering are jobs of the future. Using computer science and applied statistics, data scientists find valuable patterns where other people just see noise. Harvard Business Review says Data Scientist is `The Sexiest Job of the 21st Century`, and we agree. It’s a rare combination of interesting challenges and high-value opportunities. Data skills are a superpower, and with great power comes great job responsibilities.We use best-in-class online learning to develop cutting-edge skills fast, and learn on the job by analysing useful datasets for real clients to come to real conclusions that affect organisational decisions. We also learn how to present our results in accessible, graphical formats so that we can communicate our insights with the data-phobes of the world.Data science is hard science and hard work: a sharp mind, relentless effort, and absolute attention to detail are critical. But for the lucky few who get to do it, it’s the most rewarding work in every way.";
const devTxt = "WEB DEVELOPMENT FULL-STACK DEVELOPERS WITH HTML, CSS, AND JAVASCRIPT OR JAVA. Yesterday it was smartphones, today smartwatches, tomorrow smart-eyes, -ears, -and connected minds. Where ever you look, technology is integrating into our lives, and our bodies. Our world is connecting physically, digitally, and biologically. Web developers are the master builders of this brave new, interconnected world. We learn on the job by building websites, designing games, and solving challenging problems, every day. We use Agile to ensure we're always learning by working on the most important stuff. We won't lock you in a basement with a bunch of coding geeks. You'll work in diverse teams, with a mix of skills, collaborating with creatives, strategists, multimedia storytellers, and your users, to get the job done. By the time you're ready to leave, you won't know everything about web development, but you'll have the confidence to take risks, fail, and keep learning. Let's create web solutions, here is a link to apply:";
const multyTxt = "MULTIMEDIA CONTENT PRODUCTION STORYTELLERS SPECIALISING IN EITHER VIDEOGRAPHY OR MOTION GRAPHICS. A long time ago in a galaxy far, far away, is a story. Whether you’re sitting around a fire or watching the latest Hollywood blockbuster, storytelling is our most powerful means of communication. The skill of storytelling is increasingly in demand as organisations realise its power to connect and communicate.Today’s storytellers play with a variety of mediums from video, motion graphics, animation, and even interactive games, to develop rich, focused narratives. Your career can go anywhere from Researcher, Production Assistant, to Video Editor, Cinematographer, Motion Graphic Designer all the way to Director or Producer. Or an all-round, kick-ass Freelancer Generalist. Regardless of the specific career path you choose, the core multimedia storytelling skills we focus on provide a solid base for growth. We explore various forms of storytelling from creative to documentary using Design Thinking as our process.";
const stratTxt = "UX STRATEGY BUSINESS ANALYSTS WITH EXPERIENCE IN UX, PROCESS MAPPING, REPORTING, DATA VISUALISATION, AGILE AND DESIGN THINKING.The world is becoming more complicated and interconnected. To thrive, every organisation needs to be more strategic and human-centered. In our strategy department, we develop business analysts and future product owners with a focus in digital strategy and user experience design.We practice a process-driven approach based on Human-Centred Design Thinking with Agile principles. We are data-driven, using tools like Google Analytics to better understand users and their behavior. We’re rigorous, digging below the surface to understand businesses and supply chains.";
const copyTxt = "COPYWRITING CONTENT WRITERS WITH TRADITION AND DIGITAL SKILLS.Copy may be writing, but copywriting isn’t just about words. It’s about playing with ideas. Whether it’s the instructions for a sex toy or the inauguration speech for a president, copywriters create meaning, deliver a message, and call an audience to action.Writing seems like a solitary pursuit. It isn’t here. At Umuzi, you’ll learn to work in a team, often with a designer, sometimes a strategist, and always with your target audience top of mind. You’ll use empathy to understand the audience you’re trying to reach, define their problems, come up with ideas, prototype, and test them, using our Design Thinking process.Where to next? Many of our alumni turn to advertising, working for top agencies and brands, en route to becoming Creative Directors. Copywriters are employed by agencies both permanently and on a freelance basis to develop advertising concepts. Agency copywriters usually work in close partnership with art directors and have lots of input to the visual elements. Another option is to move into the world of content creation, writing for online publications. Increasingly copywriters are also essential to Tech Product Teams, in the software and game development space, to script user journeys and user interfaces. They deliver the words and verbal content that accompanies the visual elements.Imagine where this career could take you. Now write your story."
const desTxt = "UI DESIGNUSER INTERFACE DESIGNERS, EXPERIENCED IN THE ADOBE CREATIVE SUITE. Design is not a visual art, we believe it's a collaborative process. We solve problems by understanding our users and working with them to prototype and test the best solutions. Whether your interest is in user experience and interfaces, graphical, or motion design, if you can imagine it, you can design it at Umuzi."
const appl = "Welcome to the Umuzi Learnership Application Process. Just a quick note before you start your application: If you have signed up on the Umuzi website in the past, then please click “Get Started” below. However, if this is your first time on our website, please leave your details on the form below. Once you’re done, you too can click “Get Started”.Oh, and if you’ve signed up on Facebook already, then you can also click “Get Started” straight away! Happy applying! :) "