require 'sinatra/base'
require 'json'

class ThermServer < Sinatra::Base
  enable :sessions
  set :session_secret, "My session secret"

  get '/' do
    "Hello thermServer! "
  end

  get '/temperature' do
    puts "-------------"
    puts "session before get"
    puts "temperature: #{session[:temperature]}"
    puts "city: #{session[:city]}"
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    session[:temperature] ||= 20
    session[:city] ||= 'London'
    {temperature: session[:temperature], city: session[:city]}.to_json
  end

  post '/temperature' do
    puts "session before post"
    puts "temperature: #{session[:temperature]}"
    puts "city: #{session[:city]}"
    headers 'Access-Control-Allow-Origin' => '*'
    session[:temperature] =  params[:temperature].to_i
    session[:city] = params[:city]
    puts "-------------"
    puts "session after post"
    puts "temperature: #{session[:temperature]}"
    puts "city: #{session[:city]}"
    puts "============="
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
