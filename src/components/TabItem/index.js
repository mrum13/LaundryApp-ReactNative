import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {IcHomeActive, IcHomeInactive, IcPesananActive, IcPesananInactive, IcAkunActive, IcAkunInactive} from '../../assets'
import {PRIMARY_COLOR, GREY_COLOR} from '../../utils/constants'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = ()=>{
        if(label==="Home") return isFocused ? <IcHomeActive/> : <IcHomeInactive/>
        if(label==="Pesanan") return isFocused ? <IcPesananActive/> : <IcPesananInactive/>
        if(label==="Akun") return isFocused ? <IcAkunActive/> : <IcAkunInactive/>

        return <IcHomeInactive/>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.containerTabItem}
        >
            <Icon/>
            <Text style={styles.textTabItem(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    containerTabItem: {
        alignItems: 'center'
    },
    textTabItem:(isFocused)=> ({
        fontSize: 14,
        color: isFocused ? PRIMARY_COLOR : GREY_COLOR,
        marginTop: 8
    })
})