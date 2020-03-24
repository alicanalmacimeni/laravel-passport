import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import AnaSayfa from './AnaSayfa'
import KayitOl from './KayitOl';
import GirisYap from './GirisYap';
import IcerikSayfasi from './IcerikSayfasi';


export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AnaSayfa}></Route>
                <Route path="/giris" component={GirisYap}></Route>
                <Route path="/kayit-ol" component={KayitOl}></Route>
                <Route path="/icerik" component={IcerikSayfasi}></Route>
            </Switch>
        </Router>

    )
}

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}