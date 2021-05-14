import { TOGGLE_THEME } from './GlobalActionsTypes'

export const toogleTheme = (theme) => {
    return {
        type: TOGGLE_THEME,
        payload: theme
    }
}
