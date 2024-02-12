import { useContext } from "react";
import { createContext } from "react";

export const Themecontext=createContext({
    thememodel: "light",
    darktheme:()=>{},
    lighttheme:()=>{}
});

export const Themeprovider=Themecontext.Provider;

export default function Usetheme(){
   return useContext(Themecontext);
}