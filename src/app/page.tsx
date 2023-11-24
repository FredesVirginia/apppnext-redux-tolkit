"use client"

//cuando estoy usando codigo de fronted uso use cliente
import { useAppDispatch , useAppSelector } from "@/redux/hook";
import { increment , decrement } from "@/redux/features/couterSlice";
import { useGetUsersQuery } from "@/redux/service/userApi";

function HomePage(){
  const couter = useAppSelector (state => state.couterSlice.couter);
  const dispatch = useAppDispatch();
  //los datos que estan dentro de este hook
  // como la data el isFeching son datos que devuelve el hook
  // asi se llaman
  const {data , error , isLoading , isFetching } = useGetUsersQuery(null)

    if( isLoading || isFetching) return <p>Loading ...</p>
    if(error) return <p>Some error </p>

    

  return (
    <div>
     <h1> Total : {couter}</h1>
     <button
      onClick={() =>{
        dispatch(increment())
      }}
     >
      Increment
     </button>
     <br/>
     <button 
      onClick={() =>{
        dispatch(decrement())
      }}
     >
      Decrement
     </button>

       {
        data?.map(user =>(
          <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            
          </div>
        ))
       }
    </div>
  )
}

export default HomePage;
