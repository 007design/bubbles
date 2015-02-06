#!/bin/sh

set -e

export PATH=/opt/ruby-2.1.0/bin/:$PATH

echo "Running setup.sh"

rm -rf Gemfile.lock
bundle install --path=./.bundler
npm install --no-optional --production
