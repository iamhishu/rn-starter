import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer 3uCur64ySAdDeQlUv7CUvkZvxEz7VYEfNtgHmzqilHps_8WrDkYS5lLuGt0uK3o_dhOroVkD3cZcTo7nGi7_r0AvtTHNR-Dj4CQbVmZcCpddM1thTnBJiM7b5iiHYnYx",
    },
});
