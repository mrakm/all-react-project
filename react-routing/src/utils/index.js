const TKEY_TOKEN="JWT";


export const login = () => {
   localStorage.setItem(TKEY_TOKEN,"login");

}
export const logout = () => {
    localStorage.removeItem(TKEY_TOKEN);
    
 }

 export const islogin = () => {
    if(localStorage.getItem(TKEY_TOKEN)){
        console.log(localStorage.getItem(TKEY_TOKEN));
        return true;
    }
    return false;
 }

