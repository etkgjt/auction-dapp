// ** React Imports
import ReactDOM from 'react-dom';

// ** PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/index.scss';

// ** Service Worker
import * as serviceWorker from './serviceWorker';

//**CSS */
import '@styles/css/icofont.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ** Lazy load app
import Bootstrap from './bootstrap';

ReactDOM.render(<Bootstrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
