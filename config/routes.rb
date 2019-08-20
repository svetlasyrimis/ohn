Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/users/verify', to: 'users#verify'
  post 'collaborator/:id', to: 'projects#add_collaborator'
  delete 'collaborators/:id', to: 'projects#remove_collaborator'
  get '/projects/search/:search', to: 'projects#search'
  
  resources :users do
    resources :skills
    resources :interests
  end 

  resources :projects do 
    resources :tasks
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
