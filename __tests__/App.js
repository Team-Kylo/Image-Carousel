import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App.jsx';


describe('App rendering', () => {
    test('it should be defined', () => {
      expect(new App()).toBeDefined();
    });
});