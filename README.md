# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|integer|null: false|
|password|integer|null: false|

### Association
- belongs_to :groups
- has_many :messages
- has_many :images
- add_index :users, name


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_name|string|null: false|

### Association
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|image|text|null: false|
|group_user_id|integer|null: false|

### Association
- has_many :images


## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|message|text|null: false|
|group_user_id|integer|null: false|

### Association
- has_many :messages
