import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {normalize, fontSize} from '../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InputDate({title = ''}) {
  const [date, setDate] = useState(new Date());

  const [openStart, setOpenStart] = useState(false);
  const [start, setStart] = useState('Start Date');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => setOpenStart(true)}>
        <Text style={styles.titleStyles}>{title}</Text>
        <Icon name="calendar" size={fontSize(14)} color={'#A69F9F'} />
        <DatePicker
          mode="date"
          modal
          open={openStart}
          date={date}
          onConfirm={date => {
            setOpenStart(false);
            setStart(new Date(date).toISOString().split('T')[0]);
          }}
          onCancel={() => {
            setOpenStart(false);
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    height: normalize(32),
    alignItems: 'center',
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    fontFamily: 'DMSans',
    fontSize: fontSize(10),
  },
  titleStyles: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontSize: fontSize(10),
    lineHeight: normalize(27),
    color: '#A69F9F',
    marginBottom: normalize(10),
  },
});
