require 'sinatra/base'
require 'json'
require 'sinatra/session'

class ThermServer < Sinatra::Base

  set :session_secret, "My session secret"

  register Sinatra::Session

  get '/' do
    "Hello thermServer! "
  end

  get '/temperature' do
    p "new session" if session?
    session[:Temperature] = 20 unless session[:Temperature]
    session[:city] ||='london'

    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    {temp: session[:Temperature], city: session[:city]}.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:Temperature] =  params[:temp].to_i
    session[:city] = params[:city]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
