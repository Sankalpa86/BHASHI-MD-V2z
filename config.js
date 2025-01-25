const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~fCBHTDbR#RR0ONCFw-X7eVmxDyznQY_jU04Jt4moxqgTd9VAUHTA",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://Darktudu:Darktudu1234@cluster0.9byqz.mongodb.net/",

    
 
};
