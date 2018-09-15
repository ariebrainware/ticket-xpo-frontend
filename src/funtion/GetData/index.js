import request from '../Axios'

const getData = (URL) =>{
    return new Promise((resolve,rejects)=>{
        request.get(URL)
            .then(response=>resolve(response))
            .catch(err => rejects(err))
    })  
}

export default getData
