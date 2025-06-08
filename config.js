const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~8zsyjT7L#-Nc64d5OYMl7LClW1RbBM_U5bTFhZvFAw0uzLMmwn24",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://Darktudu:Darktudu1234@cluster0.9byqz.mongodb.net/",

    
 
};
