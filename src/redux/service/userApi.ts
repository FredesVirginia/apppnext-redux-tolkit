//Este archivo consumira un backend en internet
// aqui , como redux se da cuenta que estamos haciendo una solcitud http?
//para eso nos da un paramentro llamado -builder-
//este tiene dos cosas query y mutation, el primero es para ahcer solicitudes get
// el el segundo es para modificar el backend coomo ua peticion put post delete



import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// aqui estamos diciendo el tipo de dato que es User
type User = {
    id : number
    name : string
    email : string
    username : string
}


export const userApi = createApi({
    reducerPath : "userAPI",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://jsonplaceholder.typicode.com/"
    }) , 

    endpoints : (builder) => ({
        //entre las llaves del query, le vamos a
        //a decir donde va a almacenar lsod datos que recibe como respuesta

       getUsers: builder.query<User[] , null>({
        query : () => "users"
       }),
       getUserById: builder.query<User , {id :string}>({
        query : ({id}) => `users/${id}`
       })
    })
})


export const {useGetUsersQuery , useGetUserByIdQuery} = userApi;