import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Button = (props: any) => {
  const { type, content, onPress } = props;
  console.log(type);
  const backgroundColor = type === 'primary' ? '#171A20' : 'white';
  const textColor = type === 'primary' ? 'white' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default Button;
