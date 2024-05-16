import React, {FC, FormEvent, useState} from 'react';
import {useForm} from "react-hook-form";

const FormComponent: FC = () => {
    interface IFormProps {
        username: string;
        password: string;
        age: number;
    }


    const {handleSubmit, register} = useForm<IFormProps>()

    return (
        <>
            <form onSubmit={handleSubmit((formDataProps)=>{
                console.log(formDataProps);
            })}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number"  {...register('age')}/>
                <button>Send</button>
            </form>
        </>
    );
};

export default FormComponent;