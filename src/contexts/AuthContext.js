import React, { useContext, useEffect,useState } from 'react'
import "firebase/auth"
import { auth } from '../Firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signup(email,password){
        auth.createUserWithEmailAndPassword(email,password)
    }

    function login(email,password){
        auth.signInWithEmailAndPassword(email,password)
    }

    function logout(){
        auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            console.log("user:",user)
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
