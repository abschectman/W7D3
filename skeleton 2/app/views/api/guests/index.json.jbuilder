
json.array! @guests.each do |guest|
  json.name guest.name
  json.favorite_color guest.favorite_color
  json.age guest.age
end