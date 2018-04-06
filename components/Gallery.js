import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { storage } from '../firebase.js';

export default class Gallery extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageUri:'./images/logo.png'
        };
        let imageRef = props.gallery.Imagen;
        storage.ref('imagenes/'+imageRef).getDownloadURL().then(function(url) {
            console.log('Imagen URL',url);
            this.setState({
                imageUri:url
            });
        }.bind(this)).catch(function(error) {
            console.debug('Error',error);
        });

    }

    render() {
        
        if(!this.props.gallery){
            return <View></View>;
        }else{
            let gal = this.props.gallery;
            return (
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: this.state.imageUri}}
                />
                <Text style={styles.name_container}>{gal.Nombre}</Text>
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft:'5%',
    height:100
  },
  image:{
    width:50,
    height:50
  },
  name_container:{
    
  }
});
