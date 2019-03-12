import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';

describe('Comment component tests', () => {
  it('renders the Comment component correctly', () => {
    const tree = renderer.create(
      <SearchBar type='text' />
    );
    expect(tree).toMatchSnapshot;
  });
});
