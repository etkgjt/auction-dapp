import common from './common/reducer';
import navbar from './navbar';
import layout from './layout';
import LoadingHandler from './loading/reducers';
import ErrorsHandler from './error/reducers';
import user from './user/reducer';

export default {
  navbar,
  layout,
  common,
  LoadingHandler,
  ErrorsHandler,
  user,
};
