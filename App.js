
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  state = {
    data: [
      {
        id: 564789,
        name: 'Iron Man',
        power: 'AI',
        experience: '19',
        image: 'https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432'
      },
      {
        id: 569,
        name: 'Hulk',
        power: 'Strength',
        experience: '23',
        image: 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/03/Avengers-Anatomy-Hulk-3.jpg'
      },
      {
        id: 56,
        name: 'Dr. Strange',
        power: 'Magicians',
        experience: '5',
        image: 'https://static.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/6/61/Doc.jpg/revision/latest?cb=20160117222945'
      },
      {
        id: 12345,
        name: 'Bat Man',
        power: 'Money',
        experience: '39',
        image: 'https://img.cinemablend.com/filter:scale/quill/4/3/c/3/2/8/43c328dda05833b538777e04c15edded0c86557a.jpg?fw=1200'
      }

    ]
  }

  onDelte = (id) => {
    const { data } = this.state
    let filterArray = data.filter((val, i) => {
      if (val.id !== id) {
        return val
      }
    })
    console.log("filter array", filterArray)
    this.setState({data: filterArray})
  }

  renderItems = ({ item }) => {
    return (
      <View style={styles.flatlistStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: item.image }}
            style={styles.imgStyle}
          />
          <View style={{ marginLeft: 8 }}>
            <Text>{item.name}</Text>
            <Text>{item.power}</Text>
            <Text>{item.experience}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => this.onDelte(item.id)}
        >
          <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItems}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  flatlistStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c0cbc0',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  btnStyle: {
    backgroundColor: '#037272',
    padding: 10,
    borderRadius: 8
  }
});

export default App;
