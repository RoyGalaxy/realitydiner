import styles from './MenuBtn.style';
import { TouchableOpacity, Text } from 'react-native' ;
import { useRouter } from 'expo-router';


const MenuBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/menu');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
        <Text style={styles.text}>MENU</Text>
    </TouchableOpacity>
  )
}

export default MenuBtn