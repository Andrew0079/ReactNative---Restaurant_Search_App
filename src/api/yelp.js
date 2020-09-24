import axios from 'axios';

const apiKey = 'p3J3z8XXW-0UG8UoptU8vGWLopkBeU7OnQ9rpPA_ZlqlsBvjnaFALMDi0SPqAE2bdj-Wzx41IfOt1vfDjR_LOoWNrDLRAInSYpm8LDjKSOcF_-HNurqo5wwbUj9rX3Yx'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer '+apiKey
    }
})
