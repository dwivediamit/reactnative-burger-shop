import React from "react";
import { Platform,AsyncStorage  } from "react-native";
import { Root, StyleProvider } from "native-base";
import { StackNavigator } from "react-navigation";
import getTheme from '../../native-base-theme/components';
import material from "../../native-base-theme/variables/material";
import platform from "../../native-base-theme/variables/platform";
import commonColor from '../../native-base-theme/variables/commonColor';
import List from "./List.js"
import Product from "./Product.js"
import Order from "./Order.js"
import Address from "./Address.js"
import Payment from "./Payment.js"
import Confirm from "./Confirm.js"
console.disableYellowBox = true;


const AppNavigator = StackNavigator(
    {
        List: { 
            screen: List 
        },
        Product: { 
            screen: Product 
        },
        Order: { 
            screen: Order 
        },
        Address: { 
            screen: Address 
        },
        Payment: { 
            screen: Payment 
        },
        Confirm: { 
            screen: Confirm 
        },  
    },
    {
        initialRouteName: "List",
        headerMode: "none",
    }
);

export default () =>

    <Root>
        <StyleProvider style={getTheme(commonColor)}>
            <AppNavigator />
        </StyleProvider>
    </Root>;
