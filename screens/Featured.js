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
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon, McAvatar } from '../components';
const Featured = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    {/* Header Section */}
    <SectionHeader>
        <View>
            <McText body5 style={{opacity: 0.5}}>DECEMBER 21 9:10 PM </McText>
            <McText h1>Explore events</McText>
         </View>
         <McAvatar source={images.avatar}/>
    </SectionHeader>
    <SectionSearch>
      <SearchView>
        <McIcon source={icons.search} size={24} />
        <TextInput
          placeholder="Rechercher"
          placeholderTextColor={COLORS.gray1}
          style={{
          fontSize: 16,
          color: COLORS.white,
          width: 250
          }}
        ></TextInput>
        <McIcon source={icons.filter} size={24} />
      </SearchView>
    </SectionSearch>
    </SafeAreaView>
  );
};

const SectionHeader = styled.View`
  padding: 16px ${SIZES.padding};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SectionSearch = styled.View`
  margin: 4px ${SIZES.padding};
  height: 50px;
  backgroundColor: ${COLORS.input};
  border-radius: 15px;
  justify-content: center;
`;

const SearchView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-left: 9px;
margin-right: 15px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
