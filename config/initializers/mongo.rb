MongoMapper.connection = Mongo::Connection.new('pivo.egop.ru', 27017)
#MongoMapper.database = "#myapp-#{Rails.env}"
MongoMapper.database = "velos"

if defined?(PhusionPassenger)
   PhusionPassenger.on_event(:starting_worker_process) do |forked|
     MongoMapper.connection.connect if forked
   end
end