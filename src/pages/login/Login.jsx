import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        if (username === 'adm' && password === '123') {
            navigate('/home')
        } else (
            alert('Credenciais incorretas')
        )

    }



    return (
        <>
            <main class="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <img class="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input type="text" name='username' class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" name='password' class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                        </div>
                        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                </form>
            </main>
        </>
    )
}

export default Login