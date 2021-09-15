// ** Update & Get Updated Bookmarks Array
export const updateBookmarked = id => {
  return { type: 'UPDATE_BOOKMARKED', id }
}

// ** Handle Bookmarks & Main Search Queries
export const handleSearchQuery = val => {
  return { type: 'HANDLE_SEARCH_QUERY', val }
}
