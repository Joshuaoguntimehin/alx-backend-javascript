import{uploadPhoto, createUser} from '.utils.js';

function handleProfileSignup() {
    Promise.all([uploadPhoto(),  createUser()])
        .then(([uploadPhoto, user]) => {
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}