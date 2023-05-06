# SoMe - shape your future
(This is for my final exam in Front End Development at Noroff, customer is fictional)

The Social Media Company SoMe has requested a brand new front end for their application.
Main target group are Gen Z. SoMe is a microblog, aiming to be a positive contribution in the mix
out there.

Site is also live at: https://someprojectexam2.netlify.app/
Design Protype Phone: https://xd.adobe.com/view/d2413425-56e3-4995-9ed1-e2dbf5595128-8712/?fbclid=IwAR3HpY5vwnTHt_RkqEmBAJlFwpgP7P_SIJU90e4IP_tF4DoK3JACrJoWfZU&fullscreen&hints=off
Design Prototype Computer: https://xd.adobe.com/view/43951544-d5a2-47fa-8be2-56ac0d2168b8-16c6/?fbclid=IwAR0K26Fq9dRUEFwzbkowN6aiLdvoobok_OWBAAwRCuEL7xZSzUjH1L6TiWo&fullscreen&hints=off

## Set up and run locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Prerequisites:
Node.js
npm (Node Package Manager)
Git

Once installed, you can follow these steps:
1. Clone the repository
2. Navigate to the project directory using the following command:
   ### `cd <project-exam-2-Cathrinesj>`
3. Install dependencies with the following command:
   ### `npm install`
4. Start the development server running the following command:
   ### `$ npm start`

Test login user:
E-mail: CathrineTester@stud.noroff.no    
Password: CathrineTester    

## How to use the app

A registered user may log in - se details for test user above.

Homepage is the posts page, where you will be met by a feed of posts. 
Navigation can take you to Profiles feed, posts feed, add a new post, search and profile.

To view a single post, press on any post in the posts feed. Once there, you will also be able to add a comment to the post, or react with a thumbs up.

In the profiles feed, you can click on the button to view a profile, and to find their feed of posts. Once there, you can decide if you want to follow/unfollow them. Or you can move on to one of their posts to comment and/or like.

Going to userprofile, you will get a feed of your own post. Going in to one of them, you will be able to edit the post, or delete it. To add or remove avatar and banner, you can press edit profile under your profile information.

To log out, press log out icon in top right corner.

## My work

Most of the features and design are implemented as planned. There are still some bugs even though is is live, as I ran out of time for really proper testing. Please do not hesitate to let me know if you find something.

Known issues:
Update post form and Update profileform: 
Does not take already existing information with it. 
This means that is you send a emtpy field in, whatever was there will be deleted!

Follow and unfollow buttons are present at the same time. 
It is a try and fail mission.. Atleast there is only two options.

I struggled the most with hooks, and figuring out how to use them correctly. Defenitily something I will work more on. Delete button finally worked, and when I understood that, it made it easier to set up put request.Also the put requests in itself gave me something to dwell about, until I realised I needed to send an empty body. Conditional rendering did give me some grey hair, espesiallyt since I could not solve how to set up the correct follow/unfollow button.

## Features to come

Already planned and designed:
Search for tags
Filter for Tags
Filter for follows 

Further in the future:
Search for post and profiles
Comment on another comment
View who a profile is following

## Resources

Importing SVG:
https://blog.logrocket.com/how-to-use-svgs-react/#:~:text=As%20hinted%20in%20the%20article,your%20components%20hard%20to%20maintain.

Navigation, replacing react icon:
https://www.youtube.com/watch?v=1RHDhtbqo94

Go back to previous page:
https://www.datainfinities.com/36/create-a-back-button-with-react-router#:~:text=The%20useNavigate%20hook%20returns%20a,can%20call%20navigate(1)%3B%20.

How to link to a post/person:
https://reactrouter.com/en/main/start/tutorial

Avatar images: 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_avatar

Hooks and storing the data:
https://stackoverflow.com/questions/57573360/react-context-returns-undefined
https://www.makeuseof.com/react-context-api-tutorial/

Delete button: 
https://www.codingdeft.com/posts/react-axios-delete/?utm_content=cmp-true

How to put an icon inside VS code: 
https://www.youtube.com/watch?v=QlH7mPF1gqM
(Found in comments – Windows user can use window and . )

How to put empty body in put request:
https://stackoverflow.com/questions/1233372/is-an-http-put-request-required-to-include-a-body#:~:text=HTTP%20requests%20have%20a%20body,should%20treat%20it%20as%20such

Conditional rendering: 
https://react.dev/learn/conditional-rendering

Styling: 
https://react-bootstrap.github.io/components/alerts




