import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import electricityStyles from '../home/children/electricity/electrictyStyles';
import orderStyles from './orderStyles';
import {orders_nav} from '../../../../utils/sample-data/orders';
import OngoingOrders from './children/ongoing/ongoing';
import CompletedOrders from './children/completed/completed';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'orders'>;

function Orders({navigation}: Props) {
  // Check if the current device theme is dark
  const isDarkMode = useColorScheme() === 'dark';

  // Determine the background color based on the theme
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // State to track the active navigation tab (0 = OngoingOrders, 1 = CompletedOrders)
  const [activeNav, setActiveNav] = useState<number>(0);

  // Function to render the active component based on the selected navigation tab
  const displayActiveComponent = () => {
    if (activeNav === 0) return <OngoingOrders navigation={navigation} />; // Display ongoing orders
    if (activeNav === 1) return <CompletedOrders navigation={navigation} />; // Display completed orders
    return null; // Return null if no tab matches
  };

  return (
    <SafeAreaView style={orderStyles.orderContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={orderStyles.ordersHeader}>
        <Text style={electricityStyles.topText}>Your orders</Text>
      </View>

      {/* Scrollable view for navigation and content */}
      <ScrollView
        style={orderStyles.scrollview}
        showsVerticalScrollIndicator={false}>
        
        {/* Navigation tabs for switching between Ongoing and Completed orders */}
        <View style={orderStyles.orderNavWrapper}>
          {orders_nav.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[
                orderStyles.orderNavCont, 
                index === activeNav && orderStyles.activeNav,
              ]}
              onPress={() => setActiveNav(index)}> {/* Set active tab on press */}
              <Text>{data.nav}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Render the active component based on the selected tab */}
        {displayActiveComponent()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders;
