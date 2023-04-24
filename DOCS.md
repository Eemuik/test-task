# Default admin credentials:

u: admin@gmail.com

p: Test123#

# Explanation

## Troubles:

### **Implementation of passing access token to backend from frontend**:

I decided to store access token in redux store, then it will be available to retrieve in any part of application.
For example, I connected axios instance to redux store, so every request to backend is sent with authorization token.

### **Default user role assignment**:

I researched multiple ways of assignment default user roles and decided to create auth pipeline in auth0 admin panel that automatically assignes 'regular' role to newly created user.

## Choices

### **Frontend**:

**Stack**: React.js, vite, react-router-dom v6, react-hook-form, styled-components, axios.

I selected the most popular and convenient techonologies to use.

**Axios**: I created api folder to separate all api logic from main frontend and created axios instance to more convenient way to make requests and handle error codes.

In future, response interceptors can be added to handle refresh tokens flow.

**Protected routes**: I created protected route component for restriction of unauthorized users to access private pages.

**useUser hook**: I created useUser hook to simplify retrievement basic user data, in my case isAdmin field.

### **Backend**:

**Stack**: Nest.js, zod, swagger, dotenv.

I selected the most popular and convenient techonologies to use.

**Environment**: I decided to validate environment using zod.

I created shared Environment variable for convenient access to already validated environment variables.

**Documentation**: I decided to use swagger ui as the most popular and convenient library to use.

**Resources**: I decided to use file system to store resources as not to connect typeorm/prisma and some kind of database.

**Authetication**: I decided to create auth and roles guard and Auth decorator to organize roles and authentication endpoints restrictions.
