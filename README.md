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
