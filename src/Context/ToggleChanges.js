import React from 'react'

const ToggleChanges = React.createContext({
  activeRating: 'Highest',
  ChangeActiveRating: () => {},
  SavedList: [],
  addToSavedList: () => {},
  Count: [],
  onUpdatedCount: () => {},
  onIncrementCount: () => {},
  onDecrementCount: () => {},
})

export default ToggleChanges
