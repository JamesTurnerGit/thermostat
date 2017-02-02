require 'sinatra/base'

class ThermServer < Sinatra::Base
  $temp = 20
  get '/' do
    'Hello thermServer!'
    $temp
  end

  get '/temperature' do
    'Hello thermServer!'
  end

  post '/temperature' do
    $temp = params[:temp]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
