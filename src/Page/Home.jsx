import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionGetDataPosts } from "../redux/Actions/actionGetDataPosts";


const Home = () => {
    const dispatch = useDispatch();
    const dataPost = useSelector((state) => state.dataPost);

    const {data , loading} = dataPost.dataPost;

    useEffect(() => {
        dispatch(actionGetDataPosts());
    },[dispatch]);

    return(
        <>
        {
            loading? <center><div class="loader"></div></center>:
            <>
            <h1 style={{textAlign:'center'}}>Halaman Post</h1>   
            <hr/>
            <div>
                {
                    data.map((item, index) => {
                        return(
                            <div style={{ 
                            backgroundColor:'#9BCDD2', 
                            margin: 10, 
                            borderRadius: 8,
                            cursor: 'pointer',
                            boxShadow: "10px 10px 5px -4px rgba(0,0,0,0.75)"
                            }} key={index}>
                               <div style={{margin: 5}}>
                               <h3 style={{padding: 10}}>
                                   {index+1}. {item.title}
                                </h3>
                                <hr/>
                                <p style={{padding: 10}}>
                                    {item.body}
                                </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>     
            </>
        }
           

        </>
    )
}
export default Home;