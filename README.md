# Website Development Assignment Two - ReadMe File

**To view the functionality of this program use this link:** 
https://youtu.be/dETWk40kZUo


**The Endpoints:**
1. *Register (POST /api/user/register) -* 
  * This endpoint allows the user to register using a username (min 3 characters, maz 256), an email (that follows email conventions), and a password (min 6 characters, maz 1024)

2. *Login (POST /api/user/login) -* 
  * Login requires a registered email and password in order to recieve the users personal token in which they can complete tasks with. This will not let you log in unless both the email and password are registered. 

3. *Get a single post by ID ( GET /posts/:id ) –* Publicly available.
  * Get a single post by an ID is available to anyone, whether or not they are registered. With this they can specify a post ID to see the details about it like its description, title, likes, and creator.

4. *Update a post ( PUT /posts/:id ) –* Only the post creator can update.
  * Update, or patch, a post can only be done by the posts creator. To do so, the user specifies thier token, and if it matches, they are able to update it. Otherwise, access denied.

5. *Delete a post ( DELETE /posts/:id ) –* Only the post creator can delete.
  * Delete a post can only be done by the posts creator. To do so, the user specifies thier token, and if it matches, they are able to delete it. Otherwise, access denied.

6. *Create a post ( POST /posts ) –* Requires authentication.
  * Create a post uses tokenization so only registered users are able to post. In order to do so, the user must specify their token, otherwise accses is denied.

7. *Get all posts ( GET /posts ) –* Publicly available.
  * Get all posts is available to anyone, whether or not they are registered. With this they can view all of the posts and information about them like: description, title, likes, and creator.

**Setup Instructions:**
In order to set up this you must download this code to your terminal, and then write "npm install express nodemon mongoose body-parser dotenv joi bcryptjs jsonwebtoken" to ensure you havea ll the proper libraries downloaded. From there, you can simply type in "npm start" to begin the program and test it using postman.
