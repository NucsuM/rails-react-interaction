FROM ruby:2.7

RUN apt update
RUN apt install -y curl software-properties-common
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install -y nodejs

ENV APP_HOME /usr/src/app

RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME

COPY ./src/Gemfile $APP_HOME/Gemfile
COPY ./src/Gemfile.lock $APP_HOME/Gemfile.lock

RUN bundle install --system

COPY ./src/ $APP_HOME

EXPOSE 30000

# CMD bundle exec rails s -b 0.0.0.0 -p 3000
