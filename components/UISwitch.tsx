import { selectIsCLI, setIsCLI } from '@/store/homepageSlice';
import { FiTerminal, FiMonitor } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

// function toGUI() {
//   return (
//     <div>
//       Switch to GUI
//       <div className='ui-icon'>
//         <FiMonitor/>
//       </div>
//     </div>
//   )
// }

// function toCLI() {
//   return (
//     <div>
//       Switch to CLI
//       <div className='ui-icon'>
//         <FiTerminal/>
//       </div>
//     </div>
//   )
// }

// const UISwitch = () => {
//   const isCLI = useSelector(selectIsCLI);
//   const dispatch = useDispatch();

//   function toggle() {
//     dispatch(setIsCLI(!isCLI))
//   }

//   return (
//     <div className='ui-switch' onClick={toggle}>
//       <div className={`${isCLI ? 'active' : ""}`}>
//         {isCLI ? toGUI() : toCLI()}
//       </div>
//     </div>
//   )
// }

const UISwitch = () => {
  const isCLI = useSelector(selectIsCLI);
  const dispatch = useDispatch();

  function toggle() {
    dispatch(setIsCLI(!isCLI));
  }

  return (
    // <div className={`ui-switch-container ${isCLI ? "fromcli" : "fromgui"}`}>
    <div className={`ui-switch-container`}>
      <div>Switch to {`${isCLI ? 'GUI' : 'CLI'}`}</div>
      <div className="ui-switch" onClick={toggle}>
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
