import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import StartPage from './components/StartPage'
import StudentLoginPage from './components/student/login/LoginPage'
import StudentRegisterPage from './components/student/login/RegisterPage'
import HODLoginPage from './components/hod/login/LoginPage'
import HODRegisterPage from './components/hod/login/RegisterPage'
import AdminLoginPage from './components/admin/login/LoginPage'
import AdminRegisterPage from './components/admin/login/RegisterPage'

export default function Routes() {

    return (
        <div className='whole'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <StartPage />
                    </Route>
                    <Route path='/student/login' exact>
                        <StudentLoginPage />
                    </Route>
                    <Route path='/student/register' exact>
                        <StudentRegisterPage />
                    </Route>
                    <Route path='/admin/login' exact>
                        <AdminLoginPage />
                    </Route>
                    <Route path='/admin/register' exact>
                        <AdminRegisterPage />
                    </Route>
                    <Route path='/hod/login' exact>
                        <HODLoginPage />
                    </Route>
                    <Route path='/hod/register' exact>
                        <HODRegisterPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
