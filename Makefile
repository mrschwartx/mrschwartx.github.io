pre:
	sudo apt update
	sudo apt-get install ruby-full build-essential zlib1g-dev
	gem install jekyll bundler

install:
	bundle install

preview:
	bundle exec jekyll serve
	
hot-reload:
	jekyll serve -l -o

build:
	bundle exec jekyll build