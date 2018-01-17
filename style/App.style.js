import { StyleSheet } from 'react-native';

var AppStyle = StyleSheet.create({
	rootContainer: {
		flex: 1
	},
	commonContainer: {
		flex: 2,
		backgroundColor: '#193441'
	},
	middleContainer: {
		flex: 7,
		backgroundColor: '#3E606F',
		flexDirection: 'row'
	},
	inputContainer: {
		flex: 1,
        borderWidth: 0.5,
        borderColor: '#91AA9D'
	},
	buttonContainer: {
		flex: 1
	}
});

export default AppStyle;