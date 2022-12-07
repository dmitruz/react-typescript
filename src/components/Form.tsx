import React, { useState } from 'react';
import './Form.scss';

interface Props {
    onSubmit: (cred: { email: string; password: string }) => void;
}

export default function Form({ onSubmit }: Props)  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case "email":
            setEmail(value);
            break;

            case password:
            setPassword(value);
            break;

            default:
            console.warn(`Unknowk field name - ${name}`);
        }
    };

        const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
        };

      return (
    <form onSubmit={handleSubmit}>
      <label className="label">
        <p className="input__text">Email</p>
        <input className="input" type="mail" name="email" onChange={onChange} value={email} />
      </label>

      <label className="label">
       <p className="input__text">Password</p>
        <input className="input"
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <button className="button" type="submit">Enter</button>
    </form>
  );
}
