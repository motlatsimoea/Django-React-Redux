import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listproducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { useLocation } from 'react-router-dom'

function Homescreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state=>state.productList)
    const { error, loading, products, page, pages } = productList

    const location = useLocation()
    const keyword = new URLSearchParams(location.search).get('keyword')
    //const keyword = location.search //the query portion of the URL, including the "?"

  useEffect(()=>{
      dispatch(listproducts(keyword))

  }, [dispatch, keyword])  

  return (
    <div>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      { loading ? <Loader />
            :error ? <Message variant='danger'>{error}</Message>
              :
              <div>
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
                <Paginate page={page} pages={pages} keyword={keyword} />
              </div>
      }

      
    </div>
  )
}

export default Homescreen
