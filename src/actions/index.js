import types from './types'

export const signOut = () => {
    // Call firebase sign out functionality
    
    return { type: types.SIGN_OUT };
}
