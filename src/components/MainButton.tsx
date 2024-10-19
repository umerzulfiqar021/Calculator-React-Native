import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
  } from 'react-native';
  import React, { FC } from 'react';
//   import {Colors} from '../style/colors';
  interface MainProps{
    onPress : () => void
    title: string
    loading?: boolean
    disable?: boolean
    style?: ViewStyle | ViewStyle[]
  }
  const MainButton: FC<MainProps> = ({onPress, title, loading, disable,style}) => {
    return (
      <TouchableOpacity
        style={[styles.cont,style, disable && {opacity: 0.5}]}
        onPress={() => {
        console.log("hdiasd")
          onPress && onPress();
        }}
        disabled={disable}>
        {loading ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <Text style={styles.titleText}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  };
  
  export default MainButton;
  
  const styles = StyleSheet.create({
    cont: {
      height: 48,
      width: '50%',
      borderRadius: 8,
      backgroundColor: '#449',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 9,
    },
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    },
  });