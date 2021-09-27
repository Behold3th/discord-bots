import GuestPassService from '../service/guest-pass/GuestPassService';
import { Client, Guild } from 'discord.js';
import constants from '../service/constants/constants';
import { connect } from '../utils/dbUtils';
import { DiscordEvent } from '../types/discord/DiscordEvent';
import discordServerIds from '../service/constants/discordServerIds';

export default class implements DiscordEvent {
	name = 'ready';
	once = true;

	async execute(client: Client): Promise<any> {
		console.log('The Sun will never set on the DAO. Neither will I. DEGEN & Serendipity are ready for service.');
		client.user.setActivity('Going Bankless, Doing the DAO');
		client.guilds.cache.forEach((guild: Guild) => {
			console.log(`DEGEN active for: ${guild.id}, ${guild.name}`);
		});
		await connect(constants.DB_NAME_DEGEN);
		
		if (client.guilds.cache.some((guild) => guild.id == discordServerIds.banklessDAO || guild.id == discordServerIds.discordBotGarage)) {
			await connect(constants.DB_NAME_BOUNTY_BOARD);
			await GuestPassService(client);
		}
	}
}