Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  post 'signin', to: 'users#signin'
  get 'validate', to: 'users#validate'
  get 'journeys', to: 'users#get_journeys'
  resources :journeys, only: [:index, :show, :create, :destroy]

end
