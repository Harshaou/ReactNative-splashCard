import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  render() {
      const {library} = this.props.library

    return (
      <View>
        <FlatList 
        data={library}
        renderItem={({item}) => {
        return (
          <ListItem
          id={item.id}
          title={item.title}
          description={item.description} />
        )
        }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    library: state
})

export default connect(mapStateToProps)(LibraryList)
