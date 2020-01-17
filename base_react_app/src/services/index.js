import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createOfficesApi from './offices';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const officesApi = createOfficesApi();

export { CancelToken, isCancel, exampleApi, officesApi, TIMEOUTS };
