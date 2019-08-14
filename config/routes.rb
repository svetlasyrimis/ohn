Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/users/verify', to: 'users#verify'
  post '/collaborator/:id', to: 'projects#add_collaborator'
  
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
