import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View.attrs({
  contentContainerStyles: { paddingTop: getStatusBarHeight() + 20 }
})`
  flex: 1;
  background-color: #fff;
`;
