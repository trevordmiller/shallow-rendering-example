import React from 'react/addons';
import assert from 'assert';
import Accordion from './Accordion';

describe('Accordion', () => {

  const renderer = React.addons.TestUtils.createRenderer();
  const data = {
    summary: 'This is a summary',
    details: 'This is some details'
  };

  function renderAccordion() {
    renderer.render(<Accordion summary={data.summary} details={data.details} />);
    return renderer.getRenderOutput();
  }

  let result = renderAccordion();

  it('should render the correct element type', () => {
    assert.equal(result.type, 'div');
  });

  it('should render the correct children and be inactive by default', () => {
    assert.deepEqual(result.props.children, [
      <a onClick={Accordion.toggle}>This is a summary</a>,
      <p style={{display: 'none'}}>This is some details</p>
    ]);
  });

  // it('should become active when clicked', () => {
  //   result.props.onClick();
  //   result = renderAccordion();
  //   assert.equal(result.props.children[1].style.display, 'inherit');
  // });
});
