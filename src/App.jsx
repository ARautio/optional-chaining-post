import React from 'react'

import Container from './components/Container'
import Text from './components/Text'

/**
 * Sidebar content list is done by deep object to show how optional chaining works.
 * This certainly isn't the only way to do a sidebar.
 */
const sidebarLinks = {
  FrontPage: {
    Dashboard: ['Most used items', 'Recently added items'],
    'Recent News': ['News from developer', 'News from community']
  },
  Items: {
    'List Items': ['By Date', 'By Location'],
    'Edit Items': []
  },
  Logout: {}
}

const App = () => (
  <Container>
    {Object.keys(sidebarLinks).map(item => (
      <Container key={item}>
        <Text>{item}</Text>
        {/*
         * Optional chaining shortens writing in here since we don't have to check each
         * path level whether it exists or not.
         */}
        {Object.keys(sidebarLinks?.[item] || []).map(subItem => (
          <Container key={subItem}>
            <Text>{subItem}</Text>
            {(sidebarLinks?.[item]?.[subItem] || []).map(subSubItem => (
              <Container key={subSubItem}>
                <Text>{subSubItem}</Text>
              </Container>
            ))}
          </Container>
        ))}
      </Container>
    ))}
  </Container>
)

export default App
