import { selectIsCLI, setIsCLI } from '@/store/homepageSlice';
import { FiTerminal, FiMonitor } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

const UISwitch = () => {
  const isCLI = useSelector(selectIsCLI);
  const dispatch = useDispatch();

  function toggle() {
    dispatch(setIsCLI(!isCLI));
  }

  return (
    <div className={`ui-switch-container`} onClick={toggle}>
      <div>Switch to {`${isCLI ? 'GUI' : 'CLI'}`}</div>
      <div className="ui-switch">
        <div className={`icon-container ${isCLI ? 'active' : ''}`}>
          <div className={`icon ${isCLI ? 'active' : ''}`}>
            {isCLI ? <FiMonitor /> : <FiTerminal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UISwitch;
