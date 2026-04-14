'use client'
import AuthForm from '@/components/authform';
import AddressForm from '@/components/addressForm';
import { useReducer } from "react";

const initialState = {
  step : 'auth'
}

const statesteps  : any = {
    auth : AuthForm,
    address : AddressForm
}

const reducer = (state : any, action : any) => {
          switch(action.type){
            case 'go-to' :
           return {
            ...state,step : action.payload
           }

           default :
             return state
          }
}
const authPage = () => {
      const [state,dispatch] = useReducer(reducer, initialState);
             const Current : any = statesteps[state.step]
        return(
            <main>
               {<Current dispatch = {dispatch}/>}
            </main>
        )

}

export default authPage