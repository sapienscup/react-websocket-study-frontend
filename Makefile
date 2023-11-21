deploy:
	yarn build
	gcloud app deploy statis.app.yaml --version=$(version) --no-promote
