import React from 'react'
import { getStates, matchStateToTerm, sortStates, styles } from '../../lib/utils'
import Autocomplete from '../../lib/index'

let App = React.createClass({
  getInitialState() {
    return { value: 'Ma' }
  },
  render () {
    const { value } = this.state;
    const items = getStates()
      .filter(state => matchStateToTerm(state, value))
      .sort((a, b) => sortStates(a, b, value))
    return (
      <div>
        <h1>Basic Example with Static Data</h1>

        <p>
          When using static data, you use the client to sort and filter the items,
          so <code>Autocomplete</code> has methods baked in to help.
        </p>

        <Autocomplete
          value={value}
          labelText="Choose a state from the US"
          inputProps={{name: "US state"}}
          items={items}
          getItemValue={(item) => item.name}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value })}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.abbr}
            >{item.name}</div>
          )}
        />
      </div>
    )
  }
})

React.render(<App/>, document.getElementById('container'))

