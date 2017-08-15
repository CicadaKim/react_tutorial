import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//index.js에서 
const rootElement = document.getElementById('root'); //id==root 불러와서
ReactDOM.render(<App headerTitle="Welcome!"/>, rootElement); //App render. bundle.js로 합쳐지기때문에 다른폴더에있는 index.html에 바로 적용하수있는건가 따로 명시안해줘도
//여기서 값을 보내서 app.js가 받아서 다른 컴퍼넌트로 뿌려준다