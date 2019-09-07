Rails.application.routes.draw do
<<<<<<< HEAD
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
=======
  root to:'messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
>>>>>>> parent of 5b39b75... commit
