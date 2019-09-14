json.array! @messages do |message|
    json.content message.content
    json.image message.image
    json.updated_at message.updated_at
    json.user_name message.user.name
    json.id message.id
end