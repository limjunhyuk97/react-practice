import CSSModule from './modules/CSSModule.module.css';

const ModuleComponent = () => {
  console.log([CSSModule.innerP, CSSModule.otherP].join(' '));

  return (
    <div>
      <p className={[CSSModule.innerP, CSSModule.otherP].join(' ')}>hello</p>
      <p className="something">Hi there!</p>
    </div>
  );
};

export default ModuleComponent;
