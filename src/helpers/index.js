export function greeting(){
    const hour = new Date().getHours();

    return `Good ${ hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening' }`;
}

export function getErrorMessage(err){

    switch (err.code) {
        case 'auth/email-already-in-use':
            return 'Email address already in use';
        case 'auth/invalid-email':
            return 'Please provide a valid email address';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Invalid Email and/or Password';
        default:
            return 'Authorization error';
    }
}
