import { useEffect, useState } from 'react';

const InfoUseEffect = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    return () => {
      console.log(name);
      console.log('component unmounted');
    };
  }, [name]);

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setNickname(e.target.value)} />
      <div>{name}</div>
      <div>{nickname}</div>
    </div>
  );
};

export default InfoUseEffect;
