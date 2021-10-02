import React, {FunctionComponent} from 'react';
//libs
import Image from 'react-native-fast-image';
//tools
import {checkUrlForm} from '@/utils/tools';
//styles
import styled from 'styled-components/native';

interface Props {
  path: any;
  width: number;
  height: number;
  isFiltered?: boolean;
  styles?: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | undefined;
}

const ImageBasic: FunctionComponent<Props> = ({
  path,
  width,
  height,
  isFiltered = false,
  styles,
  resizeMode = 'cover',
}) => {
  const refinedPath = checkUrlForm(path);
  return (
    <>
      <Image
        source={refinedPath ? {uri: path} : path}
        style={[styles, {width, height}]}
        resizeMode={resizeMode}
      />
      {isFiltered ? <CorverdFilterView width={width} height={height} /> : null}
    </>
  );
};

interface SizeProps {
  width: number;
  height: number;
}

const CorverdFilterView = styled.View<SizeProps>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export default ImageBasic;
