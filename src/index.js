import Post from "@models/Post";
import './styles/styles.css';
// import json from './assets/json.json';
import WebpackLogo from './assets/webpack-logo.png';
// import xml from './assets/data.xml';

const post = new Post('Webpack Post Title', WebpackLogo);

console.log(post.toString());
// console.log(json);
// console.log(xml);
