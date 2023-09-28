import CSSModule from './modules/CSSModule.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(CSSModule);

const BindClassNameComponent = () => {
  return (
    <div>
      <p className={cx('innerP', 'otherP')}>hello</p>
      <p className="something">Hi there!</p>
    </div>
  );
};

export default BindClassNameComponent;
