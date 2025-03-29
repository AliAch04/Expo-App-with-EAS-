import React, {useState} from "react";
import DatePicker from '@react-native-community/datetimepicker';
import { Text, View } from "react-native";

export default function Index() {
  const [date, setDate] = useState(new Date());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <DatePicker 
        value={date}
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || date;
          setDate(currentDate);
        }}
        mode="date" 
      />
    </View>
  );
}
