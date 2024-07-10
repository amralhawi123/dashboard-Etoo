import { useState } from 'react'
// import { notify } from './../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from '../../redux/actions/authAction';
import { notify } from '../../Components/uitlity/useNotification';

const LoginHook = () => {
   const dispatch = useDispatch()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(true)
const [isPress, setIsPress] = useState(true)

const onChangeEmail = (e)=> {
   setEmail(e.target.value)
}

const onChangePassword = (e)=> {
   setPassword(e.target.value)
}

const onSubmit = async () => {
   setIsPress(true)
   setLoading(true)
   await dispatch(loginUser({
      email,
      password 
   }))
   setLoading(false)
   setIsPress(false)
}

const res = useSelector(state => state.authReducer.loginUser)
console.log(res)
useEffect(() => {
    if(loading === false){
       if(res){ 
          if(res["auth-token"]){
             localStorage.setItem("token", res["auth-token"])
             localStorage.setItem("userData", JSON.stringify(res.user) ) 
             notify("تم تسجيل الدخول بنجاح", "success")
            //   setTimeout(() => {
            //        window.location.href='/'
            //     }, 2000);
            } else {
               localStorage.removeItem("token" )
               localStorage.removeItem("userData" )
               notify("هناك مشكلة في عملية التسجيل", "error")
             
          } 
       }
    }
    }, [loading])

return [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress,res]
}

export default LoginHook
