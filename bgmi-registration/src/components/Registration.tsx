import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const REGISTER_PLAYER = gql`
  mutation RegisterPlayer($input: PlayerInput!) {
    registerPlayer(input: $input) {
      id
      username
      email
      phone
      team
      level
      experience
    }
  }
`;

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    team: '',
    level: '',
    experience: ''
  });

  const [registerPlayer, { data, loading, error }] = useMutation(REGISTER_PLAYER);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = {
      ...formData,
      level: parseInt(formData.level, 10)
    };
    registerPlayer({ variables: { input } });
  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>Registration successful!</p>;

  return (
    <div className="registration">
      <h2>Player Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="BGMI Username" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="text" name="team" placeholder="Team Name (if applicable)" onChange={handleChange} />
        <input type="number" name="level" placeholder="BGMI Level" required onChange={handleChange} />
        <textarea name="experience" placeholder="Brief gaming experience" onChange={handleChange}></textarea>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;