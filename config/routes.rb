Rails.application.routes.draw do
  get 'index/index'
  root 'index#index'

  get '/:url', to: 'index#url'
  get '/master/game', to: 'index#game'
  # get '/patients/:id', to: 'patients#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
