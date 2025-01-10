import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const electricityProviderStyles = StyleSheet.create({
  electricityTop: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    borderRadius: 24,
    paddingHorizontal: 15,
    height: 50,
  },
  searchInput: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '500',
    color: '#2C2C2C',
    width: '90%',
  },
  electricityText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '700',
    color: '#2C2C2C',

  },
  electricityDataWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 20,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    padding: 10
  },
  electricityData:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  electricityTextWrapper:{
    display: 'flex',
    alignItems: 'flex-start',
    width: '75%'
  },
  noResultWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  noResultText: {
    fontSize: moderateScale(16),
    color: '#999999',
    fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  
});

export default electricityProviderStyles;
