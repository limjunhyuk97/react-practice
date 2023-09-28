import classNames from 'classnames/bind';
import styles from './modules/CSSModule.module.scss';

const cx = classNames.bind(styles);

const SCSSModuleComponent = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('box')}> yo</div>
      <div className={cx('box')}>hello</div>
      <div className={cx('box')}>hi</div>
    </div>
  );
};

export default SCSSModuleComponent;
