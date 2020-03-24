import React, { useState } from 'react'
import Header from './Header'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function GirisYap() {

    const [kullanici, setKullanici] = useState({ email: "", password: "" })
    const [isLoggedIn, setisLoggedIn] = useState(false)

    function girisYap(e) {
        event.preventDefault()

        const giris = {
            email: kullanici.email,
            password: kullanici.password
        }

        Axios.post('/api/auth/giris', giris).then(res => {
            /* if (res.data.success) {
                let userData = {
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    access_token: res.data.access_token,
                };

                let appState = {
                    isLoggedIn: true,
                    user: userData
                };

                localStorage["appState"] = JSON.stringify(appState);

                setisLoggedIn(appState.isLoggedIn)
                location.reload()
            } */
            console.log(res.data)
        })
    }
    function handleChange(e) {
        setKullanici({
            ...kullanici,
            [event.target.name]: event.target.value
        })
    }

   

    return (
        <div>
            <Header />

            <form onSubmit={girisYap} action="#">
                <label htmlFor="fname">Email:</label>
                <br />
                <input type="text" id="email" name="email" onChange={handleChange} value={kullanici.email} />
                <br />
                <label htmlFor="lname">Şifre:</label>
                <br />
                <input type="text" id="password" name="password" onChange={handleChange} value={kullanici.password} />
                <br />
                <br />
                <input type="submit" defaultValue="Submit" />
            </form>

        </div>
    )
}
