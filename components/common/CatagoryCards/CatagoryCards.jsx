import { View, FlatList } from 'react-native'

import { useDataState, getCatagoryIndex } from '../../../hooks/useData'
import CatagoryCard from '../../cards/CatagoryCard/CatagoryCard'
import styles from './CatagoryCards.style'


const CatagoryCards = ({ catagoryNames, catagorisedProducts, productListRef }) => {
  const [activeCatagory, setActiveCatagory] = useDataState('Burgers') // Initially set to burgers...
  const handlePress = (catagoryName) => {
    if (activeCatagory === catagoryName) return;
    setActiveCatagory(catagoryName)
    productListRef.scrollToIndex({
      animated: true,
      index: getCatagoryIndex(catagoryName),
      viewPosition: 0
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={catagoryNames}
        renderItem={({ item }) => {
          return (
            <CatagoryCard
              catagoryName={item}
              backgroundImage={{ uri: `http://127.0.0.1:3000${catagorisedProducts[item][0].image}` }}
              handlePress={handlePress}
              activeCatagory={activeCatagory}              
            />
          )
        }}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

export default CatagoryCards