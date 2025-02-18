import { ImmutableX, Config, CreateProjectRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('sepolia');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const projectParams: CreateProjectRequest = {
    company_name: '',
    contact_email: '',
    name: '',
  };

  try {
    const createProjectResponse = await imxClient.createProject(
      walletConnection.ethSigner,
      projectParams,
    );

    console.log('createProjectResponse', JSON.stringify(createProjectResponse));

    const getProjectResponse = await imxClient.getProject(
      walletConnection.ethSigner,
      createProjectResponse.id.toString(),
    );

    console.log('getProjectResponse', JSON.stringify(getProjectResponse));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
