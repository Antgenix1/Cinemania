/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'

const defaultModel = {
    username: '',
    password: ''
}

function validateModel(model) {
    const errors = {
        username: "The Username shouldn't be left empty",
        password: "The Password shouldn't be left empty"
    }
    let isValid = true

    if (model.username == '') {
        errors.username
        isValid = false
    }
    if (model.password == '') {
        errors.password
        isValid = false
    }

    return { errors, isValid }
}

function LoginForm() {
    const [errors, setErrors] = useState(defaultModel)
    const [model, setModel] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setModel({
            ...model,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resp = await login(model)
        session.login(resp)
    }

  return (
    <div className='add'>
        <form onSubmit={handleSubmit} className='form'>
            <fieldset>
                <label>Username:</label>
                <input type='text' name='username' onChange={handleChange} value={model.username}/>
                {errors.username && <div>{errors.username}</div>}
            </fieldset>
            <fieldset>
                <label>Password:</label>
                <input type='password' name='password' onChange={handleChange} value={model.password}/>
                {errors.password && <div>{errors.password}</div>}
            </fieldset>
            <button className='button' type='submit' value={Login}>Send</button>
        </form>
    </div>
  )
}

export default LoginForm