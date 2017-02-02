require 'sinatra/base'
require 'json'
require 'sinatra/session'

class ThermServer < Sinatra::Base
  enable :sessions


  get '/' do
    "Hello thermServer! "
  end



  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    session[:Temperature] ||= 20
    session[:city] ||='london'
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
