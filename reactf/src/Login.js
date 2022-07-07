import Signin from './Signin';
import Signup from './Signup';
import { HashRouter, Routes, Route } from 'react-router-dom';

function Login() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Signin />} />
                <Route exact path='/signup' element={<Signup />} />
                {/* <Route exact path='/01' element={<Layout><P1 /></Layout>} /> */}
            </Routes>
        </HashRouter>
    )
}

export default Login;