import React, { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { Button, TextField } from '@mui/material'
import styles from './Login.module.scss'
import Head from 'next/head'

const LoginPage = () => {
  const [highlight, setHighlight] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { handleLogin } = useAuth()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError(null)

    try {
      const res = await handleLogin(
        'administrator@debugentity.hu',
        '020e107c5c8f5d88b0223f64a258ddc62a593a31'
      )
      console.log('LOGGED IN: ', res)
    } catch (err: any) {
      setError(err?.message || 'Something went wrong.')
    }
  }

  return (
    <>
      <Head>
        <title>New-Admin Login</title>
      </Head>

      <div className={styles.LoginParent}>
        <form onSubmit={handleSubmit}>
          {error && <pre>{JSON.stringify(error)}</pre>}

          <TextField
            type={'email'}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="email"
            label="E-mail"
            variant="filled"
          />

          <TextField
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="Password"
            variant="filled"
          />

          <Button
            onMouseEnter={() => setHighlight(true)}
            onMouseLeave={() => setHighlight(false)}
            type="submit"
            variant={highlight ? 'contained' : 'outlined'}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  )
}

export default LoginPage
