import React, { useEffect, useState } from 'react'
import AddProductModal from '../Commponents/AddProductModal'
import axios from 'axios'
import Swal from 'sweetalert2'
import {AiFillDelete} from 'react-icons/ai'
import { routePath } from '../../App'

function Admin_Product() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    try{
    axios.get(`${routePath}api/allproducts`)
      .then((json) => {
        setAllProducts(json.data.products)
      })
    }
    catch(error){
      console.log(error)
    }
  }, [])
  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`${routePath}api/deleteproducts`, { data: { _id: productId } });   
        Swal.fire({
          icon: 'success',
          title: 'Product Deleted',
          text: response.data.message
        });
      
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
          <div className="container">
        <div className="my-4 bg-white">
          <div className="text-center">
            <AddProductModal />
          </div>
          <div className="my-2">
            <h3 className='ps-4 pb-2'>All Products</h3>

            <table className="table  table-hover border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product, index) => (
                  <tr key={product._id}> 
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={product.thumbnail}
                        alt="no image"
                        className="rounded-circle"
                        style={{ width: "100px", height: "100px", objectFit: "contain" }}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                   <td>{<AiFillDelete onClick={(e) => {handleDelete(product._id)}}  className='text-danger' style={{fontSize: "50px", cursor:"pointer"}}/>}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin_Product
