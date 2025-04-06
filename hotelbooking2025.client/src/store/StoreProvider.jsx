import AuthContext from "./contexts/AuthContext";
import HotelsContext from "./contexts/HotelsContext";
import { useReducer, useContext } from "react";
import { auth as authReducer } from "./reducers/auth";
import { hotels as hotelsReducer } from "./reducers/hotels";

export function StoreProvider({ children }) {
    const [auth, dispatchAuth] = useReducer(authReducer, { authorized: false });
    const [hotels, dispatchHotels] = useReducer(hotelsReducer, { fulfilled: false });

    return <AuthContext.Provider value={{ state: auth, dispatch: dispatchAuth }}>
        <HotelsContext.Provider value={{ state: hotels, dispatch: dispatchHotels }}>
            {children}
        </HotelsContext.Provider>
    </AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);