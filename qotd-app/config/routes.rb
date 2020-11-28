Rails.application.routes.draw do
  # root 'page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
      resources :questions do 
        resources :answers
      end
      resources :contacts
      resources :answers, only: [:index]
    end
  end
  # get '*path', to: 'pages#index', via: :all
end 

