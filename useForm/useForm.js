import { useState } from "react";


export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );

    // name es el nombre de la variable a alterar.
    //value es el nuevo valor de la variable a alerar
    const onInputChange = ( {target} ) => {  // evente se destestrucxtra en target
        const { name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm);
    };
    

    
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
