import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './components/reducer'
import {Header} from './components/common'
import LibraryList from './components/LibraryList';


class App extends React.Component{

  render(){
    const store = createStore(reducer)
    
    return (
    <Provider store={store}>
    <View style={styles.container}>
      <Header />
      <LibraryList />
    </View>
    </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default App


