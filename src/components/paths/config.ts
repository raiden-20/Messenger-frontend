const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
};

export default config