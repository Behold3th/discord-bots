import list from '../../../app/service/bounty/ListBounty';

describe('BountyList', () => {
	// let ctx;
	// let serviceUtilsMock;
	let guildMember;

	beforeEach(() => {
		guildMember = {
			send: (message: string) => {
				return message;
			},
			user: {
				id: '567865362541182987',
			},
		};
		// serviceUtilsMock = sinon.mock(ServiceUtils);
		// serviceUtilsMock.expects('getGuildAndMember').returns({
		// 	guild: {},
		// 	guildMember: { send: (message) => { return message; } },
		// });
	});

	describe('Parameter Validation', () => {

		it('should be invalid bounty-type', async function() {
			try {
				await list(guildMember, 'sadfasdfsdaf');
			} catch (e) {
				expect(e.message).toStrictEqual('invalid bounty type');
			}
		});
	});

});