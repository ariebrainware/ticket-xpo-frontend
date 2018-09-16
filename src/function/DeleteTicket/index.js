import request from '../Axios'

import swal from 'sweetalert'

const DeleteTicket = (ticketNumber) =>{
    return new Promise((resolve,rejects)=>{
        request.delete('/delete',{
            headers:{
                '_id':ticketNumber                
            }
        })
            .then(response=>{
                swal('Success', 'Ticket successfully deleted!', 'success')
                resolve(response)
            })
            .catch(err => {
                swal('Error', 'Looks like, Ticket based on that ticket number doesn\'t exist', 'error')
                rejects(err)
            })
    })  
}

export default DeleteTicket
