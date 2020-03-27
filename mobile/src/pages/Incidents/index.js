import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>0 Incidents</Text>
                </Text>
            </View>

            <Text style={styles.title}>Welcome Hero!</Text>
            <Text style={styles.description}>Choose one of the Incidents bellow and save the day!!</Text>

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>NGO</Text>
                    <Text style={styles.incidentValue}>SENAI</Text>
                </View>
            </View>


        </View>
    )
}