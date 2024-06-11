import AWS from 'aws-sdk';
import { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from 'react-native-dotenv';

AWS.config.update({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const listHospitalNurses = async () => {
  const params = {
    TableName: 'HospitalNurseDB',
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    //console.log(data)
    return data.Items;
  } catch (error) {
    console.error("Error fetching data from DynamoDB", error);
    throw error;
  }
};