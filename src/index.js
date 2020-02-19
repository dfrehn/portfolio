import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import './fonts/EurostileLTStd-Bold.otf'
import './fonts/EurostileLTStd-BoldCn.otf'
import './fonts/EurostileLTStd-BoldEx2.otf'
import './fonts/EurostileLTStd-BoldOblique.otf'
import './fonts/EurostileLTStd-Cn.otf'
import './fonts/EurostileLTStd-Demi.otf'
import './fonts/EurostileLTStd-DemiOblique.otf'
import './fonts/EurostileLTStd-Ex2.otf'
import './fonts/EurostileLTStd-Oblique.otf'
import './fonts/EurostileLTStd.otf'
import './fonts/Roboto-Black.ttf'
import './fonts/Roboto-BlackItalic.ttf'
import './fonts/Roboto-Bold.ttf'
import './fonts/Roboto-BoldItalic.ttf'
import './fonts/Roboto-Italic.ttf'


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
