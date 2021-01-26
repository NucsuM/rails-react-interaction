Rails.application.routes.draw do
  get 'photos/index'
  post 'photos/update'
  get 'photos/', to: 'photos#index'
  get '/', to: 'photos#index'
  get 'photos/query_placeholder'
  get 'photos/fetch'
end
