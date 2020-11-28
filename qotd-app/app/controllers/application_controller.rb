class ApplicationController < ActionController::Base
  # TODO handle correctly
  protect_from_forgery with: :null_session
end
