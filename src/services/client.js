import { createClient } from 'contentful';
import { deliveryAccessToken, spaceId } from '../config';

export const client = createClient({
	space: spaceId,
	accessToken: deliveryAccessToken
});
