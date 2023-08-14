import React from 'react';
import App from './App';
import { GlobalStyles } from './global-styles';
import { render } from '@testing-library/react';
import 'normalize.css';
import { firebaseApp } from './lib/firebase.pro'
import { FirebaseContext } from './context/firebase';

render(
<> 
<FirebaseContext.Provider value={{firebaseApp}}>
<GlobalStyles /> 
<App /> 
</FirebaseContext.Provider>
</>, 
document.getElementById('root'));