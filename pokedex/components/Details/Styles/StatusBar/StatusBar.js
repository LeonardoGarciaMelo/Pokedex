import { View, Text,StyleSheet} from 'react-native';

export const StatusBar = ({ statName, statValue }) => {
  const barWidth = (statValue / 100) * 100; 
  return (
    <View style={styles.statusBarContainer}>
      <Text style={styles.statName}>{statName}:</Text>
      <View style={styles.statusBar}>
        <View style={[styles.barFill, { width: `${barWidth}%` }]} />
      </View>
      <Text style={styles.statValue}>{statValue}</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  statusBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  statName: {
    marginRight: 5,
  },
  statusBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#e0e0e0', 
    borderRadius: 5,
    overflow: 'hidden', 
  },
  barFill: {
    height: '100%',
    backgroundColor: '#2ecc71', 
    borderRadius: 5,
  },
  statValue: {
    marginLeft: 10,
  },
});