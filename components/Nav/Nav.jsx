import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import Menu from './Menu';

const Nav = () => {
  const [isPressed, setIsPressed] = useState(false);

  const homeHandler = () => {
    setTimeout(() => {
      setIsPressed((currPress) => !currPress);
    }, 50);
  };

  return (
    <>
      {/* <Menu isPressed={isPressed} /> */}
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <Ionicons name='home' size={30} color='#6b6565' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItems}>Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={homeHandler}>
          <Ionicons
            name='ios-menu-sharp'
            size={30}
            color={isPressed ? '#d73737' : '#6b6565'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Nav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    borderTopWidth: 1,
    borderTopColor: '#ccc9c9',
  },
  navItems: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
