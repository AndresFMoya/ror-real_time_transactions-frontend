<p>
  <h1 align="center">Rails API - ReactJS -  Real Time Transactions</h1>
</p>
<br>
<p align="center">
  <a href="https://www.ruby-lang.org/en/">
    <img src="https://img.shields.io/badge/Ruby-v2.6.5-brightgreen.svg" alt="ruby version">
  </a>
  <a href="http://rubyonrails.org/">
    <img src="https://img.shields.io/badge/Rails-v6.0.2.1-brightgreen.svg" alt="rails version">
  </a>
    <a href="http://travis-ci.org/">
      <img src="https://travis-ci.org/AndresFMoya/ror-real_time_transactions-frontend.svg?branch=develop" alt="build status">
    </a>
</p>


This app consist of building a Real Time _Group our Transactions_ App using Rails GraphQL API in the backend and ReactJS in the front end.  

[Back-End](https://github.com/AndresFMoya/ror-real_time_transactions-backend)

## Technologies used

- Ruby on Rails
- PostgreSQL
- GraphQL
- ReactJS
- Apollo
- RSpec
- HTML
- CSS
- Git
- Stickler
- Rubocop
- IDE (RubyMine / WebStorm)


### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/): we recommend using
  [rbenv](https://github.com/rbenv/rbenv) to install the Ruby version listed on
  the badge.
- [Yarn](https://yarnpkg.com/): please refer to their
  [installation guide](https://yarnpkg.com/en/docs/install).
- [PostgreSQL](https://www.postgresql.org/) 11.5 or higher.

### Installation

- To get started with the app, first clone the repo and `cd` into the directory:
  
  ```
  $ git clone https://github.com/AndresFMoya/rails_group_transactions.git
  $ cd rails_group_transactions
  ```
- You need to install the gems:
   - You may need to first run `bundle install` if you have older gems in your environment from previous Rails work. If you get an error message like `Your Ruby version is 2.x.x, but your Gemfile specified 2.6.5` then you need to install the ruby version 2.6.5 using `rvm` or `rbenv`.
     - Using **rvm**: `rvm install 2.6.5` followed by `rvm use 2.6.5`
     - Using **rbenv**: `rbenv install 2.6.5` followed by `rbenv local 2.6.5`
   - Install gems with `bundle install --without production` from the rails root folder, to install the gems you'll need, excluding those needed only in production.
- Run `rails db:create` followed by `rails db:migrate` to set up the database
- Install static assets (like external javascript libraries, fonts) with `yarn install`    
- To launch the app locally run: `heroku local -f Procfile.dev`.


## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/AndresFMoya/ror-real_time_transactions-backend/issues).

1. Fork it (https://github.com/AndresFMoya/ror-real_time_transactions-backend/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new pull request


## Contributors

- Andres Felipe Moya https://github.com/AndresFMoya

## Show your support

Give a ⭐️ if you like this project!


## License

This project is [MIT](https://github.com/AndresFMoya/ror-real_time_transactions-backend/blob/develop/LICENSE) licensed.


## 📞 Get in Touch!
I will love to hear about you at one of the following places! :heart:

- [LinkedIn](https://www.linkedin.com/in/andres-f-moya/)
- [Twitter](https://www.twitter.com/andmedev/) 
- <andresfmoya@gmail.com>.

<p align="center">
  <strong>
    <a href="https://andresmoya.me">andresmoya.me</a>
</strong>
</p>
