json.(@message, :content, :image)
json.updated_at @message.updated_at.to_s
json.user_name @message.user.name
#idもデータとして渡す
json.id @message.id