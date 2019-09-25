
json.array! @gifts.each do |gift|
  json.title gift.title
  json.description gift.description
  json.guest gift.guest_id 
end 