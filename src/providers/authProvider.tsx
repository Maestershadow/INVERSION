import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebaseConfig";


export interface LocalUser {
    email: string;
    password: string;
}

interface AuthContextType {
    user: LocalUser;
    signup: (user: LocalUser, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export function useAuthentication()
{
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<LocalUser>({ email: "", password: "" });

    const signup = (user: LocalUser, callback: VoidFunction) => {
        callback();
        setUser(user);
        return createUserWithEmailAndPassword(auth, user.email, user.password);
    }

    const signout = (callback: VoidFunction) => {
        setUser({ email: "", password: "" });
        callback();
        return signOut(auth);
    }

    const value = { user, signup, signout };
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
