require 'sinatra/base'
require 'json'
require 'sinatra/session'
require 'sinatra/cookies'

class ThermServer < Sinatra::Base
  enable :sessions

  set :session_secret, "My session secret"

  get '/' do
    "Hello thermServer! "
  end

  get '/temperature' do
    #p "new session" if session?
    

    # session[:Temperature] = 20 unless session[:Temperature]
    # session[:city] ||='london'
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    session[:Temperature] ||= 20
    session[:city] ||= 'London'
    {temp: session[:Temperature], city: session[:city]}.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    p session[:Temperature] =  params[:temp].to_i
    p session[:Temperature]
    p session[:city] = params[:city]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
