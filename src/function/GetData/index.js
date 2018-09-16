import request from '../Axios'

const GetData = (URL) =>{
    return new Promise((resolve,rejects)=>{
        request.get(URL)
            .then(response=>resolve(response))
            .catch(err => rejects(err))
    })  
}

export default GetData
