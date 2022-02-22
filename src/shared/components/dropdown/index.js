import React, { useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, Modal, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ArrowUp } from '../icons';
import PropTypes from 'prop-types';
import { getWidth, getHeight } from './utils';
import styles from './style';

const Dropdown = ({ label, data, onSelect, backgroundColor, color, size }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const containerStyle = StyleSheet.flatten([
    styles.button,
    {
      backgroundColor: backgroundColor,
      height: getHeight(size),
      width: getWidth(size),
    },
  ]);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    /* DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });*/
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity onPress={() => setVisible(false)}>
          <View style={styles.dropdown}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity ref={DropdownButton} style={containerStyle} onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={(styles.buttonText, { color: color })}>
        {(selected && selected.label) || label}
      </Text>
      <ArrowUp color={color}></ArrowUp>
    </TouchableOpacity>
  );
};

Dropdown.defaultProps = {
  backgroundColor: Colors.WHITE,
  color: Colors.WHITE,
  size: 'large',
};

Dropdown.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Dropdown;

/*
   <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, { top: dropdownTop }]}>
     
          */
