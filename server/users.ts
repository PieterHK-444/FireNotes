"use server"

import {auth} from "@/lib/auth"

export const createUser = async (email: string, password: string) => {
    try{
    const response = await auth.api.signInEmail({
        body: {
        email,
        password,
        },
    });
    return{success: true, message: "Signed in successfully"}
}catch(error){
    const e = error as Error;
    return{success: false, message: e.message || "failed to sign in"}
}
};

export const signUpUser = async (email: string, password: string, name: string) => {
    try{
        const response = await auth.api.signUpEmail({
            body: {
                email,
                password,
                name,
            },
        })
        return{success: true, message: "Signed up successfully"}
    }
    catch(error){
        const e = error as Error;
        return{success: false, message: e.message || "failed to sign up"}
    }
}