export function useSpotify() {

    var token = localStorage.getItem('token');
    console.log(token)

    return { token }
}

export default useSpotify