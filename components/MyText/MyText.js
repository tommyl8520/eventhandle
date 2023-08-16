import React from "react";
import {Text} from 'react-native';
import style from './style';

const MyText = () => {
    const handleTextClick = () => {
        alert('The Text has been clicked');

    };



    return (
     <Text
     style={[style.text, style.text1]}
     onPress={() => handleTextClick()}>



     Event Handling
     </Text>

  );
};

export default MyText;


