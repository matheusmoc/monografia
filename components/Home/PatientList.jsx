import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { listHospitalNurses } from '../../src/services/dynamoDB';

export default function PatientList() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await listHospitalNurses();
      setNurses(data);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Profile</Text>
      {/* <FlatList
        data={nurses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      /> */}
    </View>
  );
}
