import { connect } from 'react-redux';
import FruitsIndex from './fruitsIndex';
import { addFruit, sellOut } from '../actions/fruitActions';

const mapStateToProps = (state) => {
  return {
    fruits: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addApple: () => dispatch(addFruit("apple")),
    addOrange: () => dispatch(addFruit("orange")),
    sellOut: () => dispatch(sellOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FruitsIndex);
