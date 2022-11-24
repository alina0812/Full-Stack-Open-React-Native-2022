import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useDebounce } from "use-debounce";
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("Latest repositories");
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const onChangeSearch = query => setSearchQuery(query);
  const { repositories } = useRepositories(item, debouncedSearchQuery);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    const renderItem = ({ item }) => (
      <Pressable onPress={() => { navigate(`/repositories/${item.id}`, { replace: true });}}>
        <RepositoryItem item={item} />
      </Pressable>
    );

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
          <FlatList
          data={repositoryNodes}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          />
        </Provider>
        
  );
};

export default RepositoryList;