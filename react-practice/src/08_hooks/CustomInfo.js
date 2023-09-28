import Custom from './Custom.js';

const CustomInfo = () => {
  const [state, onChange] = Custom({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <div>
      <input value={name} name="name" onChange={onChange} />
      {name}
      <input value={nickname} name="nickname" onChange={onChange} />
      {nickname}
    </div>
  );
};

export default CustomInfo;
