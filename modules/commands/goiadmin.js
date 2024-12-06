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
  if (event.senderID !== "100005193854879") {
    var aid = ["100005193854879"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Stop mentioning my creator, he's verry busy..!!😒", "BAYJID Boss k mention na diya akta gf khuje deu boss sgl morse..!!😥", "Boss bow niya chipay gese..!!😪","BAYJID boss busy ase pore dak diyo..!!😒","boss nai ki bolba amake bolte paro..!!😒"," kicce mention deu kn😒",];
      api.setMessageReaction("💐", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                             }
