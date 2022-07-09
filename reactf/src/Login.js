import Signin from './Signin';
import Signup from './Signup';
import Getpassword from './Getpassword';
import { HashRouter, Routes, Route } from 'react-router-dom';

function Login() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Signin />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/getpassword' element={<Getpassword />} />
            </Routes>
        </HashRouter>
    )
}

export default Login;