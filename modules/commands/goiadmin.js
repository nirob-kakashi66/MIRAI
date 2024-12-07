module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BAYJID",
  description: "bot admin mention",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100013494638409") {
    var aid = ["100013494638409"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Stop mentioning my creator, Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স køren  _//-🙈💕", "TiYash Boss k mention na diya akta gf khuje deu boss sgl morse..!!😥", "Boss bow niya chipay gese..!!😪","TiYash boss busy ase pore dak diyo..!!😒"," TiYash boss nai ki bolba amake bolte paro..!!😒"," kicce mention deu kn😒",];
      api.setMessageReaction("💐", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                             }
