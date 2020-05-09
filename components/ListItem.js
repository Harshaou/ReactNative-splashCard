import React from 'react';
import { Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import {CardSection} from './common'
import {selectLibrary} from './actions'
import { connect } from 'react-redux';



 class ListItem extends React.Component{
     componentWillUpdate(){
         LayoutAnimation.spring()
     }

     render(){
        const {id, title, description, selectLibrary,selected} = this.props

        const renderDescription = () => {
            if(selected) {
                return (
                <CardSection>
                <Text style={{fontSize: 20, color: 'green', marginLeft: 20}}>{description}</Text>
                </CardSection>
                )}
        }

        return(
            <TouchableOpacity onPress={() => selectLibrary(id)}>
            <CardSection>
                <Text style={{fontSize: 24, fontWeight: 'bold',color: 'orange', marginLeft: 20}}>
                    {title}
                </Text>
            </CardSection>
            {renderDescription()}
            </TouchableOpacity>
        )
        }
}
    


const mapStateToProps = (state, ownProps) => ({
    selected: state.selected === ownProps.id
})


export default connect(mapStateToProps,{selectLibrary})(ListItem)
