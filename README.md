# OHN 

![](assets/logo.png) 

### Project Overview:

A web app that connects users with a common passion or interest and facilitate their collaboration on a project of their choice.

### Pre-face: 
Not too long ago, it occurred to me that many people underestimate their competency to create and develop their skills mainly because of their network and lack of time. However, I belive that we are all born with innate desire to create and the most important thing modern people should do is meet people with similar dreams and passions. We need an environment where we can organize thoughts, learn from each other and ultimately as consumers, we want to participate in product development and enjoy the fruits of our labor.


### Project Description:

DreamMaker is a crowdsourcing, multidisciplinary app that connects individuals with free time and passion to create new tangible products. The basis for the idea comes from the belief that people with different skills, but with similar interests and hobbies, can collaborate towards a common goal of ultimately creating a product of their choice. The user, whose role can be an inventor or either worker, can choose to participate in others’ projects or create a project of his/her own which others can join and complete tasks. 

## Feature List :

* Auth - register, login, logout

* User dashboard(Projects, that a user is part of or has created)

* User Profile (Skills and Interests) - Create, Update ,Read

* Search for Projects 

* Add/Delete/Complete Tasks

 
### Stretch Goals 

* Send email to user once project tasks are all completed.
* Upload pictures 
* Animations
 
### Frameworks 

React.js, Ruby on Rails
 
### MVP /POST MVP

## MVP

* Working back-end API endpoints and conditional rendering with React.

* Access to dashboard, profile, projects, tasks 

* Full CRUD on Tasks and Projects 

* Search for projects 
 
## POST MVP
* Send email to users once a project is completed.
* Upload a picture whether to a project or to a user profile.
* 3D 360 Zoom-in animation

## ERD

![](assets/DreamMakerFinal.jpeg) 


## Sample test(user associations)
```
{
  "id": 1,
  "name": "Svet",
  "email": "svetla@example.com",
  "password": "svet",
  "created_at": "2019-08-08T21:06:28.599Z",
  "updated_at": "2019-08-08T21:06:28.599Z",
  "skills": [
    {
      "id": 1,
      "name": "dancing",
      "user_id": 1,
      "created_at": "2019-08-08T21:06:28.673Z",
      "updated_at": "2019-08-08T21:06:28.673Z"
    },
    {
      "id": 2,
      "name": "coding",
      "user_id": 1,
      "created_at": "2019-08-08T21:06:28.677Z",
      "updated_at": "2019-08-08T21:06:28.677Z"
    }
  ],
  "interests": [
    {
      "id": 1,
      "name": "Crossfit",
      "user_id": 1,
      "created_at": "2019-08-08T21:06:28.692Z",
      "updated_at": "2019-08-08T21:06:28.692Z"
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "General Assembly",
      "description": "Action figure",
      "user_id": 1,
      "task_id": null,
      "created_at": "2019-08-08T21:06:28.636Z",
      "updated_at": "2019-08-08T21:06:28.636Z",
      "tasks": [
        {
          "id": 1,
          "name": "Casting",
          "project_id": 1,
          "created_at": "2019-08-08T21:06:28.652Z",
          "updated_at": "2019-08-08T21:06:28.652Z"
        },
        {
          "id": 2,
          "name": "Molding",
          "project_id": 1,
          "created_at": "2019-08-08T21:06:28.657Z",
          "updated_at": "2019-08-08T21:06:28.657Z"
        }
      ],
      "users": [
        {
          "id": 2,
          "name": "George",
          "email": "george@gmail.com",
          "password": "george",
          "created_at": "2019-08-08T21:06:28.697Z",
          "updated_at": "2019-08-08T21:06:28.697Z"
        }
      ]
    }
  ]
}
```

## Routes

![](https://media1.giphy.com/media/xT9IgEJTULuuOKT7uU/giphy.gif)

```
resources :users do 
    resources :projects do
      resources :tasks
    end
    resources :skills
    resources :interests
end 
```


## Wireframes

### Mobile
![](assets/mobile.png)
### Tablet
![](assets/tablet.png)
### Desktop
![](assets/desktop.png)

## React Component Heirarchy 

## Components 
| Components    | Description   | 
| ------------- |:-------------:| 
| Header  | This component will render the header. |    
| Footer    | This component will render the footer.    |            
| Nav       | Renders the nav bar and logout button. |
| RegisterForm  | This component will render a register form. |    
| LoginForm     | This component will render a login form.     |            
| Dashboard         | This component will render a welcome screen view with ProjectButtons component |    	           
| UserProjects     | This component will render a list of user's projects  and ProjectButtons component  | 		           
| ProjectSummary    | This component will the details of a project.   |    	           
| ProjectForm  | This component will render a input text fields for creating a project   | 
| Task    | This component will render a list of tasks that belongs to a project    | 
| TaskForm      | This component will render the task form |
|  ProjectButtons	| This component will render StartProject and JoinProject buttons|
|     |     |
|      | |

## Time Estimates(Front End)

| Component 	  | Priority       | Estimated Time | Time Invested   | Actual Time    |
| :---         |     :---:      |          :---: |      :---:      |      ---:   |   
| LoginForm    | high  			  |  3h   	         |TBD              | TBD            |
| Logout   |      high 			|      30min           |TBD              | TBD            |
| RegisterForm  |  high  		 | 3h   |TBD              | TBD            |
| Dashboard    |  high     			| 3.5h     |TBD              | TBD            |
| UserProjects   |  low  				| 4h  |TBD              | TBD            |
| ProjectSummary     |    high   		| 2.5h      |TBD              | TBD            |
| ProjectForm   |   high 			|   1h  |TBD              | TBD            |
| Task    |    low    	|   1h    |TBD              | TBD            |
| ProjectButtons   |   high   	|    2h  |      TBD    |     TBD      |               |
| Total      |     -     |    -    |      20h     |     TBD      |               |


## List Dependencies 

* Axios
* React-Router-Dom
* Bootstrap


## Additional libraries
| Library       | Function      | 
| ------------- |:-------------:| 
| react-bootstrap    | great library for grid layouts and mobile responsivness since we will render pictures    |  

