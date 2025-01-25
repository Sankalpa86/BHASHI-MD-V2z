const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~evBm2CxA#t-w2uateW8MFm_YgWuo7DFaDT-7YRX44-pmHMoAts8w",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://Darktudu:Darktudu1234@cluster0.9byqz.mongodb.net/",

    
 
};
