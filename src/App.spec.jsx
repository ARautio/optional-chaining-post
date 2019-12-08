import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('App', () => {
  it('App creates list of items based on given object', () => {
    expect(renderer.create(<App />).toJSON()).toMatchSnapshot()
  })
})
