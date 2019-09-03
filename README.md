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
<<<<<<< Updated upstream

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|integer|null: false|
|password|integer|null: false|

### Association
- has_many :groups through: :group_users
- has_many :group_users
- has_many :messages
- add_index :users, name


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :group_users
- has_many :group_users
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|message|text||
|image|text||
|group_id|integer|null: false|


### Association
- belongs_to :user
- belongs_qo :group


## group_userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user
=======
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|
|e-mail|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
### Association
- belongs_to :group_users
- belongs_to :user
- has_many :massages
- has_many :images


## messegeテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|messege|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group_users
- has_many :images


## imageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|image|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group_users
- has_many :masseges


## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|group_name|text|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group_users
- belongs_to :user
- has_many :massages
- has_many :images
>>>>>>> Stashed changes
