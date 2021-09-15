// ** Handles Layout Content Width (full / boxed)
export const handleContentWidth = value => {
    return { type: 'HANDLE_CONTENT_WIDTH', value }
}

// ** Handles Menu Collapsed State (Bool)
export const handleMenuCollapsed = value => {
    return { type: 'HANDLE_MENU_COLLAPSED', value }
}

// ** Handles Menu Hidden State (Bool)
export const handleMenuHidden = value => {
    return { type: 'HANDLE_MENU_HIDDEN', value }
}

// ** Handles RTL (Bool)
export const handleRTL = value => {
    return { type: 'HANDLE_RTL', value }
}
