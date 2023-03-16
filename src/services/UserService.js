import axios from 'axios'
class UserService {
    getUserList(){
        return axios.get('https://panorbit.in/api/users.json').then(response => {
            if(response && response.status === 200) {
                return response
            }
        })
    }
}

export default UserService