Rails.application.routes.draw do
  get 'index/index'
  root 'index#index'
  # mount ActionCable.server => '/cable'
  # get '/:url', to: 'index#url'
  resources :games
  get '/master', to: 'games#master', as: 'master_game'
  # get '/patients/:id', to: 'patients#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
