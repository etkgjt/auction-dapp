import adminTable from './adminTable/sagas';
import dataForSelect from './dataForSelect/sagas';
import userSagas from './user/sagas';

export default [adminTable(), dataForSelect(), userSagas()];
