Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :journeys, only: [:index, :show, :create, :destroy]

end
