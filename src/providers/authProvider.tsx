import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth, db } from "../firebaseConfig";


export interface LocalUser {
    email: string;
    password: string;
}

export interface UserDetails {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
}

interface AuthContextType {
    user: LocalUser;
    signup: (user: UserDetails, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export function useAuthentication() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserDetails>({ email: "", password: "", firstName: "", lastName: "", dateOfBirth: "" });

    const signup = async  (user: UserDetails, callback: VoidFunction) => {
        try {
           const credential = await createUserWithEmailAndPassword(auth, user.email, user.password);
           await db.collection('users').doc(credential.user.uid).set({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            dateOfBirth: user.dateOfBirth,
            id: credential.user.uid
           });
           callback();
           return "";
        } catch (e) {
            return "An error occurred";
        }

    }

    const signout = (callback: VoidFunction) => {
        setUser({ email: "", password: "", firstName: "", lastName: "", dateOfBirth: "" });
        callback();
        return signOut(auth);
    }

    const value = { user, signup, signout };
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
