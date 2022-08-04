const axios = require("axios");
module.exports = class Webhook {
    constructor(url,username = null, avatar = null){
		this.url = url;
		this.username = username;
		this.avatar_url = avatar;
	}
	async send(content, tts = false, components = []){
		axios.post(`${this.url}?wait=true`, {
			username:this.username,
			avatar_url:this.avatar_url,
			content:content,
			embeds: null,
			allowed_mentions: null,
			components
		});
	}
		
	async edit(content, messageID, components = []){
		axios.patch(`${this.url}/messages/${messageID}`,{
			content: content,
			embeds: null,
			components: components,
			allowed_mentions:null
		});
	}
	async delete(messageID){
		axios.delete(`${this.url}/messages/${messageID}`);
	}

}
