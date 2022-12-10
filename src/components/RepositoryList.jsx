import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import theme from '../theme';
import Text from './Text';
import { useDebounce } from "use-debounce";
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
  },
  menuView: {
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  menu: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.semibold,
    paddingHorizontal: 10,
}
});

const RepositoryList = () => {

  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("Latest repositories");
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const { repositories, fetchMore } = useRepositories(item, debouncedSearchQuery, 4);

  const onEndReach = () => {
    fetchMore();
  }

  return (
    <Provider>
      <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <View style={styles.menuView}>
          <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<View><Button onPress={openMenu}>
                    <Text style={styles.menu}>{item}</Text>
                    <AntDesign name="caretdown" size={24} color="black" />
                  </Button></View>}
          style={styles.menu}>
            <Menu.Item onPress={() => {}} title="Select an item..." disabled="true" />
            <Divider />
            <Menu.Item onPress={() => {setItem("Latest repositories")}} title="Latest repositories" />
            <Menu.Item onPress={() => {setItem("Highest rated repositories")}} title="Highest rated repositories" />
            <Menu.Item onPress={() => {setItem("Lowest rated repositories")}} title="Lowest rated repositories" />
          </Menu>
        </View>
  <RepositoryListContainer repositories = {repositories} onEndReach={onEndReach}/>
  </Provider>);
};

export default RepositoryList;