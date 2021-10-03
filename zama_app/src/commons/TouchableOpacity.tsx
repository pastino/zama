import React, {useCallback, useState, useRef, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

interface Props {
  children?: any;
  onPress?: Function;
  disabled?: boolean;
  duration?: number;
  activeOpacity?: number;
  [key: string]: any;
}

function TouchableOpacityPreventDoubleClick({
  children,
  onPress,
  onLongPress,
  disabled: propDisabled,
  duration: customDuration,
  activeOpacity = 1,
  ...props
}: Props) {
  const duration = customDuration || 0;
  const [disabled, setDisabled] = useState(false);
  const waitTimer: any = useRef();

  const handlePress = useCallback(() => {
    if (!propDisabled) {
      setDisabled(true);
      typeof onPress === 'function' && onPress();
      waitTimer.current = setTimeout(() => {
        setDisabled(false);
      }, duration);
    }
  }, [propDisabled, onPress, duration]);

  useEffect(() => {
    return () => {
      if (waitTimer.current) {
        clearTimeout(waitTimer.current);
      }
    };
  }, []);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}

export default TouchableOpacityPreventDoubleClick;
