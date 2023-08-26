
# apnastore

E Store" is an e-commerce website developed using React JS, Express JS, and Mongo DB. The platform accommodates three categories of users:

1. *Guests*: Guests enjoy restricted access, primarily limited to browsing products. Prior to logging in, they cannot add items to their cart.

2. *Authenticated Users*: Authenticated users have undergone the sign-up process and can access their personal accounts. They possess the capability to peruse products, incorporate desired items into their shopping cart, and subsequently finalize their purchases at checkout.

3. *Admin*: Administrators hold extensive privileges within the system. They can not only oversee all user accounts, product categories, and individual products, but also possess the authority to introduce novel product categories, examine the entire spectrum of available categories, and implement deletions where warranted. Moreover, administrators wield the power to introduce new products, complete with accompanying images, and can also execute deletions of existing products. In addition to these responsibilities, administrators are empowered to view all customer orders, as well as to modify the status of said orders in the system


## Features

- User registration and authentication system.
- Browse all Categories
- Producs by category
- Add Producs to the shopping cart and proceed to checkout.
- Admin panel for adding Categories, products, see all users, Categories, products and also delete then.



## Demo

You can visit the live demo of the app [here](https://vast-bee-bikini.cyclic.cloud/)

## Front Routes

## Admin Routes
- Home

    ○ Path: "/"

    ○ Component: DashBoard

    ○ Description: administrators can oversee all   users, products, and categories on the website.

- All category

    ○ Path: "/admin-category"

    ○ Component: Admin_Category

    ○ Description: administrators can oversee all categories and add new category

- All products

    ○ Path: "/admin-products"

    ○ Component: Admin_Products

    ○ Description: administrators can oversee all products and add new Product.

- All order

    ○ Path: "/admin-order"

    ○ Component: Admin_Order

    ○ Description: administrators can oversee all orders and change the status of orders.


## User Routes
- Home

    ○ Path: "/"

    ○ Component: Landing Page

    ○ Description: User can oversee New arrival and feature products.

- Categories

    ○ Path: /categories"

    ○ Component: Allcategories

    ○ Description:Browse through a variety of categories to find what you're looking for.Discover a wide range of products neatly organized within each category.Easily navigate and explore the website's offerings by choosing a category of interest.

- Product by Id

    ○ Path: /single-product/:_id"

    ○ Component: Single_Product

    ○ Description: User can see all the about the product which he/she slelect and add it to cart when he/she is logged in.

- Product by Id

    ○ Path: /cart"

    ○ Component: cart_Page

    ○ Description: Allows users to proceed with order checkout.


## User Routes
- Home

    ○ Path: "/"

    ○ Component: Login Page

    ○ Description: Allows users to log in to the application.

- Home

    ○ Path: "/"

    ○ Component: Signup Page

    ○ Description: Allows users to Sign up in to the application.


## API Reference

#### Signup

```http
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usrname` | `string` | **Required**. usrname |
| `email` | `string` | **Required**. User Email |
| `full_name` | `string` | **Required**. Full Name of User |
| `password` | `string` | **Required**. Desire password of user|
| `address` | `string` | **Required**. User Address |

#### Log In

```http
  POST /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. register email of user|
| `password` | `string` | **Required**. currect Psssword of user |

#### Add Category

```http
  POST /api/addcategory
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cat_name`      | `string` | **Required**. name of category|
| `cat_image` | `string` | **Required**. Image of category |

#### All Category

```http
  GET /api/allcategories
```

 | Header     | Description                       |
| :-------- | :------- | :-------------------------------- |
`Authentication` | **Required**. Get all categoies|


#### Delete Category

```http
  DELETE /api/deletecategory
```
 | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|_id |`string` | **Required**. delete Category by id|


#### All Products

```http
  GET /api/allproducts
```

 | Header     | Description                       |
| :-------- | :------- | :-------------------------------- |
`Authentication` | **Required**. Get all Products |


#### Get Single Product

```http
  GET /api/getproductbyid/:_id'
```
 | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|_id |`string` | **Required**. Get Product by its Id|


#### Get Products by Category Name

```http
  GET /api//getproductbycategory/:category'
```
 | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|category |`string` | **Required**. Get Products by respective category|

#### Add Product

```http
  POST /api/addproducts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tite` | `string` | **Required**. Title of Product |
| `thumbnail` | `string` | **Required**. thumbnail of Product |
| `description` | `string` | **Required**. explain the Product |
| `price` | `number` | **Required**. Price of Product|
| `category` | `string` | **Required**. Category of Product |
| `images` | `array` | **Required**. Array of Product Images url |
| `stock` | `number` | **Required**. Quantity of Product |


#### Delete Product

```http
  DELETE /api/deleteproducts
```
 | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|_id |`string` | **Required**. delete Product by id|

#### All orders

```http
  GET /api/allproducts
```

 | Header     | Description                       |
| :-------- | :------- | :-------------------------------- |
`Authentication` | **Required**. Get all Orders |


#### Create Order

```http
  POST /api/createorder
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `items` | `array` | **Required**. insert total detail of products which have in cart |
| `totalBill` | `number` | **Required**. Total Bill of user |
| `customerId` | `string` | **Required**. ID of user |
| `customerName` | `string` | **Required**. name of user|
| `customerEmail` | `string` | **Required**. user email to sent the detail of checkout |
| `customerAddress` | `string` | **Required**. customerAddress to ship the order to its end point|
| `stock` | `number` | **Required**. Quantity of Product |


#### All orders 

```http
  GET /api/allproducts
```

 | Header     | Description  |
| :-------- | :------- ||
`Authentication` | **Required**. Get all Orders |



