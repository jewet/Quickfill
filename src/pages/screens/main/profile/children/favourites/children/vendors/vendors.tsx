import React from 'react';
import {Text, View} from 'react-native';
import {ProfileProps} from '../../../../../../../../utils/sample-data/profile';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import Online from '../../../../../../../../assets/images/profile/online.svg';
import Offline from '../../../../../../../../assets/images/profile/offline.svg';
import Star from '../../../../../../../../assets/images/accessories/tabler_star-filled.svg';
import vendorStyles from './vendorsStyles';
import Heart from '../../../../../../../../assets/images/profile/heart.svg';
import homeStyles from '../../../../../home/home-styles';
import Button from '../../../../../../../../components/Button/Button';

interface Props {
  profile_data: any;
}

function Vendors({profile_data}: Props) {
  return (
    <View style={vendorStyles.vendorWrapper}>
      <View>
        {profile_data?.profile?.vendors?.length > 0 ?
        (profile_data?.profile?.vendors.map((data: any, index: number) => (
            <View
              key={index}
              style={[
                orderDetailsStyles.flexContainer,
                vendorStyles.vendorCont,
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto', alignItems: 'center'}]}>
              <data.img width={64} height={64} fill="none" />
              <View>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto', gap: 3}]}>
              <Text style={vendorStyles.status}>Status - {data.status || 'Unknown'}</Text>
                  {data.status?.toString().toLowerCase() === 'online' ? (
                    <Online width={7} height={7} fill="none" />
                  ) : (
                    <Offline width={7} height={7} fill="none" />
                  )}
                </View>
                <Text style={vendorStyles.name}>{data.name}</Text>
                <Text style={vendorStyles.time}>Estimated delivery time: {data.delivery_time}</Text>
              </View>
              </View>
              <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <Text style={vendorStyles.time}>Price per kg</Text>
                <Text style={vendorStyles.name}>₦{Intl.NumberFormat().format(data.price)}</Text>
                <View style={[orderDetailsStyles.flexContainer, {width: 'auto', gap: 3}]}>
                  <Star width={12} height={12} fill="none" />
                  <Text style={[vendorStyles.name, {fontSize: 12}]}>{data.rating}</Text>
                </View>
              </View>
            </View>
          )))
          :
          (
            <View
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 450,
              gap: 10,
              marginTop: 100
            }}>
            <Text style={[homeStyles.details, {color: '#8E8E93'}]}>
              Nothing here yet
            </Text>
            <Text style={[homeStyles.title, {fontWeight: 400}]}>
              Place an order and then check back
            </Text>
            <Heart width={120} height={120} fill="none" />
            <View style={{width: '100%', paddingHorizontal: 16}}>
              <View style={{marginTop: 80, width: '100%'}}>
                <Button
                  text="Browse vendors nearby"
                  action={() => console.log('pressed')}
                />
              </View>
            </View>
          </View>
          )}
        
      </View>
    </View>
  );
}

export default Vendors;
