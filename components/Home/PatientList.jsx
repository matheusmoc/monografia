import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <FlatList
        data={nurses}
        keyExtractor={(item ) => item.uuid}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.uuid}</Text>
            <Text style={styles.name}>{`${item.Name} ${item.LastName}`}</Text>
            <Text style={styles.phone}>Telefone: {item.Phone}</Text>
            <Text style={styles.vaccine}>Vacina: {item.Vaccine}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#333',
  },
  vaccine: {
    fontSize: 16,
    color: '#333',
  },
})
