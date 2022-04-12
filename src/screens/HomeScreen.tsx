import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import type {RootState} from '@aktivlearningtest/redux';
import {
  getPixabayImages,
  clearState,
} from '@aktivlearningtest/redux/actions/appActions';
import {useSelector, useDispatch} from 'react-redux';
import {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
} from '@aktivlearningtest/constants/constants';

export const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    if (search) {
      dispatch(clearState());
    }
    dispatch(getPixabayImages({search, page}));
  }, [dispatch, search, page]);

  const {photos, loading} = useSelector(
    (state: RootState) => state?.appReducer,
  );

  const Item = ({photo, onPress}: any) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `${photo?.largeImageURL}`,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <Item
        photo={item}
        onPress={() => {
          navigation.navigate(`Details`, {
            itemId: item.id,
          });
        }}
      />
    );
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const SearchOnChange = (e: any) => {
    setSearch(e);
  };

  if (loading) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        onChangeText={SearchOnChange}
        placeholder={'Search'}
      />
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: DEVICE_WIDTH * 1,
    height: DEVICE_HEIGHT * 0.1,
    margin: DEVICE_WIDTH * 0.12,
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
    height: DEVICE_HEIGHT * 0.2,
  },
  textInput: {borderColor: 'gray', borderWidth: 1, margin: DEVICE_WIDTH * 0.05},
});
