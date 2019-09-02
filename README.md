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
|id|integer|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|
|e-mail|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- has_many :masseges
- has_many :images



## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_name|text|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## massegesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|image|text|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|

### Association
- has_many :images


## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|message|text|null: false, foreign_key: true|
|group_user_id|integer|null: false, foreign_key: true|

### Association
- has_many :masseges
