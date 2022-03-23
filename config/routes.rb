Rails.application.routes.draw do
  root to:'static#index'
  namespace :api, constraints: ->(req) { req.format == :json } do
    resources :things, only: [:index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '*page', to: 'static#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
