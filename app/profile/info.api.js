import AS from 'assert';

import Moment from 'moment';

import C from '../../lib/global/config.js';


export const method = 'get';
export const handle = (raw, ctx) => {
	const profile = C.profile[raw.who];

	AS(profile, `未找到~[档案]~{${raw.who}}`);

	ctx.cookies.set('who', profile.id, {
		expires: Moment().add(1, 'month').toDate(),
		httpOnly: false,
		overwrite: true
	});

	return profile;
};