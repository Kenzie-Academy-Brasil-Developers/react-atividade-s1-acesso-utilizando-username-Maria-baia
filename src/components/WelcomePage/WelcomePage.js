function WelcomePage({user, setIsLoggedIn}){
    function HandleLogout(){
        setIsLoggedIn(false)
    }

    return(
        <>
            <p>Bem-vindo(a), {user} !</p>
            <button onClick={() => HandleLogout()}>Logout</button>
        </>
    )
}

export default WelcomePage