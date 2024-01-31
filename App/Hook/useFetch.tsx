import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
// import { Rapid_API_Key } from '../..';

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '01668915c3msh7fc052eedbeed89p168badjsn1855487b065a',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
      // query: 'Python developer in Texas, USA',
      // page: '1',
      // num_pages: '1',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.toString());
      Alert.alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isloading, error, reFetch};
};

export default useFetch;
