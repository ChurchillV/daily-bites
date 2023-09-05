import styled from 'styled-components';
import {Constants} from 'expo-constants';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';




// colors
export const Colors = {
    white: "#ffffff",
    black: "#000000",
    turquoise: "#AFE4DE",
    lightTurquoise: "#04f489",
    darkLight: "#333333"
};

const {white, black, turquoise, lightTurquoise} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    background-color: ${white};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    color: ${black};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    color: ${black};
    font-weight: bold;
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    color: ${black};
    border-width: 1px;
    border: ${turquoise};
    border-radius: 50%;
    font-size: 16px;
    padding-left: 55px;
    padding-right: 55px;
    margin-vertical: 3px;
    margin-bottom: 10px;
`;

export const StyledInputLabel = styled.Text`
    color: ${black};
    font-size: 13px;
    text-align: left;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${turquoise};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;

