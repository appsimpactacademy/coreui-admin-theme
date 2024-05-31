Rails.application.routes.draw do
  root 'dashboard#index'
   
  # Theme components
  get '/login', to: 'pages#login'
  get '/register', to: 'pages#register'
  get '/errors', to: 'pages#errors'
end
