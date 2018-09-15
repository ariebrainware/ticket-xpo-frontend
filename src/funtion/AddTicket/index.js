import request from '../../funtion/Axios'

// import swal from 'sweetalert'

const AddTicket = (ticket) =>{
    return new Promise((resolve,reject) =>{
        request.post('/add',ticket)
            .then(response => {
                // swal('Success', 'Ticket successfully created!', 'success')
                resolve(response)
            }).catch(error =>{
                // swal('Error', 'Oops something wrong, make sure you fill all the field!', 'error')
                reject(error)
            })
    })
}

export default AddTicket