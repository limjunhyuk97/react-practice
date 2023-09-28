import classNames from 'classnames';
import './sass/ModuleImport.scss';

const ClassNameComponent = () => {
  return (
    <div className="ModuleImport">
      <div className={classNames('box', { red: true })}></div>
      <div className="box orange"></div>
      <div className="box yellow"></div>
    </div>
  );
};

export default ClassNameComponent;
