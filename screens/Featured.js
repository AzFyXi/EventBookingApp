/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 * 
 * TODO:
 * [] Build the header section
 * [] Build the search section (TextInput)
 * [] Build the FEATURED section (Flatlist)
 * [] Build the FOR YOU section 
 */
import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon, McAvatar } from '../components';
const Featured = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
