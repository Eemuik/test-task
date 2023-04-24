import { Environment } from '@shared/variables/environment';

export const auth0ConnectionOptions = {
  domain: Environment.AUTH0_DOMAIN,
  clientId: Environment.AUTH0_ID,
  clientSecret: Environment.AUTH0_SECRET,
};
