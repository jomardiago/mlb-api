import Nano from 'nano';
import config from 'config';

const dbInstance = config.couchDbInstance;
const user = config.couchDBCredentials.username;
const password = config.couchDBCredentials.password;
const dbString = dbInstance.replace('//', '//' + user + ':' + password + '@');
const couch = Nano(dbString);

export const entityDb = couch.use('entities');