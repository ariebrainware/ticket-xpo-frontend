import request from '../Axios'
import swal from 'sweetalert'

const UpdateTicket = (ticketNumber, ticketData) => {
    return new Promise((resolve, reject) => {
        request.put(`/update/${ticketNumber}`,ticketData)
            .then(response => {
                swal('Success', 'Ticket successfully updated!', 'success')
                resolve(response)
            })
            .catch(err => {
                swal('Error', 'Looks like, Ticket based on that ticket number doesn\'t exist', 'error')
                reject(err)
            })
    })

}

export default UpdateTicket