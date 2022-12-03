import React, { useState } from 'react';

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
      <label>
        Email
        <input type="mail" name="email" onChange={onChange} value={email} />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <button type="submit">Enter</button>
    </form>
  );
}
