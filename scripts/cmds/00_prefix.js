module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Meheraz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `→𝗣𝗥𝗜𝗙𝗜𝗫 𝗜𝗦 {#} 
→𝗧𝗬𝗣𝗘 (#𝗵𝗲𝗹𝗽) 𝗧𝗢 𝗦𝗘𝗘 𝗔𝗟𝗟 𝗖𝗠𝗗
→𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗛𝗘𝗥𝗔𝗭 𝗜𝗦𝗟𝗔𝗠`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/I4v4ZmX.jpeg")
 });
 }
 }
}
