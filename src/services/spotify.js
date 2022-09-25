function logout() {
    setToken("")
    window.localStorage.removeItem("token")
}
