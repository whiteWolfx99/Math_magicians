import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

it('render', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
