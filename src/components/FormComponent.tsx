import React, {FC, FormEvent, useState} from 'react';

const FormComponent:FC = () => {
    interface IFormProps {
        username: string;
        password: string;
    }

    const [formState, setFormState] = useState<IFormProps>(
        {
            username: '',
            password: ''
        });

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formState);
    };
    const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
        const formInput = e.target as HTMLInputElement;
        setFormState({...formState, password: formInput.value});
    };
    const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
        const formInput = e.target as HTMLInputElement;
        setFormState({...formState, username: formInput.value});
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleUsernameChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handlePasswordChange}/>
                <button>Send</button>
            </form>
        </>
    );
};

export default FormComponent;