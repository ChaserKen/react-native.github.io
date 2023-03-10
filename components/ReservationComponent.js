import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Switch, Button , Modal, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';



class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
      smoking: false,
      date: new Date(),
      showDatePicker: false,
      showModal: false
    }
  }
  render() {
    return (
      <Animatable.View animation="zoomInUp" duration={2000} delay={1000}>
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Guests</Text>
          <Picker style={styles.formItem} selectedValue={this.state.guests} onValueChange={(value) => this.setState({ guests: value })}>
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
            <Picker.Item label='6' value='6' />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Smoking/No-Smoking?</Text>
          <Switch style={styles.formItem} value={this.state.smoking} onValueChange={(value) => this.setState({ smoking: value })} />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date and Time</Text>
          <Icon name='schedule' size={36} onPress={() => this.setState({ showDatePicker: true })} />
          <Text style={{ marginLeft: 10 }}>{format(this.state.date, 'dd/MM/yyyy - HH:mm')}</Text>
          <DateTimePickerModal mode='datetime' isVisible={this.state.showDatePicker}
            onConfirm={(date) => this.setState({ date: date, showDatePicker: false })}
            onCancel={() => this.setState({ showDatePicker: false })} />
        </View>
        <View style={styles.formRow}>
          <Button title='Reserve' color='#7cc' onPress={() => this.handleReservation()} />
        </View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, bottom: 0, right: 0, width: 100, backgroundColor: 'red' }}
          onPress={() => {
            Alert.alert(
              'Your Resvervation OK?',
              'Are you sure you wish to delete this favorite dish: ' + item.name + '?',
              [
                { text: 'Number of Guests', onPress: () =>  {this.props.guests} },
                { text: 'Smoking?', onPress: () => {this.props.smoking ? 'Yes' : 'No'} },
                { text: 'Date and Time', onPress: () => {format(this.props.date, 'dd/MM/yyyy - HH:mm')} },
                reset({ text: 'Cancel', onPress: () => { /* nothing */ } }),
                reset({ text: 'OK', onPress: () => { /* nothing */ } })
              ]
            );
          }}>
          <Text style={{ color: '#FFF' }}></Text>
        </TouchableOpacity>
      </ScrollView>
      </Animatable.View>
    );
  }
}
export default Reservation;

const styles = StyleSheet.create({
  formRow: { alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', margin: 20 },
  formLabel: { fontSize: 18, flex: 2 },
  formItem: { flex: 1 },
  modal: { justifyContent: 'center', margin: 20 },
  modalTitle: { fontSize: 24, fontWeight: 'bold', backgroundColor: '#7cc', textAlign: 'center', color: 'white', marginBottom: 20 },
  modalText: { fontSize: 18, margin: 10 }
});