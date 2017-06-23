import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native'; 

export default class Splash extends Component {

    componentDidMount(){
      // Start counting when the page is loaded
      this.timeoutHandle = setTimeout(()=>{
          this.props.navigator.push({
            id: 'login'
          })
      }, 2000);
  }

  componentWillUnmount(){
         clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Basic React Native App</Text>
                </View>
                <View>    
                    <Text style={styles.footer}>Powered by react native</Text>
                </View>    
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#27ae60',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    footer: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1,
    }
});