import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries'
import Navigation from './presentational/navigation.component';

// DODAWANIE PROVIDERA

render(
    <Provider store={store}>
    	<Router history={hashHistory}>
            <Route path='/' component={Navigation}>

            </Route>
        </Router>
        <DevTools />
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getCountries());

// PROVIDER to komponent REACTOWY, dzięki któremu store jest widoczny przy każdym użyciu metody connect - 
// bez niego React Redux nie wie z jakiego źródła ma czerpać dane. 
// MUSIMY więc opakować komponent App w komponent Provider.

// Ostatnim krokiem, aby nareszcie mieć poprawnie zintegrowanego Reduxa z aplikacją jest osadzenie całego 
// naszego drzewa DOM aplikacji w elemencie <Provider>. Jego szczególną cechą jest to, że czyni on store 
// dostępnym dla wszystkich zdefiniowanych w aplikacji komponentów kontenerowych BEZ KONIECZNOŚCI jawnego 
// przekazywania go do nich.

