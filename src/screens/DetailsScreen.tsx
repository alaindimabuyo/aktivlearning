import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {getCurrentImage} from '@aktivlearningtest/redux/actions/appActions';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '@aktivlearningtest/redux';
import {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  RATIO,
} from '@aktivlearningtest/constants/constants';

const DetailsScreen = ({route}: any) => {
  const dispatch = useDispatch();
  const {loading, photo} = useSelector((state: RootState) => state?.appReducer);

  React.useEffect(() => {
    dispatch(getCurrentImage({id: route.params.itemId}));
  }, [route.params.itemId, dispatch, route]);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      {photo &&
        photo?.map((data: Record<string, any>) => (
          <View key={data.id} style={styles.item}>
            <Text style={styles.title}> {data.user}</Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: `${data?.largeImageURL}`,
              }}
            />
            <Text style={styles.tags}>{data.tags}</Text>
            <Text style={styles.imageResolution}>
              {data.imageWidth} x {data.imageHeight}
            </Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: DEVICE_WIDTH * 1,
    height: DEVICE_HEIGHT * 0.2,
    margin: DEVICE_WIDTH * 0.2,
  },
  title: {
    fontSize: DEVICE_HEIGHT * 0.02,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tags: {
    textAlign: 'center',
    color: 'gray',
  },
  imageResolution: {
    textAlign: 'center',
    fontSize: DEVICE_HEIGHT * 0.012,
  },
  tinyLogo: {
    width: DEVICE_WIDTH * 1,
    height: DEVICE_HEIGHT * 0.3,
  },
});

export default DetailsScreen;
