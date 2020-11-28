ruby -v
ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-darwin19]
rails -v
Rails 6.0.3.4


create Rails Application

rails new qotd-app --webpack=react --database=postgresql

Create Postgre db via docker:
docker run --name qotd_app -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres# QOTD
