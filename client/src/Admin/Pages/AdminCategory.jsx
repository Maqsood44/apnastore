import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiFillDelete} from 'react-icons/ai'
import AddCategory from '../Commponents/AddCategory'
import Swal from 'sweetalert2'
import { routePath } from '../../App'
function AdminCategory() {
  const [categories, seCategories] = useState([])
  useEffect(() => {
    try{
    axios.get(`${routePath}api/allcategories`)
      .then((json) => {
        seCategories(json.data.categories)
      })
      .catch((err) => console.log(err))
    }
    catch(error){
      console.log(error)
    }
  }, [])


  const handleAddNewCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const handleDelete = async (categoryId) => {
    try {
      const response = await axios.delete('http://localhost:3000/api/deletecategory', { data: { _id: categoryId } });   
      if (response.data.delCategory) {
        seCategories(categories.filter(cat => cat._id !== categoryId));
        Swal.fire({
          icon: 'success',
          title: 'Category Deleted',
          text: response.data.message
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Category Deletion Failed',
          text: response.data.message
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="my-4 bg-white">
          <div className="text-center">
          <AddCategory onCategoryAdded={handleAddNewCategory} />
          </div>
          <div className="my-2">
            <h3 className='ps-4 pb-2'>All Categories</h3>

            <table className="table  table-hover border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>


                {categories.map((cat, index) => (
                  <tr key={cat._id}> {/* Assuming "_id" is a unique identifier */}
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={cat.cat_image}
                        alt="no image"
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px", objectFit: "contain" }}
                      />
                    </td>
                    <td>{cat.cat_name}</td>
                   <td>{<AiFillDelete onClick={(e) => {handleDelete(cat._id)}}  className='text-danger' style={{fontSize: "50px", cursor:"pointer"}}/>}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </>
  )
}

export default AdminCategory
