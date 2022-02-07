Rails.application.routes.draw do
  root "home#index"
  get "with_react", to: "home#with_react"
end
