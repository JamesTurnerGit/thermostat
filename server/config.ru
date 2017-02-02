require 'rubygems'
require File.join(File.dirname(__FILE__), 'ThermServer.rb')

ThermServer.run! port: 9292, bind: '0.0.0.0'
