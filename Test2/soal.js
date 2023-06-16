import axios from "axios";


// soal 1
export const sendLogin = async() => {
    await axios.get('endpoint/get-data',{
     headers: {
       'Content-Type': 'multipart/form-data',
       "token" : "gwgd6i37263o72djfhjdg"
     }
   }
 )
 }

// soal 2
export const postAction  = async() => {
    await axios.post('/endpoint-api' ,{
        nama : "yudi gunaan",
        alamat: "lampung",
    })
}

// soal 3
export const sendApi = async() => {
   await axios.post('endpoint/parameter')
}