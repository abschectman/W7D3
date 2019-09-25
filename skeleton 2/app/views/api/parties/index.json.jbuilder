
json.array! @parties.each do |party|
  json.name party.name
  json.location party.location 
  json.guests party.guest_ids 
end