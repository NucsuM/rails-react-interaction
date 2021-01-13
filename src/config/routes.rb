Rails.application.routes.draw do
  get 'photos/index'
  get 'photos/', to: 'photos#index'

  get 'photos/create'
  get 'photos/update'
  get 'photos/destroy'
  get 'photos/fetch'

  # resources :photos
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
