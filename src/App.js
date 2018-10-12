import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Section from './modules/section/section';
import Detail from './modules/detail/detail';
import LifeCircle from './modules/lifeCircle/lifeCircle';
import InputComp from './modules/inputComp/inputComp';
import Parent from './modules/parentAndChild/parent';
import ClickEvent from './modules/clickEvent/clickEvent';
import AjaxMethod from './modules/ajaxMethod/ajaxMethod';

const navLinks = [
    {path: '/', desc: 'Section', component: Section},
    {path: '/Detail', desc: 'Detail', component: Detail},
    {path: '/LifeCircle', desc: '组件生命周期', component: LifeCircle},
    {path: '/InputComp', desc: 'input输入框', component: InputComp},
    {path: '/parentAndChild', desc: '父子组件通信', component: Parent},
    {path: '/clickEvent', desc: '点击事件', component: ClickEvent},
    {path: '/ajaxMethod', desc: 'ajax请求', component: AjaxMethod}

];


const App = () => (
        <Router>
            <div className="body-container">
                <ul className="nav-left">
                    {navLinks.map((item, index) => {
                        return <li key={item.path}>
                            <Link to={item.path}>{item.desc}</Link>
                        </li>
                    })}
                </ul>

                <div className="container-app">
                    {navLinks.map((item, index) => {
                        if (item.path === '/') {
                            return <Route exact path={item.path} component={item.component} key={index} />
                        } else {
                            return <Route path={item.path} component={item.component} key={index} />
                        }
                    })}
                </div>
            </div>
        </Router>
);

export default App;
