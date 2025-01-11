import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import BackArrow from '../../assets/images/auth/tabler_arrow-right.svg';
import Moreicon from '../../assets/images/orders/3dots.svg';
import LoveIcon from '../../assets/images/accessories/love.svg';
import LovedIcon from '../../assets/images/accessories/loved.svg';
import CartIcon from '../../assets/images/accessories/tabler_shopping-cart.svg';
import headerStyles from './HeaderStyles';

interface Props {
  goBackAction: () => void;
  title: string;
  directory: string;
  isFavourite?: boolean | null;
  setIsFavourite?: () => void;
  cartNav?: () => void;
}

function Header({
  goBackAction,
  title,
  directory,
  isFavourite,
  setIsFavourite,
  cartNav,
}: Props) {
  return (
    <View style={headerStyles.headerWrapper}>
      <View style={headerStyles.headerContainer}>
        <TouchableOpacity onPress={goBackAction}>
          <BackArrow width={26} height={26} fill="none" />
        </TouchableOpacity>
        <Text style={headerStyles.title}>{title}</Text>
      </View>
      <View>
        {directory.toLowerCase() === 'item-details' ? (
          <View style={headerStyles.headerContainer}>
            <TouchableOpacity onPress={setIsFavourite}>
              {isFavourite ? (
                <LovedIcon width={18} height={16} fill="none" />
              ) : (
                <LoveIcon width={18} height={16} fill="none" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={headerStyles.cartWrapper}
              onPress={cartNav}>
              <CartIcon width={24} height={24} fill="none" />
              <View style={headerStyles.countWrapper}>
                <Text style={headerStyles.countText}>4</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : directory.toLowerCase() === 'checkout' ? (
          <TouchableOpacity style={headerStyles.cartWrapper} onPress={cartNav}>
            <CartIcon width={24} height={24} fill="none" />
            <View style={headerStyles.countWrapper}>
              <Text style={headerStyles.countText}>4</Text>
            </View>
          </TouchableOpacity>
        ) : directory.toLowerCase() === 'complete-checkout' ? (
          <View></View>
        ) : (
          <View style={headerStyles.headerContainer}>
            <TouchableOpacity>
              <Moreicon width={44} height={44} fill="none" />
            </TouchableOpacity>
            <TouchableOpacity
              style={headerStyles.cartWrapper}
              onPress={cartNav}>
              <CartIcon width={24} height={24} fill="none" />
              <View style={headerStyles.countWrapper}>
                <Text style={headerStyles.countText}>4</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default Header;
