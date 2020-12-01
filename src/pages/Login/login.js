import React, {useState, useEffect, useContext} from 'react';
import {useRouteMatch, useParams, useLocation, Redirect} from 'react-router-dom'
import {signInWithGoogle, signUp} from '../../firebase'
import {Context} from '../../ContextProvider'

const request = require('request');


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function selectRudyCB(id) {
  return new Promise(function(resolve, reject) {
   request({
      method:'POST',
      url:'https://art-online-co-aeea04.appdrag.site/api/FSelectRudy', 
      form: {"userId" : id}
   }, function(err,httpResponse,body) {
     if ( err != null ) {
      resolve(err);
     }
     else {
      resolve(body);
     }
   });
  });
 }



function signUpAppDrag(id) {
  return new Promise(function(resolve, reject) {
    request({
       method:'POST',
       url:'https://art-online-co-aeea04.appdrag.site/api/createRudyInsert', 
       form: {"userId" : id,"name" : "asdfghj","ville" : "ashdod","age" : "22"}
    }, function(err,httpResponse,body) {
      if ( err != null ) {
       resolve(err);
      }
      else {
       resolve(body);
      }
    });
   });  
 }

function Login() {

  let query = useQuery();



  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const context = useContext(Context)

  // let { path, url } = useRouteMatch();
  // let { id, name } = useParams();

  const foo = () => {}

  useEffect(() => {
    // const token = localStorage.getItem('token')
    // addEventListener('mousedown', foo)
    // return () => {
    //   removeEventListener('mousedown', foo)
    // }
  }, [])

  const onChangeMail = (event) => {
    const value = event.target.value
    setMail(value)
  }
  
  const onChangePassword = (event) => {
    const value = event.target.value
    setPassword(value)
    setError(false)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log(mail, password)
    const userCredentials = await signInWithGoogle(mail, password)
    if (!userCredentials) {
      setError(true)
    } else {
      setLoggedIn(true)
      const uid = userCredentials.user.uid

      localStorage.setItem("uid", uid)
      context.setUid(uid)
      const data = await selectRudyCB(uid)
      const datajson = JSON.parse(data).Table[0]

      console.log('data', datajson)

    }
    console.log('userCredentials', userCredentials)
  }

  const onSignup = async (event) => {
    event.preventDefault()
    console.log(mail, password)
    const userCredentials = await signUp(mail, password)
    if (!userCredentials) {
      setError(true)
    } else {
      // setLoggedIn(true)
      const id = userCredentials.user.uid


      signUpAppDrag(id)

    }
    console.log('userCredentials', userCredentials)
  }

  const onLogout= (event) => {
    event.preventDefault()
    localStorage.removeItem('uid')
    context.setUid('')
    setLoggedIn(false)
  }

  if (loggedIn) {
    return <Redirect to='/products' />
  }


  return (
    <div className='log'>
            <form>
                <input
                  type="mail"
                  name="userMail"
                  value={mail}
                  placeholder="E.g: your_mail@gmail.com"
                  id="userMail"
                  onChange={onChangeMail}
                />
                <br />

                <input
                  type="password"
                  name="userPassword"
                  value={password}
                  placeholder="Your Password"
                  id="userPassword"
                  onChange={onChangePassword}
                />
                {error && <div>Mauvais mot de passe</div>}
                <br />
                <button
                  onClick={onSubmit}
                  disabled={password === ""}
                >
                  Sign in
                </button>

                <button
                  onClick={onLogout}
                  disabled={password === ""}
                >
                  Logout
                </button>

                <button
                  onClick={onSignup}
                  disabled={password === ""}
                >
                  Sign Up
                </button>
{context.uid}
          </form>
    </div>
  );
}

export default Login;
