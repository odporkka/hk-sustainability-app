import { useState  } from 'react';

const ComparatorPopupHook = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  function toggle() {
    setIsShowing(!isShowing);
  }

  function clickPosition(mouseEvent) {
    setPosition({x: mouseEvent.pageX / 2 + 190, y: mouseEvent.pageY - 280})
  }

  return {
    isShowing,
    position,
    toggle,
    clickPosition,
  }
};

export default ComparatorPopupHook;