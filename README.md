To start the server:
1. start mongodb using mongod
2. node src\server\server.js # backend
3. npm run dev # frontend
disable CSSP.

Important message:
We learnt a low from this work but sadly we did not have the time to do all the features we aimed for since we had
a very stressful exam period. (One of us had an exam on 2.8)

names:
Omer Porzecanski 208892992
Toren Danino 203831714

The design of the project is based on the boilerplate-
there are components for each one of features we've implemented.
We implemented signing in, signing up, adding restaurants, adding reviews, editing & deleting reviews,
searching users and restaurants, editing user profile.
As a bonus we added signing up via facebook.
A flow example-
To edit a review- you select the new ratings and hit EDIT.
Then you are dispatched to a saga that handles the editing- it will send a PUT request to the REST backend.
The backend will find and update the review in the DB and then will send as a response the new review.
The frontend gets the response and then it reached the reducer that updates the UI.
 

