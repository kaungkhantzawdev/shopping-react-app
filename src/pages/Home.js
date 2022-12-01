import Card from "../components/Card";
import useFetch from "../useFetch";
import React from 'react'
import {  useDispatch } from 'react-redux'
import {  increment } from '../redux/reducer/cartReducer'


const Home = () => {
    const { data, loading } = useFetch('https://fakestoreapi.com/products')
    const dispatch = useDispatch()
   
    const addCart = data => {
        dispatch(increment(data))
    }

    return ( 
        <div className="row">
            <div className="col-12">
                <div className="py-5 text-center">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Shopping example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                        <button className="btn btn-primary my-2 me-2">Main call to action</button>
                        <button className="btn btn-secondary my-2">Secondary action</button>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    { loading && <div>loading...</div>}
                    {  data &&                  
                        data.map((post) => (
                            <div className="col-12 col-lg-4" >
                                <Card key={post.id} cart={post} addCart={addCart} price={ post.price } src={ post.image } title={ post.title } 
                                body={ post.description }/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Home;