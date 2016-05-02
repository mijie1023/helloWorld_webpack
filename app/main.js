import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './component.jsx';
import './main.css'; // 加载css
import './main.less'; // 加载less
import './fontIcon.css';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}