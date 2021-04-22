import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Content/Profile/Profile';
import {Route, Switch} from 'react-router-dom';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import backgroundImage from './assets/img/background/bckgrimg.jpg'
import {StoreType} from './redux/store';
import {DialogsContainer} from './components/Content/Dialogs/DialogsContainer';
import {SidebarContainer} from './components/Sidebar/SidebarContainer';


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper"
             style={{background: `black url(${backgroundImage})`, backgroundSize: '100%',}}>
            <Header/>
            <NavBar/>
            <SidebarContainer store={props.store}/>

            <div className="main-content">
                <Switch>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
