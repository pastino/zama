import React, {FunctionComponent} from 'react';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export interface RnIconProps {
  name: string;
  size: number;
  color: string;
}

export const IoniconsIcons: FunctionComponent<RnIconProps> = ({
  name,
  size,
  color,
}) => {
  return <IoniconsIcon name={name} size={size} color={color} />;
};

export const MaterialCommunityIcons: FunctionComponent<RnIconProps> = ({
  name,
  size,
  color,
}) => {
  return <MaterialCommunityIcon name={name} size={size} color={color} />;
};

export const MaterialIcons: FunctionComponent<RnIconProps> = ({
  name,
  size,
  color,
}) => {
  return <MaterialIcon name={name} size={size} color={color} />;
};
