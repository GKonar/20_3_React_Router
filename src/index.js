import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries'


render(
    <Provider store={store}>
    	<div>
        	<h1>Inicjalizacja projektu</h1>
        	<DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getCountries());

// PROVIDER to komponent REACTOWY, dzięki któremu store jest widoczny przy każdym użyciu metody connect - 
// bez niego React Redux nie wie z jakiego źródła ma czerpać dane. 
// MUSIMY więc opakować komponent App w komponent Provider.