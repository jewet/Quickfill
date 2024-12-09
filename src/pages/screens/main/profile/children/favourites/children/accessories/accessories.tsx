import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  items_data,
  ItemsProps,
} from '../../../../../../../../utils/sample-data/accessories';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import itemsStyles from '../../../../../accessories/children/items/itemsStyles';
import FavIcon from '../../../../../../../../assets/images/accessories/loved.svg';
import Heart from '../../../../../../../../assets/images/profile/heart.svg';
import homeStyles from '../../../../../home/home-styles';
import Button from '../../../../../../../../components/Button/Button';

interface Props {
  navigation: (item: ItemsProps) => void;
  data: ItemsProps[];
  profile_data: any;
}

function Accessories({navigation, data, profile_data}: Props) {
  return (
    <View style={{width: '100%', paddingTop: 50}}>
      {profile_data?.profile?.accessories?.length > 0 ? (
        profile_data?.profile?.accessories?.map((data: any, index: number) => (
          <TouchableOpacity
            key={index}
            style={[
              orderDetailsStyles.flexContainer,
              itemsStyles.itemsCont,
              {alignItems: 'center'},
            ]}
            onPress={() => navigation(data)}>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {width: '50%', alignItems: 'flex-start'},
              ]}>
              <TouchableOpacity onPress={() => navigation(data)}>
                <data.img width={101} height={103} fill="none" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
                onPress={() => navigation(data)}>
                <TouchableOpacity onPress={() => navigation(data)}>
                  <Text style={itemsStyles.titleText}>{data.name}</Text>
                  <Text style={itemsStyles.specText}>
                    {data.spec.length > 43
                      ? `${data.spec.substring(0, 43)}...`
                      : data.spec}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation(data)}>
                  <Text style={itemsStyles.priceText}>
                    ₦{Intl.NumberFormat().format(data.price)}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <FavIcon width={24} height={24} fill="none" />
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 450,
            gap: 10,
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
  );
}

export default Accessories;
