import { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setNickname(e.target.value)} />
      <div>{name}</div>
      <div>{nickname}</div>
    </div>
  );
};

export default Info;
